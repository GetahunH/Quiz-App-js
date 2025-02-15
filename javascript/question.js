const questions = [
  {
    category: "Programming",
    questions: [
      { question: "What does HTML stand for?", options: ["Hyper Text Pre Processor", "Hyper Text Markup Language", "Hyper Text Multiple Language", "Hyper Tool Multi Language"], correctAnswer: 1 },
      { question: "Which keyword is used to declare a variable in JavaScript?", options: ["var", "variable", "int", "let 10 = x"], correctAnswer: 0 },
      { question: "What does CSS stand for?", options: ["Cascading Style Sheet", "Creative Style System", "Computer Style Sheet", "Colorful Style Sheet"], correctAnswer: 0 },
      { question: "Which symbol is used for comments in JavaScript?", options: ["//", "/* */", "<!-- -->", "##"], correctAnswer: 0 },
      { question: "Which function is used to print to the console in JavaScript?", options: ["console.log()", "print()", "log.console()", "write()"], correctAnswer: 0 },
      { question: "Which operator is used for strict equality in JavaScript?", options: ["==", "===", "!=", "=~"], correctAnswer: 1 },
      { question: "What is the default behavior of flexbox in CSS?", options: ["Row", "Column", "Inline", "Block"], correctAnswer: 0 },
      { question: "Which language is used for backend development?", options: ["HTML", "CSS", "JavaScript", "PHP"], correctAnswer: 3 },
      { question: "Which method adds an element to an array in JavaScript?", options: ["push()", "add()", "insert()", "append()"], correctAnswer: 0 },
      { question: "What is the purpose of Git?", options: ["Version Control", "Database Management", "Operating System", "Cloud Storage"], correctAnswer: 0 },
      // Add 15 more questions...
    ]
  },
  {
    category: "Mathematics",
    questions: [
      { question: "What is 5 + 3?", options: ["7", "8", "9", "10"], correctAnswer: 1 },
      { question: "What is the square root of 16?", options: ["2", "3", "4", "5"], correctAnswer: 2 },
      { question: "What is 10 / 2?", options: ["2", "5", "8", "10"], correctAnswer: 1 },
      { question: "Solve: 3 x 4", options: ["6", "8", "12", "15"], correctAnswer: 2 },
      { question: "What is 7 squared?", options: ["14", "21", "49", "64"], correctAnswer: 2 },
      { question: "What is 15% of 200?", options: ["20", "25", "30", "35"], correctAnswer: 2 },
      { question: "Which number is a prime?", options: ["4", "6", "7", "9"], correctAnswer: 2 },
      { question: "What is the value of π (pi) rounded to two decimal places?", options: ["3.12", "3.14", "3.16", "3.18"], correctAnswer: 1 },
      { question: "What is 9 + 6?", options: ["12", "14", "15", "16"], correctAnswer: 2 },
      { question: "What is 25 / 5?", options: ["2", "4", "5", "6"], correctAnswer: 2 },
      // Add 15 more questions...
    ]
  },
  {
    category: "Science",
    questions: [
      { question: "What planet is known as the Red Planet?", options: ["Earth", "Venus", "Mars", "Jupiter"], correctAnswer: 2 },
      { question: "What is H2O?", options: ["Hydrogen", "Oxygen", "Water", "Acid"], correctAnswer: 2 },
      { question: "Which gas do humans breathe in?", options: ["Oxygen", "Carbon Dioxide", "Helium", "Nitrogen"], correctAnswer: 0 },
      { question: "What force pulls objects toward Earth?", options: ["Magnetism", "Gravity", "Friction", "Inertia"], correctAnswer: 1 },
      { question: "What is the hardest natural substance on Earth?", options: ["Gold", "Iron", "Diamond", "Silver"], correctAnswer: 2 },
      // Add 20 more questions...
    ]
  },
  {
    category: "General Knowledge",
    questions: [
      { question: "What is the capital of France?", options: ["Rome", "Paris", "Berlin", "Madrid"], correctAnswer: 1 },
      { question: "Which ocean is the largest?", options: ["Atlantic", "Indian", "Pacific", "Arctic"], correctAnswer: 2 },
      { question: "Who wrote 'Hamlet'?", options: ["Shakespeare", "Dickens", "Hemingway", "Twain"], correctAnswer: 0 },
      { question: "What is the tallest mountain in the world?", options: ["K2", "Everest", "Kilimanjaro", "Makalu"], correctAnswer: 1 },
      { question: "Which country has the most population?", options: ["USA", "India", "China", "Russia"], correctAnswer: 2 },
      // Add 20 more questions...
    ]
  }
];

