/**
 * Unit 2 Lesson 1: Fun Numbers - Let's play!
 * File: data/written/u2_l1.js
 * Revision: Final v3.1 (Approved Version)
 */
window.LOAD_QUIZ({
    title: "Unit 2 Lesson 1: Fun Numbers",
    timeLimit: 540, // 9 minutes

    questions: [
        // ===========================
        // Part A: Listening (Target: 25 pts)
        // ===========================
        {
            qNum: 1,
            part: 'A',
            type: 'select',
            score: 5,
            text: '听录音，选出你听到的数字。<br><span style="font-size:14px;color:#666">(Listen and choose the number)</span>',
            audioText: 'Four.',
            // 选项图片规则：image:文件名 (无后缀)
            options: ['image:u2_number_3', 'image:u2_number_4', 'image:u2_number_5', 'image:u2_number_6'],
            correct: 'image:u2_number_4'
        },
        {
            qNum: 2,
            part: 'A',
            type: 'select',
            score: 5,
            text: '听录音，选出对应的字母。<br><span style="font-size:14px;color:#666">(Listen and choose the letter)</span>',
            audioText: 'J j',
            options: ['A a', 'I i', 'J j', 'K k'],
            correct: 'J j'
        },
        {
            qNum: 3,
            part: 'A',
            type: 'select',
            score: 5,
            text: '听录音，判断句子意思：<br>“Great!”<br><span style="font-size:14px;color:#666">(Listen and choose the meaning)</span>',
            audioText: 'Great!',
            options: ['A. 我很好', 'B. 太棒了', 'C. 让我玩', 'D. 再见'],
            correct: 'B. 太棒了'
        },
        {
            qNum: 4,
            part: 'A',
            type: 'select',
            score: 5,
            text: '听录音，选出对应的食物图片。<br><span style="font-size:14px;color:#666">(Listen and choose the food)</span>',
            audioText: 'Ice cream',
            // 修正：已移除 imageUri，改为纯听力题
            options: ['image:u2_apple', 'image:u2_banana', 'image:u2_ice_cream', 'image:u2_jacket'],
            correct: 'image:u2_ice_cream'
        },
        {
            qNum: 5,
            part: 'A',
            type: 'select',
            score: 5,
            text: '听录音，选出正确的活动图片。<br><span style="font-size:14px;color:#666">(Listen and choose the picture)</span>',
            audioText: 'Let’s play!',
            options: ['image:u2_lets_play', 'image:u2_read', 'image:u2_sleep', 'image:u2_eat'],
            correct: 'image:u2_lets_play'
        },

        // ===========================
        // Part B: Reading (Target: 25 pts)
        // ===========================
        {
            qNum: 6,
            part: 'B',
            type: 'select',
            score: 5,
            text: '看图，选出正确对应的英文单词。<br><span style="font-size:14px;color:#666">(Look and choose the word)</span>',
            // 主图规则：必须带扩展名 (.png)
            imageUri: 'u2_park.png',
            options: ['A. school', 'B. park', 'C. home', 'D. zoo'],
            correct: 'B. park'
        },
        {
            qNum: 7,
            part: 'B',
            type: 'drag-match',
            score: 5,
            text: '将数字和对应的英文单词匹配。<br><span style="font-size:14px;color:#666">(Match the number to the word)</span>',
            pairs: [
                { left: '4', right: 'four' },
                { left: '6', right: 'six' },
                { left: '9', right: 'nine' }
            ],
            correct: { '4': 'four', '6': 'six', '9': 'nine' }
        },
        {
            qNum: 8,
            part: 'B',
            type: 'select',
            score: 5,
            text: '按顺序数数：One, two, three... 后面是？<br><span style="font-size:14px;color:#666">(What comes next?)</span>',
            options: ['A. five', 'B. four', 'C. ten', 'D. one'],
            correct: 'B. four'
        },
        {
            qNum: 9,
            part: 'B',
            type: 'select',
            score: 5,
            text: '图中的物品是？<br><span style="font-size:14px;color:#666">(What is in the picture?)</span>',
            imageUri: 'u2_jacket.png',
            options: ['A. ice cream', 'B. jacket', 'C. apple', 'D. banana'],
            correct: 'B. jacket'
        },
        {
            qNum: 10,
            part: 'B',
            type: 'select',
            score: 5,
            text: '当朋友对你说 “Let’s play!” 时，你可以回答：<br><span style="font-size:14px;color:#666">(Choose the correct response)</span>',
            options: ['A. Goodbye.', 'B. OK.', 'C. I’m fine.', 'D. Thank you.'],
            correct: 'B. OK.'
        },

        // ===========================
        // Part C: Writing (Target: 25 pts)
        // ===========================
        {
            qNum: 11,
            part: 'C',
            type: 'drag-sort',
            score: 5,
            text: '连词成句，提出建议。<br><span style="font-size:14px;color:#666">(Reorder the words)</span>',
            // 注意：使用智能引号 ’ 避免语法错误
            words: ['go', 'Let’s', '.'],
            correct: 'Let’s go .'
        },
        {
            qNum: 12,
            part: 'C',
            type: 'select',
            score: 5,
            text: '请选出字母 I i 的正确示例词。<br><span style="font-size:14px;color:#666">(Choose the correct word for I i)</span>',
            options: ['A. jacket', 'B. dog', 'C. ice cream', 'D. apple'],
            correct: 'C. ice cream'
        },
        {
            qNum: 13,
            part: 'C',
            type: 'drag-sort',
            score: 5,
            // 修正：改为拖拽排序题，考察单词 'three' 的拼写
            text: '将字母拖拽排序，拼写数字 "3"。<br><span style="font-size:14px;color:#666">(Drag and sort to spell: three)</span>',
            words: ['e', 't', 'r', 'e', 'h'], 
            correct: 't h r e e'
        },
        {
            qNum: 14,
            part: 'C',
            type: 'drag-sort',
            score: 5,
            text: '连词成句：让我们一起玩吧！<br><span style="font-size:14px;color:#666">(Reorder: Let’s play.)</span>',
            words: ['play', 'Let’s', '.'],
            correct: 'Let’s play .'
        },
        {
            qNum: 15,
            part: 'C',
            type: 'drag-sort',
            score: 5,
            text: '将数字单词按从小到大的顺序排列。<br><span style="font-size:14px;color:#666">(Order the numbers: 1, 2, 3)</span>',
            words: ['two', 'one', 'three'],
            correct: 'one two three'
        }
    ]
});
