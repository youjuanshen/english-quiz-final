window.LOAD_QUIZ({
    title: "Unit 2 Lesson 2: How many ducks",
    mode: "written", 
    timeLimit: 540,

    // ✅ 修改点1：在图片资源里加上了冰淇淋的图
    // 请确保你的文件夹里有名为 img/ice_cream_10.png 的图片
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
        'great': 'img/badge_great.png',
        'ice_cream_10': 'img/ice_cream_10.png' // 新增的图片ID
    },

    questions: [
        // ================= Part A: Listening (听力) =================
        {
            qNum: 1,
            part: 'A',
            type: 'select',
            text: '听录音，选出正确的图片。',
            audioText: 'I have five ice creams.',
            options: ['image:num_03', 'image:num_05', 'image:num_09', 'image:num_04'],
            correct: 'image:num_05'
        },
        
        // ✅ 修改点2：第2题已更新为“看图数冰淇淋”
        {
            qNum: 2,
            part: 'A',
            type: 'select',
            text: '看图回答问题：How many ice creams?',
            imageKey: 'ice_cream_10',  // 对应上面 images 里的 key
            audioText: 'How many ice creams?',
            options: [
                'Four ice creams', 
                'Five ice creams', 
                'Ten ice creams', 
                'Two ice creams'
            ],
            correct: 'Ten ice creams'
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
            type: 'select',
            text: '听录音，选出正确的单词。',
            audioText: 'The number is three.',
            options: ['one', 'two', 'three', 'four'], 
            correct: 'three'
        },
        {
            qNum: 5,
            part: 'A',
            type: 'select',
            text: '听录音，补全句子：OK, Let\'s ____!',
            audioText: "OK, Let's play!",
            options: ['go', 'look', 'play', 'great'],
            correct: 'play'
        },

        // ================= Part B: Reading (阅读) =================
        {
            qNum: 6,
            part: 'B',
            type: 'drag-sort',
            text: '点击单词，组成句子：(有多少只鸭子？)',
            words: ['ducks', 'many', 'How', '?'], 
            correct: 'How many ducks?'
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
            type: 'select',
            text: '看图，How many ice creams? (有多少个冰淇淋？)',
            imageKey: 'num_04', 
            options: ['three', 'four', 'five', 'six'],
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
            text: '朋友回答正确，你想说“那是对的”，英语怎么说？',
            options: ['That\'s right.', 'That\'s kite.', 'Really?', 'How many?'],
            correct: 'That\'s right.'
        },
        {
            qNum: 12,
            part: 'C',
            type: 'drag-sort',
            text: '数字接龙：请按 1 到 10 的顺序排列单词。',
            words: ['three', 'ten', 'one', 'six', 'nine', 'four', 'two', 'eight', 'five', 'seven'], 
            correct: 'one two three four five six seven eight nine ten'
        },
        {
            qNum: 13,
            part: 'C',
            type: 'select',
            text: '数字 8 (Eight) 用英语怎么说？',
            options: ['six', 'seven', 'eight', 'nine'],
            correct: 'eight'
        },
        
        // ✅ 修改点3：这里顺手把 bad 改成了 fine
        {
            qNum: 14,
            part: 'C',
            type: 'select',
            text: '看图，“太棒了”用英文怎么说？',
            imageKey: 'great',
            options: ['good', 'great', 'nice', 'fine'],
            correct: 'great'
        },
        {
            qNum: 15,
            part: 'C',
            type: 'select',
            text: '看图完成句子：It\'s number _____ .',
            imageKey: 'num_05',
            options: ['four', 'five', 'six', 'fif'],
            correct: 'five'
        }
    ]
});
