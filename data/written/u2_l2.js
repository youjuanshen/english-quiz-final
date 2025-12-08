window.LOAD_QUIZ({
    title: "Unit 1 Lesson 2: What's your name?",
    timeLimit: 540,
    // CRITICAL: NO images object here! System handles it.

    questions: [
        // ================= Part A: Listening (听力 25分) =================
        // 5道题，每题5分
        {
            qNum: 1,
            part: 'A',
            type: 'select',
            score: 5,
            text: '听录音，选出你听到的单词。',
            audioText: 'My name is Li Li.',
            options: ['name', 'nice', 'nine', 'no'],
            correct: 'name'
        },
        {
            qNum: 2,
            part: 'A',
            type: 'select',
            score: 5,
            text: '听录音，选出正确的图片。<br><span style="color:gray;font-size:0.9em">(Look! It\'s a dog.)</span>',
            audioText: 'Look! It\'s a dog.',
            // 选项严格对应截图文件名 (不带后缀)
            options: ['image:u1_cat', 'image:u1_dog', 'image:u1_miss_gao', 'image:u1_boy'],
            correct: 'image:u1_dog'
        },
        {
            qNum: 3,
            part: 'A',
            type: 'select',
            score: 5,
            text: '听录音，选出最合适的回答。',
            audioText: 'What\'s your name, please?',
            options: ['Hello.', 'My name is Li Li.', 'Nice to meet you.', 'Goodbye.'],
            correct: 'My name is Li Li.'
        },
        {
            qNum: 4,
            part: 'A',
            type: 'select',
            score: 5,
            text: '听录音，选出最合适的回答。',
            audioText: 'Nice to meet you.',
            options: ['Nice to meet you, too.', 'I\'m fine.', 'Thank you.', 'Hi!'],
            correct: 'Nice to meet you, too.'
        },
        // ✅ Q5 已修改：改考 Lesson 1 核心词汇 "boy"，绝对不超纲
        {
            qNum: 5,
            part: 'A',
            type: 'select',
            score: 5,
            text: '听录音，判断图片是否正确 (T/F)。',
            // 图片是小男孩
            imageUri: 'u1_boy.png', 
            // 录音：这是一个男孩。
            audioText: 'This is a boy.',
            options: ['T', 'F'],
            correct: 'T'
        },

        // ================= Part B: Reading (阅读 25分) =================
        // 5道题，每题5分
        {
            qNum: 6,
            part: 'B',
            type: 'select',
            score: 5,
            text: '看图，选择单词的首字母。',
            imageUri: 'u1_cat.png',
            options: ['C', 'D', 'A', 'B'],
            correct: 'C'
        },
        {
            qNum: 7,
            part: 'B',
            type: 'select',
            score: 5,
            text: '读句子，选出对应的中文意思：<br><b>My name is Yang Ming.</b>',
            options: ['这是我的朋友杨明。', '我的名字是杨明。', '杨明，你好。', '见到你很高兴。'],
            correct: '我的名字是杨明。'
        },
        {
            qNum: 8,
            part: 'B',
            type: 'select',
            score: 5,
            text: '看图，Miss Gao 是老师，初次见面应该怎么问候她？',
            imageUri: 'u1_miss_gao.png',
            options: ['Goodbye, Miss Gao.', 'What\'s your name?', 'Nice to meet you.', 'I am fine.'],
            correct: 'Nice to meet you.'
        },
        {
            qNum: 9,
            part: 'B',
            type: 'select',
            score: 5,
            text: '读一读，选出不同类的一项 (Odd one out)。',
            // cat/dog 是动物，apple 是水果
            options: ['cat', 'dog', 'apple', 'name'], 
            correct: 'name' 
        },
        {
            qNum: 10,
            part: 'B',
            type: 'select',
            score: 5,
            text: '看图补全对话：<br>Miss Gao: Hello!<br>Wang Tao: _______, Miss Gao.',
            imageUri: 'u1_miss_gao.png',
            options: ['Hi', 'What', 'Name', 'My'],
            correct: 'Hi'
        },

        // ================= Part C: Writing (写作 25分) =================
        // 5道题，每题5分
        {
            qNum: 11,
            part: 'C',
            type: 'drag-sort',
            score: 5,
            text: '点击单词，连词成句：<br><span style="color:gray">(请问你叫什么名字？)</span>',
            words: ['name', 'What\'s', 'your', 'please', '?'],
            correct: 'What\'s your name please ?'
        },
        {
            qNum: 12,
            part: 'C',
            type: 'drag-sort',
            score: 5,
            text: '点击单词，连词成句：<br><span style="color:gray">(我的名字是莎莉。)</span>',
            words: ['name', 'is', 'My', 'Sally', '.'],
            correct: 'My name is Sally .'
        },
        {
            qNum: 13,
            part: 'C',
            type: 'drag-sort',
            score: 5,
            text: '点击单词，连词成句：<br><span style="color:gray">(见到你很高兴。)</span>',
            words: ['Nice', 'meet', 'to', 'you', '.'],
            correct: 'Nice to meet you .'
        },
        {
            qNum: 14,
            part: 'C',
            type: 'drag-sort',
            score: 5,
            text: '字母排序：请按字母表顺序排列。',
            words: ['D', 'A', 'C', 'B'],
            correct: 'A B C D'
        },
        {
            qNum: 15,
            part: 'C',
            type: 'select',
            score: 5,
            text: '看图补全单词：<b>__og</b> (狗)',
            imageUri: 'u1_dog.png',
            options: ['d', 'b', 'p', 'c'],
            correct: 'd'
        }
    ]
});
