window.LOAD_QUIZ({
    title: "Unit 2 Lesson 2: How many ducks",
    mode: "written", // 笔试模式 (包含听力+阅读+写作)
    timeLimit: 540,  // 限时 9 分钟

    // ✅ 图片资源映射 (Key : 文件路径)
    // 请确保您的 img 文件夹里有这些图片
    images: {
        'num_01': 'img/num_01.png',
        'num_02': 'img/num_02.png',
        'num_03': 'img/num_03.png',
        'num_04': 'img/num_04.png',
        'num_05': 'img/num_05.png',
        'num_06': 'img/num_06.png',
        'num_09': 'img/num_09.png',
        'num_10': 'img/num_10.png',
        'park': 'img/cene_park.png',
        'great': 'img/badge_great.png'
    },

    questions: [
        // ================= Part A: Listening (听力) =================
        {
            qNum: 1,
            part: 'A',
            type: 'select',
            text: '听录音，选出正确的图片。',
            audioText: 'I have five ice creams.',
            // 使用 image:前缀来引用上面的 images
            options: ['image:num_03', 'image:num_05', 'image:num_09', 'image:num_04'],
            correct: 'image:num_05'
        },
        {
            qNum: 2,
            part: 'A',
            type: 'select',
            text: '听录音，选出正确的图片。',
            audioText: 'Count the number to ten.',
            options: ['image:num_04', 'image:num_05', 'image:num_10', 'image:num_02'],
            correct: 'image:num_10'
        },
        {
            qNum: 3,
            part: 'A',
            type: 'select',
            text: '听录音，选出中文意思。',
            audioText: "Let's play a game!",
            options: ['让我们玩游戏！', '你叫什么名字？', '这是我的朋友。', '很高兴见到你！'],
            correct: '让我们玩游戏！'
        },
        {
            qNum: 4,
            part: 'A',
            type: 'fill',
            text: '听录音，写出单词。',
            audioText: 'The number is three.',
            correct: 'three'
        },
        {
            qNum: 5,
            part: 'A',
            type: 'fill',
            text: '听录音，写出单词。',
            audioText: "OK, Let's play!",
            correct: 'play'
        },

        // ================= Part B: Reading (阅读) =================
        {
            qNum: 6,
            part: 'B',
            type: 'drag-sort',
            text: '点击单词，组成句子。',
            words: ['apple', 'is', 'This', 'an', '.'],
            correct: 'This is an apple.'
        },
        {
            qNum: 7,
            part: 'B',
            type: 'drag-sort',
            text: '点击单词，组成句子。',
            words: ['park.', "Let's", 'in the', 'play'],
            correct: "Let's play in the park."
        },
        {
            qNum: 8,
            part: 'B',
            type: 'select',
            text: '选择 "six" 对应的图片。',
            options: ['image:num_01', 'image:num_09', 'image:num_06', 'image:num_02'],
            correct: 'image:num_06'
        },
        {
            qNum: 9,
            part: 'B',
            type: 'fill',
            text: '看图，用英文回答数量：How many ice creams?',
            imageKey: 'num_04', // 引用上面的 num_04 图片
            correct: 'four'
        },
        {
            qNum: 10,
            part: 'B',
            type: 'select',
            text: '这是哪里？选出对应的单词。',
            imageKey: 'park',
            options: ['school', 'park', 'home', 'zoo'],
            correct: 'park'
        },

        // ================= Part C: Writing (写作) =================
        {
            qNum: 11,
            part: 'C',
            type: 'select',
            text: '选择数字 7 的拼写。',
            options: ['seven', 'sevan', 'sewen', 'seve'],
            correct: 'seven'
        },
        {
            qNum: 12,
            part: 'C',
            type: 'drag-sort',
            text: '点击单词，完成句子：I can ___ the ___ from one to ten.',
            words: ['say', 'numbers', 'play', 'go'],
            correct: 'I can say the numbers from one to ten.' // 注意：这里是完整句子，引擎会自动判断
        },
        {
            qNum: 13,
            part: 'C',
            type: 'fill',
            text: '写出数字 8 的英文。',
            correct: 'eight'
        },
        {
            qNum: 14,
            part: 'C',
            type: 'fill',
            text: '看图，“太棒了”用英文怎么说？',
            imageKey: 'great',
            correct: 'great'
        },
        {
            qNum: 15,
            part: 'C',
            type: 'fill',
            text: '看图完成句子：It\'s number _____ .',
            imageKey: 'num_05',
            correct: 'five'
        }
    ]
});
