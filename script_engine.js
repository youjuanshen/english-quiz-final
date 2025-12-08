// ================= 全局配置 (V13.0 交互升级版) =================
// ⚠️ 请确认这里是您最新的、可用的 Google Script 链接
const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycby-A33EvU8ZlvfYwwguSEFyu8QdVfcNymYnMC-XlCDnA6h6_7UcMGhtstIts2ml5fml/exec";

// ✅ 1. 新增：口语评分标准描述
const SPEAKING_RUBRIC = [
    "[1分] 无法作答",
    "[2分] 表达困难，依赖提示",
    "[3分] 需提示才能完成",
    "[4分] 基本清晰，偶有提示",
    "[5分] 流畅自然，无需提示"
];

let currentData = null;
let currentMode = '';
let currentQIndex = 0;
let answers = {};
let timerInterval;
let timeLeft = 0;

function initEngine(mode) {
    currentMode = mode;
    console.log("Engine V13.0 Loaded: " + mode);
}

window.LOAD_QUIZ = function(data) {
    currentData = data;
    timeLeft = data.timeLimit || 540;
    const titleEl = document.getElementById('examTitle');
    if(titleEl) titleEl.innerText = data.title;
    toggleDisplay('loadingBox', false);
    toggleDisplay('menuBox', false);
    toggleDisplay('setupBox', true);
};

function loadPaper(path) {
    toggleDisplay('loadingBox', true);
    
    const script = document.createElement('script');
    let folder = currentMode === 'speaking' ? 'data/speaking/' : 'data/written/';
    if (path.indexOf('/') === -1) { script.src = folder + path; } else { script.src = path; }
    script.onerror = () => { alert("❌ 文件未找到: " + script.src); location.reload(); };
    document.body.appendChild(script);
}

function startExam() {
    const student = document.getElementById('studentSelector').value;
    if(!student) { alert("请先选择名字！"); return; }
    toggleDisplay('setupBox', false);
    toggleDisplay('quizInterface', true);
    document.getElementById('studentNameDisplay').innerText = student;
    currentQIndex = 0;
    answers = {};
    renderQuestion();
    startTimer();
}

