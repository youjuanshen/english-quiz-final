// ================= 全局配置 =================
const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxc8c4prsZZLY9vp-te4gH5twQNO1A8Ek3yROTNZeNs-7YhL60UojvMsQoceJUZ7LUP/exec";

let currentData = null;
let currentMode = ''; // 'written' 或 'speaking'
let currentQIndex = 0;
let answers = {};
let timerInterval;
let timeLeft = 0;

// 初始化引擎
function initEngine(mode) {
    currentMode = mode;
    console.log("Engine started in mode: " + mode);
}

// 接收题库数据
window.LOAD_QUIZ = function(data) {
    currentData = data;
    timeLeft = data.timeLimit || (currentMode === 'speaking' ? 300 : 540);
    
    // 数据加载后，刷新界面信息
    const titleEl = document.getElementById('examTitle');
    if(titleEl) titleEl.innerText = data.title;
    
    document.getElementById('loadingBox').style.display = 'none';
    document.getElementById('setupBox').style.display = 'block';
};

// 加载题目脚本
function loadPaper(path) {
    document.getElementById('menuBox').style.display = 'none';
    document.getElementById('loadingBox').style.display = 'block';
    
    const script = document.createElement('script');
    // 自动补全路径：如果是 written 模式，去 data/written/ 找
    script.src = `data/${currentMode}/${path}`; 
    script.onerror = () => alert("❌ 找不到题目文件：" + script.src);
    document.body.appendChild(script);
}

// 开始考试
function startExam() {
    const student = document.getElementById('studentSelector').value;
    if(!student) { alert("请先选择名字！"); return; }
    
    document.getElementById('setupBox').style.display = 'none';
    document.getElementById('quizInterface').style.display = 'block';
    
    // 显示学生名
    document.getElementById('studentNameDisplay').innerText = student;
    
    renderQuestion();
    startTimer();
}

// 渲染题目 (核心逻辑)
function renderQuestion() {
    const q = currentData.questions[currentQIndex];
    const total = currentData.questions.length;
    
    // 1. 进度
    document.getElementById('progressText').innerText = `Question ${currentQIndex + 1} / ${total}`;
    document.getElementById('progressBar').style.width = `${((currentQIndex + 1) / total) * 100}%`;
    
    // 2. 按钮状态
    document.getElementById('btnPrev').disabled = (currentQIndex === 0);
    if(currentQIndex === total - 1) {
        document.getElementById('btnNext').style.display = 'none';
        document.getElementById('btnSubmit').style.display = 'inline-block';
    } else {
        document.getElementById('btnNext').style.display = 'inline-block';
        document.getElementById('btnSubmit').style.display = 'none';
    }

    // 3. 构建 HTML
    let html = `<h3 class="q-text">${currentQIndex + 1}. ${q.text}</h3>`;

    // 图片 (Banner)
    if (q.imageUri) {
        html += `<img src="img/${q.imageUri}" style="max-width:100%; border-radius:10px; margin-bottom:10px;">`;
    }
    
    // 听力
    if (q.audioText) {
         html += `<button class="audio-btn" onclick="speak('${q.audioText}')">🔊 播放读音</button>`;
    }

    // --- 分模式渲染选项 ---
    if (currentMode === 'written') {
        // 笔试模式：显示选项
        html += `<div class="options-list">`;
        q.options.forEach(opt => {
            let displayContent = opt;
            
            // 🔥 图片选项自动识别逻辑 🔥
            if (opt.startsWith('image:')) {
                // 拿到文件名，比如 "u1_banana"
                let imgName = opt.split(':')[1].trim(); 
                // 强制转为 img 标签
                displayContent = `<img src="img/${imgName}.png" class="opt-img">`; 
            }

            const isSelected = answers['Q'+q.qNum] === opt ? 'selected' : '';
            html += `<div class="option-item ${isSelected}" onclick="choose('${q.qNum}', '${opt}')">
                        ${displayContent}
                     </div>`;
        });
        html += `</div>`;
    } else {
        // 口语模式：显示参考答案 + Emoji 打分
        html += `<div class="teacher-guide">💡 参考: ${q.guide}</div>`;
        html += `<div class="emoji-row">`;
        [1,2,3,4,5].forEach(score => {
             const active = answers['Q'+q.qNum] === score ? 'active' : '';
             html += `<span class="emoji-btn ${active}" onclick="rate('${q.qNum}', ${score})">${['😶','🙂','🤔','😃','🤩'][score-1]}</span>`;
        });
        html += `</div>`;
    }

    document.getElementById('qContent').innerHTML = html;
}

// 交互动作
function choose(qid, val) {
    answers['Q'+qid] = val;
    renderQuestion(); // 重绘以显示选中状态
}

function rate(qid, score) {
    answers['Q'+qid] = score;
    renderQuestion();
}

function prevQ() { if(currentQIndex > 0) { currentQIndex--; renderQuestion(); } }
function nextQ() { if(currentQIndex < currentData.questions.length - 1) { currentQIndex++; renderQuestion(); } }

function speak(text) {
    const u = new SpeechSynthesisUtterance(text);
    u.lang = 'en-US';
    window.speechSynthesis.speak(u);
}

// 计时器
function startTimer() {
    timerInterval = setInterval(() => {
        if(timeLeft <= 0) { clearInterval(timerInterval); submit(); return; }
        timeLeft--;
        const m = Math.floor(timeLeft/60).toString().padStart(2,'0');
        const s = (timeLeft%60).toString().padStart(2,'0');
        document.getElementById('timerDisplay').innerText = `${m}:${s}`;
    }, 1000);
}

// 交卷
function submit() {
    clearInterval(timerInterval);
    document.getElementById('quizInterface').style.display = 'none';
    document.getElementById('submittingBox').style.display = 'block';

    let score = 0;
    // 简单算分
    if(currentMode === 'speaking') {
        Object.values(answers).forEach(v => score += parseInt(v));
    } else {
        currentData.questions.forEach(q => {
            if(answers['Q'+q.qNum] === q.correct) score += 5;
        });
    }

    const payload = {
        studentName: document.getElementById('studentNameDisplay').innerText,
        examType: currentMode,
        lessonTitle: currentData.title,
        score: score,
        details: JSON.stringify(answers)
    };

    fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(payload)
    }).then(() => {
        document.getElementById('submittingBox').style.display = 'none';
        document.getElementById('resultBox').style.display = 'block';
        document.getElementById('finalScore').innerText = score;
    });
}
