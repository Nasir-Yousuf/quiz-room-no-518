import { IJobQuestionItem } from './banglaQuestions.js';

export const extraScienceIctQuestions: IJobQuestionItem[] = [
  // কম্পিউটার হার্ডওয়্যার ও মেমোরি
  {
    questionText: 'কম্পিউটারের ‘মস্তিষ্ক’ (Brain of Computer) কাকে বলা হয়?',
    type: 'multiple-choice',
    options: ['সিপিইউ (CPU - Central Processing Unit)', 'র‌্যাম (RAM)', 'হার্ডডিস্ক (Hard Disk)', 'মাদারবোর্ড (Motherboard)'],
    correctAnswer: 'সিপিইউ (CPU - Central Processing Unit)',
    explanation: 'সিপিইউ (ALU, CU এবং রেজিস্টার সমন্বিত) সকল গাণিতিক ও যৌক্তিক প্রক্রিয়া নিয়ন্ত্রণ করে।',
    points: 1,
    subject: 'General Science & ICT',
    topic: 'কম্পিউটার হার্ডওয়্যার',
    difficulty: 'beginner'
  },
  {
    questionText: 'কোনটি কম্পিউটারের সবচেয়ে দ্রুতগতির মেমোরি (Fastest Memory)?',
    type: 'multiple-choice',
    options: ['রেজিস্টার (Register) / ক্যাশ মেমোরি (Cache)', 'র‌্যাম (RAM)', 'এসএসডি (SSD)', 'রম (ROM)'],
    correctAnswer: 'রেজিস্টার (Register) / ক্যাশ মেমোরি (Cache)',
    explanation: 'সিপিইউ চিপের অভ্যন্তরীণ রেজিস্টার সবচেয়ে দ্রুতগতির এবং তার পরেই ক্যাশ মেমোরির অবস্থান।',
    points: 1,
    subject: 'General Science & ICT',
    topic: 'কম্পিউটার মেমোরি',
    difficulty: 'intermediate'
  },
  {
    questionText: '১ গিগাবাইট (1 GB) সমান কত মেগাবাইট (MB)?',
    type: 'multiple-choice',
    options: ['১০২৪ মেগাবাইট (MB)', '১০০০ মেগাবাইট', '২০৪৮ মেগাবাইট', '৫১২ মেগাবাইট'],
    correctAnswer: '১০২৪ মেগাবাইট (MB)',
    explanation: 'কম্পিউটারের বাইনারি সিস্টেমে ১ গিগাবাইট = ১০২৪ মেগাবাইট = ২¹⁰ মেগাবাইট।',
    points: 1,
    subject: 'General Science & ICT',
    topic: 'মেমোরি একক',
    difficulty: 'beginner'
  },
  {
    questionText: 'কম্পিউটার বন্ধ হয়ে গেলে কোন মেমোরির ডেটা মুছে যায় (উদ্বায়ী বা Volatile Memory)?',
    type: 'multiple-choice',
    options: ['র‌্যাম (RAM - Random Access Memory)', 'রম (ROM)', 'হার্ডডিস্ক', 'পেনড্রাইভ'],
    correctAnswer: 'র‌্যাম (RAM - Random Access Memory)',
    explanation: 'র‌্যাম একটি অস্থায়ী বা ভোলাটাইল মেমোরি, বিদ্যুৎ প্রবাহ বন্ধ হলে এর সংরক্ষিত তথ্য মুছে যায়। রম হলো স্থায়ী।',
    points: 1,
    subject: 'General Science & ICT',
    topic: 'কম্পিউটার মেমোরি',
    difficulty: 'beginner'
  },

  // নেটওয়ার্কিং ও ইন্টারনেট
  {
    questionText: 'OSI রেফারেন্স মডেলে মোট কয়টি লেয়ার বা স্তর রয়েছে?',
    type: 'multiple-choice',
    options: ['৭টি লেয়ার', '৫টি লেয়ার', '৪টি লেয়ার', '৮টি লেয়ার'],
    correctAnswer: '৭টি লেয়ার',
    explanation: '৭টি লেয়ার হলো: Physical, Data Link, Network, Transport, Session, Presentation, Application।',
    points: 1,
    subject: 'General Science & ICT',
    topic: 'নেটওয়ার্কিং',
    difficulty: 'intermediate'
  },
  {
    questionText: 'IPv4 অ্যাড্রেস কত বিটের এবং IPv6 অ্যাড্রেস কত বিটের?',
    type: 'multiple-choice',
    options: ['৩২ বিট এবং ১২৮ বিট', '১৬ বিট এবং ৬৪ বিট', '৬৪ বিট এবং ১২৮ বিট', '৩২ বিট এবং ৬৪ বিট'],
    correctAnswer: '৩২ বিট এবং ১২৮ বিট',
    explanation: 'IPv4 অ্যাড্রেস ৩২ বিটের (৪ বাইট) এবং আধুনিক IPv6 অ্যাড্রেস ১২৮ বিটের (১৬ বাইট)।',
    points: 1,
    subject: 'General Science & ICT',
    topic: 'নেটওয়ার্কিং ও আইপি',
    difficulty: 'intermediate'
  },
  {
    questionText: 'ওয়েবসাইটে ব্যবহৃত ‘HTTPS’ এর সম্পূর্ণ রূপ কী?',
    type: 'multiple-choice',
    options: ['Hypertext Transfer Protocol Secure', 'Hypertext Transmission Protocol System', 'High Transfer Protocol Secure', 'Hyperlink Text Processing System'],
    correctAnswer: 'Hypertext Transfer Protocol Secure',
    explanation: 'HTTPS হলো এনক্রিপ্টেড ও নিরাপদ প্রোটোকল যা SSL/TLS এনক্রিপশনের মাধ্যমে ডেটা পরিবহন করে। পোর্ট ৪৪৩ ব্যবহার করে।',
    points: 1,
    subject: 'General Science & ICT',
    topic: 'ইন্টারনেট প্রোটোকল',
    difficulty: 'beginner'
  },
  {
    questionText: 'ইমেইল ঠিকানায় ‘@’ প্রতীকের উদ্ভাবক বা ইমেইলের জনক কে?',
    type: 'multiple-choice',
    options: ['রে টমলিনসন (Ray Tomlinson)', 'টিম বার্নার্স-লি', 'বিল গেটস', 'চার্লস সিমোনি'],
    correctAnswer: 'রে টমলিনসন (Ray Tomlinson)',
    explanation: '১৯৭১ সালে আমেরিকান প্রোগ্রামার রে টমলিনসন প্রথম নেটওয়ার্ক ইমেইল পদ্ধতি ও @ প্রতীকের ব্যবহার প্রচলন করেন।',
    points: 1,
    subject: 'General Science & ICT',
    topic: 'আইসিটি ইতিহাস',
    difficulty: 'beginner'
  },

  // সাইবার নিরাপত্তা ও সফটওয়্যার
  {
    questionText: 'কোন ধরনের ম্যালওয়্যার ব্যবহারকারীর ফাইল এনক্রিপ্ট করে অর্থ বা মুক্তিপণ দাবি করে?',
    type: 'multiple-choice',
    options: ['র‌্যানসমওয়্যার (Ransomware)', 'স্পাইওয়্যার (Spyware)', 'ওয়ার্ম (Worm)', 'অ্যাডওয়্যার (Adware)'],
    correctAnswer: 'র‌্যানসমওয়্যার (Ransomware)',
    explanation: 'র‌্যানসমওয়্যার (যেমন WannaCry) কম্পিউটারের ডেটা লক বা এনক্রিপ্ট করে ডিক্রিপশন কী-এর জন্য ক্রিপ্টোকারেন্সিতে মুক্তিপণ দাবি করে।',
    points: 1,
    subject: 'General Science & ICT',
    topic: 'সাইবার নিরাপত্তা',
    difficulty: 'beginner'
  },
  {
    questionText: 'প্রতারণামূলক নকল ইমেইল বা ওয়েবসাইটের মাধ্যমে পাসওয়ার্ড ও সংবেদনশীল তথ্য চুরির কৌশলকে কী বলে?',
    type: 'multiple-choice',
    options: ['ফিশিং (Phishing)', 'স্পুফিং (Spoofing)', 'হ্যাকিং', 'ফার্মিং (Pharming)'],
    correctAnswer: 'ফিশিং (Phishing)',
    explanation: 'ব্যাংক বা বিশ্বাসযোগ্য প্রতিষ্ঠানের ছদ্মবেশে গ্রাহকের পিন ও পাসওয়ার্ড হাতানোর কৌশল হলো ফিশিং অ্যাটাক।',
    points: 1,
    subject: 'General Science & ICT',
    topic: 'সাইবার নিরাপত্তা',
    difficulty: 'beginner'
  },
  {
    questionText: 'কোনটি মুক্ত ও উন্মুক্ত উৎসের (Open Source) অপারেটিং সিস্টেম?',
    type: 'multiple-choice',
    options: ['লিনাক্স (Linux)', 'মাইক্রোসফট উইন্ডোজ', 'ম্যাক ওএস (macOS)', 'আইওএস (iOS)'],
    correctAnswer: 'লিনাক্স (Linux)',
    explanation: '১৯৯১ সালে লিনাস টরভাল্ডস কর্তৃক উদ্ভাবিত লিনাক্স কার্নেল একটি ওপেন সোর্স ও অবাধে পরিবর্তনযোগ্য সফটওয়্যার।',
    points: 1,
    subject: 'General Science & ICT',
    topic: 'সফটওয়্যার ও ওএস',
    difficulty: 'beginner'
  },

  // দৈনন্দিন পদার্থবিজ্ঞান
  {
    questionText: 'অপটিক্যাল ফাইবার (Optical Fiber) আলোর কোন প্রাকৃতিক ঘটনার ওপর ভিত্তি করে কাজ করে?',
    type: 'multiple-choice',
    options: ['পূর্ণ অভ্যন্তরীণ প্রতিফলন (Total Internal Reflection)', 'আলোর প্রতিসরণ', 'আলোর বিচ্ছুরণ', 'আলোর ব্যতিচার'],
    correctAnswer: 'পূর্ণ অভ্যন্তরীণ প্রতিফলন (Total Internal Reflection)',
    explanation: 'কাচ বা প্লাস্টিক কোরের মধ্য দিয়ে ক্রান্তি কোণের চেয়ে বড় কোণে আলো ফেলে পূর্ণ অভ্যন্তরীণ প্রতিফলনের মাধ্যমে আলোক সংকেত সঞ্চালিত হয়।',
    points: 1,
    subject: 'General Science & ICT',
    topic: 'পদার্থবিজ্ঞান',
    difficulty: 'beginner'
  },
  {
    questionText: 'মহাকাশে বা চাঁদে কোনো নভোচারী হাত থেকে কলম ছেড়ে দিলে কী ঘটবে?',
    type: 'multiple-choice',
    options: ['কলমটি ধীরে ধীরে চাঁদের পৃষ্ঠে পড়বে (চাঁদের অভিকর্ষ পৃথিবীর ১/৬ ভাগ)', 'কলমটি ওপরের দিকে উড়ে যাবে', 'কলমটি দ্রুত মাটিতে পড়বে', 'কলমটি অদৃশ্য হয়ে যাবে'],
    correctAnswer: 'কলমটি ধীরে ধীরে চাঁদের পৃষ্ঠে পড়বে (চাঁদের অভিকর্ষ পৃথিবীর ১/৬ ভাগ)',
    explanation: 'চাঁদের পৃষ্ঠেও অভিকর্ষীয় টান রয়েছে, যা পৃথিবীর প্রায় এক-ষষ্ঠাংশ (g = ১.৬২ মি/সে²); তাই ধীরে নিচে নামবে।',
    points: 1,
    subject: 'General Science & ICT',
    topic: 'মহাকর্ষ ও অভিকর্ষ',
    difficulty: 'intermediate'
  },
  {
    questionText: 'বৈদ্যুতিক বাল্বের ফিলামেন্ট তৈরিতে কোন ধাতু ব্যবহৃত হয় এবং কেন?',
    type: 'multiple-choice',
    options: ['টাংস্টেন (উচ্চ গলনাঙ্ক ৩৪২২°C এর কারণে)', 'তামা', 'লোহা', 'অ্যালুমিনিয়াম'],
    correctAnswer: 'টাংস্টেন (উচ্চ গলনাঙ্ক ৩৪২২°C এর কারণে)',
    explanation: 'টাংস্টেন (W) ধাতুর গলনাঙ্ক অত্যন্ত বেশি হওয়ায় শ্বেত-তপ্ত হলেও ফিলামেন্ট সহজে গলে যায় না।',
    points: 1,
    subject: 'General Science & ICT',
    topic: 'পদার্থবিজ্ঞান ও ধাতু',
    difficulty: 'beginner'
  },
  {
    questionText: 'শব্দের বেগ সবচেয়ে বেশি কোন মাধ্যমে?',
    type: 'multiple-choice',
    options: ['কঠিন মাধ্যমে (যেমন লোহা/ইস্পাত)', 'তরল মাধ্যমে (পানি)', 'বায়বীয় মাধ্যমে (বাতাস)', 'শূন্য মাধ্যমে'],
    correctAnswer: 'কঠিন মাধ্যমে (যেমন লোহা/ইস্পাত)',
    explanation: 'শব্দের বেগ কঠিন মাধ্যমে সবচেয়ে বেশি (ইস্পাতে প্রায় ৫০০০ মি/সে), তরলে মাঝারি (১৪৫০ মি/সে) ও বাতাসে কম (৩৩২ মি/সে)। শূন্যে শব্দ চলে না।',
    points: 1,
    subject: 'General Science & ICT',
    topic: 'শব্দ ও তরঙ্গ',
    difficulty: 'beginner'
  },

  // দৈনন্দিন রসায়ন ও জীববিজ্ঞান
  {
    questionText: 'শুষ্ক বরফ (Dry Ice) আসলে কী?',
    type: 'multiple-choice',
    options: ['কঠিন কার্বন ডাই-অক্সাইড (Solid CO₂)', 'হিমায়িত নাইট্রোজেন', 'ভারী পানি', 'কঠিন হাইড্রোজেন পারক্সাইড'],
    correctAnswer: 'কঠিন কার্বন ডাই-অক্সাইড (Solid CO₂)',
    explanation: 'কঠিন কার্বন ডাই-অক্সাইড -৭৮.৫°C তাপমাত্রায় ঊর্ধ্বপাতিত হয় সরাসরি গ্যাসে রূপান্তরিত হয়, তাই একে শুষ্ক বরফ বলে।',
    points: 1,
    subject: 'General Science & ICT',
    topic: 'রসায়ন',
    difficulty: 'beginner'
  },
  {
    questionText: 'খাবার সোডার (Baking Soda) রাসায়নিক নাম ও সংকেত কোনটি?',
    type: 'multiple-choice',
    options: ['সোডিয়াম হাইড্রোজেন কার্বনেট বা সোডিয়াম বাইকার্বনেট (NaHCO₃)', 'সোডিয়াম কার্বনেট (Na₂CO₃)', 'ক্যালসিয়াম কার্বনেট (CaCO₃)', 'সোডিয়াম ক্লোরাইড (NaCl)'],
    correctAnswer: 'সোডিয়াম হাইড্রোজেন কার্বনেট বা সোডিয়াম বাইকার্বনেট (NaHCO₃)',
    explanation: 'বেকিং সোডার সংকেত NaHCO₃; কাপড় কাঁচা সোডা হলো সোডিয়াম কার্বনেট ডেকাহাইড্রেট (Na₂CO₃.10H₂O)।',
    points: 1,
    subject: 'General Science & ICT',
    topic: 'দৈনন্দিন রসায়ন',
    difficulty: 'beginner'
  },
  {
    questionText: 'রক্তের সার্বজনীন দাতা (Universal Donor) এবং সার্বজনীন গ্রহীতা (Universal Recipient) রক্ত গ্রুপ কোনটি?',
    type: 'multiple-choice',
    options: ['দাতা O নেগেটিভ (O-ve) এবং গ্রহীতা AB পজিটিভ (AB+ve)', 'দাতা AB এবং গ্রহীতা O', 'দাতা A এবং গ্রহীতা B', 'দাতা O পজিটিভ এবং গ্রহীতা AB নেগেটিভ'],
    correctAnswer: 'দাতা O নেগেটিভ (O-ve) এবং গ্রহীতা AB পজিটিভ (AB+ve)',
    explanation: 'O নেগেটিভ রক্তে কোনো অ্যান্টিজেন (A, B বা Rh) না থাকায় সবাইকে দেওয়া যায়; AB+ রক্তে কোনো অ্যান্টিবডি না থাকায় সবার রক্ত নিতে পারে।',
    points: 1,
    subject: 'General Science & ICT',
    topic: 'জীববিজ্ঞান ও রক্ত',
    difficulty: 'beginner'
  },
  {
    questionText: 'ভিটামিন C এর রাসায়নিক নাম কী এবং এর অভাবে কোন রোগ হয়?',
    type: 'multiple-choice',
    options: ['অ্যাসকরবিক অ্যাসিড; স্কার্ভি রোগ (দাঁতের মাড়ি দিয়ে রক্ত পড়া)', 'রেটিনল; রাতকানা', 'ক্যালসিফেরল; রিকেটস', 'থায়ামিন; বেরিবেরি'],
    correctAnswer: 'অ্যাসকরবিক অ্যাসিড; স্কার্ভি রোগ (দাঁতের মাড়ি দিয়ে রক্ত পড়া)',
    explanation: 'ভিটামিন সি এর রাসায়নিক নাম অ্যাসকরবিক অ্যাসিড। অভাবে স্কার্ভি রোগ হয় এবং ক্ষত সারতে বিলম্ব হয়। তাপে এটি দ্রুত নষ্ট হয়।',
    points: 1,
    subject: 'General Science & ICT',
    topic: 'পুষ্টি ও ভিটামিন',
    difficulty: 'beginner'
  },
  {
    questionText: 'গাছের পাতা সবুজ দেখায় ক্লোরোফিলের কারণে। ক্লোরোফিল অনুতে কোন ধাতব আয়নটি বিদ্যমান?',
    type: 'multiple-choice',
    options: ['ম্যাগনেসিয়াম (Mg)', 'লোহা (Fe)', 'ক্যালসিয়াম (Ca)', 'তামা (Cu)'],
    correctAnswer: 'ম্যাগনেসিয়াম (Mg)',
    explanation: 'হিমোগ্লোবিনের কেন্দ্রে থাকে আয়রন (Fe²⁺) এবং উদ্ভিদের ক্লোরোফিল অনুর কেন্দ্রে সমন্বয়ী পরমাণু থাকে ম্যাগনেসিয়াম (Mg²⁺)।',
    points: 1,
    subject: 'General Science & ICT',
    topic: 'উদ্ভিদবিজ্ঞান ও রসায়ন',
    difficulty: 'intermediate'
  }
];
