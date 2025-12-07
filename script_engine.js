// ================= 全局配置 (V7.1 Final) =================
const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxc8c4prsZZLY9vp-te4gH5twQNO1A8Ek3yROTNZeNs-7YhL60UojvMsQoceJUZ7LUP/exec";

let currentData = null;
let currentMode = '';
let currentQIndex = 0;
let answers = {};
let timerInterval;
let timeLeft = 0;

function initEngine(mode) {
    currentMode = mode;
    console.log("Engine started V7.1: " + mode);
    // 强制弹窗检测：看到这个说明新代码生效了
    // alert("新引擎 V7.1 已加载！"); 
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
    toggleDisplay('menuBox', false);
    toggleDisplay('loadingBox', true);
    
    const script = document.createElement('script');
    let folder = currentMode === 'speaking' ? 'data/speaking/' : 'data/written/';
    if (path.indexOf('/') === -1) { script.src = folder + path; } 
    else { script.src = path; }
    
    script.onerror = () => {
        alert("❌ 找不到题目文件：" + script.src);
        toggleDisplay('loadingBox', false);
        toggleDisplay('menuBox', true);
    };
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

function renderQuestion() {
    const q = currentData.questions[currentQIndex];
    const total = currentData.questions.length;
    
    document.getElementById('progressText').innerText = `Question ${currentQIndex + 1} / ${total}`;
    document.getElementById('progressBar').style.width = `${((currentQIndex + 1) / total) * 100}%`;
    
    document.getElementById('btnPrev').disabled = (currentQIndex === 0);
    if(currentQIndex === total - 1) {
        toggleDisplay('btnNext', false);
        toggleDisplay('btnSubmit', true);
        document.getElementById('btnSubmit').style.display = 'inline-block'; 
    } else {
        toggleDisplay('btnNext', true);
        toggleDisplay('btnSubmit', false);
        document.getElementById('btnNext').style.display = 'inline-block';
    }

    let html = '';
    if (q.part) html += `<div style="font-size:12px; color:#999; font-weight:bold; text-transform:uppercase; margin-bottom:5px;">Part ${q.part}</div>`;
    html += `<h3 class="q-text">${q.qNum}. ${q.text}</h3>`;

    // 🔊 听力按钮逻辑
    if (q.audioText) {
        const safeText = q.audioText.replace(/'/g, "\\'");
        html += `<button class="audio-btn" onclick="speak('${safeText}')" style="margin-bottom: 20px;">🔊 播放录音 (Listen)</button>`;
    }

    // 🖼️ 题目大图
    if (q.imageUri) html += `<img src="img/${q.imageUri}" style="max-width:100%; border-radius:10px; margin-bottom:10px;">`;
    else if (q.imageKey && currentData.images) html += `<img src="${currentData.images[q.imageKey]}" style="max-width:100%; border-radius:10px; margin-bottom:10px;">`;

    // 📝 选项逻辑
    if (currentMode === 'written') {
        html += `<div class="options-list">`;
        q.options.forEach(opt => {
            let displayContent = opt;
            let val = opt;
            
            // 🔥 图片选项核心逻辑 🔥
            // 您的 u1_l1.js 写的是 image:u1_banana
            // 下面的逻辑会把它变成 img/u1_banana.png
            if (opt.startsWith('image:')) {
                let imgKey = opt.split(':')[1].trim(); 
                let imgSrc = `img/${imgKey}.png`; // 直接拼接路径
                displayContent = `<img src="${imgSrc}" class="opt-img" style="height:60px; vertical-align:middle">`; 
            }

            const isSelected = answers['Q'+q.qNum] === val ? 'selected' : '';
            html += `<div class="option-item ${isSelected}" onclick="choose('${q.qNum}', '${val}')">${displayContent}</div>`;
        });
        html += `</div>`;
    } else {
        html += `<div class="teacher-guide">💡 参考: ${q.guide || q.audioText || '...'}</div>`;
        html += `<div class="emoji-row">`;
        [1,2,3,4,5].forEach(score => {
             const active = answers['Q'+q.qNum] === score ? 'active' : '';
             html += `<span class="emoji-btn ${active}" onclick="rate('${q.qNum}', ${score})">${['😶','🙂','🤔','😃','🤩'][score-1]}</span>`;
        });
        html += `</div>`;
    }
    document.getElementById('qContent').innerHTML = html;
}

function choose(qid, val) { answers['Q'+qid] = val; renderQuestion(); }
function rate(qid, score) { answers['Q'+qid] = score; renderQuestion(); }
function prevQ() { if(currentQIndex > 0) { currentQIndex--; renderQuestion(); } }
function nextQ() { if(currentQIndex < currentData.questions.length - 1) { currentQIndex++; renderQuestion(); } }

function speak(text) {
    if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
        const u = new SpeechSynthesisUtterance(text);
        u.lang = 'en-US'; u.rate = 0.9;     
        window.speechSynthesis.speak(u);
    } else { alert("浏览器不支持语音"); }
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

function submit() {
    clearInterval(timerInterval);
    toggleDisplay('quizInterface', false);
    toggleDisplay('submittingBox', true);
    let score = 0;
    if(currentMode === 'speaking') { Object.values(answers).forEach(v => score += parseInt(v)); } 
    else { currentData.questions.forEach(q => { if(answers['Q'+q.qNum] === q.correct) score += 5; }); }

    const payload = {
        studentName: document.getElementById('studentNameDisplay').innerText,
        examType: currentMode,
        lessonTitle: currentData.title,
        score: score,
        details: JSON.stringify(answers)
    };
    
    fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST', mode: 'no-cors',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(payload)
    }).then(() => {
        toggleDisplay('submittingBox', false);
        toggleDisplay('resultBox', true);
        document.getElementById('finalScore').innerText = score;
    });
}
