/**
 * Unit 1 Lesson 4: Have a good day!
 * File: data/written/u1_l4.js
 */
window.LOAD_QUIZ({
    title: "Unit 1 Lesson 4: Have a good day!",
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
            text: '听录音，选出与内容描述相符的图片（介绍家人）。<br><span style="font-size:14px;color:#666">(Listen and choose the picture)</span>',
            audioText: 'This is Sally’s mother.',
            // 使用 u1_mother, u1_miss_gao, u1_girl 这三个图片资源
            options: ['image:u1_sally_s_mother', 'image:u1_miss gao', 'image:u1_girl'],
            correct: 'image:u1_sally_s_mother'
        },
        {
            qNum: 2,
            part: 'A',
            type: 'select',
            score: 5,
            text: '听录音，选出对应的问候语。<br><span style="font-size:14px;color:#666">(Listen and choose the greeting)</span>',
            audioText: 'Have a good day!',
            options: ['A. Nice to meet you.', 'B. Thank you.', 'C. Have a good day!', 'D. Hello!'],
            correct: 'C. Have a good day!'
        },
        {
            qNum: 3,
            part: 'A',
            type: 'drag-sort',
            score: 5,
            text: '听录音，将句子重新排序。<br><span style="font-size:14px;color:#666">(Listen and reorder the sentence)</span>',
            audioText: 'Goodbye, Li Li.',
            words: ['Li Li', 'Goodbye', ',', '.'],
            correct: 'Goodbye , Li Li .'
        },
        {
            qNum: 4,
            part: 'A',
            type: 'select',
            score: 5,
            text: '听录音，选出正确的单词。<br><span style="font-size:14px;color:#666">(Listen and choose the word)</span>',
            audioText: 'G G, girl.',
            options: ['A. hen', 'B. girl', 'C. cake', 'D. father'],
            correct: 'B. girl'
        },
        {
            qNum: 5,
            part: 'A',
            type: 'select',
            score: 5,
            text: '听录音，选出你听到的字母大写形式。<br><span style="font-size:14px;color:#666">(Listen and choose the capital letter)</span>',
            audioText: 'H H',
            options: ['A. Hh', 'B. Ii', 'Cc. Gg', 'D. Kk'],
            correct: 'A. Hh'
        },
        
        // ===========================
        // Part B: Reading (Target: 25 pts)
        // ===========================
        {
            qNum: 6,
            part: 'B',
            type: 'select',
            score: 5,
            text: '请选出“介绍他人”的正确句型。<br><span style="font-size:14px;color:#666">(Choose the correct sentence for introduction)</span>',
            imageUri: 'image:u1_sally_s_mother',
            options: ['A. I’m my mom.', 'B. Who is she?', 'C. This is my mom.', 'D. How are you?'],
            correct: 'C. This is my mom.'
        },
        {
            qNum: 7,
            part: 'B',
            type: 'select',
            score: 5,
            text: '选择正确的应答语：Nice to meet you.',
            options: [
                'A. Hello!',
                'B. Nice to meet you, too.',
                'C. Good morning.'
            ],
            correct: 'B. Nice to meet you, too.'
        },
   {
    qNum: 8,
    part: 'B',
    // 关键修改：使用兼容性最好的 select 类型
    type: 'select', 
    score: 5,
    text: '看图，判断句子是否正确：This is a hen.<br><span style="font-size:14px;color:#666">(Look at the picture and judge if the sentence is correct)</span>',
    // 确保图片路径是正确的，且带有扩展名 .png (根据您的截图，图片是一只母鸡)
    imageUri: 'u1_hen.png', 
    
    // 选项明确设为“正确”和“错误”
    options: ['A. 正确', 'B. 错误'], 
    
    // 正确答案：图为母鸡 (hen)，句子为 This is a hen. 故正确。
    correct: 'A. 正确' 
},
        {
            qNum: 9,
            part: 'B',
            type: 'select',
            score: 5,
            text: '当朋友向你介绍他的姐妹时，你应该说：<br><span style="font-size:14px;color:#666">(What do you say when a friend introduces his sister?)</span>',
            options: ['A. Thank you.', 'B. Have a good day!', 'C. Nice to meet you.', 'D. I’m fine.'],
            correct: 'C. Nice to meet you.'
        },
        {
            qNum: 10,
            part: 'B',
            type: 'select',
            score: 5,
            text: '请选出与“母鸡”意思相同的单词。<br><span style="font-size:14px;color:#666">(Choose the correct word for "母鸡")</span>',
            options: ['A. father', 'B. hen', 'C. girl', 'D. dog'],
            correct: 'B. hen'
        },

        // ===========================
        // Part C: Writing (Target: 25 pts)
        // ===========================
        {
            qNum: 11,
            part: 'C',
            type: 'drag-sort',
            score: 5,
            text: '连词成句。<br><span style="font-size:14px;color:#666">(Reorder the words to form a sentence)</span>',
            words: ['a', 'good', 'Have', 'day', '!'],
            correct: 'Have a good day !'
        },
        {
            qNum: 12,
            part: 'C',
            type: 'drag-sort',
            score: 5,
            text: '连词成句（注意介绍家人句型）。<br><span style="font-size:14px;color:#666">(Reorder the words to form a sentence)</span>',
            words: ['mother', 'my', 'This', 'is', '.'],
            correct: 'This is my mother .'
        },
        {
            qNum: 13,
            part: 'C',
            type: 'select',
            score: 5,
            text: '请选出字母 **H** 的正确小写形式。<br><span style="font-size:14px;color:#666">(Choose the correct lowercase letter of H)</span>',
            options: ['A. h', 'B. g', 'C. b', 'D. n'],
            correct: 'A. h'
        },
        {
            qNum: 14,
            part: 'C',
            type: 'drag-sort',
            score: 5,
            text: '看图，拖动字母组成正确的英文单词（女孩）。<br><span style="font-size:14px;color:#666">(Look at the picture and drag the letters to spell the word)</span>',
            imageUri: 'u1_girl.png',
            words: ['r', 'i', 'g', 'l'],
            correct: 'g i r l'
        },
        {
            qNum: 15,
            part: 'C',
            type: 'select',
            score: 5,
            text: '选择正确的单词，完成道别语：**Good __ !**<br><span style="font-size:14px;color:#666">(Choose the correct word to complete the goodbye phrase)</span>',
            options: ['A. day', 'B. bye', 'C. fine', 'D. too'],
            correct: 'B. bye'
        }
    ]
});
