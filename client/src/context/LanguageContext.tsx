import React, { createContext, useContext, useState, useEffect, useMemo, useCallback } from 'react';
import { IQuiz, IQuestion } from '../types/index.js';

export type Language = 'en' | 'bn';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: (key: string, fallback?: string) => string;
  translateQuiz: (quiz: IQuiz) => IQuiz;
  translateQuestion: <T extends { questionText: string; options?: string[]; explanation?: string }>(question: T) => T;
}

const UI_TRANSLATIONS: Record<Language, Record<string, string>> = {
  en: {
    // Nav
    'nav.home': 'Home',
    'nav.exploreQuizzes': 'Explore Quizzes',
    'nav.dashboard': 'Dashboard',
    'nav.myProgress': 'My Progress',
    'nav.myClasses': 'My Classes',
    'nav.myQuizzes': 'My Quizzes',
    'nav.questionBank': 'Question Bank',
    'nav.classes': 'Classes',
    'nav.analytics': 'Analytics',
    'nav.signIn': 'Sign In',
    'nav.getStarted': 'Get Started',
    'nav.logout': 'Sign Out',
    'nav.roleStudent': 'Student Account',
    'nav.roleTeacher': 'Educator Account',

    // Landing Page
    'landing.badge': 'Interactive Educational Assessment Platform',
    'landing.heroTitle1': 'Learn. Test.',
    'landing.heroTitle2': 'Improve.',
    'landing.heroSubtitle':
      'A modern, full-stack quiz platform empowering students to test real-world skills across HTML, CSS, JavaScript, TypeScript, React, Next.js, Python, and Node.js with instant grading and analytics.',
    'landing.ctaPrimary': 'Get Started Free',
    'landing.ctaSecondary': 'Explore Quizzes',
    'landing.ctaDashboard': 'Go to Dashboard',
    'landing.demoNotice': 'Try the platform immediately with one-click demo credentials:',
    'landing.demoTeacher': 'Teacher Demo',
    'landing.demoStudent': 'Student Demo',
    'landing.featuresTitle': 'Engineered for Mastery & Academic Integrity',
    'landing.featuresSubtitle':
      'From custom practice sessions to proctored anti-cheat detection and deep mastery analytics.',
    'landing.feat1Title': 'Instant Self-Study Mode',
    'landing.feat1Desc':
      'Take quizzes freely with 15, 30, 50, or 100 questions. No teacher or class codes required.',
    'landing.feat2Title': 'Anti-Cheating Proctoring',
    'landing.feat2Desc':
      'Automated window blur and tab-switching telemetry keeping exams transparent and focused.',
    'landing.feat3Title': 'Cohort & Class Analytics',
    'landing.feat3Desc':
      'Track historical progression charts, subject mastery breakdowns, and concept diagnostic reports.',

    // Student Dashboard
    'dashboard.welcome': 'Welcome back',
    'dashboard.badge': 'Student Learning Hub',
    'dashboard.subtitle':
      'Self-paced practice mode active. Test yourself freely across React, Next.js, TypeScript, Python, HTML, CSS, JavaScript, and Node.js.',
    'dashboard.browseBtn': 'Explore All Quizzes',
    'dashboard.joinClassBtn': 'Join a Class',
    'dashboard.quickSprintsTitle': 'Quick 15-Question Practice Sprints (No Teacher Needed)',
    'dashboard.customizeCountLink': 'Customize Question Count (15, 30, 50, 100 Qs)',
    'dashboard.totalQuizzes': 'Total Quizzes Taken',
    'dashboard.avgScore': 'Average Score',
    'dashboard.highestScore': 'Highest Score',
    'dashboard.pendingAssignments': 'Pending Assignments',
    'dashboard.subjectMastery': 'Subject Mastery',
    'dashboard.subjectMasterySub': 'Your average score across web technologies',
    'dashboard.fullReportLink': 'Full Progress Report',
    'dashboard.learningInsights': 'Learning Insights',
    'dashboard.automatedFocus': 'Automated focus topics',
    'dashboard.recommendedFocus': 'Based on your quiz performance, we recommend extra practice on:',
    'dashboard.practiceRecommended': 'Practice Recommended Quizzes',
    'dashboard.recentAttempts': 'Recent Attempts',
    'dashboard.recentAttemptsSub': 'Review your past submissions and answer keys',
    'dashboard.viewAll': 'View All Attempts',
    'dashboard.passed': 'Passed',
    'dashboard.needsPractice': 'Needs Practice',
    'dashboard.review': 'Review',

    // Quiz Discovery
    'discovery.badge': 'Independent Learning & Self-Study Mode',
    'discovery.title': 'Explore Quizzes & Self-Assessment',
    'discovery.subtitle':
      'Take any quiz freely without waiting for a teacher or class enrollment. Choose your preferred topics and question length.',
    'discovery.practiceRoomTitle': 'Instant Self-Study Practice Room',
    'discovery.practiceRoomSubtitle':
      'No teacher or class assignment needed! Select any discipline, pick how many questions you want to solve (15, 30, 50, 100 Qs), and test yourself right now with auto-grading.',
    'discovery.launchBtn': 'Launch Practice Test',
    'discovery.step1': '1. Choose Subject',
    'discovery.step2': '2. Questions to Solve',
    'discovery.step3': '3. Difficulty Level',
    'discovery.timerNote': 'Allocates ~1.5 min per question with live countdown timer.',
    'discovery.prebuiltTitle': 'Pre-Built Curriculum Quizzes',
    'discovery.prebuiltSub': 'Pick any quiz or customize question count',
    'discovery.searchPlaceholder': 'Search quiz titles...',
    'discovery.chooseQs': 'Choose Qs',
    'discovery.startQuiz': 'Start Quiz',
    'discovery.allTopics': 'All Topics',
    'discovery.mixedLevels': 'Mixed Levels',
    'discovery.noQuizzes': 'No quizzes found',
    'discovery.resetFilters': 'Reset Filters',

    // Quiz Taking
    'taking.preparing': 'Preparing Quiz Environment...',
    'taking.questions': 'Questions',
    'taking.question': 'Question',
    'taking.of': 'of',
    'taking.completed': 'Completed',
    'taking.flag': 'Flag',
    'taking.flagged': 'Flagged',
    'taking.previous': 'Previous',
    'taking.next': 'Next',
    'taking.submitQuiz': 'Submit Quiz',
    'taking.navigation': 'Question Navigation',
    'taking.answered': 'Answered',
    'taking.unanswered': 'Unanswered',
    'taking.modalTitle': 'Ready to Submit Quiz?',
    'taking.modalWarning': 'You have unanswered question(s)!',
    'taking.modalWarningSub': 'Unanswered questions will be scored as 0 points.',
    'taking.modalSuccess': 'Great work! You have answered all questions. Ready to submit for instant grading?',
    'taking.continue': 'Continue Quiz',
    'taking.confirmSubmit': 'Confirm Submission',
    'taking.proctorAlert': 'Proctor Alert',
    'taking.tabSwitchMsg': 'Tab switch detected. Please remain on the quiz screen.',

    // Quiz Result
    'result.complete': 'Quiz Completed!',
    'result.score': 'Your Score',
    'result.statusPassed': 'Congratulations! You Passed!',
    'result.statusFailed': 'Keep Practicing! Review the solutions below.',
    'result.timeSpent': 'Time Spent',
    'result.switches': 'Tab Switches',
    'result.reviewTitle': 'Question-by-Question Review',
    'result.correctAnswer': 'Correct Answer',
    'result.yourAnswer': 'Your Selected Answer',
    'result.explanation': 'Educational Explanation',
    'result.retakeBtn': 'Retake Quiz',
    'result.dashboardBtn': 'Back to Dashboard',

    // General / Badges
    'common.beginner': 'Beginner',
    'common.intermediate': 'Intermediate',
    'common.advanced': 'Advanced',
  },
  bn: {
    // Nav
    'nav.home': 'হোম',
    'nav.exploreQuizzes': 'কুইজ এক্সপ্লোর করুন',
    'nav.dashboard': 'ড্যাশবোর্ড',
    'nav.myProgress': 'আমার অগ্রগতি',
    'nav.myClasses': 'আমার ক্লাস',
    'nav.myQuizzes': 'আমার কুইজ',
    'nav.questionBank': 'প্রশ্ন ব্যাংক',
    'nav.classes': 'ক্লাসসমূহ',
    'nav.analytics': 'অ্যানালিটিক্স',
    'nav.signIn': 'লগইন করুন',
    'nav.getStarted': 'শুরু করুন',
    'nav.logout': 'লগআউট',
    'nav.roleStudent': 'শিক্ষার্থী অ্যাকাউন্ট',
    'nav.roleTeacher': 'শিক্ষক অ্যাকাউন্ট',

    // Landing Page
    'landing.badge': 'ইন্টারেক্টিভ ডিজিটাল শিক্ষা ও মূল্যায়ন প্ল্যাটফর্ম',
    'landing.heroTitle1': 'শিখুন। পরীক্ষা দিন।',
    'landing.heroTitle2': 'দক্ষতা বাড়ান।',
    'landing.heroSubtitle':
      'শিক্ষার্থীদের জন্য আধুনিক ফুল-স্ট্যাক কুইজ প্ল্যাটফর্ম। HTML, CSS, JavaScript, TypeScript, React, Next.js, Python, এবং Node.js-এ যেকোনো সময় স্বয়ংক্রিয় মূল্যায়নের মাধ্যমে দক্ষতা যাচাই করুন।',
    'landing.ctaPrimary': 'বিনামূল্যে শুরু করুন',
    'landing.ctaSecondary': 'কুইজ দেখুন',
    'landing.ctaDashboard': 'ড্যাশবোর্ডে যান',
    'landing.demoNotice': 'এক ক্লিকে ডেমো অ্যাকাউন্টে প্ল্যাটফর্মটি পরীক্ষা করুন:',
    'landing.demoTeacher': 'শিক্ষক ডেমো',
    'landing.demoStudent': 'শিক্ষার্থী ডেমো',
    'landing.featuresTitle': 'দক্ষতা অর্জন ও পরীক্ষার সততার জন্য নির্মিত',
    'landing.featuresSubtitle':
      'কাস্টম অনুশীলন সেশন থেকে শুরু করে অ্যান্টি-চিট প্রক্টরিং এবং অগ্রগতি ট্র্যাকিং পর্যন্ত সবকিছু এক জায়গায়।',
    'landing.feat1Title': 'সেলফ-স্টাডি প্র্যাকটিস রুম',
    'landing.feat1Desc':
      '১৫, ৩০, ৫০ বা ১০০ প্রশ্নে ইচ্ছামতো পরীক্ষা দিন। কোনো শিক্ষক বা ক্লাস কোডের অনুমোদনের অপেক্ষা নেই।',
    'landing.feat2Title': 'অ্যান্টি-চিট সুরক্ষা ব্যবস্থা',
    'landing.feat2Desc':
      'ট্যাব পরিবর্তন ও উইন্ডো ব্লার পর্যবেক্ষণ যা পরীক্ষাকে রাখে সম্পূর্ণ স্বচ্ছ ও বিভ্রান্তিমুক্ত।',
    'landing.feat3Title': 'পূর্ণাঙ্গ অগ্রগতি অ্যানালিটিক্স',
    'landing.feat3Desc':
      'কালানুক্রমিক স্কোরিং চার্ট, বিষয়ভিত্তিক দক্ষতা সূচক এবং স্বয়ংক্রিয় পরামর্শের মাধ্যমে দুর্বলতা দূর করুন।',

    // Student Dashboard
    'dashboard.welcome': 'স্বাগতম',
    'dashboard.badge': 'শিক্ষার্থী লার্নিং হাব',
    'dashboard.subtitle':
      'সেলফ-পেসড লার্নিং মোড সক্রিয়। React, Next.js, TypeScript, Python, HTML, CSS, JavaScript এবং Node.js-এ যেকোনো সময় পরীক্ষা দিন।',
    'dashboard.browseBtn': 'সব কুইজ দেখুন',
    'dashboard.joinClassBtn': 'ক্লাসে যুক্ত হোন',
    'dashboard.quickSprintsTitle': '১৫ প্রশ্নের কুইক প্র্যাকটিস স্প্রিন্ট (শিক্ষক ছাড়াই সরাসরি শুরু)',
    'dashboard.customizeCountLink': 'প্রশ্নের সংখ্যা কাস্টমাইজ করুন (১৫, ৩০, ৫০, ১০০ প্রশ্ন)',
    'dashboard.totalQuizzes': 'মোট সম্পন্ন কুইজ',
    'dashboard.avgScore': 'গড় স্কোর',
    'dashboard.highestScore': 'সর্বোচ্চ স্কোর',
    'dashboard.pendingAssignments': 'অ্যাসাইনমেন্ট বাকি',
    'dashboard.subjectMastery': 'বিষয়ভিত্তিক দক্ষতা (Subject Mastery)',
    'dashboard.subjectMasterySub': 'প্রোগ্রামিং ও ওয়েব প্রযুক্তিতে আপনার দক্ষতার শতাংশ',
    'dashboard.fullReportLink': 'পূর্ণাঙ্গ রিপোর্ট দেখুন',
    'dashboard.learningInsights': 'লার্নিং ইনসাইটস (পরামর্শ)',
    'dashboard.automatedFocus': 'স্বয়ংক্রিয় সুপারিশ',
    'dashboard.recommendedFocus': 'আপনার কুইজের ফলাফলের ওপর ভিত্তি করে নিচের বিষয়গুলোতে আরও অনুশীলনের পরামর্শ দেওয়া হচ্ছে:',
    'dashboard.practiceRecommended': 'সুপারিশকৃত বিষয়ে পরীক্ষা দিন',
    'dashboard.recentAttempts': 'সাম্প্রতিক পরীক্ষার ফলাফল',
    'dashboard.recentAttemptsSub': 'বিগত পরীক্ষার উত্তরমালা ও পুঙ্খানুপুঙ্খ ব্যাখ্যা পর্যালোচনা করুন',
    'dashboard.viewAll': 'সব ফলাফল দেখুন',
    'dashboard.passed': 'উত্তীর্ণ',
    'dashboard.needsPractice': 'অনুশীলন প্রয়োজন',
    'dashboard.review': 'উত্তর দেখুন',

    // Quiz Discovery
    'discovery.badge': 'স্বতন্ত্র শিখন ও সেলফ-অ্যাসেসমেন্ট মোড',
    'discovery.title': 'কুইজ অনুসন্ধান ও অনুশীলন',
    'discovery.subtitle':
      'কোনো শিক্ষকের অপেক্ষায় না থেকে স্বাধীনভাবে যেকোনো কুইজ দিন। নিজের সুবিধাজনক বিষয় ও প্রশ্ন সংখ্যা বেছে নিন।',
    'discovery.practiceRoomTitle': 'ইনস্ট্যান্ট সেলফ-স্টাডি প্র্যাকটিস রুম',
    'discovery.practiceRoomSubtitle':
      'কোনো শিক্ষক বা অ্যাসাইনমেন্টের প্রয়োজন নেই! যেকোনো বিষয় নির্বাচন করুন, কতটি প্রশ্ন সমাধান করতে চান (১৫, ৩০, ৫০, ১০০ প্রশ্ন) বেছে নিন এবং তাৎক্ষণিক স্বয়ংক্রিয় গ্রেডিংয়ে অংশ নিন।',
    'discovery.launchBtn': 'প্র্যাকটিস টেস্ট শুরু করুন',
    'discovery.step1': '১. বিষয় নির্বাচন করুন',
    'discovery.step2': '২. প্রশ্নের সংখ্যা',
    'discovery.step3': '৩. কাঠিন্যের স্তর',
    'discovery.timerNote': 'প্রতি প্রশ্নে গড়ে ~১.৫ মিনিট লাইভ কাউন্টডাউন টাইমার নির্ধারিত হয়।',
    'discovery.prebuiltTitle': 'কোর্স কারিকুলাম কুইজসমূহ',
    'discovery.prebuiltSub': 'যেকোনো কুইজ সরাসরি শুরু করুন অথবা প্রশ্ন সংখ্যা পরিবর্তন করুন',
    'discovery.searchPlaceholder': 'কুইজের নাম খুঁজুন...',
    'discovery.chooseQs': 'প্রশ্ন বাছুন',
    'discovery.startQuiz': 'কুইজ শুরু',
    'discovery.allTopics': 'সব বিষয়',
    'discovery.mixedLevels': 'মিশ্র স্তর',
    'discovery.noQuizzes': 'কোনো কুইজ পাওয়া যায়নি',
    'discovery.resetFilters': 'ফিল্টার রিসেট করুন',

    // Quiz Taking
    'taking.preparing': 'কুইজ পরিবেশ প্রস্তুত করা হচ্ছে...',
    'taking.questions': 'টি প্রশ্ন',
    'taking.question': 'প্রশ্ন নং',
    'taking.of': '/',
    'taking.completed': 'সম্পন্ন হয়েছে',
    'taking.flag': 'চিহ্নিত করুন',
    'taking.flagged': 'চিহ্নিত',
    'taking.previous': 'পূর্ববর্তী',
    'taking.next': 'পরবর্তী',
    'taking.submitQuiz': 'কুইজ জমা দিন',
    'taking.navigation': 'প্রশ্ন নেভিগেশন',
    'taking.answered': 'উত্তর দেওয়া হয়েছে',
    'taking.unanswered': 'বাকি আছে',
    'taking.modalTitle': 'কুইজ জমা দিতে প্রস্তুত?',
    'taking.modalWarning': 'আপনার উত্তর না দেওয়া প্রশ্ন রয়েছে!',
    'taking.modalWarningSub': 'উত্তর না দেওয়া প্রশ্নগুলোর জন্য ০ পয়েন্ট গণনা করা হবে।',
    'taking.modalSuccess': 'দারুণ! আপনি সব প্রশ্নের উত্তর দিয়েছেন। এখন স্বয়ংক্রিয় মূল্যায়নের জন্য জমা দিতে প্রস্তুত?',
    'taking.continue': 'কুইজে ফিরে যান',
    'taking.confirmSubmit': 'জমা নিশ্চিত করুন',
    'taking.proctorAlert': 'সতর্কবার্তা',
    'taking.tabSwitchMsg': 'ট্যাব পরিবর্তন শনাক্ত হয়েছে। অনুগ্রহ করে পরীক্ষার স্ক্রিনেই অবস্থান করুন।',

    // Quiz Result
    'result.complete': 'কুইজ সমাপ্ত হয়েছে!',
    'result.score': 'আপনার অর্জিত স্কোর',
    'result.statusPassed': 'অভিনন্দন! আপনি সফলভাবে উত্তীর্ণ হয়েছেন!',
    'result.statusFailed': 'মনোযোগ দিয়ে অনুশীলন চালিয়ে যান! নিচের ব্যাখ্যাগুলো লক্ষ্য করুন।',
    'result.timeSpent': 'ব্যয়িত সময়',
    'result.switches': 'ট্যাব সুইচ সংখ্যা',
    'result.reviewTitle': 'প্রশ্ন ও উত্তরভিত্তিক বিস্তারিত পর্যালোচনা',
    'result.correctAnswer': 'সঠিক উত্তর',
    'result.yourAnswer': 'আপনার নির্বাচিত উত্তর',
    'result.explanation': 'শিক্ষামূলক সমাধান ও ব্যাখ্যা',
    'result.retakeBtn': 'পুনরায় পরীক্ষা দিন',
    'result.dashboardBtn': 'ড্যাশবোর্ডে ফিরে যান',

    // General / Badges
    'common.beginner': 'সহজ (Beginner)',
    'common.intermediate': 'মধ্যম (Intermediate)',
    'common.advanced': 'উন্নত (Advanced)',
  },
};

