/**
 * Unit 2 Lesson 2: How many ducks?
 * File: data/written/u2_l2.js
 */
window.LOAD_QUIZ({
    title: "Unit 2 Lesson 2: How many ducks?",
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
            text: '听录音，选出录音中提到的数量。', 
            audioText: 'How many ice cream? Five.', 
            // 题图选项使用数字图片，系统自动匹配
            options: ['image:u2_number_3', 'image:u2_number_5', 'image:u2_number_8', 'image:u2_number_10'], 
            correct: 'image:u2_number_5' 
        },
        { 
            qNum: 2, 
            part: 'A', 
            type: 'select', 
            score: 5,
            text: '听录音，选出正确的问句。', 
            audioText: 'How many kites?', 
            options: ['A. How are you?', 'B. How old are you?', 'C. How many kites?', 'D. What’s your name?'], 
            correct: 'C. How many kites?' 
        },
        { 
            qNum: 3, 
            part: 'A', 
            type: 'select', 
            score: 5,
            text: '听录音，选出你听到的动物图片。', 
            audioText: 'Look! A lion!', 
            options: ['image:u2_lion', 'image:u2_duck', 'image:u2_monkey', 'image:u1_cat'], 
            correct: 'image:u2_lion' 
        },
        { 
            qNum: 4, 
            part: 'A', 
            type: 'drag-sort', 
            score: 5,
            text: '听录音，拖拽单词组成句子。', 
            audioText: 'Yes. That’s right.', 
            words: ['That’s', 'right', 'Yes', '.'], 
            correct: 'Yes That’s right .' 
        },
        { 
            qNum: 5, 
            part: 'A', 
            type: 'select', 
            score: 5,
            text: '听录音，选出最合适的回答。', 
            audioText: 'How many cats? Ten.', 
            options: ['A. Ten.', 'B. I’m fine.', 'C. It’s green.', 'D. Nice to meet you.'], 
            correct: 'A. Ten.' 
        },

        // ===========================
        // Part B: Reading (Target: 25 pts)
        // ===========================
        { 
            qNum: 6, 
            part: 'B', 
            type: 'select', 
            score: 5,
            text: '看图，选出正确的英文单词。', 
            imageUri: 'u2_kite.png', 
            options: ['A. cat', 'B. lion', 'C. duck', 'D. kite'], 
            correct: 'D. kite' 
        },
        { 
            qNum: 7, 
            part: 'B', 
            type: 'drag-match', 
            score: 5,
            text: '将问句与正确的回答匹配。', 
            matches: [
                { left: 'How many ducks?', right: 'Six ducks.' },
                { left: 'Really?', right: 'Yes. That’s right.' }
            ],
            correct: ['How many ducks?|Six ducks.', 'Really?|Yes. That’s right.'] 
        },
        { 
            qNum: 8, 
            part: 'B', 
            type: 'select', 
            score: 5,
            text: '选择正确的疑问词填空：<br>___ many ducks are there?', 
            options: ['A. What', 'B. How', 'C. Who', 'D. Am'], 
            correct: 'B. How' 
        },
        { 
            qNum: 9, 
            part: 'B', 
            type: 'select', 
            score: 5,
            text: '当你想确认一个信息是否正确时，你会说：', 
            options: ['A. Look!', 'B. Really?', 'C. Goodbye!', 'D. Nice to meet you.'], 
            correct: 'B. Really?' 
        },
        { 
            qNum: 10, 
            part: 'B', 
            type: 'select', 
            score: 5,
            text: '“那是正确的” 用英文应该怎么表达？', 
            options: ['A. This is wrong.', 'B. That’s right.', 'C. How about it?', 'D. I’m fine.'], 
            correct: 'B. That’s right.' 
        },

        // ===========================
        // Part C: Writing (Target: 25 pts)
        // ===========================
        { 
            qNum: 11, 
            part: 'C', 
            type: 'drag-sort', 
            score: 5,
            text: '连词成句。', 
            words: ['many', 'How', 'ducks', '?', 'are', 'there'], 
            correct: 'How many ducks are there ?' 
        },
        { 
            qNum: 12, 
            part: 'C', 
            type: 'select', 
            score: 5,
            text: '请选出字母 L 的小写形式。 (Choose the lowercase letter L)', 
            options: ['A. i', 'B. l', 'C. k', 'D. j'], 
            correct: 'B. l' 
        },
        { 
            qNum: 13, 
            part: 'C', 
            type: 'select', 
            score: 5,
            text: '看图，选出正确的英文单词。', 
            imageUri: 'u2_lion.png', 
            options: ['A. cat', 'B. lion', 'C. duck', 'D. pig'], 
            correct: 'B. lion' 
        },
        { 
            qNum: 14, 
            part: 'C', 
            type: 'select', 
            score: 5,
            text: '选出表示“许多的”英文单词。', 
            options: ['A. one', 'B. many', 'C. go', 'D. number'], 
            correct: 'B. many' 
        },
        { 
            qNum: 15, 
            part: 'C', 
            type: 'select', 
            score: 5,
            text: '请选出 “kite” 的中文意思。', 
            options: ['A. 狮子', 'B. 鸭子', 'C. 风筝', 'D. 冰激凌'], 
            correct: 'C. 风筝' 
        }
    ]
});
