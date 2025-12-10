/**
 * Unit 2 Lesson 4: What’s Your Phone Number?
 * File: data/written/u2_l4.js
 */
window.LOAD_QUIZ({
    title: "Unit 2 Lesson 4: What’s Your Phone Number?",
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
            text: '听录音，选出对应的字母卡。<br><span style="font-size:14px;color:#666">(Listen to the letter and choose the card)</span>',
            audioText: 'P',
            options: ['image:u2_l4_letter_o', 'image:u2_l4_letter_p', 'image:u2_l3_letter_n', 'image:u2_l3_letter_m'],
            correct: 'image:u2_l4_letter_p'
        },
        {
            qNum: 2,
            part: 'A',
            type: 'select',
            score: 5,
            text: '听录音，选出对应的数字。<br><span style="font-size:14px;color:#666">(Listen and choose the number)</span>',
            audioText: 'eight',
            options: ['9', '8', '6', '7'],
            correct: '8'
        },
        {
            qNum: 3,
            part: 'A',
            type: 'select',
            score: 5,
            text: '听录音，选出正确的回答。<br><span style="font-size:14px;color:#666">(Listen to the question and choose the correct answer)</span>',
            audioText: 'What’s your phone number?',
            options: ['A. It’s 1-1-0.', 'B. I’m fine, thank you.', 'C. Nice to meet you.'],
            correct: 'A. It’s 1-1-0.' // 考察紧急电话号码识别
        },
        {
            qNum: 4,
            part: 'A',
            type: 'drag-sort',
            score: 5,
            text: '听录音，连词成句。<br><span style="font-size:14px;color:#666">(Listen and reorder the words)</span>',
            audioText: 'It’s eight-one-seven-two-six-nine-five-three.',
            words: ['It’s', '8-1-7-2-6-9-5-3', '.'],
            correct: 'It’s 8-1-7-2-6-9-5-3 .'
        },
        {
            qNum: 5,
            part: 'A',
            type: 'select',
            score: 5,
            text: '听录音，选出正确的图片。<br><span style="font-size:14px;color:#666">(Listen and choose the picture)</span>',
            audioText: 'I have a pet dog.', // 脚本修正
            options: ['image:u2_l4_pet_cat', 'image:u2_l4_pet_dog', 'image:u2_l4_pig', 'image:u2_l4_orange'],
            correct: 'image:u2_l4_pet_dog'
        },

        // ===========================
        // Part B: Reading (Target: 25 pts)
        // ===========================
        {
            qNum: 6,
            part: 'B',
            type: 'select',
            score: 5,
            text: '看图，选出对应的单词。<br><span style="font-size:14px;color:#666">(Look at the picture and choose the word)</span>',
            imageUri: 'u2_l4_orange.png',
            options: ['A. apple', 'B. orange', 'C. pig', 'D. monkey'],
            correct: 'B. orange'
        },
        {
            qNum: 7,
            part: 'B',
            type: 'select',
            score: 5,
            text: '选出英文句子的正确翻译。<br><span style="font-size:14px;color:#666">(Choose the correct Chinese translation)</span><br>This is my pet.', // 题型改为中英文互译
            options: ['A. 这是我的笔。', 'B. 这是我的名字。', 'C. 这是我的宠物。'],
            correct: 'C. 这是我的宠物。'
        },
        {
            qNum: 8,
            part: 'B',
            type: 'select',
            score: 5,
            text: '阅读对话，选出正确的单词完成句子。<br><span style="font-size:14px;color:#666">(Choose the correct word to complete the dialogue)</span><br>A: What’s your phone number? B: **___** 8-1-7-2-6-9-5-3.', // 题干增加对话场景
            options: ['A. It’s', 'B. I’m', 'C. My', 'D. We'],
            correct: 'A. It’s'
        },
        {
            qNum: 9,
            part: 'B',
            type: 'select',
            score: 5,
            text: '选出正确的翻译。<br><span style="font-size:14px;color:#666">(Choose the correct Chinese translation)</span><br>What’s your phone number?',
            options: ['A. 你几岁了？', 'B. 你的电话号码是多少？', 'C. 这是我的猫。'],
            correct: 'B. 你的电话号码是多少？'
        },
        {
            qNum: 10,
            part: 'B',
            type: 'select',
            score: 5,
            text: '选出与 "pig" 同一类别的单词。<br><span style="font-size:14px;color:#666">(Choose the word that belongs to the same category as "pig")</span>',
            options: ['A. cat', 'B. orange', 'C. noodle', 'D. egg'],
            correct: 'A. cat'
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
            words: ['your', 'What’s', 'number', 'phone', '?'],
            correct: 'What’s your phone number ?'
        },
        {
            qNum: 12,
            part: 'C',
            type: 'drag-sort',
            score: 5,
            text: '连词成句。<br><span style="font-size:14px;color:#666">(Reorder the words to form a sentence)</span>',
            words: ['is', 'Fido', 'my', 'pet', '.'],
            correct: 'Fido is my pet .'
        },
        {
            qNum: 13,
            part: 'C',
            type: 'select',
            score: 5,
            text: '根据图片，选出正确的单词。<br><span style="font-size:14px;color:#666">(Look at the picture and choose the correct word)</span>',
            imageUri: 'u2_l4_pig.png',
            options: ['A. ice cream', 'B. pig', 'C. dog', 'D. cat'],
            correct: 'B. pig'
        },
        {
            qNum: 14,
            part: 'C',
            type: 'select',
            score: 5,
            text: '选出字母 O 的大小写正确配对。<br><span style="font-size:14px;color:#666">(Choose the correct match for the letter O)</span>',
            options: ['A. O o', 'B. O p', 'C. O O', 'D. o O'],
            correct: 'A. O o'
        },
        {
            qNum: 15,
            part: 'C',
            type: 'select',
            score: 5,
            text: '选出单词 **pig** 的正确拼写。<br><span style="font-size:14px;color:#666">(Choose the correct spelling of the word "pig")</span>', // 题型修改为拼写选择
            options: ['A. p-g-i', 'B. i-p-g', 'C. p-i-g', 'D. g-i-p'],
            correct: 'C. p-i-g'
        }
    ]
});
