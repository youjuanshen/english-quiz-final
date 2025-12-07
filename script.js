// ==================== 1. 全局配置 ====================
const STUDENTS = [
    "1. 张宇豪", "2. 张佳寒", "3. 张睿渊", "4. 张羽韬", "5. 张美茹",
    "6. 张嘉钦", "7. 卢梦婷", "8. 张悦萱", "9. 张语涵", "10. 张英豪",
    "11. 张志鹏", "12. 张智杰", "13. 张梓婷", "14. 张品琪", "15. 张诺依",
    "16. 张雨泽", "17. 张依彤", "18. 张艺楠", "19. 张思彤", "20. 张子豪",
    "21. 张梓亦", "22. 张皓鑫", "23. 张雨欣", "24. 张如欣", "25. 张柏涵",
    "26. 张梓纯", "27. 张泽鑫"
];

// Google Sheet URL
const API_URL = "https://script.google.com/macros/s/AKfycbxc8c4prsZZLY9vp-te4gH5twQNO1A8Ek3yROTNZeNs-7YhL60UojvMsQoceJUZ7LUP/exec";

// 菜单配置 (请注意这里的文件路径！)
const MENU = {
    "speaking": {
        title: "🗣️ 口语面试",
        border: "5px solid #42a5f5",
        lessons: [
            { name: "Unit 1 Lesson 1 (口语)", path: "data/speaking/u1.js" }
        ]
    },
    "written": {
        title: "📝 笔试练习",
        border: "5px solid #ffa726",
        lessons: [
            { name: "Unit 1 Lesson 1 (笔试)", path: "data/written/u1.js" }
        ]
    }
};

// ==================== 2. 引擎逻辑 ====================
let quizData = null, currStudent = "", totalScore = 0, answers = {}, timer = null, timeLeft = 0;

window.onload = initMenu;

function initMenu() {
    clearInterval(timer);
    let html = `<div class="container"><div class="header-banner"><h1>三年级英语闯关赛</h1><p>请选择模式</p></div>`;
    for(let k in MENU) {
        html += `<div class="mode-card" style="border-top:${MENU[k].border}"><h3>${MENU[k].title}</h3>`;
        MENU[k].lessons.forEach(l => html += `<button class="lesson-btn" onclick="loadQ('${l.path}')">${l.name}</button>`);
        html += `</div>`;
    }
    document.getElementById('app').innerHTML = html + `</div>`;
}

function loadQ(path) {
    document.getElementById('app').innerHTML = `<div style="text-align:center;padding:50px">⏳ 正在加载...<br><small>${path}</small></div>`;
    let s = document.createElement('script');
    s.src = path;
    s.onload = () => renderSelect();
    s.onerror = () => alert("找不到文件: " + path);
    document.body.appendChild(s);
}

window.LOAD_QUIZ = function(data) { quizData = data; }

function renderSelect() {
    let opts = STUDENTS.map(s => `<option value="${s}">${s}</option>`).join('');
    document.getElementById('app').innerHTML = `
        <div class="container"><div class="welcome-card"><div style="font-size:50px">🎓</div>
        <h2>${quizData.title}</h2><p>请选择姓名</p>
        <select id="stu">${opts}</select>
        <button class="start-btn" onclick="start()">🚀 开始</button>
        <div style="margin-top:20px"><a href="#" onclick="initMenu()">返回菜单</a></div>
        </div></div>`;
}

function start() {
    currStudent = document.getElementById('stu').value;
    totalScore = 0; answers = {};
    if(quizData.mode === 'written') { timeLeft = quizData.timeLimit || 540; startTimer(); }
    renderQuiz();
}

