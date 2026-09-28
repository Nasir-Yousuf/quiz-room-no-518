import mongoose from 'mongoose';
import dotenv from 'dotenv';
import User from '../models/User.js';
import Quiz from '../models/Quiz.js';
import QuizAttempt from '../models/QuizAttempt.js';
import QuestionBank from '../models/QuestionBank.js';
import ClassGroup from '../models/ClassGroup.js';
import Assignment from '../models/Assignment.js';
import Notification from '../models/Notification.js';

dotenv.config();

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/quiz_room_db';

export const seedDatabase = async () => {
  try {
    console.log('[Seeder] Connecting to MongoDB...');
    await mongoose.connect(MONGODB_URI);
    console.log('[Seeder] Connected to database');

    console.log('[Seeder] Clearing old records...');
    await Promise.all([
      User.deleteMany({}),
      Quiz.deleteMany({}),
      QuizAttempt.deleteMany({}),
      QuestionBank.deleteMany({}),
      ClassGroup.deleteMany({}),
      Assignment.deleteMany({}),
      Notification.deleteMany({}),
    ]);

    console.log('[Seeder] Creating Demo Users...');
    // Demo Teachers
    const teacher1 = await User.create({
      name: 'Prof. Sarah Connor',
      email: 'teacher@example.com',
      password: 'password123',
      role: 'teacher',
      bio: 'Senior Web Development Instructor & Full-Stack Architect. Passionate about empowering students through hands-on coding assessments.',
      avatar: 'https://api.dicebear.com/7.x/bottts/svg?seed=SarahConnor',
    });

    const teacher2 = await User.create({
      name: 'Alex Rivera',
      email: 'alex.teacher@example.com',
      password: 'password123',
      role: 'teacher',
      bio: 'Software Engineer & Computer Science Lecturer specializing in JavaScript runtimes and modern CSS layouts.',
      avatar: 'https://api.dicebear.com/7.x/bottts/svg?seed=AlexRivera',
    });

    // Demo Students
    const student1 = await User.create({
      name: 'David Miller',
      email: 'student@example.com',
      password: 'password123',
      role: 'student',
      bio: 'Aspiring Full-Stack Developer learning HTML, CSS, and modern TypeScript.',
      avatar: 'https://api.dicebear.com/7.x/bottts/svg?seed=DavidMiller',
    });

    const student2 = await User.create({
      name: 'Emma Watson',
      email: 'emma.student@example.com',
      password: 'password123',
      role: 'student',
      bio: 'Junior frontend enthusiast aiming to master React and UI component engineering.',
      avatar: 'https://api.dicebear.com/7.x/bottts/svg?seed=EmmaWatson',
    });

    const student3 = await User.create({
      name: 'Liam Chen',
      email: 'liam.student@example.com',
      password: 'password123',
      role: 'student',
      bio: 'Computer Science sophomore focused on algorithms and web performance.',
      avatar: 'https://api.dicebear.com/7.x/bottts/svg?seed=LiamChen',
    });

    const student4 = await User.create({
      name: 'Sophia Rodriguez',
      email: 'sophia.student@example.com',
      password: 'password123',
      role: 'student',
      bio: 'Design student learning web development and accessibility standards.',
      avatar: 'https://api.dicebear.com/7.x/bottts/svg?seed=SophiaRodriguez',
    });

    const student5 = await User.create({
      name: 'Noah Kim',
      email: 'noah.student@example.com',
      password: 'password123',
      role: 'student',
      bio: 'Self-taught coder passionate about modern web apps.',
      avatar: 'https://api.dicebear.com/7.x/bottts/svg?seed=NoahKim',
    });

    console.log('[Seeder] Creating Quizzes...');

    // Quiz 1: HTML5 Semantics
    const quizHtml = await Quiz.create({
      title: 'HTML5 Semantic Architecture & Essentials',
      description: 'Test your understanding of modern semantic tags, accessibility best practices, and document structure.',
      subject: 'HTML',
      difficulty: 'beginner',
      teacher: teacher1._id,
      status: 'published',
      timeLimit: 15,
      passingPercentage: 75,
      maxAttempts: 3,
      randomizeQuestions: false,
      randomizeAnswers: false,
      showCorrectAnswers: true,
      shareCode: 'html101',
      attemptsCount: 14,
      questions: [
        {
          questionText: 'What does HTML stand for?',
          type: 'multiple-choice',
          options: [
            'Hyper Text Markup Language',
            'High Text Machine Language',
            'Hyperlinks Text Mark Language',
            'Home Tool Markup Language',
          ],
          correctAnswer: 'Hyper Text Markup Language',
          explanation: 'HTML stands for Hyper Text Markup Language, the standard markup language for creating web documents.',
          points: 1,
        },
        {
          questionText: 'Which HTML5 element represents thematic grouping of content, typically with a heading?',
          type: 'multiple-choice',
          options: ['<section>', '<div>', '<span>', '<article>'],
          correctAnswer: '<section>',
          explanation: '<section> is used to define thematic groupings of related content on a web page, unlike a generic <div>.',
          points: 1,
        },
        {
          questionText: 'Which tag should be used for standalone, distributable or reusable content such as a blog post?',
          type: 'multiple-choice',
          options: ['<article>', '<aside>', '<main>', '<section>'],
          correctAnswer: '<article>',
          explanation: '<article> represents a self-contained composition in a document, page, or site which is independently distributable.',
          points: 1,
        },
        {
          questionText: 'The <aside> element is intended strictly for content that is tangentially related to the content around it.',
          type: 'true-false',
          options: ['True', 'False'],
          correctAnswer: 'True',
          explanation: 'Yes, <aside> represents a portion of a document whose content is only tangentially related to the content around it (like sidebars or pull quotes).',
          points: 1,
        },
        {
          questionText: 'Which attribute specifies an alternate text for an image if the image cannot be displayed?',
          type: 'multiple-choice',
          options: ['alt', 'title', 'src', 'description'],
          correctAnswer: 'alt',
          explanation: 'The alt attribute provides alternative information for an image if a user for some reason cannot view it, and is essential for screen readers.',
          points: 1,
        },
        {
          questionText: 'Which HTML5 element is used to specify independent navigation links for a page?',
          type: 'multiple-choice',
          options: ['<nav>', '<menu>', '<header>', '<links>'],
          correctAnswer: '<nav>',
          explanation: 'The <nav> HTML element represents a section of a page whose purpose is to provide navigation links.',
          points: 1,
        },
      ],
    });

    // Quiz 2: Modern CSS
    const quizCss = await Quiz.create({
      title: 'Modern CSS: Flexbox, Grid & Responsive Layouts',
      description: 'Master core CSS layout mechanisms, specificity, box model, and modern responsive techniques.',
      subject: 'CSS',
      difficulty: 'intermediate',
      teacher: teacher1._id,
      status: 'published',
      timeLimit: 20,
      passingPercentage: 70,
      maxAttempts: 0,
      randomizeQuestions: false,
      randomizeAnswers: false,
      showCorrectAnswers: true,
      shareCode: 'css201',
      attemptsCount: 18,
      questions: [
        {
          questionText: 'In CSS Flexbox, what property aligns items along the cross axis?',
          type: 'multiple-choice',
          options: ['align-items', 'justify-content', 'align-content', 'flex-direction'],
          correctAnswer: 'align-items',
          explanation: 'align-items controls alignment along the cross axis, whereas justify-content aligns along the main axis.',
          codeSnippet: '.container {\n  display: flex;\n  align-items: center;\n}',
          points: 1,
        },
        {
          questionText: 'What is the default value of the `flex-direction` property?',
          type: 'multiple-choice',
          options: ['row', 'column', 'row-reverse', 'initial'],
          correctAnswer: 'row',
          explanation: 'In flex containers, flex-direction defaults to "row", laying out flex items horizontally from left to right.',
          points: 1,
        },
        {
          questionText: 'In CSS Grid, which CSS unit represents a fraction of the available free space in the grid container?',
          type: 'multiple-choice',
          options: ['fr', 'rem', '%', 'vw'],
          correctAnswer: 'fr',
          explanation: 'The fr unit represents a fraction of the available free space within the grid container.',
          codeSnippet: 'grid-template-columns: 1fr 2fr 1fr;',
          points: 1,
        },
        {
          questionText: 'The `box-sizing: border-box` property includes padding and border in an element\'s total width and height.',
          type: 'true-false',
          options: ['True', 'False'],
          correctAnswer: 'True',
          explanation: 'With border-box, the width and height properties include the content, padding, and border, making layout calculations predictable.',
          points: 1,
        },
        {
          questionText: 'Which selector has the highest specificity score?',
          type: 'multiple-choice',
          options: ['#header', '.nav-item.active', 'header nav a', 'div p:first-child'],
          correctAnswer: '#header',
          explanation: 'An ID selector (#header) has a specificity of (0,1,0,0), which outweighs class selectors, pseudo-classes, and element selectors.',
          points: 1,
        },
        {
          questionText: 'What does the CSS `gap` property do in Flexbox and Grid?',
          type: 'multiple-choice',
          options: [
            'Sets the space (gutters) between grid or flex items',
            'Adds padding around the parent container',
            'Sets the outer margin of the container',
            'Forces items to wrap to a new line',
          ],
          correctAnswer: 'Sets the space (gutters) between grid or flex items',
          explanation: 'The gap property defines gutters between flex and grid items without adding extra margins to the outer edges.',
          points: 1,
        },
      ],
    });

    // Quiz 3: JavaScript ES6+ & Async
    const quizJs = await Quiz.create({
      title: 'JavaScript ES6+ Deep Dive & Asynchronous Core',
      description: 'Level up your JS knowledge on closures, event loop, promises, prototypes, and array methods.',
      subject: 'JavaScript',
      difficulty: 'advanced',
      teacher: teacher2._id,
      status: 'published',
      timeLimit: 25,
      passingPercentage: 70,
      maxAttempts: 2,
      randomizeQuestions: false,
      randomizeAnswers: false,
      showCorrectAnswers: true,
      shareCode: 'js301',
      attemptsCount: 22,
      questions: [
        {
          questionText: 'What is the output of the following code snippet?',
          type: 'multiple-choice',
          options: ['undefined', 'ReferenceError', '2', 'NaN'],
          correctAnswer: 'undefined',
          explanation: 'Variables declared with `var` are hoisted and initialized with `undefined`. Accessing it before assignment logs `undefined`.',
          codeSnippet: 'console.log(x);\nvar x = 2;',
          points: 2,
        },
        {
          questionText: 'Which array method creates a new array with all elements that pass the test implemented by the provided callback?',
          type: 'multiple-choice',
          options: ['filter()', 'map()', 'reduce()', 'find()'],
          correctAnswer: 'filter()',
          explanation: 'Array.prototype.filter() creates a shallow copy of a portion of a given array, filtered down to just the elements from the given array that pass the test.',
          points: 1,
        },
        {
          questionText: 'What does `Promise.all()` do if any one of the input promises rejects?',
          type: 'multiple-choice',
          options: [
            'Immediately rejects with the reason of the first promise that rejected',
            'Waits for all promises and returns only resolved ones',
            'Returns undefined',
            'Retries the failed promise once',
          ],
          correctAnswer: 'Immediately rejects with the reason of the first promise that rejected',
          explanation: 'Promise.all() has fail-fast behavior: if any promise in the iterable rejects, the returned promise immediately rejects with that rejection reason.',
          points: 2,
        },
        {
          questionText: 'In JavaScript, `const` declarations create immutable values that cannot have their properties modified.',
          type: 'true-false',
          options: ['True', 'False'],
          correctAnswer: 'False',
          explanation: '`const` creates an immutable variable binding, meaning the identifier cannot be reassigned. However, the contents of objects or arrays bound to a const can still be mutated.',
          codeSnippet: 'const user = { name: "Alice" };\nuser.name = "Bob"; // Valid!\nuser = {}; // TypeError!',
          points: 1,
        },
        {
          questionText: 'What is the output of `typeof null` in standard JavaScript?',
          type: 'multiple-choice',
          options: ['"object"', '"null"', '"undefined"', '"boolean"'],
          correctAnswer: '"object"',
          explanation: '`typeof null === "object"` is a well-known legacy bug in JavaScript that was retained for backward compatibility with existing web pages.',
          points: 1,
        },
        {
          questionText: 'Which keyword in async functions pauses execution until a Promise is settled?',
          type: 'multiple-choice',
          options: ['await', 'defer', 'pause', 'yield'],
          correctAnswer: 'await',
          explanation: 'The `await` keyword is placed before an async operation to pause the execution of an async function until the promise settles.',
          points: 1,
        },
      ],
    });

    // Quiz 4: Draft quiz for teacher dashboard demonstration
    await Quiz.create({
      title: 'TypeScript Type System Fundamentals (Draft)',
      description: 'Upcoming quiz covering generics, utility types, and union discrimination.',
      subject: 'JavaScript',
      difficulty: 'intermediate',
      teacher: teacher1._id,
      status: 'draft',
      timeLimit: 20,
      passingPercentage: 70,
      maxAttempts: 3,
      randomizeQuestions: false,
      randomizeAnswers: false,
      showCorrectAnswers: true,
      shareCode: 'tsdraft',
      attemptsCount: 0,
      questions: [
        {
          questionText: 'Which TypeScript keyword is used to declare custom types as aliases?',
          type: 'multiple-choice',
          options: ['type', 'alias', 'typedef', 'declare'],
          correctAnswer: 'type',
          points: 1,
        },
      ],
    });

    console.log('[Seeder] Populating Question Bank...');
    await QuestionBank.insertMany([
      {
        teacher: teacher1._id,
        subject: 'HTML',
        topic: 'Semantics',
        difficulty: 'beginner',
        questionText: 'What is the correct HTML element for inserting a line break?',
        type: 'multiple-choice',
        options: ['<br>', '<lb>', '<break>', '<newline>'],
        correctAnswer: '<br>',
        explanation: 'The <br> tag inserts a single line break in text flow.',
        points: 1,
      },
      {
        teacher: teacher1._id,
        subject: 'CSS',
        topic: 'Flexbox',
        difficulty: 'intermediate',
        questionText: 'Which property defines the ability for a flex item to grow if necessary?',
        type: 'multiple-choice',
        options: ['flex-grow', 'flex-shrink', 'flex-basis', 'flex-flow'],
        correctAnswer: 'flex-grow',
        explanation: 'flex-grow specifies how much of the remaining space in the flex container should be assigned to the item.',
        points: 1,
      },
      {
        teacher: teacher2._id,
        subject: 'JavaScript',
        topic: 'Closures',
        difficulty: 'advanced',
        questionText: 'A closure in JavaScript is a function bundled together with references to its surrounding lexical environment.',
        type: 'true-false',
        options: ['True', 'False'],
        correctAnswer: 'True',
        explanation: 'A closure gives an inner function access to an outer function scope even after the outer function has returned.',
        points: 2,
      },
      {
        teacher: teacher2._id,
        subject: 'JavaScript',
        topic: 'DOM',
        difficulty: 'beginner',
        questionText: 'Which method adds an event listener to an HTML element in the browser DOM?',
        type: 'multiple-choice',
        options: ['addEventListener', 'attachEvent', 'bindEvent', 'listenEvent'],
        correctAnswer: 'addEventListener',
        explanation: 'element.addEventListener() sets up a function that will be called whenever the specified event is delivered to the target.',
        points: 1,
      },
    ]);

    console.log('[Seeder] Creating Class Groups & Assignments...');
    const cohortClass = await ClassGroup.create({
      name: 'Web Engineering Cohort 2026',
      description: 'Official university cohort covering HTML, CSS, JavaScript, and modern full-stack development.',
      subject: 'Full-Stack Web Development',
      teacher: teacher1._id,
      inviteCode: 'WEB-2026',
      students: [student1._id, student2._id, student3._id, student4._id, student5._id],
    });

    const assignment1 = await Assignment.create({
      quiz: quizHtml._id,
      classGroup: cohortClass._id,
      teacher: teacher1._id,
      title: 'Week 1 Assignment: HTML5 Semantics & Structure',
      startDate: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000),
      dueDate: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000),
      attemptLimit: 3,
      timeLimit: 15,
      status: 'active',
    });

    const assignment2 = await Assignment.create({
      quiz: quizCss._id,
      classGroup: cohortClass._id,
      teacher: teacher1._id,
      title: 'Week 2 Assignment: Modern CSS Layout Mastery',
      startDate: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
      dueDate: new Date(Date.now() + 10 * 24 * 60 * 60 * 1000),
      attemptLimit: 2,
      timeLimit: 20,
      status: 'active',
    });

    console.log('[Seeder] Creating Historical Attempts for David Miller & Class...');
    // Seed realistic attempts over time for Student 1 (David Miller) to showcase progress charts!
    // Attempt 1: 5 days ago (HTML: 67%)
    await QuizAttempt.create({
      student: student1._id,
      quiz: quizHtml._id,
      quizTitle: quizHtml.title,
      subject: 'HTML',
      questionsSnapshot: quizHtml.questions.map((q) => ({
        questionText: q.questionText,
        type: q.type,
        options: q.options,
        correctAnswer: q.correctAnswer,
        explanation: q.explanation,
        codeSnippet: q.codeSnippet,
        points: q.points,
      })),
      answers: [
        {
          questionIndex: 0,
          questionText: 'What does HTML stand for?',
          selectedAnswer: 'Hyper Text Markup Language',
          correctAnswer: 'Hyper Text Markup Language',
          isCorrect: true,
          pointsEarned: 1,
        },
        {
          questionIndex: 1,
          questionText: 'Which HTML5 element represents thematic grouping of content, typically with a heading?',
          selectedAnswer: '<div>',
          correctAnswer: '<section>',
          isCorrect: false,
          pointsEarned: 0,
          explanation: '<section> is used to define thematic groupings of related content.',
        },
        {
          questionIndex: 2,
          questionText: 'Which tag should be used for standalone, distributable or reusable content such as a blog post?',
          selectedAnswer: '<article>',
          correctAnswer: '<article>',
          isCorrect: true,
          pointsEarned: 1,
        },
        {
          questionIndex: 3,
          questionText: 'The <aside> element is intended strictly for content that is tangentially related to the content around it.',
          selectedAnswer: 'True',
          correctAnswer: 'True',
          isCorrect: true,
          pointsEarned: 1,
        },
        {
          questionIndex: 4,
          questionText: 'Which attribute specifies an alternate text for an image if the image cannot be displayed?',
          selectedAnswer: 'alt',
          correctAnswer: 'alt',
          isCorrect: true,
          pointsEarned: 1,
        },
        {
          questionIndex: 5,
          questionText: 'Which HTML5 element is used to specify independent navigation links for a page?',
          selectedAnswer: '<header>',
          correctAnswer: '<nav>',
          isCorrect: false,
          pointsEarned: 0,
          explanation: 'The <nav> element represents navigation links.',
        },
      ],
      score: 4,
      maxScore: 6,
      percentage: 67,
      passed: false,
      timeSpentSeconds: 420,
      tabSwitchesCount: 0,
      attemptNumber: 1,
      classGroup: cohortClass._id,
      completedAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000),
    });

    // Attempt 2: 3 days ago (CSS: 83%)
    await QuizAttempt.create({
      student: student1._id,
      quiz: quizCss._id,
      quizTitle: quizCss.title,
      subject: 'CSS',
      questionsSnapshot: quizCss.questions.map((q) => ({
        questionText: q.questionText,
        type: q.type,
        options: q.options,
        correctAnswer: q.correctAnswer,
        explanation: q.explanation,
        codeSnippet: q.codeSnippet,
        points: q.points,
      })),
      answers: quizCss.questions.map((q, i) => ({
        questionIndex: i,
        questionText: q.questionText,
        selectedAnswer: i === 4 ? '.nav-item.active' : q.correctAnswer,
        correctAnswer: q.correctAnswer,
        isCorrect: i !== 4,
        pointsEarned: i !== 4 ? q.points : 0,
        explanation: q.explanation,
      })),
      score: 5,
      maxScore: 6,
      percentage: 83,
      passed: true,
      timeSpentSeconds: 510,
      tabSwitchesCount: 1,
      attemptNumber: 1,
      classGroup: cohortClass._id,
      completedAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000),
    });

    // Attempt 3: Yesterday (HTML Re-take: 100%)
    await QuizAttempt.create({
      student: student1._id,
      quiz: quizHtml._id,
      quizTitle: quizHtml.title,
      subject: 'HTML',
      questionsSnapshot: quizHtml.questions.map((q) => ({
        questionText: q.questionText,
        type: q.type,
        options: q.options,
        correctAnswer: q.correctAnswer,
        explanation: q.explanation,
        codeSnippet: q.codeSnippet,
        points: q.points,
      })),
      answers: quizHtml.questions.map((q, i) => ({
        questionIndex: i,
        questionText: q.questionText,
        selectedAnswer: q.correctAnswer,
        correctAnswer: q.correctAnswer,
        isCorrect: true,
        pointsEarned: q.points,
        explanation: q.explanation,
      })),
      score: 6,
      maxScore: 6,
      percentage: 100,
      passed: true,
      timeSpentSeconds: 310,
      tabSwitchesCount: 0,
      attemptNumber: 2,
      classGroup: cohortClass._id,
      completedAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000),
    });

    // Attempt 4: Today (JavaScript: 75%)
    await QuizAttempt.create({
      student: student1._id,
      quiz: quizJs._id,
      quizTitle: quizJs.title,
      subject: 'JavaScript',
      questionsSnapshot: quizJs.questions.map((q) => ({
        questionText: q.questionText,
        type: q.type,
        options: q.options,
        correctAnswer: q.correctAnswer,
        explanation: q.explanation,
        codeSnippet: q.codeSnippet,
        points: q.points,
      })),
      answers: quizJs.questions.map((q, i) => ({
        questionIndex: i,
        questionText: q.questionText,
        selectedAnswer: i === 0 ? '2' : q.correctAnswer,
        correctAnswer: q.correctAnswer,
        isCorrect: i !== 0,
        pointsEarned: i !== 0 ? q.points : 0,
        explanation: q.explanation,
      })),
      score: 6,
      maxScore: 8,
      percentage: 75,
      passed: true,
      timeSpentSeconds: 680,
      tabSwitchesCount: 0,
      attemptNumber: 1,
      completedAt: new Date(),
    });

    // Seed attempts for other demo students so teacher analytics table has rich comparative data!
    const otherStudents = [
      { student: student2, score: 92, count: 3 },
      { student: student3, score: 88, count: 4 },
      { student: student4, score: 76, count: 2 },
      { student: student5, score: 81, count: 3 },
    ];

    for (const os of otherStudents) {
      await QuizAttempt.create({
        student: os.student._id,
        quiz: quizHtml._id,
        quizTitle: quizHtml.title,
        subject: 'HTML',
        questionsSnapshot: quizHtml.questions.map((q) => ({
          questionText: q.questionText,
          type: q.type,
          options: q.options,
          correctAnswer: q.correctAnswer,
          points: q.points,
        })),
        answers: quizHtml.questions.map((q) => ({
          questionIndex: 0,
          questionText: q.questionText,
          selectedAnswer: q.correctAnswer,
          correctAnswer: q.correctAnswer,
          isCorrect: true,
          pointsEarned: q.points,
        })),
        score: 6,
        maxScore: 6,
        percentage: os.score,
        passed: true,
        timeSpentSeconds: 350,
        tabSwitchesCount: 0,
        attemptNumber: 1,
        classGroup: cohortClass._id,
        completedAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
      });
    }

    // Seed notifications
    await Notification.create({
      user: student1._id,
      title: 'New Quiz Assigned: Modern CSS Layout Mastery',
      message: 'Prof. Sarah Connor assigned "Modern CSS: Flexbox, Grid & Responsive Layouts" to your class.',
      type: 'assignment',
      link: `/student/quizzes/${quizCss._id}/take`,
      isRead: false,
    });

    await Notification.create({
      user: student1._id,
      title: 'Class Enrollment Confirmed',
      message: 'You have been enrolled in "Web Engineering Cohort 2026".',
      type: 'class_joined',
      link: '/student/classes',
      isRead: true,
    });

    console.log('[Seeder] ==============================================');
    console.log('[Seeder] Database seeded successfully!');
    console.log('[Seeder] Demo Credentials:');
    console.log('[Seeder]   Teacher: teacher@example.com / password123');
    console.log('[Seeder]   Teacher 2: alex.teacher@example.com / password123');
    console.log('[Seeder]   Student: student@example.com / password123');
    console.log('[Seeder]   Class Invite Code: WEB-2026');
    console.log('[Seeder] ==============================================');

    await mongoose.disconnect();
    console.log('[Seeder] Disconnected cleanly.');
  } catch (error) {
    console.error('[Seeder] Error during database seeding:', error);
    process.exit(1);
  }
};

// If run directly via command line
if (process.argv[1]?.includes('seedDatabase')) {
  seedDatabase();
}
