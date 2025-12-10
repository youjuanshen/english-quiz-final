/**
 * Unit 2 Lesson 3: How old are you?
 * File: data/written/u2_l3.js
 * Based on Minjiao Grade 3 Autumn 2024
 */
window.LOAD_QUIZ({
    title: "Unit 2 Lesson 3: How old are you?",
    timeLimit: 540, // 9 minutes

    // ⛔️ DO NOT ADD 'images: {}' MAPPING HERE!

    questions: [
        // ===========================
        // Part A: Listening (Target: 25 pts)
        // ===========================
        { qNum: 1, part: 'A', type: 'select', score: 5, text: '听录音，选出正确的单词图片。<br><span style="font-size:14px;color:#666">(Listen and choose the word)</span>', audioText: 'Monkey. It is a monkey.', options: ['image:u2_monkey', 'image:u2_noodle', 'image:u2_dog', 'image:u2_cat'], correct: 'image:u2_monkey' },
        { qNum: 2, part: 'A', type: 'select', score: 5, text: '听录音，选出提到的食物。<br><span style="font-size:14px;color:#666">(Listen and choose the food)</span>', audioText: 'Noodles. I like noodles.', options: ['image:u2_cake', 'image:u2_noodle', 'image:u2_apple', 'image:u2_banana'], correct: 'image:u2_noodle' },
        { qNum: 3, part: 'A', type: 'select', score: 5, text: '听录音，选出正确的数字。<br><span style="font-size:14px;color:#666">(Listen and choose the number)</span>', audioText: 'I’m five years old.', options: ['image:u2_num_4', 'image:u2_num_5', 'image:u2_num_6', 'image:u2_num_10'], correct: 'image:u2_num_5' },
        { qNum: 4, part: 'A', type: 'select', score: 5, text: '听录音，选出正确的中文意思。<br><span style="font-size:14px;color:#666">(Listen and choose the meaning)</span>', audioText: 'How old are you?', options: ['A. 你好吗？', 'B. 你几岁了？', 'C. 你叫什么名字？', 'D. 这是什么？'], correct: 'B. 你几岁了？' },
        { qNum: 5, part: 'A', type: 'select', score: 5, text: '听录音，选出正确的回答。<br><span style="font-size:14px;color:#666">(Listen and choose the answer)</span>', audioText: 'How old are you?', options: ['A. I’m fine.', 'B. I’m five.', 'C. Thank you.', 'D. Goodbye.'], correct: 'B. I’m five.' },
        
        // ===========================
        // Part B: Reading (Target: 25 pts)
        // ===========================
        { qNum: 6, part: 'B', type: 'select', score: 5, text: '看图，选出正确的单词。<br><span style="font-size:14px;color:#666">(Look and choose)</span>', imageUri: 'u2_noodle.png', options: ['A. monkey', 'B. noodle', 'C. cake', 'D. fish'], correct: 'B. noodle' },
        { qNum: 7, part: 'B', type: 'select', score: 5, text: '读句子，选出正确的中文意思。<br><span style="font-size:14px;color:#666">(Read and choose Chinese)</span><br><b>“I’m five years old.”</b>', options: ['A. 我五岁了。', 'B. 我很好。', 'C. 我九岁了。', 'D. 我喜欢五。'], correct: 'A. 我五岁了。' },
        { qNum: 8, part: 'B', type: 'select', score: 5, text: '选词填空，完成句子。<br><span style="font-size:14px;color:#666">(Fill in the blank)</span><br>— How ______ are you?<br>— I’m five.', imageUri: 'u2_question_mark.png', options: ['A. are', 'B. old', 'C. is', 'D. am'], correct: 'B. old' },
        { qNum: 9, part: 'B', type: 'select', score: 5, text: '选词填空，完成句子。<br><span style="font-size:14px;color:#666">(Fill in the blank)</span><br>I’m five _______ old.', options: ['A. years', 'B. year', 'C. yes', 'D. you'], correct: 'A. years' },
        { qNum: 10, part: 'B', type: 'select', score: 5, text: '看图，选出不同类的一项。<br><span style="font-size:14px;color:#666">(Find the odd one out)</span>', options: ['A. five', 'B. six', 'C. monkey', 'D. ten'], correct: 'C. monkey' },
        
        // ===========================
        // Part C: Writing (Target: 25 pts)
        // ===========================
        { qNum: 11, part: 'C', type: 'drag-sort', score: 5, text: '连词成句 (询问年龄)。<br><span style="font-size:14px;color:#666">(Reorder the sentence)</span>', words: ['old', '?', 'How', 'are', 'you'], correct: 'How old are you ?' },
        { qNum: 12, part: 'C', type: 'drag-sort', score: 5, text: '连词成句 (回答年龄)。<br><span style="font-size:14px;color:#666">(Reorder the sentence)</span>', words: ['years', 'old', 'I’m', '.', 'five'], correct: 'I’m five years old .' },
        { qNum: 13, part: 'C', type: 'drag-sort', score: 5, text: '连词成句 (提出建议)。<br><span style="font-size:14px;color:#666">(Reorder the sentence)</span>', words: ['play', 'Let’s', 'go', 'and', '.'], correct: 'Let’s go and play .' },
        { qNum: 14, part: 'C', type: 'drag-sort', score: 5, text: '连词成句 (征求意见)。<br><span style="font-size:14px;color:#666">(Reorder the sentence)</span>', words: ['about', 'this', 'How', '?'], correct: 'How about this ?' },
        { qNum: 15, part: 'C', type: 'drag-sort', score: 5, text: '排列字母组成单词 (noodle)。<br><span style="font-size:14px;color:#666">(Reorder letters)</span>', words: ['o', 'n', 'd', 'l', 'e', 'o'], correct: 'n o o d l e' }
    ]
});