// Bangla Quiz Question Translation Dictionary for Core 8 Quizzes
const QUIZ_TRANSLATIONS: Record<string, { title?: string; description?: string }> = {
  'HTML5 Semantic Architecture & Essentials': {
    title: 'HTML5 সিম্যান্টিক আর্কিটেকচার ও মূল বিষয়াবলী',
    description: 'আধুনিক সিম্যান্টিক এলিমেন্ট, অ্যাক্সেসিবিলিটি (ARIA), মেটা ভিউপোর্ট এবং ডকুমেন্ট কাঠামোর ওপর পূর্ণাঙ্গ মূল্যায়ন।',
  },
  'Modern CSS: Flexbox, Grid & Responsive Layouts': {
    title: 'আধুনিক CSS: ফ্লেক্সবক্স, গ্রিড ও রেসপনসিভ লেআউট',
    description: 'ফ্লেক্স কন্টেইনার, গ্রিড অ্যালাইনমেন্ট, CSS ভেরিয়েবল, স্পেসিফিসিটি এবং রেসপনসিভ ডিজাইন কৌশল আয়ত্ত করুন।',
  },
  'JavaScript ES6+ Deep Dive & Asynchronous Core': {
    title: 'জাভাস্ক্রিপ্ট ES6+ ও অ্যাসিঙ্ক্রোনাস কোর',
    description: 'ক্লোজার (Closures), ইভেন্ট লুপ, প্রমিসেস (Promises), প্রোটোটাইপ এবং আধুনিক জাভাস্ক্রিপ্ট মেথড নিয়ে গভীরভাবে জানুন।',
  },
  'TypeScript Mastery: Generics, Narrowing & Strict Types': {
    title: 'টাইপস্ক্রিপ্ট মাস্টারি: জেনেরিকস, টাইপ ন্যারোয়িং ও স্ট্রিক্ট টাইপস',
    description: 'জেনেরিকস, কন্ডিশনাল টাইপ, ডিসক্রিমিনেটেড ইউনিয়ন এবং টাইপ সেফটি সংক্রান্ত মূল ধারণা যাচাই করুন।',
  },
  'React 18 Architecture: Hooks, State & Component Lifecycle': {
    title: 'রিঅ্যাক্ট ১৮ আর্কিটেকচার: হুকস, স্টেট ও লাইফসাইকেল',
    description: 'useState, useEffect, useMemo, useCallback, রিকনসিলিয়েশন এবং কনকারেন্ট ফিচার নিয়ে রিঅ্যাক্ট ১৮ দক্ষতা যাচাই করুন।',
  },
  'Next.js App Router, Server Components & Full-Stack Routing': {
    title: 'নেক্সট জেএস অ্যাপ রাউটার, সার্ভার কম্পোনেন্টস ও ফুল-স্ট্যাক রাউটিং',
    description: 'RSC বনাম ক্লায়েন্ট কম্পোনেন্টস, সার্ভার অ্যাকশনস, ক্যাশিং স্ট্র্যাটেজি ও ডাইনামিক রাউটিং সম্পর্কিত প্রশ্নাবলী।',
  },
  'Python 3 Core: Data Structures, OOP & Advanced Features': {
    title: 'পাইথন ৩ কোর: ডেটা স্ট্রাকচার, ওওপি ও জেনারেটর',
    description: 'লিস্ট কমপ্রিহেনশন, ডেকোরেটর, জেনারেটর (yield), ডান্ডার মেথড এবং গ্লোবাল ইন্টারপ্রেটার লক (GIL) সংক্রান্ত টেস্ট।',
  },
  'Node.js & Express: Backend Architecture & REST APIs': {
    title: 'নোড জেএস ও এক্সপ্রেস: ব্যাকএন্ড আর্কিটেকচার ও REST API',
    description: 'ইভেন্ট লুপ ফেজ, এক্সপ্রেস মিডলওয়্যার পাইপলাইন, স্ট্রিমস, বাফার্স এবং সুরক্ষিত REST API ইঞ্জিনিয়ারিং।',
  },
};

