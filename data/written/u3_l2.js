<!DOCTYPE html>
<html lang="zh">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>U3 L2 测验数据审校预览 (修订版)</title>
    <style>
        /* 1. 审校模式的专业基础样式 */
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            margin: 0;
            padding: 20px;
            background-color: #f4f4f9;
            color: #333;
        }

        /* 2. 大屏/审校模式的标题和布局 */
        #quiz-title {
            text-align: center;
            font-size: 2.5rem;
            color: #1a1a50;
            margin-bottom: 30px;
            border-bottom: 5px solid #1a1a50;
            padding-bottom: 10px;
        }

        /* 3. 卡片容器：网格布局方便一览无余 */
        #quiz-container {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
            gap: 20px;
        }

        /* 4. 单个题目卡片样式 */
        .question-card {
            background-color: #ffffff;
            border: 1px solid #ddd;
            border-left: 8px solid var(--card-color, #007bff); /* 左侧颜色条区分 Part */
            padding: 15px;
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
            transition: transform 0.2s;
        }

        .question-card:hover {
            transform: translateY(-3px);
            box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
        }

        /* 5. 题目元数据样式 */
        .q-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 10px;
            padding-bottom: 5px;
            border-bottom: 2px dashed #eee;
        }

        .q-num {
            font-size: 1.5rem;
            font-weight: 700;
            color: var(--card-color, #007bff);
        }

        .q-part, .q-type {
            font-size: 0.9rem;
            padding: 3px 8px;
            border-radius: 4px;
            color: white;
        }

        .q-part[data-part="A"] { background-color: #28a745; } /* Listening: Green */
        .q-part[data-part="B"] { background-color: #ffc107; color: #333;} /* Reading: Yellow */
        .q-part[data-part="C"] { background-color: #dc3545; } /* Writing: Red */

        .q-score {
            font-weight: bold;
            color: #007bff;
        }
        
        /* 6. 内容区 */
        .q-text {
            font-size: 1.1rem;
            margin-bottom: 10px;
            font-weight: 500;
        }

        .q-detail-label {
            font-weight: 600;
            color: #555;
            margin-top: 8px;
            display: block;
        }

        .q-detail-value {
            background-color: #f8f9fa;
            padding: 8px;
            border-radius: 4px;
            border: 1px solid #ddd;
            white-space: pre-wrap; /* 保留换行和空格 */
        }
        
        .q-correct {
            font-weight: 700;
            color: #28a745; /* 绿色突出正确答案 */
            background-color: #e9f7ef;
            padding: 5px;
            border-radius: 4px;
        }
    </style>
</head>
<body>

    <h1 id="quiz-title"></h1>
    <div id="quiz-container"></div>

    <script>
        // =======================================================
        // 嵌入 QUIZ_DATA（直接使用 Unit 3 Lesson 2 的测验数据）
        // =======================================================
        const QUIZ_CONFIG = {
            title: "Unit 3 Lesson 2: What color is it?",
            timeLimit: 540 // 9 minutes
        };
        
        const quizData = [
            // ===========================
            // Part A: Listening (Target: 25 pts)
            // ===========================
            { 
                qNum: 1, 
                part: 'A', 
                type: 'select', 
                score: 5,
                text: '听录音，选出正确的颜色名称。<br><span style="font-size:14px;color:#666">(Listen and choose the color)</span>', 
                audioText: 'yellow', 
                options: ['A. red', 'B. blue', 'C. yellow', 'D. green'], 
                correct: 'C. yellow' 
            },
            { 
                qNum: 2, 
                part: 'A', 
                type: 'select', 
                score: 5,
                text: '听录音，选出描述正确的图片。<br><span style="font-size:14px;color:#666">(Listen and match the picture)</span>', 
                audioText: 'Wow! It’s green.', 
                options: ['image:u3_l2_blue_and_yellow_make_green', 'image:u3_l2_pink', 'image:u3_l2_orange', 'image:u3_l2_red'], 
                correct: 'image:u3_l2_blue_and_yellow_make_green' 
            },
            { 
                qNum: 3, 
                part: 'A', 
                type: 'select', 
                score: 5,
                text: '听录音，判断句意是否符合中文翻译。<br><span style="font-size:14px;color:#666">(Listen and judge the meaning)</span>', 
                audioText: 'What color is it?', 
                options: ['A. 它是蓝色的吗？', 'B. 你的名字是什么？', 'C. 它是什么颜色？', 'D. 你好吗？'], 
                correct: 'C. 它是什么颜色？' 
            },
            { 
                qNum: 4, 
                part: 'A', 
                type: 'select', 
                score: 5,
                text: '【已替换】听录音，选出对应的中文意思。<br><span style="font-size:14px;color:#666">(Listen and choose Chinese meaning)</span>', 
                audioText: 'It’s pink.', 
                options: ['A. 它是红色的。', 'B. 它是绿色的。', 'C. 它是粉红色的。', 'D. 它是橙色的。'], 
                correct: 'C. 它是粉红色的。' 
            },
            { 
                qNum: 5, 
                part: 'A', 
                type: 'select', 
                score: 5,
                text: '【已替换】听录音，为问句选择正确的答句。<br><span style="font-size:14px;color:#666">(Listen and choose the answer)</span>', 
                audioText: 'What color is it?', 
                options: ['A. It’s orange.', 'B. Good morning.', 'C. I’m fine.', 'D. Thank you.'], 
                correct: 'A. It’s orange.' 
            },

            // ===========================
            // Part B: Reading (Target: 25 pts)
            // ===========================
            { 
                qNum: 6, 
                part: 'B', 
                type: 'select', 
                score: 5,
                text: '【已替换】看图（橙子），选出正确的颜色单词。<br><span style="font-size:14px;color:#666">(Look at the orange fruit and choose)</span>', 
                imageUri: 'u3_l2_orange_fruit.png', 
                options: ['A. green', 'B. blue', 'C. orange', 'D. pink'], 
                correct: 'C. orange' 
            },
            { 
                qNum: 7, 
                part: 'B', 
                type: 'select', 
                score: 5,
                text: '阅读对话，选择正确的回答：What color is it? ___', 
                options: ['A. I’m fine, thank you.', 'B. My name is Li Li.', 'C. It’s red.', 'D. Nice to meet you.'], 
                correct: 'C. It’s red.' 
            },
            { 
                qNum: 8, 
                part: 'B', 
                type: 'select', 
                score: 5,
                text: '看图，选出表达正确的一句。<br><span style="font-size:14px;color:#666">(Look and choose the correct sentence)</span>', 
                imageUri: 'u3_l2_teacher.png', 
                options: ['A. I’m a student.', 'B. I’m a teacher.', 'C. This is a cook.', 'D. This is a farmer.'], 
                correct: 'B. I’m a teacher.' 
            },
            { 
                qNum: 9, 
                part: 'B', 
                type: 'select', 
                score: 5,
                text: '【已替换】选出单词 "game" 的正确中文意思。<br><span style="font-size:14px;color:#666">(Choose the meaning of "game")</span>', 
                options: ['A. 美术', 'B. 游戏', 'C. 颜色', 'D. 学校'], 
                correct: 'B. 游戏' 
            },
            { 
                qNum: 10, 
                part: 'B', 
                type: 'select', 
                score: 5,
                text: '【已替换】请根据颜色混合规律回答：Yellow + Red = ?<br><span style="font-size:14px;color:#666">(Color mixing logic)</span>', 
                options: ['A. green', 'B. blue', 'C. orange', 'D. white'], 
                correct: 'C. orange' 
            },

            // ===========================
            // Part C: Writing (Target: 25 pts)
            // ===========================
            { 
                qNum: 11, 
                part: 'C', 
                type: 'drag-sort', 
                score: 5,
                text: '连词成句：请拖拽组成完整句子。<br><span style="font-size:14px;color:#666">(Reorder the words to form a sentence)</span>', 
                words: ['It’s', 'pink', '.'], 
                correct: 'It’s pink .' 
            },
            { 
                qNum: 12, 
                part: 'C', 
                type: 'drag-sort', 
                score: 5,
                text: '连词成句：请拖拽组成完整句子。<br><span style="font-size:14px;color:#666">(Reorder the words to form a sentence)</span>', 
                words: ['What', 'color', 'is', 'it', '?'], 
                correct: 'What color is it ?' 
            },
            { 
                qNum: 13, 
                part: 'C', 
                type: 'select', 
                score: 5,
                text: '【已替换】选择正确单词补全句子：What color ___ it?<br><span style="font-size:14px;color:#666">(Choose the correct word)</span>', 
                options: ['A. am', 'B. are', 'C. is', 'D. this'], 
                correct: 'C. is' 
            },
            { 
                qNum: 14, 
                part: 'C', 
                type: 'select', 
                score: 5,
                text: '选出单词 **yellow** 的正确中文意思。<br><span style="font-size:14px;color:#666">(Choose the correct Chinese meaning)</span>', 
                options: ['A. 红色', 'B. 绿色', 'C. 蓝色', 'D. 黄色'], 
                correct: 'D. 黄色' 
            },
            { 
                qNum: 15, 
                part: 'C', 
                type: 'select', 
                score: 5,
                text: '下列哪组单词是同一类？<br><span style="font-size:14px;color:#666">(Which group of words belong to the same category?)</span>', 
                options: ['A. blue, apple, cat', 'B. red, black, green', 'C. hi, five, star', 'D. dog, fish, six'], 
                correct: 'B. red, black, green' 
            }
        ];

        // =======================================================
        // 渲染逻辑 (Rendering Logic)
        // =======================================================
        const container = document.getElementById('quiz-container');
        document.getElementById('quiz-title').innerText = '测验题目审校：' + QUIZ_CONFIG.title;

        const partColors = {
            'A': '#28a745', // Listening
            'B': '#ffc107', // Reading
            'C': '#dc3545'  // Writing
        };

        quizData.forEach(q => {
            const card = document.createElement('div');
            card.className = 'question-card';
            card.style.setProperty('--card-color', partColors[q.part]);

            let details = '';

            // 1. Audio Text (Part A Specific)
            if (q.audioText) {
                details += `<span class="q-detail-label">🎙️ 录音内容 (AudioText):</span><div class="q-detail-value">${q.audioText}</div>`;
            }
            
            // 2. Image URI (Visual Context)
            if (q.imageUri) {
                // 注意：在 Reviewer Mode 中，Image URI 不会自动添加 img/ 前缀，手动添加便于查阅
                details += `<span class="q-detail-label">🖼️ 附图 URI (ImageUri):</span><div class="q-detail-value">img/${q.imageUri}</div>`;
            }

            // 3. Options (Select/Match/Drag-Sort)
            if (q.options) {
                details += `<span class="q-detail-label">📃 选项 (Options):</span><div class="q-detail-value">${q.options.join(' | ')}</div>`;
            } else if (q.matchOptions) {
                const matches = Object.entries(q.matchOptions).map(([k, v]) => `${k} -> ${v}`).join(' | ');
                details += `<span class="q-detail-label">🤝 匹配项 (MatchOptions):</span><div class="q-detail-value">${matches}</div>`;
            } else if (q.words) {
                details += `<span class="q-detail-label">🧱 词块 (Words):</span><div class="q-detail-value">${q.words.join(' | ')}</div>`;
            }

            // 4. Correct Answer (CRITICAL)
            const correctAnswer = q.correct || (q.type === 'match' ? Object.entries(q.matchOptions).map(([k, v]) => `${k}:${v}`).join(',') : 'N/A');
            
            card.innerHTML = `
                <div class="q-header">
                    <span class="q-num">Q${q.qNum}</span>
                    <div>
                        <span class="q-part" data-part="${q.part}">Part ${q.part}</span>
                        <span class="q-type">(${q.type})</span>
                    </div>
                    <span class="q-score">${q.score} 分</span>
                </div>
                <div class="q-text">${q.text}</div>
                ${details}
                <span class="q-detail-label">✅ 正确答案 (Correct Answer):</span>
                <div class="q-correct">${correctAnswer}</div>
            `;
            container.appendChild(card);
        });
    </script>
</body>
</html>
