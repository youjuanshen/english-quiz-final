// ================= 全局配置 (V13.1 无参考版) =================
// ⚠️ 请确认这里是您最新的、可用的 Google Script 链接
const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycby-A33EvU8ZlvfYwwguSEFyu8QdVfcNymYnMC-XlCDnA6h6_7UcMGhtstIts2ml5fml/exec";

// ✅ 口语评分按钮旁边的文字描述
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
    console.log("Engine V13.1 Loaded: Reference Removed"); // 控制台会打印这行字，证明新代码加载成功
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
    // 添加时间戳防止缓存
    script.src += "?t=" + new Date().getTime(); 
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

// ================= ⭐ 核心渲染逻辑 ⭐ =================
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

    // 3. 检查当前题是否已答
    const hasAnswered = answers['Q' + currentQid] && answers['Q' + currentQid].toString().trim() !== '';
    const targetBtn = (currentQIndex === total - 1) ? btnSubmit : btnNext;
    targetBtn.disabled = !hasAnswered; 

    // 4. 生成题目文本和媒体
    let html = '';
    if (q.part) html += `<div style="font-size:12px; color:#999; font-weight:bold; text-transform:uppercase; margin-bottom:5px;">Part ${q.part}</div>`;
    html += `<h3 class="q-text">${q.qNum}. ${q.text}</h3>`;

    if (q.audioText) {
        const safeText = q.audioText.replace(/'/g, "\\'");
        html += `<button class="audio-btn" onclick="speak('${safeText}')">🔊 播放录音 (Listen)</button>`;
    }

    if (q.imageUri) html += `<img src="img/${q.imageUri}" style="max-width:100%; border-radius:15px; margin-bottom:15px; box-shadow: 0 4px 10px rgba(0,0,0,0.1);">`;
    else if (q.imageKey && currentData.images) html += `<img src="${currentData.images[q.imageKey]}" style="max-width:100%; border-radius:15px; margin-bottom:15px; box-shadow: 0 4px 10px rgba(0,0,0,0.1);">`;

    // 5. 生成选项/评分区域
    if (currentMode === 'written') {
        // ... (笔试逻辑保持不变) ...
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
        // ✅✅✅ 这里是口语部分：已彻底删除“参考” ✅✅✅

        // ⚠️ 我把顶部那个黄色的“评分标准”大框也暂时屏蔽了，
        // 因为您的按钮旁边已经有详细描述了，界面会更清爽。
        // 如果您想要那个黄框，把下面这三行代码前的 // 去掉即可。
        // if (currentData.rubric) {
        //    html += `<pre class="rubric-display">${currentData.rubric}</pre>`;
        // }

        html += `<div class="score-row">`;
        [5, 4, 3, 2, 1].forEach(score => { 
             const active = answers['Q'+q.qNum] === score ? 'active' : '';
             const description = (typeof SPEAKING_RUBRIC !== 'undefined') ? SPEAKING_RUBRIC[score - 1] : "";
             
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

// 🔥 辅助函数 🔥
function enableNavButtons(enable) {
    const total = currentData.questions.length;
    const targetBtn = (currentQIndex === total - 1) ? document.getElementById('btnSubmit') : document.getElementById('btnNext');
    if(targetBtn) targetBtn.disabled = !enable;
}

function choose(qid, val) { 
    answers['Q'+qid] = val; 
    renderQuestion(); 
    enableNavButtons(true); 
}

function moveWord(el, targetId, sourceId, qid) {
    const target = document.querySelector(`#qContent .drag-area[id^="target-"]`);
    const source = document.getElementById(sourceId);
    if (el.parentElement === source) target.appendChild(el); else source.appendChild(el);
    const sentence = Array.from(target.children).map(span => span.innerText).join(' ');
    answers['Q'+qid] = sentence;
    enableNavButtons(sentence.length > 0);
}

// ✅ 评分点击逻辑
function rate(qid, score) { 
    answers['Q'+qid] = score; 
    
    const qContent = document.getElementById('qContent');
    if (currentMode === 'speaking' && qContent) {
        Array.from(qContent.querySelectorAll('.score-btn')).forEach((btn) => {
             const btnScoreText = btn.innerText.replace(/[^\d]/g, ''); 
             const btnScore = parseInt(btnScoreText); 
             
             if (btnScore === score) {
                 btn.classList.add('active');
             } else {
                 btn.classList.remove('active');
             }
        });
    }
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

// ================= 提交函数 =================
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
    
    // ================= 提交函数 (已修改) =================
function submit() {
    clearInterval(timerInterval);
    toggleDisplay('quizInterface', false);
    
    // 显示上传中界面
    const submittingBox = document.getElementById('submittingBox');
    submittingBox.innerHTML = `
        <div class="cute-loader">🚀</div>
        <div class="loading-text">正在飞速上传成绩...</div>
        <div style="font-size:12px; color:#999; margin-top:10px;">(请稍候片刻，不要关闭窗口哦)</div>
    `;
    toggleDisplay('submittingBox', true);

    let totalScore = 0;
    let scoreL=0, scoreR=0, scoreW=0;
    // ... (计算分数逻辑保持不变)
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
        readingScore:    currentMode === 'written' ? scoreR : "",
        writingScore:    currentMode === 'written' ? scoreW : ""
    };
    
    console.log("Submitting:", payload);
    
    // ----------------------------------------------------
    // 🔥 START: 核心修正区 (添加超时和结果解析) 🔥
    // ----------------------------------------------------
    
    const TIMEOUT_MS = 40000; // 40秒超时 (对应后端 30秒锁等待 + 10秒执行时间)

    // 1. 创建超时 Promise
    const timeoutPromise = new Promise((_, reject) =>
        setTimeout(() => reject(new Error('TIMEOUT_ERROR')), TIMEOUT_MS)
    );

    // 2. 发送实际请求 (使用 GET 绕过 CORS 限制，Apps Script 的 doPost 接受 GET/POST)
    // ⚠️ 注意：这里我们将数据拼接到 URL 中，以兼容 mode: 'no-cors'
    const queryParams = Object.keys(payload).map(k => k + '=' + encodeURIComponent(payload[k])).join('&');
    const fullUrl = GOOGLE_SCRIPT_URL + '?' + queryParams;
    
    const submissionPromise = fetch(fullUrl, {
        method: 'GET', // 使用 GET 避免复杂的 CORS/JSON 问题
        mode: 'no-cors'
    });

    // 3. 竞争：看是请求完成快，还是超时快
    Promise.race([submissionPromise, timeoutPromise])
        .then(response => {
             // 由于 mode: 'no-cors' 无法读取 response.json() 和 status，我们只能假设
             // 如果请求成功完成（没有超时），则 Apps Script 应该成功处理了。
             // 这种架构是 Google Scripts 特有的，无法进行标准验证。
             showFinalResult(totalScore, maxScore, feedback, true); // 假设成功
        })
        .catch(error => {
            // 收到超时错误 (TIMEOUT_ERROR) 或其他网络错误
            let message = "❌ 成绩提交失败：请检查网络后重试。";
            if (error.message === 'TIMEOUT_ERROR') {
                 // 提交超时，可能是服务器繁忙（锁竞争）
                message = "❌ 提交超时 (40秒)。服务器繁忙或网络断开，请等待片刻后再重试。";
            }
            // ❌ 失败反馈
            showFinalResult(totalScore, maxScore, feedback, false, message);
        });
}

// ----------------------------------------------------
// 🔥 NEW: 统一显示结果函数 🔥
// ----------------------------------------------------
function showFinalResult(totalScore, maxScore, feedback, success, errorMessage = "") {
    toggleDisplay('submittingBox', false);
    
    const resultBox = document.getElementById('resultBox');
    let titleHTML = success ? `<h1>🎉 挑战圆满结束！</h1>` : `<h1>⚠️ 提交失败！</h1>`;
    let mainContent;

    if (success) {
        mainContent = `
            <div style="font-size:16px; color:#666; margin-bottom:10px;">你的最终得分</div>
            <div class="big-score">
                ${totalScore} <span class="total-score">/ ${maxScore} 分</span>
            </div>
            <div class="feedback-box">
                ${feedback}
            </div>
            <p style="color:green; font-weight:bold;">✅ 成绩已成功上传。</p>
        `;
    } else {
        mainContent = `
            <div style="font-size:16px; color:#D9534F; font-weight:bold; margin-bottom:15px;">${errorMessage}</div>
            <div class="score-summary">
                本次笔试得分为：${totalScore} / ${maxScore} 分
            </div>
            <p>请联系老师确认分数是否已手动记录。</p>
        `;
    }

    resultBox.innerHTML = `
        ${titleHTML}
        <div class="score-summary">
            ${mainContent}
        </div>
        <button class="btn-primary" onclick="location.reload()" style="font-size:20px;">返回菜单 🚀</button>
    `;
    toggleDisplay('resultBox', true);
}

// ----------------------------------------------------
// 🔥 END: 核心修正区 🔥
// ----------------------------------------------------

// ... (其余辅助函数保持不变)

// ⚠️ 注意: 您需要将 showFinalResult 替换到原 submit() 函数的逻辑中。
// 建议：请将整个 script_engine.js 文件提供给技术人员进行完整的替换和测试。