// Question-specific translations map (by English questionText)
const QUESTION_TRANSLATIONS: Record<
  string,
  {
    questionText: string;
    options?: string[];
    explanation?: string;
  }
> = {
  // HTML
  'What does HTML stand for?': {
    questionText: 'HTML বলতে পূর্ণরূপে কী বোঝায়?',
    options: ['হাইপার টেক্সট মার্কআপ ল্যাঙ্গুয়েজ (Hyper Text Markup Language)', 'হাই টেক্সট মেশিন ল্যাঙ্গুয়েজ', 'হাইপারলিঙ্কস টেক্সট মার্ক ল্যাঙ্গুয়েজ', 'হোম টুল মার্কআপ ল্যাঙ্গুয়েজ'],
    explanation: 'HTML হলো Hyper Text Markup Language, যা ওয়েব ডকুমেন্ট তৈরির আদর্শ মার্কআপ ভাষা।',
  },
  'Which HTML5 element represents a thematic grouping of content, typically with a heading?': {
    questionText: 'কোন HTML5 উপাদানটি সাধারণত শিরোনামসহ কোনো বিষয়ের বিষয়ভিত্তিক গ্রুপিং বোঝায়?',
    explanation: '<section> ট্যাগটি ওয়েবসাইটের কোনো নির্দিষ্ট বিষয়ভিত্তিক অংশ বা বিভাগ বোঝাতে ব্যবহৃত হয়।',
  },
  'Which tag should be used for standalone, distributable content such as a blog post or news story?': {
    questionText: 'ব্লগ পোস্ট বা সংবাদের মতো স্বাধীন ও পুনঃব্যবহারযোগ্য কন্টেন্টের জন্য কোন ট্যাগ ব্যবহার করা উচিত?',
    explanation: '<article> স্বাধীনভাবে বিতরণযোগ্য ও স্বতন্ত্র কন্টেন্ট প্রকাশ করতে ব্যবহৃত হয়।',
  },
  'The <aside> element is intended strictly for content tangentially related to the content around it.': {
    questionText: '<aside> উপাদানটি মূলত এর আশেপাশের মূল বিষয়ের সাথে প্রাসঙ্গিক কিন্তু পার্শ্ববর্তী কন্টেন্টের (যেমন সাইডবার) জন্য ব্যবহৃত হয়।',
    options: ['সত্য (True)', 'মিথ্যা (False)'],
    explanation: 'হ্যাঁ, <aside> পার্শ্ববর্তী বা প্রাসঙ্গিক অতিরিক্ত তথ্য উপস্থাপনে ব্যবহৃত হয়।',
  },
  'Which attribute provides accessible alternative information for an image if a user cannot view it?': {
    questionText: 'ছবি লোড না হলে অথবা স্ক্রিন রিডার ব্যবহারকারীদের জন্য কোন অ্যাট্রিবিউট বিকল্প টেক্সট প্রদান করে?',
    explanation: 'alt অ্যাট্রিবিউট ছবির বিকল্প হিসেবে দৃষ্টিহীন ব্যবহারকারী ও সার্চ ইঞ্জিনের জন্য বর্ণনা যোগ করে।',
  },
  'Which HTML5 element is used to enclose primary navigation links across an application?': {
    questionText: 'অ্যাপ্লিকেশনের প্রধান নেভিগেশন লিঙ্কগুলো রাখতে কোন HTML5 উপাদান ব্যবহৃত হয়?',
    explanation: '<nav> ট্যাগটি মূল মেনু ও নেভিগেশন লিঙ্কসমূহকে আবদ্ধ করে।',
  },

  // CSS
  'In CSS Flexbox, what property aligns flex items along the cross axis?': {
    questionText: 'সিএসএস ফ্লেক্সবক্সে (Flexbox) কোন প্রোপার্টি ক্রস-অ্যাক্সিস (cross axis) বরাবর আইটেম সাজায়?',
    explanation: 'align-items ক্রস-অ্যাক্সিস বরাবর এবং justify-content মেইন-অ্যাক্সিস বরাবর উপাদান সাজায়।',
  },
  'What is the default value of the `flex-direction` property?': {
    questionText: '`flex-direction` প্রোপার্টির ডিফল্ট মান কোনটি?',
    explanation: 'ফ্লেক্স কন্টেইনারে flex-direction ডিফল্টভাবে "row" থাকে, যা বাম থেকে ডানে উপাদান সাজায়।',
  },
  'In CSS Grid, which CSS unit represents a fraction of the available free space in the grid container?': {
    questionText: 'CSS গ্রিডে কোন এককটি গ্রিড কন্টেইনারের অবশিষ্ট মুক্ত স্থানের একটি ভগ্নাংশ নির্দেশ করে?',
    explanation: 'fr ইউনিট গ্রিড কন্টেইনারের ফাঁকা জায়গার ভগ্নাংশ নির্ধারণ করে।',
  },
  "The `box-sizing: border-box` property includes padding and border inside an element's total width and height.": {
    questionText: "`box-sizing: border-box` প্রোপার্টি কোনো উপাদানের মোট প্রস্থ ও উচ্চতার মধ্যে প্যাডিং এবং বর্ডার অন্তর্ভুক্ত করে।",
    options: ['সত্য (True)', 'মিথ্যা (False)'],
    explanation: 'border-box ব্যবহারে প্যাডিং বা বর্ডার যোগ করলে উপাদানের মূল নির্ধারিত মাপ বাড়ে না।',
  },
  'Which selector has the highest specificity score?': {
    questionText: 'নিচের কোন সিলেক্টরের স্পেসিফিসিটি (specificity) স্কোর সবচেয়ে বেশি?',
    explanation: 'আইডি সিলেক্টর (#header) এর স্পেসিফিসিটি স্কোর (0,1,0,0), যা ক্লাস বা ট্যাগ সিলেক্টরের চেয়ে অনেক বেশি শক্তিশালী।',
  },
  'What does the CSS `gap` property do in Flexbox and Grid?': {
    questionText: 'ফ্লেক্সবক্স এবং গ্রিডে CSS `gap` প্রোপার্টির কাজ কী?',
    options: ['গ্রিড বা ফ্লেক্স আইটেমগুলোর মাঝে ফাঁকা স্থান তৈরি করে', 'প্যারেন্ট কন্টেইনারে অতিরিক্ত প্যাডিং যোগ করে', 'কন্টেইনারের বাইরের মার্জিন নির্ধারণ করে', 'আইটেমগুলোকে নতুন লাইনে নামিয়ে দেয়'],
    explanation: 'gap প্রোপার্টি উপাদানসমূহের মধ্যকার দূরত্ব ঠিক করে।',
  },

  // JavaScript
  'What is the output of the following code snippet?': {
    questionText: 'নিচের কোড স্নিপেটের আউটপুট কী হবে?',
    explanation: 'var দিয়ে ডিক্লেয়ার করা ভেরিয়েবল হোয়েস্টেড (hoisted) হয় এবং undefined দিয়ে শুরু হয়।',
  },
  'Which array method creates a new array populated with the results of calling a provided function on every element?': {
    questionText: 'কোন অ্যারে মেথডটি মূল অ্যারের প্রতিটি উপাদানের ওপর একটি কলব্যাক ফাংশন প্রয়োগ করে নতুন অ্যারে গঠন করে?',
    explanation: 'Array.prototype.map() প্রতিটি উপাদানের রূপান্তর ঘটিয়ে সমান দৈর্ঘ্যের নতুন অ্যারে তৈরি করে।',
  },
  'What does `Promise.all()` do if any single promise rejects?': {
    questionText: 'যদি কোনো একটি প্রমিস রিজেক্ট (reject) হয়, তবে `Promise.all()` কী আচরণ করে?',
    options: [
      'প্রথম যে প্রমিসটি রিজেক্ট হয়েছে তার কারণ সহ সাথে সাথে পুরো প্রমিস রিজেক্ট করে',
      'সব প্রমিসের অপেক্ষা করে শুধুমাত্র সফলগুলো ফেরত দেয়',
      'undefined প্রদান করে',
      'ব্যর্থ হওয়া প্রমিসটি পুনরায় চেষ্টা করে',
    ],
    explanation: 'Promise.all ফেইল-ফাস্ট পদ্ধতিতে কাজ করে; একটি রিজেক্ট হলে তৎক্ষণাৎ পুরোটা রিজেক্ট হয়।',
  },
  'What is a closure in JavaScript?': {
    questionText: 'জাভাস্ক্রিপ্টে ক্লোজার (Closure) বলতে কী বোঝায়?',
    options: [
      'একটি ফাংশন যা তার চারপাশের লেক্সিক্যাল স্কোপের রেফারেন্স স্মৃতিতে ধরে রাখে',
      'একটি ফাংশন যা এক্সিকিউশন তৎক্ষণাৎ বন্ধ করে দেয়',
      'লুপের ভেতরে একবার চলা অ্যানোনিমাস ফাংশন',
      'প্রাইভেট ক্লাস কনস্ট্রাক্টর',
    ],
    explanation: 'ক্লোজারের মাধ্যমে ভেতরের ফাংশন বাইরের ফাংশন শেষ হয়ে যাওয়ার পরও বাইরের স্কোপের ভেরিয়েবল অ্যাক্সেস করতে পারে।',
  },
  'What is the return value of `typeof null` in standard JavaScript?': {
    questionText: 'স্ট্যান্ডার্ড জাভাস্ক্রিপ্টে `typeof null`-এর মান কী?',
    explanation: 'typeof null === "object" জাভাস্ক্রিপ্টের প্রথম সংস্করণ থেকে চলে আসা একটি সুপরিচিত আচরণ যা সামঞ্জস্যতার জন্য বহাল আছে।',
  },

  // TypeScript
  'Which TypeScript utility type constructs a type with all properties of T set to optional?': {
    questionText: 'টাইপস্ক্রিপ্টে T-এর সমস্ত প্রোপার্টিকে ঐচ্ছিক (optional) করতে কোন ইউটিলিটি টাইপ ব্যবহৃত হয়?',
    explanation: 'Partial<T> টাইপটির সব প্রোপার্টির পাশে প্রশ্নবোধক চিহ্ন (?) যুক্ত করে ঐচ্ছিক করে দেয়।',
  },
  'What is the purpose of the `unknown` type compared to `any` in TypeScript?': {
    questionText: 'টাইপস্ক্রিপ্টে `any`-এর তুলনায় `unknown` টাইপের সুবিধা কী?',
    options: [
      'unknown হলো টাইপ-সেফ; টাইপ ন্যারোয়িং না করে এর ওপর কোনো অপারেশন চালানো যায় না',
      'unknown হুবহু any-এর মতো কাজ করে শুধু সিনট্যাক্স ভিন্ন',
      'unknown শুধুমাত্র null এবং undefined মান গ্রহণ করে',
      'unknown কম্পাইলারের সব ওয়ার্নিং বন্ধ করে দেয়',
    ],
    explanation: 'unknown ব্যবহার করলে কোনো প্রোপার্টি অ্যাক্সেসের আগে অবশ্যই typeof বা টাইপ গার্ড দিয়ে নিশ্চিত হতে হয়।',
  },

  // React
  'Why should you NOT call React Hooks inside loops, conditions, or nested functions?': {
    questionText: 'লুপ, শর্ত (conditions) বা নেস্টেড ফাংশনের ভেতরে রিঅ্যাক্ট হুক কল করা নিষেধ কেন?',
    options: [
      'রিঅ্যাক্ট হুক কলের ধারাবাহিক ক্রমের (call order) ওপর নির্ভর করে স্টেট ট্র্যাক করে',
      'লুপের ভেতরে হুক ব্যবহার করলে মেমোরি লিক হয়',
      'জাভাস্ক্রিপ্ট সিনট্যাক্স অনুযায়ী লুপে ফাংশন কল নিষিদ্ধ',
      'বান্ডেল সাইজ দ্বিগুণ হয়ে যায়',
    ],
    explanation: 'রিঅ্যাক্ট প্রতিটি কম্পোনেন্টের জন্য হুকের একটি ক্রম তালিকা রাখে, যা প্রতি রেন্ডারে অপরিবর্তিত থাকতে হয়।',
  },
  'What is the primary difference between `useMemo` and `useCallback`?': {
    questionText: '`useMemo` এবং `useCallback`-এর মধ্যে প্রধান পার্থক্য কী?',
    options: [
      'useMemo গণনাকৃত মান (calculation result) ক্যাশ করে; useCallback ফাংশনের রেফারেন্স ক্যাশ করে',
      'useMemo ক্লাস কম্পোনেন্টের জন্য; useCallback ফাংশনাল কম্পোনেন্টের জন্য',
      'useCallback অ্যাসিঙ্ক্রোনাসভাবে চলে; useMemo সিঙ্ক্রোনাসভাবে চলে',
      'useMemo কোনো ডিপেনডেন্সি নেয় না',
    ],
    explanation: 'useMemo গণনার ফল মেমোইজ করে, আর useCallback ফাংশন রি-ক্রিয়েশন রোধ করে।',
  },

  // Next.js
  'In the Next.js App Router, what is the default component type inside the `app/` directory?': {
    questionText: 'নেক্সট জেএস অ্যাপ রাউটারে `app/` ফোল্ডারের ভেতরের কম্পোনেন্টগুলো ডিফল্টভাবে কী ধরনের হয়?',
    options: ['রিঅ্যাক্ট সার্ভার কম্পোনেন্ট (RSC)', 'রিঅ্যাক্ট ক্লায়েন্ট কম্পোনেন্ট', 'স্ট্যাটিক এইচটিএমএল টেমপ্লেট', 'এজ ওয়ার্কার ফাংশন'],
    explanation: 'অ্যাপ রাউটারের সমস্ত কম্পোনেন্ট ডিফল্টভাবে সার্ভার কম্পোনেন্ট, যদি না "use client" লেখা থাকে।',
  },
  'Which directive must be added at the very top of a file to declare a Client Component in Next.js?': {
    questionText: 'নেক্সট জেএসে কোনো ফাইলকে ক্লায়েন্ট কম্পোনেন্ট বানাতে ফাইলের একদম শুরুতে কী লিখতে হয়?',
    explanation: '"use client" নির্দেশিকাটি সার্ভার ও ক্লায়েন্ট কোডের সীমানা চিহ্নিত করে।',
  },

  // Python
  'What is the fundamental difference between a Python List and a Python Tuple?': {
    questionText: 'পাইথনে লিস্ট (List) এবং টাপল (Tuple)-এর মধ্যে প্রধান পার্থক্য কী?',
    options: [
      'লিস্ট পরিবর্তনযোগ্য (mutable); টাপল অপরিবর্তনযোগ্য (immutable)',
      'লিস্টে বিভিন্ন ডেটাটাইপ রাখা যায় না; টাপলে রাখা যায়',
      'টাপলে থার্ড ব্র্যাকেট ব্যবহার করা হয়; লিস্টে প্রথম বন্ধনী',
      'লিস্ট স্বয়ংক্রিয়ভাবে সাজানো থাকে; টাপল থাকে না',
    ],
    explanation: 'টাপল তৈরির পর আর কোনো উপাদান যোগ, অপসারণ বা পরিবর্তন করা যায় না, যা এটিকে দ্রুততর ও সুরক্ষিত করে।',
  },
  'What is a Python Generator and what keyword is used to produce values lazily?': {
    questionText: 'পাইথন জেনারেটর কী এবং অলসভাবে (lazy evaluation) মান প্রস্তুত করতে কোন কীওয়ার্ড ব্যবহৃত হয়?',
    options: [
      'একটি ফাংশন যা `yield` কীওয়ার্ড ব্যবহার করে প্রয়োজন অনুযায়ী একেকটি মান উৎপন্ন করে',
      'একটি টুল যা `generate` দিয়ে সি++ কোডে রূপান্তর করে',
      'একটি ক্লাস কনস্ট্রাক্টর যা `return` ব্যবহার করে',
      'মেমোরি প্রোফাইল করার একটি টুল',
    ],
    explanation: 'yield কীওয়ার্ড ব্যবহার করে জেনারেটর মেমোরি খরচ না করে লুপ অনুযায়ী একটি করে মান প্রদান করে।',
  },

  // Node.js
  'In Express.js, what does the `next()` function call do inside middleware?': {
    questionText: 'এক্সপ্রেস জেএসে মিডলওয়্যারের ভেতরে `next()` ফাংশন কলের কাজ কী?',
    options: [
      'রিকোয়েস্ট-রেসপন্স চক্রের পরবর্তী মিডলওয়্যার ফাংশনে নিয়ন্ত্রণ স্থানান্তর করে',
      'এইচটিটিপি রিকোয়েস্ট তৎক্ষণাৎ বন্ধ করে দেয়',
      'বর্তমান মিডলওয়্যার আবার শুরু থেকে চালায়',
      'ব্যবহারকারীকে পরবর্তী রাউটে রিডাইরেক্ট করে',
    ],
    explanation: 'next() না ডাকলে রিকোয়েস্ট আটকে থাকবে এবং পরবর্তী প্রসেসিং বা রাউটে পৌঁছাবে না।',
  },
  'Which underlying C/C++ library handles the event loop and asynchronous I/O operations in Node.js?': {
    questionText: 'নোড জেএসে ইভেন্ট লুপ এবং নন-ব্লকিং I/O পরিচালনা করতে ভেতরের কোন C/C++ লাইব্রেরিটি কাজ করে?',
    explanation: 'libuv লাইব্রেরি নোড জেএস-এর ইভেন্ট লুপ, থ্রেড পুল এবং অ্যাসিঙ্ক ফাইল ও নেটওয়ার্ক I/O সামলায়।',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    try {
      const saved = localStorage.getItem('quizroom_language');
      return saved === 'bn' ? 'bn' : 'en';
    } catch {
      return 'en';
    }
  });

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem('quizroom_language', lang);
    } catch {}
  }, []);

  const toggleLanguage = useCallback(() => {
    setLanguageState((prev) => {
      const next = prev === 'en' ? 'bn' : 'en';
      try {
        localStorage.setItem('quizroom_language', next);
      } catch {}
      return next;
    });
  }, []);

  const t = useCallback(
    (key: string, fallback?: string): string => {
      const dict = UI_TRANSLATIONS[language];
      if (dict && dict[key]) {
        return dict[key];
      }
      return fallback || UI_TRANSLATIONS['en'][key] || key;
    },
    [language]
  );

  const translateQuestion = useCallback(
    <T extends { questionText: string; options?: string[]; explanation?: string }>(
      question: T
    ): T => {
      if (language === 'en') return question;

      const qTrans =
        QUESTION_TRANSLATIONS[question.questionText] ||
        QUESTION_TRANSLATIONS[question.questionText?.trim()];
      if (!qTrans) return question;

      return {
        ...question,
        questionText: qTrans.questionText || question.questionText,
        options:
          qTrans.options && question.options && qTrans.options.length === question.options.length
            ? qTrans.options
            : question.options,
        explanation: qTrans.explanation || question.explanation,
      };
    },
    [language]
  );

  const translateQuiz = useCallback(
    (quiz: IQuiz): IQuiz => {
      if (language === 'en') return quiz;

      const quizMeta = QUIZ_TRANSLATIONS[quiz.title];
      let translatedTitle = quizMeta?.title || quiz.title;
      let translatedDesc = quizMeta?.description || quiz.description;

      if (!quizMeta && quiz.title?.includes('Self-Assessment')) {
        const countMatch = quiz.title.match(/\((\d+)\s*Questions?\)/i);
        const countStr = countMatch ? countMatch[1] : '';
        const subjectStr = quiz.subject || 'প্রোগ্রামিং';
        translatedTitle = `${subjectStr} সেলফ-অ্যাসেসমেন্ট ${countStr ? `(${countStr}টি প্রশ্ন)` : ''}`;
        translatedDesc = `${subjectStr} বিষয়ের ওপর সেলফ-স্টাডি পরীক্ষা। স্বয়ংক্রিয় ফলাফল ও বিস্তারিত ব্যাখ্যা অন্তর্ভুক্ত।`;
      }

      const translatedQuestions = quiz.questions?.map((q) => {
        const qTrans =
          QUESTION_TRANSLATIONS[q.questionText] ||
          QUESTION_TRANSLATIONS[q.questionText?.trim()];
        if (!qTrans) return q;

        return {
          ...q,
          questionText: qTrans.questionText || q.questionText,
          options:
            qTrans.options && qTrans.options.length === q.options.length
              ? qTrans.options
              : q.options,
          explanation: qTrans.explanation || q.explanation,
        };
      });

      return {
        ...quiz,
        title: translatedTitle,
        description: translatedDesc,
        questions: translatedQuestions || quiz.questions,
      };
    },
    [language]
  );

  const contextValue = useMemo(
    () => ({
      language,
      setLanguage,
      toggleLanguage,
      t,
      translateQuiz,
      translateQuestion,
    }),
    [language, setLanguage, toggleLanguage, t, translateQuiz, translateQuestion]
  );

  return <LanguageContext.Provider value={contextValue}>{children}</LanguageContext.Provider>;
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
