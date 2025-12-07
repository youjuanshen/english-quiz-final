// ================= 全局配置 =================
// ⚠️ 请将此处替换为您自己的 Google Web App URL
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

// 1. 接收题库数据 (入口)
window.LOAD_QUIZ = function(data) {
    currentData = data;
    timeLeft = data.timeLimit || 540;
    
    // 刷新标题
    const titleEl = document.getElementById('examTitle');
    if(titleEl) titleEl.innerText = data.title;
    
    // 隐藏加载框，显示选人框
    toggleDisplay('loadingBox', false);
    toggleDisplay('menuBox', false);
    toggleDisplay('setupBox', true);
};

// 2. 加载题目脚本
function loadPaper(path) {
    toggleDisplay('menuBox', false);
    toggleDisplay('loadingBox', true);
    
    const script = document.createElement('script');
    // 自动判定路径：written 模式去 data/written 找，speaking 去 data/speaking 找
    let folder = currentMode === 'speaking' ? 'data/speaking/' : 'data/written/';
    // 如果文件名里不包含路径才加前缀 (防止重复)
    if (path.indexOf('/') === -1) {
        script.src = folder + path;
    } else {
        script.src = path;
    }
    
    script.onerror = () => {
        alert("❌ 找不到题目文件：" + script.src);
        toggleDisplay('loadingBox', false);
        toggleDisplay('menuBox', true);
    };
    document.body.appendChild(script);
}

// 3. 开始考试
function startExam() {
    const student = document.getElementById('studentSelector').value;
    if(!student) { alert("请先选择名字！"); return; }
    
    toggleDisplay('setupBox', false);
    toggleDisplay('quizInterface', true);
    
    // 显示学生名
    document.getElementById('studentNameDisplay').innerText = student;
    
    // 重置状态
    currentQIndex = 0;
    answers = {};
    
    renderQuestion(); // 渲染第一题
    startTimer();     // 开始倒计时
}

