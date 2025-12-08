/**
 * ✍️ Unit 1 Lesson 1: Nice to meet you
 * File: data/written/u1_l1.js
 */

window.LOAD_QUIZ({
    title: "Unit 1 Lesson 1: Nice to meet you",
    timeLimit: 540,
    
    questions: [
        // ===========================
        // Part A: Listening
        // ===========================
        { 
            qNum: 1, 
            part: 'A',
            type: 'select', 
            // 🔴 已删除 "1. " 序号，防止重复
            text: '听录音，选出正确的图片。<br><span style="font-size:14px;color:#666">(Listen and choose the picture)</span>', 
            audioText: 'Apple. It is an apple.', 
            options: ['image:u1_banana', 'image:u1_apple', 'image:u1_boy', 'image:u1_girl'], 
            correct: 'image:u1_apple' 
        },
        { 
            qNum: 2, 
            part: 'A',
            type: 'select', 
            text: '听录音，选出这句话的中文意思。<br><span style="font-size:14px;color:#666">(Listen and choose meaning)</span>', 
            audioText: 'Nice to meet you.', 
            options: ['A. 你好。', 'B. 再见。', 'C. 很高兴见到你。', 'D. 我是高老师。'], 
            correct: 'C. 很高兴见到你。' 
        },
        { 
            qNum: 3, 
            part: 'A',
            type: 'select', 
            text: '听录音选词填空：Hello, ______ and girls!<br><span style="font-size:14px;color:#666">(Listen and complete)</span>', 
            audioText: 'Hello, boys and girls!', 
            options: ['A. boys', 'B. banana', 'C. bag', 'D. book'], 
            correct: 'A. boys' 
        },
        { 
            qNum: 4, 
            part: 'A',
            type: 'select', 
            text: '听录音，选出对应的人物。<br><span style="font-size:14px;color:#666">(Listen and choose the person)</span>', 
            audioText: 'Hello, I am Miss Gao.', 
            options: ['image:u1_boy', 'image:u1_girl', 'image:u1_miss_gao', 'image:u1_apple'], 
            correct: 'image:u1_miss_gao' 
        },
        { 
            qNum: 5, 
            part: 'A',
            type: 'select', 
            text: '听录音，选出你听到的单词。<br><span style="font-size:14px;color:#666">(Listen and choose the word)</span>', 
            audioText: 'Girl. I am a girl.', 
            options: ['A. boy', 'B. banana', 'C. cat', 'D. girl'], 
            correct: 'D. girl' 
        },

        // ===========================
        // Part B: Reading
        // ===========================
        { 
            qNum: 6, 
            part: 'B',
            type: 'select', 
            text: '看图，选出正确的单词。<br><span style="font-size:14px;color:#666">(Look and choose)</span>', 
            imageUri: 'u1_banana.png', 
            options: ['A. apple', 'B. banana', 'C. boy', 'D. girl'], 
            correct: 'B. banana' 
        },
        { 
            qNum: 7, 
            part: 'B',
            type: 'select', 
            text: '"I am Miss Gao" 是什么意思？<br><span style="font-size:14px;color:#666">(What does it mean?)</span>', 
            options: ['A. 我是高老师。', 'B. 你好，高老师。', 'C. 高老师再见。', 'D. 这是高老师。'], 
            correct: 'A. 我是高老师。' 
        },
        { 
            qNum: 8, 
            part: 'B',
            type: 'select', 
            text: '找出不同类的一项。<br><span style="font-size:14px;color:#666">(Find the odd one out)</span>', 
            options: ['A. boy', 'B. girl', 'C. Miss', 'D. apple'], 
            correct: 'D. apple' 
        },
        { 
            qNum: 9, 
            part: 'B',
            type: 'select', 
            text: '看图，选出正确的单词。<br><span style="font-size:14px;color:#666">(Look and choose)</span>', 
            imageUri: 'u1_boy.png',
            options: ['A. girl', 'B. apple', 'C. boy', 'D. banana'], 
            correct: 'C. boy' 
        },
        { 
            qNum: 10, 
            part: 'B',
            type: 'select', 
            text: '"Hi" 是什么意思？', 
            options: ['A. 再见', 'B. 你好/嗨', 'C. 苹果', 'D. 名字'], 
            correct: 'B. 你好/嗨' 
        },

        // ===========================
        // Part C: Writing
        // ===========================
        { 
            qNum: 11, 
            part: 'C',
            type: 'select', 
            text: '看图，补全单词：g _ r l (女孩)', 
            imageUri: 'u1_girl.png',
            options: ['A. a', 'B. e', 'C. i', 'D. o'], 
            correct: 'C. i' 
        },
        // 🔥 恢复为 drag-sort (拖拽题)
        { 
            qNum: 12, 
            part: 'C',
            type: 'drag-sort', 
            text: '连词成句。<br><span style="font-size:14px;color:#666">(Reorder the sentence)</span>', 
            words: ['Nice', 'to', 'meet', 'you', '.'], 
            correct: 'Nice to meet you.' 
        },
        { 
            qNum: 13, 
            part: 'C',
            type: 'select', 
            text: '选出字母 B 的小写形式。', 
            options: ['A. d', 'B. p', 'C. q', 'D. b'], 
            correct: 'D. b' 
        },
        { 
            qNum: 14, 
            part: 'C',
            type: 'select', 
            text: '选出字母 a 的大写形式。', 
            options: ['A. A', 'B. B', 'C. C', 'D. D'], 
            correct: 'A. A' 
        },
        { 
            qNum: 15, 
            part: 'C',
            type: 'select', 
            text: '看图，补全单词：_ p p l e (苹果)', 
            imageUri: 'u1_apple.png',
            options: ['A. a', 'B. e', 'C. i', 'D. o'], 
            correct: 'A. a' 
        }
    ]
});
