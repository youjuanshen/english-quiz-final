// ================= 全局配置 (V12.1 已更新链接) =================
// ⚠️ 这里已经替换成了您刚刚发给我的新地址
const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxX-0dpSTmbd-NkhLTyK6u6l6U7KBU_m8CsVOt4p-2lS5FfPSfrAEbIcVjk2fNDjn5-/exec";

let currentData = null;
let currentMode = '';
let currentQIndex = 0;
let answers = {};
let timerInterval;
let timeLeft = 0;

function initEngine(mode) {
    currentMode = mode;
    console.log("Engine V12.1 Loaded: " + mode);
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

// ================= ⭐ 核心渲染逻辑 =================
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

    if (q.audioText) {
        const safeText = q.audioText.replace(/'/g, "\\'");
        html += `<button class="audio-btn" onclick="speak('${safeText}')" style="margin-bottom: 20px;">🔊 播放录音 (Listen)</button>`;
    }

    if (q.imageUri) html += `<img src="img/${q.imageUri}" style="max-width:100%; border-radius:10px; margin-bottom:10px;">`;
    else if (q.imageKey && currentData.images) html += `<img src="${currentData.images[q.imageKey]}" style="max-width:100%; border-radius:10px; margin-bottom:10px;">`;

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
            html += `<div class="drag-area" id="target-${q.qNum}" style="min-height:50px; border-bottom:2px solid #fb8c00; margin-bottom:20px; display:flex; gap:10px; flex-wrap:wrap; padding:5px;"></div>`;
            html += `<div class="drag-area" id="source-${q.qNum}" style="display:flex; gap:10px; flex-wrap:wrap;">`;
            if (!answers['Q'+q.qNum]) {
                q.words.forEach(w => {
                    html += `<span class="word-chip" style="background:#e0f7fa; padding:8px 15px; border-radius:20px; border:1px solid #4dd0e1; cursor:pointer;" onclick="moveWord(this, 'target-${q.qNum}', 'source-${q.qNum}', '${q.qNum}')">${w}</span>`;
                });
            } else {
                q.words.forEach(w => {
                    html += `<span class="word-chip" onclick="moveWord(this, 'target-${q.qNum}', 'source-${q.qNum}', '${q.qNum}')">${w}</span>`;
                });
            }
            html += `</div>`;
        }
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
function moveWord(el, targetId, sourceId, qid) {
    const target = document.getElementById(targetId);
    const source = document.getElementById(sourceId);
    if (el.parentElement.id === sourceId) target.appendChild(el); else source.appendChild(el);
    const sentence = Array.from(target.children).map(span => span.innerText).join(' ');
    answers['Q'+qid] = sentence;
}
function rate(qid, score) { answers['Q'+qid] = score; renderQuestion(); }
function prevQ() { if(currentQIndex > 0) { currentQIndex--; renderQuestion(); } }
function nextQ() { if(currentQIndex < currentData.questions.length - 1) { currentQIndex++; renderQuestion(); } }
function speak(text) { if ('speechSynthesis' in window) { window.speechSynthesis.cancel(); const u = new SpeechSynthesisUtterance(text); u.lang = 'en-US'; u.rate = 0.9; window.speechSynthesis.speak(u); } }
function toggleDisplay(id, show) { const el = document.getElementById(id); if(el) { if (show) el.classList.remove('hidden'); else el.classList.add('hidden'); el.style.display = show ? (id.startsWith('btn') ? 'inline-block' : 'block') : 'none'; } }
function startTimer() { if (timerInterval) clearInterval(timerInterval); timerInterval = setInterval(() => { if(timeLeft <= 0) { clearInterval(timerInterval); submit(); return; } timeLeft--; const m = Math.floor(timeLeft/60).toString().padStart(2,'0'); const s = (timeLeft%60).toString().padStart(2,'0'); const display = document.getElementById('timerDisplay'); if(display) display.innerText = `${m}:${s}`; }, 1000); }

// ================= ⭐⭐ 提交函数 (适配您的 8 列布局) ⭐⭐ =================
function submit() {
    clearInterval(timerInterval);
    toggleDisplay('quizInterface', false);
    toggleDisplay('submittingBox', true);

    let totalScore = 0;
    let scoreL = 0; // Listening
    let scoreR = 0; // Reading
    let scoreW = 0; // Writing

    if (currentMode === 'speaking') {
        Object.values(answers).forEach(v => totalScore += parseInt(v));
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

    const payload = {
        studentName: document.getElementById('studentNameDisplay').innerText,
        lessonTitle: currentData.title,
        examType: currentMode,
        score: totalScore, 
        
        // 分项成绩 (如果不是笔试，发空字符串，方便后端合并)
        listeningScore: currentMode === 'written' ? scoreL : "", 
        readingScore:   currentMode === 'written' ? scoreR : "",
        writingScore:   currentMode === 'written' ? scoreW : ""
    };
    
    console.log("Submitting:", payload);
    
    fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST', mode: 'no-cors',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(payload)
    }).then(() => {
        toggleDisplay('submittingBox', false);
        toggleDisplay('resultBox', true);
        document.getElementById('finalScore').innerText = totalScore;
    }).catch(err => {
        toggleDisplay('submittingBox', false);
        toggleDisplay('resultBox', true);
        document.getElementById('finalScore').innerText = totalScore;
    });
}
