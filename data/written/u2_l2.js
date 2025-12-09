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
            options: ['image:num_03', 'image:num_05', 'image:num_09', 'image:num_10'], 
            correct: 'image:num_05' 
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
        // Part B: Reading (Target: 25 pts) (重点考察理解和词汇语义)
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
            type: 'select', 
            score: 5,
            text: '选出对问句 **"How many ducks?"** 最合适的回答。', 
            options: ['A. It’s a duck.', 'B. I’m eight.', 'C. Eight ducks.', 'D. That’s wrong.'], 
            correct: 'C. Eight ducks.' 
        },
        // Q8 (原 Q13): 看图理解 (Reading)
        { 
            qNum: 8, 
            part: 'B', 
            type: 'select', 
            score: 5,
            text: '看图，选出正确的英文单词。', 
            imageUri: 'u2_lion.png', 
            options: ['A. cat', 'B. lion', 'C. duck', 'D. pig'], 
            correct: 'B. lion' 
        },
        // Q9 (原 Q14): 语义理解 (Reading)
        { 
            qNum: 9, 
            part: 'B', 
            type: 'select', 
            score: 5,
            text: '选出表示“许多的”英文单词。', 
            options: ['A. one', 'B. many', 'C. go', 'D. number'], 
            correct: 'B. many' 
        },
        // Q10 (原 Q15): 中英文语义 (Reading)
        { 
            qNum: 10, 
            part: 'B', 
            type: 'select', 
            score: 5,
            text: '请选出 “kite” 的中文意思。', 
            options: ['A. 狮子', 'B. 鸭子', 'C. 风筝', 'D. 冰激凌'], 
            correct: 'C. 风筝' 
        },

        // ===========================
        // Part C: Writing (Target: 25 pts) (重点考察输出和结构)
        // ===========================
        // Q11 (原 Q8): 句型结构选择 (Writing)
        { 
            qNum: 11, 
            part: 'C', 
            type: 'select', 
            score: 5,
            text: '选择正确的疑问词填空：<br>___ many ducks?', 
            options: ['A. What', 'B. How', 'C. Who', 'D. Am'], 
            correct: 'B. How' 
        },
        // Q12 (原 Q9): 情景选择 (Reading) -> 移出
        { 
            qNum: 12, 
            part: 'C', 
            type: 'select', 
            score: 5,
            text: '当你想确认一个信息是否正确时，你会说：', 
            options: ['A. Look!', 'B. Really?', 'C. Goodbye!', 'D. Nice to meet you.'], 
            correct: 'B. Really?' 
        },
        // Q13 (原 Q10): 情景选择 (Reading) -> 移出
        { 
            qNum: 13, 
            part: 'C', 
            type: 'select', 
            score: 5,
            text: '“那是正确的” 用英文应该怎么表达？', 
            options: ['A. This is wrong.', 'B. That’s right.', 'C. How about it?', 'D. I’m fine.'], 
            correct: 'B. That’s right.' 
        },
        // Q14 (原 Q11): 连词成句 (Writing)
        { 
            qNum: 14, 
            part: 'C', 
            type: 'drag-sort', 
            score: 5,
            text: '连词成句。', 
            words: ['many', 'How', 'ducks', '?'], 
            correct: 'How many ducks ?' 
        },
        // Q15 (原 Q12): 字母选择 (Writing)
        { 
            qNum: 15, 
            part: 'C', 
            type: 'select', 
            score: 5,
            text: '请选出字母 L 的小写形式。 (Choose the lowercase letter L)', 
            options: ['A. i', 'B. l', 'C. k', 'D. j'], 
            correct: 'B. l' 
        }
    ]
});
