window.LOAD_QUIZ({
    title: "Unit 2 Lesson 2: How many ducks",
    mode: "written", 
    timeLimit: 540,

    // ✅ 图片资源修复：
    // 我把 'img/' 前缀都去掉了，防止图片裂开。
    // 请确保这些图片都直接上传到了你的文件夹根目录。
    images: {
        'num_01': 'num_01.png',
        'num_02': 'num_02.png',
        'num_03': 'num_03.png',
        'num_04': 'num_04.png',
        'num_05': 'num_05.png',
        'num_06': 'num_06.png',
        'num_09': 'num_09.png',
        'num_10': 'num_10.png',
        'park': 'cene_park.png',    // ⚠️ 注意：检查你的文件名是 cene_park 还是 scene_park
        'great': 'badge_great.png',
        'ice_cream_10': 'ice_cream_10.png' // ⚠️ 记得上传这张图
    },

    questions: [
        // ================= Part A: Listening (听力 25分) =================
        {
            qNum: 1,
            part: 'A',
            type: 'select',
            score: 5, 
            text: '听录音，选出正确的图片。',
            audioText: 'I have five ice creams.',
            options: ['image:num_03', 'image:num_05', 'image:num_09', 'image:num_04'],
            correct: 'image:num_05'
        },
        {
            qNum: 2,
            part: 'A',
            type: 'select',
            score: 5, 
            text: '听录音，选出正确的数字图片。',
            imageKey: 'ice_cream_10',  
            audioText: 'How many ice creams? Ten ice creams.',
            options: ['image:num_04', 'image:num_05', 'image:num_10', 'image:num_02'],
            correct: 'image:num_10'
        },
        {
            qNum: 3,
            part: 'A',
            type: 'select',
            score: 5, 
            text: '听录音，选出中文意思。',
            audioText: "Let's play a game!",
            options: ['让我们玩游戏！', '你叫什么名字？', '这是我的朋友。', '很高兴见到你！'],
            correct: '让我们玩游戏！'
        },
        {
            qNum: 4,
            part: 'A',
            type: 'select',
            score: 5, 
            text: '听录音，选出正确的单词。',
            audioText: 'The number is three.',
            options: ['one', 'two', 'three', 'four'], 
            correct: 'three'
        },
        {
            qNum: 5,
            part: 'A',
            type: 'select',
            score: 5, 
            text: '听录音，补全句子：OK, Let\'s ____!',
            audioText: "OK, Let's play!",
            options: ['go', 'look', 'play', 'great'],
            correct: 'play'
        },

        // ================= Part B: Reading (阅读 25分) =================
        {
            qNum: 6, 
            part: 'B',
            type: 'select',
            score: 5, 
            text: '选择 "six" 对应的图片。',
            options: ['image:num_01', 'image:num_09', 'image:num_06', 'image:num_02'],
            correct: 'image:num_06'
        },
        {
            qNum: 7, 
            part: 'B',
            type: 'select',
            score: 5, 
            text: '看图，How many ice creams? (有多少个冰淇淋？)',
            imageKey: 'num_04', 
            options: ['three', 'four', 'five', 'six'],
            correct: 'four'
        },
        {
            qNum: 8, 
            part: 'B',
            type: 'select',
            score: 5, 
            text: '这是哪里？选出对应的单词。',
            imageKey: 'park',
            options: ['school', 'park', 'home', 'zoo'],
            correct: 'park'
        },
        {
            qNum: 9, 
            part: 'B',
            type: 'select',
            score: 5, 
            text: '数字 8 (Eight) 用英语怎么说？',
            options: ['six', 'seven', 'eight', 'nine'],
            correct: 'eight'
        },
        {
            qNum: 10, 
            part: 'B',
            type: 'select',
            score: 5, 
            text: '看图，“太棒了”用英文怎么说？',
            imageKey: 'great',
            options: ['good', 'great', 'nice', 'fine'],
            correct: 'great'
        },

        // ================= Part C: Writing (写作 25分) =================
        {
            qNum: 11, 
            part: 'C',
            type: 'select',
            score: 5, 
            text: '朋友回答正确，你想说“那是对的”，英语怎么说？',
            options: ['That’s right.', 'That’s kite.', 'Really?', 'How many?'],
            correct: 'That’s right.'
        },
        {
            qNum: 12, 
            part: 'C',
            type: 'drag-sort',
            score: 5, 
            text: '点击单词，组成句子：(有多少只鸭子？)',
            words: ['ducks', 'many', 'How', '?'], 
            correct: 'How many ducks?'
        },
        {
            qNum: 13, 
            part: 'C',
            type: 'drag-sort',
            score: 5, 
            text: '数字接龙：请按 1 到 5 的顺序排列单词。',
            words: ['three', 'one', 'four', 'two', 'five'], 
            correct: 'one two three four five'
        },
        {
            qNum: 14, 
            part: 'C',
            type: 'drag-sort',
            score: 5, 
            text: '数字接龙：请按 6 到 10 的顺序排列单词。',
            words: ['nine', 'six', 'ten', 'eight', 'seven'], 
            correct: 'six seven eight nine ten'
        },
        {
            qNum: 15,
            part: 'C',
            type: 'select',
            score: 5, 
            text: '看图完成句子：It\'s number _____ .',
            imageKey: 'num_05',
            options: ['four', 'five', 'six', 'fif'],
            correct: 'five'
        }
    ]
});