// ================= ⭐ 核心渲染逻辑 (含必答题限制) ⭐ =================
function renderQuestion() {
    const q = currentData.questions[currentQIndex];
    const total = currentData.questions.length;
    const currentQid = q.qNum;
    
    // 1. 更新进度条
    document.getElementById('progressText').innerText = `Question ${currentQIndex + 1} / ${total}`;
    document.getElementById('progressBar').style.width = `${((currentQIndex + 1) / total) * 100}%`;
    
    // 2. 处理导航按钮显示状态
    const btnPrev = document.getElementById('btnPrev');
    const btnNext = document.getElementById('btnNext');
    const btnSubmit = document.getElementById('btnSubmit');
    
    btnPrev.disabled = (currentQIndex === 0);
    
    if(currentQIndex === total - 1) {
        toggleDisplay('btnNext', false);
        toggleDisplay('btnSubmit', true);
    } else {
        toggleDisplay('btnNext', true);
        toggleDisplay('btnSubmit', false);
    }

    // 🔥 3. 核心逻辑：检查当前题是否已答，控制按钮禁用 🔥
    const hasAnswered = answers['Q' + currentQid] && answers['Q' + currentQid].toString().trim() !== '';
    const targetBtn = (currentQIndex === total - 1) ? btnSubmit : btnNext;
    targetBtn.disabled = !hasAnswered; // 没答就禁用

    // 4. 生成题目 HTML
    let html = '';
    if (q.part) html += `<div style="font-size:12px; color:#999; font-weight:bold; text-transform:uppercase; margin-bottom:5px;">Part ${q.part}</div>`;
    html += `<h3 class="q-text">${q.qNum}. ${q.text}</h3>`;

    if (q.audioText) {
        const safeText = q.audioText.replace(/'/g, "\\'");
        html += `<button class="audio-btn" onclick="speak('${safeText}')">🔊 播放录音 (Listen)</button>`;
    }

    if (q.imageUri) html += `<img src="img/${q.imageUri}" style="max-width:100%; border-radius:15px; margin-bottom:15px; box-shadow: 0 4px 10px rgba(0,0,0,0.1);">`;
    else if (q.imageKey && currentData.images) html += `<img src="${currentData.images[q.imageKey]}" style="max-width:100%; border-radius:15px; margin-bottom:15px; box-shadow: 0 4px 10px rgba(0,0,0,0.1);">`;

    // 5. 生成选项 HTML
    if (currentMode === 'written') {
        if (q.type === 'select' || !q.type) { 
            html += `<div class="options-list">`;
            q.options.forEach(opt => {
                let displayContent = opt;
                let val = opt;
                if (opt.startsWith('image:')) {
                    let imgKey = opt.split(':')[1].trim(); 
                    let imgSrc = `img/${imgKey}.png`; 
                    displayContent = `<img src="${imgSrc}" class="opt-img" style="height:60px; vertical-align:middle">`; 
                }
                const isSelected = answers['Q'+q.qNum] === val ? 'selected' : '';
                html += `<div class="option-item ${isSelected}" onclick="choose('${q.qNum}', '${val}')">${displayContent}</div>`;
            });
            html += `</div>`;
        } else if (q.type === 'drag-sort') {
            html += `<div style="margin:10px 0; color:#666; font-size:14px;">(点击单词，把它们移到上方横线处)</div>`;
            html += `<div class="drag-area" id="target-container" id="target-${q.qNum}"></div>`;
            html += `<div class="drag-area" id="source-${q.qNum}">`;
            
            let currentSentence = answers['Q'+q.qNum] || "";
            let chosenWords = currentSentence ? currentSentence.split(' ') : [];
            let remainingWords = [...q.words];
            chosenWords.forEach(word => {
                 let idx = remainingWords.indexOf(word);
                 if(idx > -1) remainingWords.splice(idx, 1);
            });

            q.words.forEach(w => {
                 html += `<span class="word-chip" onclick="moveWord(this, 'target-${q.qNum}', 'source-${q.qNum}', '${q.qNum}')">${w}</span>`;
            });
            html += `</div>`;
        }
    } else {
        // ✅ 2. 这里的代码被完全重写，以显示分数和描述，而不是 Emoji
        html += `<div class="teacher-guide">💡 参考: ${q.guide || q.audioText || '...'}</div>`;
        
        // 显示顶部评分标准 (如果有的话)
        if (currentData.rubric) {
            html += `<pre class="rubric-display">${currentData.rubric}</pre>`;
        }

        html += `<div class="score-row">`;
        [5, 4, 3, 2, 1].forEach(score => { // 倒序排列
             const active = answers['Q'+q.qNum] === score ? 'active' : '';
             // 获取对应分数的描述，防止 rubric 未定义报错
             const description = (typeof SPEAKING_RUBRIC !== 'undefined') ? SPEAKING_RUBRIC[score - 1] : "";
             
             // 生成点击区域
             html += `
                <div class="score-item" onclick="rate('${q.qNum}', ${score})">
                    <button class="score-btn ${active}">
                        ${score} 分
                    </button>
                    <span class="score-desc">${description}</span>
                </div>
             `;
        });
        html += `</div>`;
    }
    document.getElementById('qContent').innerHTML = html;
    
    if(currentMode === 'written' && q.type === 'drag-sort' && hasAnswered) {
        answers['Q'+q.qNum] = ""; 
        enableNavButtons(false);  
        renderQuestion();         
        return;
    }
}

// 🔥 辅助函数：启用/禁用导航按钮 🔥
function enableNavButtons(enable) {
    const total = currentData.questions.length;
    const targetBtn = (currentQIndex === total - 1) ? document.getElementById('btnSubmit') : document.getElementById('btnNext');
    if(targetBtn) targetBtn.disabled = !enable;
}

// 交互: 选择题 (点击后启用按钮)
function choose(qid, val) { 
    answers['Q'+qid] = val; 
    renderQuestion(); 
    enableNavButtons(true); 
}

// 交互: 拖拽题 (点击移动，有内容就启用按钮)
function moveWord(el, targetId, sourceId, qid) {
    const target = document.querySelector(`#qContent .drag-area[id^="target-"]`);
    const source = document.getElementById(sourceId);
    
    if (el.parentElement === source) target.appendChild(el); else source.appendChild(el);
    
    const sentence = Array.from(target.children).map(span => span.innerText).join(' ');
    answers['Q'+qid] = sentence;
    
    enableNavButtons(sentence.length > 0);
}

// ✅ 3. 修复后的 rate 函数：直接操作 DOM 并确保按钮启用
function rate(qid, score) { 
    answers['Q'+qid] = score; 
    
    // 直接更新 UI 上的选中状态 (查找 .score-btn)
    const qContent = document.getElementById('qContent');
    if (currentMode === 'speaking' && qContent) {
        Array.from(qContent.querySelectorAll('.score-btn')).forEach((btn) => {
             // 提取数字，例如 "5 分" -> 5
             const btnScoreText = btn.innerText.replace(/[^\d]/g, ''); 
             const btnScore = parseInt(btnScoreText); 
             
             if (btnScore === score) {
                 btn.classList.add('active');
             } else {
                 btn.classList.remove('active');
             }
        });
    }
    
    // 强制启用导航按钮
    enableNavButtons(true);
}

function prevQ() { if(currentQIndex > 0) { currentQIndex--; renderQuestion(); } }
function nextQ() { if(currentQIndex < currentData.questions.length - 1) { currentQIndex++; renderQuestion(); } }

function speak(text) {
    if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
        const u = new SpeechSynthesisUtterance(text);
        u.lang = 'en-US'; u.rate = 0.9;      
        window.speechSynthesis.speak(u);
    }
}

