window.LOAD_QUIZ({
    title: "Unit 3 Lesson 1: It's green (笔试)",
    mode: "written",
    timeLimit: 540, // 9分钟

    // ✅ 图片资源
    images: {
        'RedLight': 'img/u3_red_light.png',
        'GreenLight': 'img/u3_green_light.png',
        'StopSign': 'img/u3_stop_sign.png',
        'Rabbit': 'img/u3_rabbit.png',
        'Question': 'img/u3_question.png',
        'YellowLight': 'img/u3_yellow_light.png',
        'TrafficLight': 'img/u3_traffic_lights.png',
        'Dog': 'img/u3_dog.png',
        'Cat': 'img/u3_cat.png'
    },

    // ✅ 题目数据 (总分75分 = 25 + 25 + 25)
    questions: [
        // ================= Part A: Listening (听力 25分) =================
        { 
            qNum: 1, 
            part: 'A', 
            type: 'select', 
            score: 5, 
            text: '听录音，选出正确的图片。', 
            audioText: 'The light is red.', 
            options: ['image:GreenLight', 'image:RedLight', 'image:YellowLight', 'image:TrafficLight'], 
            correct: 'image:RedLight' 
        },
        { 
            qNum: 2, 
            part: 'A', 
            type: 'select', 
            score: 5, 
            text: '听指令，选出正确的中文意思。', 
            audioText: 'Stop! Wang Tao.', 
            options: ['走', '停', '看', '听'], 
            correct: '停' 
        },
        { 
            qNum: 3, 
            part: 'A', 
            type: 'select', 
            score: 5, 
            text: '听录音，选出以该字母开头的单词图片。', 
            audioText: 'R, r, rabbit.', 
            options: ['image:Question', 'image:Rabbit', 'image:Dog', 'image:Cat'], 
            correct: 'image:Rabbit' 
        },
        { 
            qNum: 4, 
            part: 'A', 
            type: 'select', 
            score: 5, 
            text: '听录音，选出你听到的单词。', 
            audioText: 'It is green now.', 
            options: ['red', 'green', 'blue', 'yellow'], 
            correct: 'green' 
        },
        { 
            qNum: 5, 
            part: 'A', 
            type: 'select', 
            score: 5, 
            text: '听录音，选出正确的句子。', 
            audioText: "Let's go to school.", 
            options: ['Let\'s go home.', 'Let\'s go to school.', 'Let\'s play a game.', 'Let\'s stop now.'], 
            correct: 'Let\'s go to school.' 
        },

        // ================= Part B: Reading (阅读 25分) =================
        { 
            qNum: 6, 
            part: 'B', 
            type: 'select', 
            score: 5, 
            text: '看图，选出正确的单词。', 
            imageKey: 'GreenLight', 
            options: ['red', 'green', 'yellow', 'blue'], 
            correct: 'green' 
        },
        { 
            qNum: 7, 
            part: 'B', 
            type: 'select', 
            score: 5, 
            text: '读句子，选出正确的中文翻译：Let\'s go to school.', 
            options: ['让我们回家吧。', '让我们去上学吧。', '让我们去公园吧。', '让我们玩游戏吧。'], 
            correct: '让我们去上学吧。' 
        },
        { 
            qNum: 8, 
            part: 'B', 
            type: 'select', 
            score: 5, 
            text: '看图，选出描述正确的句子。', 
            imageKey: 'RedLight', 
            // ✅ 已修改：干扰项 "It is a dog." 简单易懂
            options: ['It is green.', 'The light is red.', 'It is a dog.', 'Let\'s go.'], 
            correct: 'The light is red.' 
        },
        { 
            qNum: 9, 
            part: 'B', 
            type: 'select', 
            score: 5, 
            text: '选出不同类的一项 (Find the odd one out)。', 
            options: ['red', 'green', 'yellow', 'light'], 
            correct: 'light' 
        },
        { 
            qNum: 10, 
            part: 'B', 
            type: 'select', 
            score: 5, 
            text: '读句子选词填空：Stop! The light is ______.', 
            options: ['go', 'red', 'now', 'book'], 
            correct: 'red' 
        },

        // ================= Part C: Writing (写作 25分) =================
        { 
            qNum: 11, 
            part: 'C', 
            type: 'select', 
            score: 5, 
            text: '看图，选出图片对应的单词 (Stop Sign)。', 
            imageKey: 'StopSign', 
            // ✅ 已修改：选项全部为简单的常用词
            options: ['go', 'stop', 'red', 'green'], 
            correct: 'stop' 
        },
        { 
            qNum: 12, 
            part: 'C', 
            type: 'select', 
            score: 5, 
            text: '看图，补全单词空缺的字母：r _ d (红色)', 
            imageKey: 'RedLight', 
            options: ['a', 'e', 'i', 'o'], 
            correct: 'e' 
        },
        { 
            qNum: 13, 
            part: 'C', 
            type: 'select', 
            score: 5, 
            text: '选出字母 Q 的小写形式。', 
            options: ['p', 'b', 'q', 'd'], 
            correct: 'q' 
        },
        { 
            qNum: 14, 
            part: 'C', 
            type: 'select', 
            score: 5, 
            text: '绿灯亮了，我们该怎么做？选出单词“走”。', 
            options: ['go', 'no', 'to', 'so'], 
            correct: 'go' 
        },
        { 
            qNum: 15, 
            part: 'C', 
            type: 'drag-sort', 
            score: 5, 
            text: '拖动单词，连词成句。', 
            words: ['The', 'light', 'is', 'red', '.'], 
            correct: 'The light is red.' 
        }
    ]
});
