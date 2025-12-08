/**
 * ✍️ Unit 3 Lesson 1: It's green (笔试)
 * File: data/written/u3_l1.js
 */

window.LOAD_QUIZ({
    title: "Unit 3 Lesson 1: It's green (笔试)",
    timeLimit: 540, // 9分钟

    questions: [
        // ===========================
        // Part A: Listening
        // ===========================
        { 
            qNum: 1, 
            part: 'A', 
            type: 'select', 
            score: 5,
            text: '听录音，选出正确的图片。<br><span style="font-size:14px;color:#666">(Listen and choose the picture)</span>', 
            audioText: 'The light is red.', 
            // ⚠️ 注意：这里沿用你U1的写法，引用图片ID
            options: ['image:GreenLight', 'image:RedLight', 'image:YellowLight', 'image:TrafficLight'], 
            correct: 'image:RedLight' 
        },
        { 
            qNum: 2, 
            part: 'A', 
            type: 'select', 
            score: 5,
            text: '听指令，选出正确的中文意思。<br><span style="font-size:14px;color:#666">(Listen and choose meaning)</span>', 
            audioText: 'Stop! Wang Tao.', 
            options: ['A. 走', 'B. 停', 'C. 看', 'D. 听'], 
            correct: 'B. 停' 
        },
        { 
            qNum: 3, 
            part: 'A', 
            type: 'select', 
            score: 5,
            text: '听录音，选出以该字母开头的单词图片。<br><span style="font-size:14px;color:#666">(Listen and choose letter sound)</span>', 
            audioText: 'R, r, rabbit.', 
            options: ['image:Question', 'image:Rabbit', 'image:Dog', 'image:Cat'], 
            correct: 'image:Rabbit' 
        },
        { 
            qNum: 4, 
            part: 'A', 
            type: 'select', 
            score: 5,
            text: '听录音，选出你听到的单词。<br><span style="font-size:14px;color:#666">(Listen and choose word)</span>', 
            audioText: 'It is green now.', 
            options: ['A. red', 'B. green', 'C. blue', 'D. yellow'], 
            correct: 'B. green' 
        },
        { 
            qNum: 5, 
            part: 'A', 
            type: 'select', 
            score: 5,
            text: '听录音，选出正确的句子。<br><span style="font-size:14px;color:#666">(Listen and choose sentence)</span>', 
            audioText: "Let's go to school.", 
            options: ['A. Let\'s go home.', 'B. Let\'s go to school.', 'C. Let\'s play a game.', 'D. Let\'s stop now.'], 
            correct: 'B. Let\'s go to school.' 
        },

        // ===========================
        // Part B: Reading
        // ===========================
        { 
            qNum: 6, 
            part: 'B', 
            type: 'select', 
            score: 5,
            text: '看图，选出正确的单词。<br><span style="font-size:14px;color:#666">(Look and choose)</span>', 
            // ⚠️ 确保你已定义 images 映射，或者直接写文件名 'img/u3_green_light.png'
            imageUri: 'u3_green_light.png', 
            options: ['A. red', 'B. green', 'C. yellow', 'D. blue'], 
            correct: 'B. green' 
        },
        { 
            qNum: 7, 
            part: 'B', 
            type: 'select', 
            score: 5,
            text: '读句子，选出正确的中文翻译：Let\'s go to school.<br><span style="font-size:14px;color:#666">(Choose translation)</span>', 
            options: ['A. 让我们回家吧。', 'B. 让我们去上学吧。', 'C. 让我们去公园吧。', 'D. 让我们玩游戏吧。'], 
            correct: 'B. 让我们去上学吧。' 
        },
        { 
            qNum: 8, 
            part: 'B', 
            type: 'select', 
            score: 5,
            text: '看图，选出描述正确的句子。<br><span style="font-size:14px;color:#666">(Look and choose sentence)</span>', 
            imageUri: 'u3_red_light.png', 
            options: ['A. It is green.', 'B. The light is red.', 'C. It is a dog.', 'D. Let\'s go.'], 
            correct: 'B. The light is red.' 
        },
        { 
            qNum: 9, 
            part: 'B', 
            type: 'select', 
            score: 5,
            text: '选出不同类的一项。<br><span style="font-size:14px;color:#666">(Find the odd one out)</span>', 
            options: ['A. red', 'B. green', 'C. yellow', 'D. light'], 
            correct: 'D. light' 
        },
        { 
            qNum: 10, 
            part: 'B', 
            type: 'select', 
            score: 5,
            text: '读句子选词填空：Stop! The light is ______.', 
            options: ['A. go', 'B. red', 'C. now', 'D. book'], 
            correct: 'B. red' 
        },

        // ===========================
        // Part C: Writing
        // ===========================
        { 
            qNum: 11, 
            part: 'C', 
            type: 'select', 
            score: 5,
            text: '看图，选出图片对应的单词。<br><span style="font-size:14px;color:#666">(Look and choose word)</span>', 
            imageUri: 'u3_stop_sign.png', 
            options: ['A. go', 'B. stop', 'C. red', 'D. green'], 
            correct: 'B. stop' 
        },
        { 
            qNum: 12, 
            part: 'C', 
            type: 'select', 
            score: 5,
            text: '看图，补全单词：r _ d (红色)', 
            imageUri: 'u3_red_light.png', 
            options: ['A. a', 'B. e', 'C. i', 'D. o'], 
            correct: 'B. e' 
        },
        { 
            qNum: 13, 
            part: 'C', 
            type: 'select', 
            score: 5,
            text: '选出字母 Q 的小写形式。<br><span style="font-size:14px;color:#666">(Choose lowercase)</span>', 
            options: ['A. p', 'B. b', 'C. q', 'D. d'], 
            correct: 'C. q' 
        },
        { 
            qNum: 14, 
            part: 'C', 
            type: 'select', 
            score: 5,
            text: '绿灯亮了，我们该怎么做？选出单词“走”。', 
            options: ['A. go', 'B. no', 'C. to', 'D. so'], 
            correct: 'A. go' 
        },
        { 
            qNum: 15, 
            part: 'C', 
            type: 'drag-sort', 
            score: 5,
            text: '连词成句。<br><span style="font-size:14px;color:#666">(Reorder the sentence)</span>', 
            words: ['The', 'light', 'is', 'red', '.'], 
            correct: 'The light is red.' 
        }
    ]
});