function toggleDisplay(id, show) {
    const el = document.getElementById(id);
    if(el) {
        if (show) el.classList.remove('hidden'); else el.classList.add('hidden');
        el.style.display = show ? (id.startsWith('btn') ? 'inline-block' : 'block') : 'none';
    }
}

function startTimer() {
    if (timerInterval) clearInterval(timerInterval);
    timerInterval = setInterval(() => {
        if(timeLeft <= 0) { clearInterval(timerInterval); submit(); return; }
        timeLeft--;
        const m = Math.floor(timeLeft/60).toString().padStart(2,'0');
        const s = (timeLeft%60).toString().padStart(2,'0');
        const display = document.getElementById('timerDisplay');
        if(display) display.innerText = `${m}:${s}`;
    }, 1000);
}

// ================= ⭐⭐ 提交函数 (含可爱界面和详细报告) ⭐⭐ =================
function submit() {
    clearInterval(timerInterval);
    toggleDisplay('quizInterface', false);
    
    const submittingBox = document.getElementById('submittingBox');
    submittingBox.innerHTML = `
        <div class="cute-loader">🚀</div>
        <div class="loading-text">正在飞速上传成绩...</div>
        <div style="font-size:12px; color:#999; margin-top:10px;">(请稍候片刻，不要关闭窗口哦)</div>
    `;
    toggleDisplay('submittingBox', true);

    let totalScore = 0;
    let scoreL=0, scoreR=0, scoreW=0;

    if (currentMode === 'speaking') {
        Object.values(answers).forEach(v => totalScore += parseInt(v)||0);
    } else {
        currentData.questions.forEach(q => {
            const userAns = answers['Q' + q.qNum];
            let isCorrect = false;
            if (q.type === 'drag-sort') {
                if (userAns && userAns.replace(/[.,?!]/g,'').trim() === q.correct.replace(/[.,?!]/g,'').trim()) isCorrect = true;
            } else {
                if (userAns === q.correct) isCorrect = true;
            }
            if (isCorrect) {
                totalScore += 5;
                if (q.part === 'A') scoreL += 5;
                else if (q.part === 'B') scoreR += 5;
                else if (q.part === 'C') scoreW += 5;
            }
        });
    }

    let maxScore = currentData.questions.length * 5;
    let percentNum = Math.round((totalScore / maxScore) * 100);
    
    let feedback = "";
    if (percentNum >= 95) feedback = "🌟 哇！你是超级英语小达人！太棒了！";
    else if (percentNum >= 85) feedback = "👏 真不错！成绩非常优秀，继续保持！";
    else if (percentNum >= 70) feedback = "👍 做得好！大部分都掌握啦，继续加油！";
    else if (percentNum >= 60) feedback = "💪 及格啦！再多一点点细心就更完美了！";
    else feedback = "🌱 别灰心！这是成长的机会，多练习一定会进步的！";

    const payload = {
        studentName: document.getElementById('studentNameDisplay').innerText,
        lessonTitle: currentData.title,
        examType: currentMode,
        score: totalScore, 
        listeningScore: currentMode === 'written' ? scoreL : "", 
        readingScore:   currentMode === 'written' ? scoreR : "",
        writingScore:   currentMode === 'written' ? scoreW : ""
    };
    
    console.log("Submitting:", payload);
    
    fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST', mode: 'no-cors',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(payload)
    }).finally(() => {
        toggleDisplay('submittingBox', false);
        
        const resultBox = document.getElementById('resultBox');
        resultBox.innerHTML = `
            <h1>🎉 挑战圆满结束！</h1>
            <div class="score-summary">
                <div style="font-size:16px; color:#666; margin-bottom:10px;">你的最终得分</div>
                <div class="big-score">
                    ${totalScore} <span class="total-score">/ ${maxScore} 分</span>
                </div>
                <div class="feedback-box">
                    ${feedback}
                </div>
            </div>
            <button class="btn-primary" onclick="location.reload()" style="font-size:20px;">再来一次 🚀</button>
        `;
        toggleDisplay('resultBox', true);
    });
}
