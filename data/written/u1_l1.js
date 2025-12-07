window.LOAD_QUIZ({
    title: "Unit 1 Lesson 1: Nice to meet you",
    timeLimit: 540,
    // 删掉复杂的 images 映射，直接用文件名，更稳！
    
    questions: [
        // ===========================
        // Part A: Listening (听力)
        // ===========================
        { 
            qNum: 1, 
            type: 'select', 
            text: '1. 听录音，选出正确的图片。', 
            audioText: 'Apple. It is an apple.', 
            // 🔥 直接用文件名 u1_banana (对应 u1_banana.png)，再也不会错！
            options: ['image:u1_banana', 'image:u1_apple', 'image:u1_boy', 'image:u1_girl'], 
            correct: 'image:u1_apple' 
        },
        { 
            qNum: 2, 
            type: 'select', 
            text: '2. 听录音，选出这句话的中文意思。', 
            audioText: 'Nice to meet you.', 
            options: ['A. 你好。', 'B. 再见。', 'C. 很高兴见到你。', 'D. 我是高老师。'], 
            correct: 'C. 很高兴见到你。' 
        },
        { 
            qNum: 3, 
            type: 'select', 
            text: '3. 听录音选词填空：Hello, ______ and girls!', 
            audioText: 'Hello, boys and girls!', 
            options: ['A. boys', 'B. banana', 'C. bag', 'D. book'], 
            correct: 'A. boys' 
        },
        { 
            qNum: 4, 
            type: 'select', 
            text: '4. 听录音，选出你听到的人物。', 
            audioText: 'Hello, I am Miss Gao.', 
            // 确保你的 img 文件夹里有 u1_miss_gao.png
            options: ['image:u1_boy', 'image:u1_girl', 'image:u1_miss_gao', 'image:u1_apple'], 
            correct: 'image:u1_miss_gao' 
        },
        { 
            qNum: 5, 
            type: 'select', 
            text: '5. 听录音，选出你听到的单词。', 
            audioText: 'Girl. I am a girl.', 
            options: ['A. boy', 'B. banana', 'C. cat', 'D. girl'], 
            correct: 'D. girl' 
        },

        // ===========================
        // Part B: Reading (阅读)
        // ===========================
        { 
            qNum: 6, 
            type: 'select', 
            text: '6. 看图，选择正确的单词。', 
            // 这里会在题目上方显示大图 (确保有 u1_banana.png)
            imageUri: 'u1_banana.png', 
            options: ['A. apple', 'B. banana', 'C. boy', 'D. girl'], 
            correct: 'B. banana' 
        },
        { 
            qNum: 7, 
            type: 'select', 
            text: '7. 选出 "I am Miss Gao." 的中文意思。', 
            options: ['A. 我是高老师。', 'B. 你好，高老师。', 'C. 高老师再见。', 'D. 这是高老师。'], 
            correct: 'A. 我是高老师。' 
        },
        { 
            qNum: 8, 
            type: 'select', 
            text: '8. 找出不同类的一项 (Find the odd one out)。', 
            options: ['A. boy', 'B. girl', 'C. Miss', 'D. apple'], 
            correct: 'D. apple' 
        },
        { 
            qNum: 9, 
            type: 'select', 
            text: '9. 看图，选择正确的单词。', 
            imageUri: 'u1_boy.png',
            options: ['A. girl', 'B. apple', 'C. boy', 'D. banana'], 
            correct: 'C. boy' 
        },
        { 
            qNum: 10, 
            type: 'select', 
            text: '10. "Hi" 的中文意思是什么？', 
            options: ['A. 再见', 'B. 你好/嗨', 'C. 苹果', 'D. 名字'], 
            correct: 'B. 你好/嗨' 
        },

        // ===========================
        // Part C: Writing (写作)
        // ===========================
        { 
            qNum: 11, 
            type: 'select', 
            text: '11. 看图，补全单词：g _ r l (女孩)', 
            imageUri: 'u1_girl.png',
            options: ['A. a', 'B. e', 'C. i', 'D. o'], 
            correct: 'C. i' 
        },
        // ⚠️ 第12题暂时改为选择题，防止卡死
        { 
            qNum: 12, 
            type: 'select', 
            text: '12. 连词成句：Nice / to / meet / you / .', 
            options: ['A. Nice meet you to.', 'B. Nice to meet you.', 'C. To nice meet you.'], 
            correct: 'B. Nice to meet you.' 
        },
        { 
            qNum: 13, 
            type: 'select', 
            text: '13. 选出字母 B 的小写形式。', 
            options: ['A. d', 'B. p', 'C. q', 'D. b'], 
            correct: 'D. b' 
        },
        { 
            qNum: 14, 
            type: 'select', 
            text: '14. 选出字母 a 的大写形式。', 
            options: ['A. A', 'B. B', 'C. C', 'D. D'], 
            correct: 'A. A' 
        },
        { 
            qNum: 15, 
            type: 'select', 
            text: '15. 看图，补全单词：_ p p l e (苹果)', 
            imageUri: 'u1_apple.png',
            options: ['A. a', 'B. e', 'C. i', 'D. o'], 
            correct: 'A. a' 
        }
    ]
});
