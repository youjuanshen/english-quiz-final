/**
 * Unit 2 Lesson 1: Fun Numbers - Let's play!
 * File: data/written/u2_l1.js
 */
window.LOAD_QUIZ({
    title: "Unit 2 Lesson 1: Fun Numbers",
    timeLimit: 540, // 9 minutes

    questions: [
        // ===========================
        // Part A: Listening (Target: 25 pts) - 听音选图/选义/选词
        // ===========================
        {
            qNum: 1,
            part: 'A',
            type: 'select',
            score: 5,
            text: '听录音，选出正确的数字图片。<br><span style="font-size:14px;color:#666">(Listen and choose the number)</span>',
            audioText: 'One, two, three, four.',
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
            options: ['A. 我很好', 'B. 太棒了', 'C. 让我玩', 'D. 你叫什么名字'],
            correct: 'B. 太棒了'
        },
        {
            qNum: 4,
            part: 'A',
            type: 'select',
            score: 5,
            text: '听录音，选出对应的食物图片。<br><span style="font-size:14px;color:#666">(Listen and choose the food)</span>',
            audioText: 'Ice cream',
            imageUri: 'u2_ice_cream.png',
            options: ['A. apple', 'B. banana', 'C. ice cream', 'D. jacket'],
            correct: 'C. ice cream'
        },
        {
            qNum: 5,
            part: 'A',
            type: 'select',
            score: 5,
            text: '听录音，选出正确的短语图片。<br><span style="font-size:14px;color:#666">(Listen and choose the phrase)</span>',
            audioText: 'Let’s run!',
            options: ['image:u2_lets_run', 'image:u2_lets_read', 'image:u2_lets_sleep', 'image:u2_lets_jump'],
            correct: 'image:u2_lets_run'
        },

        // ===========================
        // Part B: Reading (Target: 25 pts) - 看图选词/匹配
        // ===========================
        {
            qNum: 6,
            part: 'B',
            type: 'select',
            score: 5,
            text: '看图，选出正确对应的英文单词。<br><span style="font-size:14px;color:#666">(Look and choose the word)</span>',
            imageUri: 'u2_park.png',
            options: ['A. school', 'B. park', 'C. home', 'D. classroom'],
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
            text: '哪个数字是辅音音素开头，前面要用 "a"？<br><span style="font-size:14px;color:#666">(Which word uses "a"?)</span>',
            options: ['A. eight', 'B. five', 'C. one', 'D. ten'],
            correct: 'B. five' // a five (虽然数字不是常规名词，但在教材体系内考察发音规则)
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
            type: 'drag-match',
            score: 5,
            text: '将对话提议与其回应匹配。<br><span style="font-size:14px;color:#666">(Match the suggestion and response)</span>',
            pairs: [
                { left: 'Let’s play!', right: 'OK.' },
                { left: 'One, two, three...', right: 'Great!' },
                { left: 'Hello!', right: 'Hi!' }
            ],
            correct: { 'Let’s play!': 'OK.', 'One, two, three...': 'Great!', 'Hello!': 'Hi!' }
        },

        // ===========================
        // Part C: Writing (Target: 25 pts) - 连词成句/字母排序
        // ===========================
        {
            qNum: 11,
            part: 'C',
            type: 'drag-sort',
            score: 5,
            text: '连词成句，组成正确的建议句。<br><span style="font-size:14px;color:#666">(Reorder the words)</span>',
            words: ['play', 'Let’s', '.'],
            correct: 'Let’s play .'
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
            text: '将打乱的单词重组成数字 "seven"。<br><span style="font-size:14px;color:#666">(Spell the word: seven)</span>',
            words: ['n', 'e', 'e', 's', 'v'],
            correct: 's e v e n'
        },
        {
            qNum: 14,
            part: 'C',
            type: 'select',
            score: 5,
            text: '哪个句子结构是正确的？<br><span style="font-size:14px;color:#666">(Which sentence is correct?)</span>',
            options: ['A. Let us run.', 'B. Let is run.', 'C. Let I run.', 'D. Let’s us run.'],
            correct: 'A. Let us run.' // 考察Let’s的完整形式
        },
        {
            qNum: 15,
            part: 'C',
            type: 'drag-sort',
            score: 5,
            text: '连词成句，组成正确的数字描述句。<br><span style="font-size:14px;color:#666">(Reorder the words)</span>',
            words: ['to', 'nine', 'ten', 'from', '.'],
            correct: 'from nine to ten .'
        }
    ]
});