// ================= ⭐ 4. 核心渲染 (修复了听力和分页) =================
function renderQuestion() {
    // 获取当前题目
    const q = currentData.questions[currentQIndex];
    const total = currentData.questions.length;
    
    // A. 更新进度条和文本
    document.getElementById('progressText').innerText = `Question ${currentQIndex + 1} / ${total}`;
    document.getElementById('progressBar').style.width = `${((currentQIndex + 1) / total) * 100}%`;
    
    // B. 控制翻页按钮显示/隐藏
    document.getElementById('btnPrev').disabled = (currentQIndex === 0); // 第一题禁用上一页
    
    if(currentQIndex === total - 1) {
        // 最后一题：显示“交卷”，隐藏“下一题”
        toggleDisplay('btnNext', false);
        toggleDisplay('btnSubmit', true);
        // 让交卷按钮显眼一点
        document.getElementById('btnSubmit').style.display = 'inline-block'; 
    } else {
        // 普通题目：显示“下一题”，隐藏“交卷”
        toggleDisplay('btnNext', true);
        toggleDisplay('btnSubmit', false);
        // 恢复下一题按钮显示
        document.getElementById('btnNext').style.display = 'inline-block';
    }

    // C. 生成 HTML 内容
    let html = '';

    // --- 1. 题目标签 (例如: Part A) ---
    if (q.part) {
        html += `<div style="font-size:12px; color:#999; font-weight:bold; text-transform:uppercase; margin-bottom:5px;">Part ${q.part}</div>`;
    }

    // --- 2. 题干文本 ---
    html += `<h3 class="q-text">${q.qNum}. ${q.text}</h3>`;

    // --- 3. 听力按钮 (修复点：检测 audioText) ---
    if (q.audioText) {
        // 使用 safeText 防止文字里有单引号导致报错
        const safeText = q.audioText.replace(/'/g, "\\'");
        html += `
        <button class="audio-btn" onclick="speak('${safeText}')" style="margin-bottom: 20px;">
            🔊 播放录音 (Click to Listen)
        </button>`;
    }

    // --- 4. 题目大图 (Banner) ---
    if (q.imageUri) {
        html += `<img src="img/${q.imageUri}" style="max-width:100%; border-radius:10px; margin-bottom:10px;">`;
    } else if (q.imageKey && currentData.images) {
        // 支持通过 Key 查找大图
        let imgSrc = currentData.images[q.imageKey];
        html += `<img src="${imgSrc}" style="max-width:100%; border-radius:10px; margin-bottom:10px;">`;
    }

    // --- 5. 选项渲染 (分模式) ---
    if (currentMode === 'written') {
        // [笔试模式] 显示选项列表
        html += `<div class="options-list">`;
        q.options.forEach(opt => {
            let displayContent = opt;
            let val = opt;
            
            // 🔥 图片选项修复逻辑 🔥
            // 识别格式 "image:Banana" -> 查找 images['Banana'] -> 显示图片
            if (opt.startsWith('image:')) {
                let imgKey = opt.split(':')[1].trim(); // 获取 'Banana'
                let imgSrc = '';
                
                // 1. 优先去 images 字典里找
                if (currentData.images && currentData.images[imgKey]) {
                    imgSrc = currentData.images[imgKey];
                } else {
                    // 2. 找不到就默认为 img/Banana.png
                    imgSrc = `img/${imgKey}.png`;
                }
                
                // 强制转为 img 标签
                displayContent = `<img src="${imgSrc}" class="opt-img" style="height:60px; vertical-align:middle">`; 
            }

            const isSelected = answers['Q'+q.qNum] === val ? 'selected' : '';
            // onclick 触发 choose 函数
            html += `<div class="option-item ${isSelected}" onclick="choose('${q.qNum}', '${val}')">
                        ${displayContent}
                     </div>`;
        });
        html += `</div>`;
        
    } else {
        // [口语模式] 显示参考答案 + Emoji
        html += `<div class="teacher-guide">💡 参考: ${q.guide || q.audioText || '...'}</div>`;
        html += `<div class="emoji-row">`;
        [1,2,3,4,5].forEach(score => {
             const active = answers['Q'+q.qNum] === score ? 'active' : '';
             html += `<span class="emoji-btn ${active}" onclick="rate('${q.qNum}', ${score})">${['😶','🙂','🤔','😃','🤩'][score-1]}</span>`;
        });
        html += `</div>`;
    }

    // 将生成的 HTML 放入页面
    document.getElementById('qContent').innerHTML = html;
}

// ================= 交互动作 =================

function choose(qid, val) {
    answers['Q'+qid] = val;
    renderQuestion(); // 重绘以显示选中状态
}

function rate(qid, score) {
    answers['Q'+qid] = score;
    renderQuestion();
}

// 上一题
function prevQ() { 
    if(currentQIndex > 0) { 
        currentQIndex--; 
        renderQuestion(); 
    } 
}

// 下一题
function nextQ() { 
    if(currentQIndex < currentData.questions.length - 1) { 
        currentQIndex++; 
        renderQuestion(); 
    } 
}

// 语音合成播放 (TTS)
function speak(text) {
    if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel(); // 停止之前的朗读
        const u = new SpeechSynthesisUtterance(text);
        u.lang = 'en-US'; // 设置为美式英语
        u.rate = 0.9;     // 语速稍慢
        window.speechSynthesis.speak(u);
    } else {
        alert("您的浏览器不支持语音播放");
    }
}

// 辅助函数：显示/隐藏元素
function toggleDisplay(id, show) {
    const el = document.getElementById(id);
    if(el) {
        if (show) el.classList.remove('hidden');
        else el.classList.add('hidden');
        // 强制处理内联样式
        el.style.display = show ? (id.startsWith('btn') ? 'inline-block' : 'block') : 'none';
    }
}

// 计时器
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

// 交卷
function submit() {
    clearInterval(timerInterval);
    toggleDisplay('quizInterface', false);
    toggleDisplay('submittingBox', true);

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

    console.log("Submitting:", payload);

    fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(payload)
    }).then(() => {
        toggleDisplay('submittingBox', false);
        toggleDisplay('resultBox', true);
        document.getElementById('finalScore').innerText = score;
    }).catch(err => {
        alert("上传失败，请检查网络");
        console.error(err);
        toggleDisplay('submittingBox', false);
        toggleDisplay('resultBox', true);
    });
}
