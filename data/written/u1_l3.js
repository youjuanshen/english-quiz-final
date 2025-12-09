/**
 * Unit 1 Lesson 3: How are you?
 * File: data/written/u1_l3_final.js
 */
window.LOAD_QUIZ({
    title: "Unit 1 Lesson 3: How are you? (最终优化版)",
    timeLimit: 540, // 9 minutes

    // ⛔️ DO NOT ADD 'images: {}' MAPPING HERE!

    questions: [
        // ===========================
        // Part A: Listening (Target: 25 pts)
        // ===========================
        { 
            qNum: 1, 
            part: 'A', 
            type: 'select', 
            score: 5,
            text: '听录音，选出对应的字母词汇图片。<br><span style="font-size:14px;color:#666">(Listen and choose the picture for the word)</span>', 
            audioText: 'egg', 
            options: ['image:u1_egg', 'image:u1_fish', 'image:u1_apple', 'image:u1_banana'], 
            correct: 'image:u1_egg' 
        },
        { 
            qNum: 2, 
            part: 'A', 
            type: 'select', 
            score: 5,
            text: '听录音，选出正确的中文含义。<br><span style="font-size:14px;color:#666">(Listen and choose the Chinese meaning)</span>', 
            audioText: 'Good afternoon, Mom.', 
            options: ['A. 早上好，妈妈。', 'B. 下午好，妈妈。', 'C. 很高兴见到你。', 'D. 我很好。'], 
            correct: 'B. 下午好，妈妈。' 
        },
        { 
            qNum: 3, 
            part: 'A', 
            type: 'select', 
            score: 5,
            text: '听录音，选出正确的应答句。<br><span style="font-size:14px;color:#666">(Listen and choose the correct response)</span>', 
            audioText: 'How are you?', 
            options: ['A. I’m fine. Thank you.', 'B. Hello, Miss Gao.', 'C. My name is Li Li.', 'D. Nice to meet you.'], 
            correct: 'A. I’m fine. Thank you.' 
        },
        { 
            qNum: 4, 
            part: 'A', 
            type: 'select', 
            score: 5,
            text: '听录音，选出缺失的单词完成句子：<br>I’m fine. ___ you.<br><span style="font-size:14px;color:#666">(Listen and choose the missing word)</span>', 
            audioText: 'I’m fine. Thank you.', 
            options: ['A. Hi', 'B. Thank', 'C. Good', 'D. Am'], 
            correct: 'B. Thank' 
        },
        { 
            qNum: 5, 
            part: 'A', 
            type: 'drag-sort', 
            score: 5,
            text: '听录音，拖拽词块组成完整的句子。<br><span style="font-size:14px;color:#666">(Listen and reorder the words)</span>', 
            audioText: 'Good morning, Sally.', 
            words: ['Good', 'morning', ',', 'Sally', '.'], 
            correct: 'Good morning , Sally .' 
        },
        
        // ===========================
        // Part B: Reading (Target: 25 pts) - 已修正第 9 题
        // ===========================
        { 
            qNum: 6, 
            part: 'B', 
            type: 'select', 
            score: 5,
            text: '选出与图片意思相符的单词。<br><span style="font-size:14px;color:#666">(Choose the correct word for the image)</span>', 
            imageUri: 'u1_fish.png', 
            options: ['A. egg', 'B. fish', 'C. apple', 'D. cat'], 
            correct: 'B. fish' 
        },
        { 
            qNum: 7, 
            part: 'B', 
            type: 'select', 
            score: 5,
            text: '当你想知道别人身体状况如何时，应该问：<br><span style="font-size:14px;color:#666">(How to ask about someone’s health?)</span>', 
            options: ['A. What’s your name?', 'B. Good morning.', 'C. How are you?', 'D. Nice to meet you.'], 
            correct: 'C. How are you?' 
        },
        { 
            qNum: 8, 
            part: 'B', 
            type: 'select', 
            score: 5,
            text: '选出与 “Mom” 对应的中文词语。<br><span style="font-size:14px;color:#666">(Choose the Chinese meaning for "Mom")</span>', 
            options: ['A. 老师', 'B. 爸爸', 'C. 妈妈', 'D. 朋友'], 
            correct: 'C. 妈妈' 
        },
        { 
            qNum: 9, 
            part: 'B', 
            type: 'select', 
            score: 5,
            text: '如果你在 **下午** 见到 Miss Gao 老师，应该向她问候：<br><span style="font-size:14px;color:#666">(How to greet Miss Gao in the afternoon?)</span>', 
            options: ['A. Good morning.', 'B. Good afternoon, Miss Gao.', 'C. Nice to meet you.', 'D. Hello, Mom.'], 
            correct: 'B. Good afternoon, Miss Gao.' 
        },
        { 
            qNum: 10, 
            part: 'B', 
            type: 'drag-sort', 
            score: 5,
            text: '将对话重新排序：<br>① I’m fine. Thank you. ② Good morning, Sally. ③ How are you? <br><span style="font-size:14px;color:#666">(Reorder the dialogue)</span>', 
            words: ['② Good morning , Sally .', '③ How are you ?', '① I’m fine . Thank you .'], 
            correct: '② Good morning , Sally . ③ How are you ? ① I’m fine . Thank you .' 
        },

        // ===========================
        // Part C: Writing (Target: 25 pts) - 写作（已全部优化为选择或拖拽题）
        // ===========================
        { 
            qNum: 11, 
            part: 'C', 
            type: 'select', 
            score: 5,
            text: '选出单词 **fine** 的中文含义。<br><span style="font-size:14px;color:#666">(Choose the Chinese meaning for "fine")</span>', 
            options: ['A. 高兴的', 'B. 健康的', 'C. 早上', 'D. 下午'], 
            correct: 'B. 健康的' 
        },
        { 
            qNum: 12, 
            part: 'C', 
            type: 'drag-sort', 
            score: 5,
            text: '连词成句。<br><span style="font-size:14px;color:#666">(Reorder)</span>', 
            words: ['Thank', 'you', '.'], 
            correct: 'Thank you .' 
        },
        { 
            qNum: 13, 
            part: 'C', 
            type: 'select', 
            score: 5,
            text: '选出字母 **F** 的大写形式。<br><span style="font-size:14px;color:#666">(Choose the uppercase letter F)</span>', 
            options: ['A. e', 'B. E', 'C. f', 'D. F'], 
            correct: 'D. F' 
        },
        { 
            qNum: 14, 
            part: 'C', 
            type: 'drag-sort', 
            score: 5,
            text: '连词成句。<br><span style="font-size:14px;color:#666">(Reorder)</span>', 
            words: ['How', 'are', 'you', '?'], 
            correct: 'How are you ?' 
        },
        { 
            qNum: 15, 
            part: 'C', 
            type: 'select', 
            score: 5,
            text: '选出表示 “下午” 的英文单词。<br><span style="font-size:14px;color:#666">(Choose the English word for "afternoon")</span>', 
            options: ['A. morning', 'B. afternoon', 'C. good', 'D. hello'], 
            correct: 'B. afternoon' 
        }
    ]
});
