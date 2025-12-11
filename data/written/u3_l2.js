/**
 * Unit 3 Lesson 2: What color is it?
 * File: data/written/u3_l2.js
 */
window.LOAD_QUIZ({
    title: "Unit 3 Lesson 2: What color is it?",
    timeLimit: 540, // 9 minutes

    // ⛔️ DO NOT ADD 'images: {}' MAPPING HERE!

    questions: [
        // ===========================
        // Part A: Listening (Target: 25 pts)
        // ===========================
        { 
            qNum: 1, 
            part: 'A', 
            type: 'select', 
            score: 5,
            text: '听录音，选出正确的颜色名称。<br><span style="font-size:14px;color:#666">(Listen and choose the color)</span>', 
            audioText: 'yellow', 
            options: ['A. red', 'B. blue', 'C. yellow', 'D. green'], 
            correct: 'C. yellow' 
        },
        { 
            qNum: 2, 
            part: 'A', 
            type: 'select', 
            score: 5,
            text: '听录音，选出描述正确的图片。<br><span style="font-size:14px;color:#666">(Listen and match the picture)</span>', 
            audioText: 'Wow! It’s green.', 
            // RULE: In 'options', use 'image:filename' (NO extension, NO path)
            options: ['image:u3_l2_blue_and_yellow_make_green', 'image:u3_l2_pink', 'image:u3_l2_orange', 'image:u3_l2_red'], 
            correct: 'image:u3_l2_blue_and_yellow_make_green' 
        },
        { 
            qNum: 3, 
            part: 'A', 
            type: 'select', 
            score: 5,
            text: '听录音，判断句意是否符合中文翻译。<br><span style="font-size:14px;color:#666">(Listen and judge the meaning)</span>', 
            audioText: 'What color is it?', 
            options: ['A. 它是蓝色的吗？', 'B. 你的名字是什么？', 'C. 它是什么颜色？', 'D. 你好吗？'], 
            correct: 'C. 它是什么颜色？' 
        },
        { 
            qNum: 4, 
            part: 'A', 
            type: 'select', 
            score: 5,
            text: '听录音，选出对应的中文意思。<br><span style="font-size:14px;color:#666">(Listen and choose Chinese meaning)</span>', 
            audioText: 'It’s pink.', 
            options: ['A. 它是红色的。', 'B. 它是绿色的。', 'C. 它是粉红色的。', 'D. 它是橙色的。'], 
            correct: 'C. 它是粉红色的。' 
        },
        { 
            qNum: 5, 
            part: 'A', 
            type: 'select', 
            score: 5,
            text: '听录音，为问句选择正确的答句。<br><span style="font-size:14px;color:#666">(Listen and choose the answer)</span>', 
            audioText: 'What color is it?', 
            options: ['A. It’s orange.', 'B. Good morning.', 'C. I’m fine.', 'D. Thank you.'], 
            correct: 'A. It’s orange.' 
        },

        // ===========================
        // Part B: Reading (Target: 25 pts)
        // ===========================
        { 
            qNum: 6, 
            part: 'B', 
            type: 'select', 
            score: 5,
            text: '看图（橙子），选出正确的颜色单词。<br><span style="font-size:14px;color:#666">(Look at the orange fruit and choose)</span>', 
            // RULE: In 'imageUri', use 'filename.png' (WITH extension)
            imageUri: 'u3_l2_orange_fruit.png', 
            options: ['A. green', 'B. blue', 'C. orange', 'D. pink'], 
            correct: 'C. orange' 
        },
        { 
            qNum: 7, 
            part: 'B', 
            type: 'select', 
            score: 5,
            text: '阅读对话，选择正确的回答：What color is it? ___', 
            options: ['A. I’m fine, thank you.', 'B. My name is Li Li.', 'C. It’s red.', 'D. Nice to meet you.'], 
            correct: 'C. It’s red.' 
        },
        { 
            qNum: 8, 
            part: 'B', 
            type: 'select', 
            score: 5,
            text: '看图，选出表达正确的一句。<br><span style="font-size:14px;color:#666">(Look and choose the correct sentence)</span>', 
            imageUri: 'u3_l2_teacher.png', 
            options: ['A. I’m a student.', 'B. I’m a teacher.', 'C. This is a cook.', 'D. This is a farmer.'], 
            correct: 'B. I’m a teacher.' 
        },
        { 
            qNum: 9, 
            part: 'B', 
            type: 'select', 
            score: 5,
            text: '选出单词 "game" 的正确中文意思。<br><span style="font-size:14px;color:#666">(Choose the meaning of "game")</span>', 
            options: ['A. 美术', 'B. 游戏', 'C. 颜色', 'D. 学校'], 
            correct: 'B. 游戏' 
        },
        { 
            qNum: 10, 
            part: 'B', 
            type: 'select', 
            score: 5,
            text: '请根据颜色混合规律回答：Yellow + Red = ?<br><span style="font-size:14px;color:#666">(Color mixing logic)</span>', 
            options: ['A. green', 'B. blue', 'C. orange', 'D. white'], 
            correct: 'C. orange' 
        },

        // ===========================
        // Part C: Writing (Target: 25 pts)
        // ===========================
        { 
            qNum: 11, 
            part: 'C', 
            type: 'drag-sort', 
            score: 5,
            text: '连词成句：请拖拽组成完整句子。<br><span style="font-size:14px;color:#666">(Reorder the words to form a sentence)</span>', 
            words: ['It’s', 'pink', '.'], 
            correct: 'It’s pink .' 
        },
        { 
            qNum: 12, 
            part: 'C', 
            type: 'drag-sort', 
            score: 5,
            text: '连词成句：请拖拽组成完整句子。<br><span style="font-size:14px;color:#666">(Reorder the words to form a sentence)</span>', 
            words: ['What', 'color', 'is', 'it', '?'], 
            correct: 'What color is it ?' 
        },
        { 
            qNum: 13, 
            part: 'C', 
            type: 'select', 
            score: 5,
            text: '选择正确单词补全句子：What color ___ it?<br><span style="font-size:14px;color:#666">(Choose the correct word)</span>', 
            options: ['A. am', 'B. are', 'C. is', 'D. this'], 
            correct: 'C. is' 
        },
        { 
            qNum: 14, 
            part: 'C', 
            type: 'select', 
            score: 5,
            text: '选出单词 **yellow** 的正确中文意思。<br><span style="font-size:14px;color:#666">(Choose the correct Chinese meaning)</span>', 
            options: ['A. 红色', 'B. 绿色', 'C. 蓝色', 'D. 黄色'], 
            correct: 'D. 黄色' 
        },
        { 
            qNum: 15, 
            part: 'C', 
            type: 'select', 
            score: 5,
            text: '下列哪组单词是同一类？<br><span style="font-size:14px;color:#666">(Which group of words belong to the same category?)</span>', 
            options: ['A. blue, apple, cat', 'B. red, black, green', 'C. hi, five, star', 'D. dog, fish, six'], 
            correct: 'B. red, black, green' 
        }
    ]
});
