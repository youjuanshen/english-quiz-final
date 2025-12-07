window.LOAD_QUIZ({
    title: "Unit 1 Lesson 1: Test",
    timeLimit: 540,
    questions: [
        { 
            qNum: 1, 
            type: 'select', 
            text: 'Test Question 1 (Audio)', 
            audioText: 'Hello World', // 这里有文字，引擎就会显示按钮
            options: ['A', 'B', 'C'], 
            correct: 'A' 
        },
        { 
            qNum: 2, 
            type: 'select', 
            text: 'Test Question 2 (Image)', 
            // 确保您有 u1_banana.png
            options: ['image:u1_banana', 'B. Apple'], 
            correct: 'image:u1_banana' 
        }
    ]
});