function renderQuiz() {
    let isSpeak = quizData.mode === 'speaking';
    let html = `
        <div class="top-bar"><span>👤 ${currStudent}</span><span id="timer">${isSpeak?'':formatTime(timeLeft)}</span>
        <button onclick="initMenu()">退出</button></div>
        <div class="container quiz-body">`;
    
    quizData.questions.forEach((q, i) => {
        let img = q.image ? `<div class="img-box"><img src="${q.image}"></div>` : '';
        let audio = q.audio ? `<div style="text-align:center"><button onclick="speak('${q.audio}')">🔊 播放</button></div>` : '';
        
        html += `<div class="question-card" id="card-${i}"><div class="q-tag">Q${q.qNum}</div>
                 <div class="q-text">${q.text}</div>${img}${audio}`;

        if(isSpeak) {
            html += `<div style="background:#fff3e0;padding:10px;margin:10px 0;border-radius:5px;color:#e65100">💡 参考: ${q.guide}</div>
                     <div id="act-${i}" class="score-buttons">
                        ${[5,4,3,2,1].map(s=>`<button class="score-btn s${s}" onclick="rate(${i},${s})">${s}</button>`).join('')}
                     </div><div id="fb-${i}" class="feedback" style="display:none"></div>`;
        } else {
            if(q.type === 'select') {
                html += `<div>`;
                q.options.forEach(o => {
                    let txt = o.startsWith('img/') ? `<img src="${o}" style="height:50px">` : o;
                    html += `<div class="answer-option" onclick="selOpt(${i}, '${o.replace(/'/g,"\\'")}', this)">${txt}</div>`;
                });
                html += `</div>`;
            } else if(q.type === 'drag') {
                html += `<div style="border:2px dashed #orange;padding:10px;min-height:40px;margin-bottom:10px" id="t-${i}"></div>
                         <div style="display:flex;gap:5px" id="s-${i}">${q.words.map(w=>`<div style="background:#eee;padding:5px 10px;border-radius:10px" onclick="move(this,'s-${i}','t-${i}',${i})">${w}</div>`).join('')}</div>`;
            }
        }
        html += `</div>`;
    });

    if(isSpeak) html += `<div class="footer-bar">总分: <span id="score">0</span></div>`;
    else html += `<div class="footer-bar"><button class="start-btn" onclick="submit()">交卷</button></div>`;
    
    document.getElementById('app').innerHTML = html + `</div>`;
}

// 交互逻辑
function rate(i, s) {
    document.getElementById(`act-${i}`).style.display='none';
    let fb = document.getElementById(`fb-${i}`);
    fb.style.display='block'; fb.innerText = `✅ 得分: ${s}`; fb.style.background='#e8f5e9'; fb.style.color='green';
    totalScore += s; document.getElementById('score').innerText = totalScore;
    if(i === quizData.questions.length-1) sendData('Speaking', totalScore);
}
function selOpt(i, v, el) {
    answers[i] = v;
    Array.from(el.parentElement.children).forEach(c=>c.classList.remove('selected-option'));
    el.classList.add('selected-option');
}
function move(el, sid, tid, i) {
    let t = document.getElementById(tid), s = document.getElementById(sid);
    (el.parentElement.id===sid ? t : s).appendChild(el);
    answers[i] = Array.from(t.children).map(c=>c.innerText).join(' ');
}
function submit() {
    clearInterval(timer);
    let score = 0;
    quizData.questions.forEach((q, i) => {
        let card = document.getElementById(`card-${i}`);
        let right = (answers[i] === q.correct) || (q.type==='drag' && answers[i]===q.correct);
        if(right) score+=5;
        let div = document.createElement('div');
        div.className = 'feedback';
        div.style.background = right ? '#e8f5e9' : '#ffebee';
        div.style.color = right ? 'green' : 'red';
        div.innerHTML = right ? '✅ 正确' : `❌ 错误 (答案: ${q.correct})`;
        card.appendChild(div);
    });
    alert(`得分: ${score}`);
    sendData('Written', score);
}
function sendData(type, score) {
    fetch(API_URL, {
        method:'POST', mode:'no-cors', headers:{'Content-Type':'application/json'},
        body:JSON.stringify({studentName:currStudent, examType:type, lessonTitle:quizData.title, score:score})
    });
}
function speak(txt) { let u=new SpeechSynthesisUtterance(txt); u.lang='en-US'; window.speechSynthesis.speak(u); }
function startTimer() { timer=setInterval(()=>{ timeLeft--; document.getElementById('timer').innerText=formatTime(timeLeft); if(timeLeft<=0) submit(); },1000); }
function formatTime(s) { return Math.floor(s/60).toString().padStart(2,'0')+':'+(s%60).toString().padStart(2,'0'); }
