/**
 * ✍️ Unit 1 Lesson 1: Nice to meet you
 * File: data/written/u1_l1.js
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
            text: '1. Listen and choose the correct picture. (听录音，选图片)', 
            audioText: 'Apple. It is an apple.', 
            // Ensure you have these images in your img/ folder!
            options: ['image:u1_banana', 'image:u1_apple', 'image:u1_boy', 'image:u1_girl'], 
            correct: 'image:u1_apple' 
        },
        { 
            qNum: 2, 
            part: 'A',
            type: 'select', 
            text: '2. Listen and choose the Chinese meaning. (听录音，选中文)', 
            audioText: 'Nice to meet you.', 
            options: ['A. 你好。', 'B. 再见。', 'C. 很高兴见到你。', 'D. 我是高老师。'], 
            correct: 'C. 很高兴见到你。' 
        },
        { 
            qNum: 3, 
            part: 'A',
            type: 'select', 
            text: '3. Listen and complete the sentence: Hello, ______ and girls!', 
            audioText: 'Hello, boys and girls!', 
            options: ['A. boys', 'B. banana', 'C. bag', 'D. book'], 
            correct: 'A. boys' 
        },
        { 
            qNum: 4, 
            part: 'A',
            type: 'select', 
            text: '4. Listen and choose the person. (听录音，选人物)', 
            audioText: 'Hello, I am Miss Gao.', 
            options: ['image:u1_boy', 'image:u1_girl', 'image:u1_miss_gao', 'image:u1_apple'], 
            correct: 'image:u1_miss_gao' 
        },
        { 
            qNum: 5, 
            part: 'A',
            type: 'select', 
            text: '5. Listen and choose the word you hear. (听音选词)', 
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
            text: '6. Look at the picture and choose the word. (看图选词)', 
            imageUri: 'u1_banana.png', 
            options: ['A. apple', 'B. banana', 'C. boy', 'D. girl'], 
            correct: 'B. banana' 
        },
        { 
            qNum: 7, 
            part: 'B',
            type: 'select', 
            text: '7. What is the Chinese meaning of "I am Miss Gao"?', 
            options: ['A. 我是高老师。', 'B. 你好，高老师。', 'C. 高老师再见。', 'D. 这是高老师。'], 
            correct: 'A. 我是高老师。' 
        },
        { 
            qNum: 8, 
            part: 'B',
            type: 'select', 
            text: '8. Find the odd one out. (找出不同类的一项)', 
            options: ['A. boy', 'B. girl', 'C. Miss', 'D. apple'], 
            correct: 'D. apple' 
        },
        { 
            qNum: 9, 
            part: 'B',
            type: 'select', 
            text: '9. Look at the picture and choose the word.', 
            imageUri: 'u1_boy.png',
            options: ['A. girl', 'B. apple', 'C. boy', 'D. banana'], 
            correct: 'C. boy' 
        },
        { 
            qNum: 10, 
            part: 'B',
            type: 'select', 
            text: '10. What does "Hi" mean?', 
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
            text: '11. Complete the word: g _ r l (女孩)', 
            imageUri: 'u1_girl.png',
            options: ['A. a', 'B. e', 'C. i', 'D. o'], 
            correct: 'C. i' 
        },
        // Changed to 'select' temporarily to prevent bugs until engine fully supports drag-sort
        { 
            qNum: 12, 
            part: 'C',
            type: 'select', 
            text: '12. Reorder the sentence: Nice / to / meet / you / .', 
            options: ['A. Nice meet you to.', 'B. Nice to meet you.', 'C. To nice meet you.'], 
            correct: 'B. Nice to meet you.' 
        },
        { 
            qNum: 13, 
            part: 'C',
            type: 'select', 
            text: '13. Choose the small letter for "B". (选出B的小写)', 
            options: ['A. d', 'B. p', 'C. q', 'D. b'], 
            correct: 'D. b' 
        },
        { 
            qNum: 14, 
            part: 'C',
            type: 'select', 
            text: '14. Choose the big letter for "a". (选出a的大写)', 
            options: ['A. A', 'B. B', 'C. C', 'D. D'], 
            correct: 'A. A' 
        },
        { 
            qNum: 15, 
            part: 'C',
            type: 'select', 
            text: '15. Complete the word: _ p p l e (苹果)', 
            imageUri: 'u1_apple.png',
            options: ['A. a', 'B. e', 'C. i', 'D. o'], 
            correct: 'A. a' 
        }
    ]
});
