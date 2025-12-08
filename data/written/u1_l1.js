/**
 * ✍️ Unit 1 Lesson 1: Nice to meet you
 * File: data/written/u1_l1.js
 * Update: Added Chinese translations for Grade 3 students
 */

window.LOAD_QUIZ({
    title: "Unit 1 Lesson 1: Nice to meet you",
    timeLimit: 540, // 9 minutes
    
    questions: [
        // ===========================
        // Part A: Listening (听力)
        // ===========================
        { 
            qNum: 1, 
            part: 'A',
            type: 'select', 
            // 中英文双语指令
            text: '1. 听录音，选出正确的图片。<br><span style="font-size:14px;color:#666">(Listen and choose the correct picture)</span>', 
            audioText: 'Apple. It is an apple.', 
            options: ['image:u1_banana', 'image:u1_apple', 'image:u1_boy', 'image:u1_girl'], 
            correct: 'image:u1_apple' 
        },
        { 
            qNum: 2, 
            part: 'A',
            type: 'select', 
            text: '2. 听录音，选出这句话的中文意思。<br><span style="font-size:14px;color:#666">(Listen and choose the Chinese meaning)</span>', 
            audioText: 'Nice to meet you.', 
            options: ['A. 你好。', 'B. 再见。', 'C. 很高兴见到你。', 'D. 我是高老师。'], 
            correct: 'C. 很高兴见到你。' 
        },
        { 
            qNum: 3, 
            part: 'A',
            type: 'select', 
            text: '3. 听录音，选词填空：Hello, ______ and girls!<br><span style="font-size:14px;color:#666">(Listen and complete)</span>', 
            audioText: 'Hello, boys and girls!', 
            options: ['A. boys', 'B. banana', 'C. bag', 'D. book'], 
            correct: 'A. boys' 
        },
        { 
            qNum: 4, 
            part: 'A',
            type: 'select', 
            text: '4. 听录音，选出对应的人物。<br><span style="font-size:14px;color:#666">(Listen and choose the person)</span>', 
            audioText: 'Hello, I am Miss Gao.', 
            options: ['image:u1_boy', 'image:u1_girl', 'image:u1_miss_gao', 'image:u1_apple'], 
            correct: 'image:u1_miss_gao' 
        },
        { 
            qNum: 5, 
            part: 'A',
            type: 'select', 
            text: '5. 听录音，选出你听到的单词。<br><span style="font-size:14px;color:#666">(Listen and choose the word)</span>', 
            audioText: 'Girl. I am a girl.', 
            options: ['A. boy', 'B. banana', 'C. cat', 'D. girl'], 
            correct: 'D. girl' 
        },

        // ===========================
        // Part B: Reading (阅读)
        // ===========================
        { 
            qNum: 6, 
            part: 'B',
            type: 'select', 
            text: '6. 看图，选出正确的单词。<br><span style="font-size:14px;color:#666">(Look and choose the word)</span>', 
            imageUri: 'u1_banana.png', 
            options: ['A. apple', 'B. banana', 'C. boy', 'D. girl'], 
            correct: 'B. banana' 
        },
        { 
            qNum: 7, 
            part: 'B',
            type: 'select', 
            text: '7. "I am Miss Gao" 是什么意思？<br><span style="font-size:14px;color:#666">(What is the Chinese meaning?)</span>', 
            options: ['A. 我是高老师。', 'B. 你好，高老师。', 'C. 高老师再见。', 'D. 这是高老师。'], 
            correct: 'A. 我是高老师。' 
        },
        { 
            qNum: 8, 
            part: 'B',
            type: 'select', 
            text: '8. 找出不同类的一项。<br><span style="font-size:14px;color:#666">(Find the odd one out)</span>', 
            options: ['A. boy', 'B. girl', 'C. Miss', 'D. apple'], 
            correct: 'D. apple' 
        },
        { 
            qNum: 9, 
            part: 'B',
            type: 'select', 
            text: '9. 看图，选出正确的单词。<br><span style="font-size:14px;color:#666">(Look and choose the word)</span>', 
            imageUri: 'u1_boy.png',
            options: ['A. girl', 'B. apple', 'C. boy', 'D. banana'], 
            correct: 'C. boy' 
        },
        { 
            qNum: 10, 
            part: 'B',
            type: 'select', 
            text: '10. "Hi" 是什么意思？<br><span style="font-size:14px;color:#666">(What does "Hi" mean?)</span>', 
            options: ['A. 再见', 'B. 你好/嗨', 'C. 苹果', 'D. 名字'], 
            correct: 'B. 你好/嗨' 
        },

        // ===========================
        // Part C: Writing / Letters (书写与字母)
        // ===========================
        { 
            qNum: 11, 
            part: 'C',
            type: 'select', 
            text: '11. 看图，补全单词：g _ r l (女孩)<br><span style="font-size:14px;color:#666">(Complete the word)</span>', 
            imageUri: 'u1_girl.png',
            options: ['A. a', 'B. e', 'C. i', 'D. o'], 
            correct: 'C. i' 
        },
        // 暂时用选择题替代拖拽，防止卡顿
        { 
            qNum: 12, 
            part: 'C',
            type: 'select', 
            text: '12. 连词成句。<br><span style="font-size:14px;color:#666">(Reorder: Nice / to / meet / you / .)</span>', 
            options: ['A. Nice meet you to.', 'B. Nice to meet you.', 'C. To nice meet you.'], 
            correct: 'B. Nice to meet you.' 
        },
        { 
            qNum: 13, 
            part: 'C',
            type: 'select', 
            text: '13. 选出字母 B 的小写形式。<br><span style="font-size:14px;color:#666">(Choose the small letter for "B")</span>', 
            options: ['A. d', 'B. p', 'C. q', 'D. b'], 
            correct: 'D. b' 
        },
        { 
            qNum: 14, 
            part: 'C',
            type: 'select', 
            text: '14. 选出字母 a 的大写形式。<br><span style="font-size:14px;color:#666">(Choose the big letter for "a")</span>', 
            options: ['A. A', 'B. B', 'C. C', 'D. D'], 
            correct: 'A. A' 
        },
        { 
            qNum: 15, 
            part: 'C',
            type: 'select', 
            text: '15. 看图，补全单词：_ p p l e (苹果)<br><span style="font-size:14px;color:#666">(Complete the word)</span>', 
            imageUri: 'u1_apple.png',
            options: ['A. a', 'B. e', 'C. i', 'D. o'], 
            correct: 'A. a' 
        }
    ]
});
