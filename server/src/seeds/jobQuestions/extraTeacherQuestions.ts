import { IJobQuestionItem } from './banglaQuestions.js';

export const extraTeacherQuestions: IJobQuestionItem[] = [
  // প্রাথমিক শিক্ষা আইন ও নীতিমালা
  {
    questionText: 'বাংলাদেশে ‘বাধ্যতামূলক প্রাথমিক শিক্ষা আইন’ কত সালে পাস ও কার্যকর করা হয়?',
    type: 'multiple-choice',
    options: ['১৯৯০ সালে পাস এবং ১৯৯২ সালে কার্যকর', '১৯৭৪ সালে', '১৯৯৮ সালে', '২০১০ সালে'],
    correctAnswer: '১৯৯০ সালে পাস এবং ১৯৯২ সালে কার্যকর',
    explanation: '১৯৯০ সালের আইন নম্বর ২৭ দ্বারা বাধ্যতামূলক প্রাথমিক শিক্ষা আইন পাস হয় এবং ১৯৯২ সালের ১লা জানুয়ারি থেকে কার্যকর হয়।',
    points: 1,
    subject: 'Primary Teacher Exam',
    topic: 'শিক্ষা আইন ও নীতিমালা',
    difficulty: 'beginner'
  },
  {
    questionText: 'জাতীয় শিক্ষাক্রম ও পাঠ্যপুস্তক বোর্ড (NCTB) কোন মন্ত্রণালয়ের অধীন?',
    type: 'multiple-choice',
    options: ['শিক্ষা মন্ত্রণালয়', 'প্রাথমিক ও গণশিক্ষা মন্ত্রণালয়', 'তথ্য মন্ত্রণালয়', 'সংস্কৃতি বিষয়ক মন্ত্রণালয়'],
    correctAnswer: 'শিক্ষা মন্ত্রণালয়',
    explanation: 'এনসিটিবি (NCTB) শিক্ষা মন্ত্রণালয়ের মাধ্যমিক ও উচ্চ শিক্ষা বিভাগের অধীনস্থ স্বায়ত্তশাসিত প্রতিষ্ঠান যা প্রাক-প্রাথমিক থেকে দ্বাদশ শ্রেণির কারিকুলাম প্রণয়ন করে।',
    points: 1,
    subject: 'Primary Teacher Exam',
    topic: 'শিক্ষা প্রশাসন',
    difficulty: 'beginner'
  },
  {
    questionText: 'প্রাথমিক শিক্ষক প্রশিক্ষণ ইনস্টিটিউট (PTI) এবং NAPE এর প্রধান কাজ কী?',
    type: 'multiple-choice',
    options: [
      'প্রাথমিক শিক্ষকদের পেশাগত প্রশিক্ষণ ও প্রাথমিক শিক্ষার গবেষণা পরিচালনা করা',
      'বিশ্ববিদ্যালয় ভর্তি পরীক্ষা নেওয়া',
      'মাধ্যমিক শিক্ষকদের পদোন্নতি দেওয়া',
      'স্কুলের ভবন নির্মাণ করা'
    ],
    correctAnswer: 'প্রাথমিক শিক্ষকদের পেশাগত প্রশিক্ষণ ও প্রাথমিক শিক্ষার গবেষণা পরিচালনা করা',
    explanation: 'ডিপিএড/সিইনএড প্রশিক্ষণ পিটিআই (PTI) এবং প্রাথমিক শিক্ষা বিষয়ক জাতীয় একাডেমি হলো নেপ (NAPE, ময়মনসিংহ)।',
    points: 1,
    subject: 'Primary Teacher Exam',
    topic: 'পেশাগত উন্নয়ন ও শিক্ষক প্রশিক্ষণ',
    difficulty: 'beginner'
  },

  // পেডাগোজি ও শিশু মনোবিজ্ঞান
  {
    questionText: 'শিশুর ভাষার বিকাশ (Language Acquisition Device - LAD) সংক্রান্ত সহজাত তত্ত্বের প্রবক্তা কে?',
    type: 'multiple-choice',
    options: ['নোয়াম চমস্কি (Noam Chomsky)', 'বি এফ স্কিনার', 'জঁ পিয়াজে', 'জন লক'],
    correctAnswer: 'নোয়াম চমস্কি (Noam Chomsky)',
    explanation: 'বিখ্যাত ভাষাবিজ্ঞানী নোয়াম চমস্কি দেখিয়েছেন মানবশিশুর মস্তিষ্কে ভাষা অর্জনের একটি সহজাত ক্ষমতা বা LAD থাকে।',
    points: 1,
    subject: 'Primary Teacher Exam',
    topic: 'ভাষা শিখন ও মনোবিজ্ঞান',
    difficulty: 'intermediate'
  },
  {
    questionText: '‘শিখন হলো উদ্দীপক ও প্রতিক্রিয়ার সংযোগ’ (Stimulus-Response Theory)—তত্ত্বের প্রবক্তা কে?',
    type: 'multiple-choice',
    options: ['এডওয়ার্ড থর্নডাইক (E. L. Thorndike)', 'পিয়াজে', 'কোহলার', 'ভাইগটস্কি'],
    correctAnswer: 'এডওয়ার্ড থর্নডাইক (E. L. Thorndike)',
    explanation: 'থর্নডাইক তাঁর বিখ্যাত ‘প্রচেষ্টা ও ভুল সংশোধন’ (Trial and Error) শিখন তত্ত্ব ও ফললাভের সূত্র প্রদান করেন।',
    points: 1,
    subject: 'Primary Teacher Exam',
    topic: 'শিখন তত্ত্ব',
    difficulty: 'intermediate'
  },
  {
    questionText: 'গঠনমূলক বা ফরমেটিভ মূল্যায়ন (Formative Assessment) কখন করা হয়?',
    type: 'multiple-choice',
    options: [
      'পাঠদান চলাকালে শিক্ষার্থীদের অগ্রগতি ও ঘাটতি শনাক্ত করতে',
      'বছর শেষে চূড়ান্ত গ্রেড প্রদানের সময়',
      'ভর্তির পূর্বে যোগ্যতা যাচাই করতে',
      'চাকরি থেকে অবসরের সময়'
    ],
    correctAnswer: 'পাঠদান চলাকালে শিক্ষার্থীদের অগ্রগতি ও ঘাটতি শনাক্ত করতে',
    explanation: 'শিখন চলাকালীন সময়ে ফিডব্যাক প্রদান ও শিক্ষণ পদ্ধতি পরিমার্জনের জন্য ফরমেটিভ মূল্যায়ন করা হয়। সামেটিভ মূল্যায়ন হয় পাঠ শেষে।',
    points: 1,
    subject: 'Primary Teacher Exam',
    topic: 'শিক্ষণ ও মূল্যায়ন',
    difficulty: 'beginner'
  },
  {
    questionText: 'লেভ ভাইগটস্কির শিখন তত্ত্বে "ZPD" এর পূর্ণরূপ কী?',
    type: 'multiple-choice',
    options: [
      'Zone of Proximal Development',
      'Zone of Primary Development',
      'Zero Point Development',
      'Zonal Pedagogy Domain'
    ],
    correctAnswer: 'Zone of Proximal Development',
    explanation: 'ZPD হলো এমন একটি স্তর যেখানে শিশু শিক্ষকের স্ক্যাফোল্ডিং বা সহায়তায় এমন কাজ শিখতে পারে যা একা সম্ভব হতো না।',
    points: 1,
    subject: 'Primary Teacher Exam',
    topic: 'সামাজিক শিখন তত্ত্ব',
    difficulty: 'advanced'
  },

  // প্রাথমিক শিক্ষক নিয়োগ বিগত বছরের বিশেষ প্রশ্ন
  {
    questionText: '‘কুঁড়েঘরের গান’ বা ‘আমাদের গ্রাম’ কবিতার রচয়িতা কে?',
    type: 'multiple-choice',
    options: ['বন্দে আলী মিঞা', 'জসীমউদ্দীন', 'রবীন্দ্রনাথ ঠাকুর', 'কাজী নজরুল ইসলাম'],
    correctAnswer: 'বন্দে আলী মিঞা',
    explanation: '‘আমাদের ছোট গাঁয়ে ছোট ছোট ঘর, থাকি সেথা সবে মিলে কেহ নাহি পর’—কবিতাটির কবি বন্দে আলী মিঞা।',
    points: 1,
    subject: 'Primary Teacher Exam',
    topic: 'শিশুসাহিত্য ও প্রাথমিক পাঠ্যবই',
    difficulty: 'beginner'
  },
  {
    questionText: 'কোন সংখ্যার ৩/৭ অংশ ৪৮ এর সমান?',
    type: 'multiple-choice',
    options: ['১১২', '১০৮', '১২০', '৯৬'],
    correctAnswer: '১১২',
    explanation: '৩x / ৭ = ৪৮ ⇒ x = (৪৮ × ৭) / ৩ = ১৬ × ৭ = ১১২।',
    points: 1,
    subject: 'Primary Teacher Exam',
    topic: 'প্রাথমিক শিক্ষক গণিত',
    difficulty: 'beginner'
  },
  {
    questionText: 'দুটি সংখ্যার যোগফল ৫০ এবং বিয়োগফল ১০ হলে বড় সংখ্যাটি কত?',
    type: 'multiple-choice',
    options: ['৩০', '২০', '৩৫', '২৫'],
    correctAnswer: '৩০',
    explanation: 'বড় সংখ্যা = (যোগফল + বিয়োগফল) / ২ = (৫০ + ১০) / ২ = ৬০ / ২ = ৩০। ছোট সংখ্যা = ২০।',
    points: 1,
    subject: 'Primary Teacher Exam',
    topic: 'প্রাথমিক শিক্ষক গণিত',
    difficulty: 'beginner'
  },
  {
    questionText: 'Fill in the blank: "He had a _____ headache."',
    type: 'multiple-choice',
    options: ['severe / bad', 'hard', 'strong', 'deep'],
    correctAnswer: 'severe / bad',
    explanation: 'Headache takes the collocative adjective "severe" or "bad".',
    points: 1,
    subject: 'Primary Teacher Exam',
    topic: 'প্রাথমিক শিক্ষক ইংরেজি',
    difficulty: 'beginner'
  },
  {
    questionText: '‘সূর্য’ শব্দের সমার্থক শব্দ কোনটি?',
    type: 'multiple-choice',
    options: ['ভাস্কর / মার্তণ্ড / সবিতা / রবি', 'শশাঙ্ক', 'বিধু', 'নিশাকর'],
    correctAnswer: 'ভাস্কর / মার্তণ্ড / সবিতা / রবি',
    explanation: 'সূর্যের সমার্থক: রবি, ভাস্কর, দিনমণি, মার্তণ্ড, সবিতা, তপন, অর্ক। শশাঙ্ক ও বিধু হলো চাঁদের সমার্থক।',
    points: 1,
    subject: 'Primary Teacher Exam',
    topic: 'প্রাথমিক শিক্ষক বাংলা',
    difficulty: 'beginner'
  },
  {
    questionText: '১ ইঞ্চি সমান কত সেন্টিমিটার?',
    type: 'multiple-choice',
    options: ['২.৫৪ সেমি', '২.৪৫ সেমি', '৩.০ সেমি', '২.৩৬ সেমি'],
    correctAnswer: '২.৫৪ সেমি',
    explanation: '১ ইঞ্চি = ২.৫৪ সেন্টিমিটার (আন্তর্জাতিক এসআই পরিমাপ পদ্ধতি)। ১ ফুট = ১২ ইঞ্চি = ৩০.৪৮ সেমি।',
    points: 1,
    subject: 'Primary Teacher Exam',
    topic: 'পরিমাপ ও একক',
    difficulty: 'beginner'
  },
  {
    questionText: 'উদ্ভিদ খাদ্য তৈরির জন্য সূর্যালোক ও ক্লোরোফিলের উপস্থিতিতে বাতাস থেকে কী গ্রহণ করে?',
    type: 'multiple-choice',
    options: ['কার্বন ডাই-অক্সাইড (CO₂)', 'অক্সিজেন', 'নাইট্রোজেন', 'হাইড্রোজেন'],
    correctAnswer: 'কার্বন ডাই-অক্সাইড (CO₂)',
    explanation: 'সালোকসংশ্লেষণ প্রক্রিয়ায় উদ্ভিদ পানি ও CO₂ ব্যবহার করে গ্লুকোজ ও অক্সিজেন তৈরি করে।',
    points: 1,
    subject: 'Primary Teacher Exam',
    topic: 'প্রাথমিক বিজ্ঞান',
    difficulty: 'beginner'
  },
  {
    questionText: 'একটি বইয়ের মূল্য ৬০ টাকা। এটি শতকরা ২০ ভাগ কমিশনে বিক্রি করলে কত টাকা ছাড় পাওয়া যাবে?',
    type: 'multiple-choice',
    options: ['১২ টাকা', '১৫ টাকা', '১০ টাকা', '৮ টাকা'],
    correctAnswer: '১২ টাকা',
    explanation: 'ছাড় = ৬০ × (২০/১০০) = ১২ টাকা। বিক্রয়মূল্য = ৬০ - ১২ = ৪৮ টাকা।',
    points: 1,
    subject: 'Primary Teacher Exam',
    topic: 'প্রাথমিক শিক্ষক গণিত',
    difficulty: 'beginner'
  }
];
