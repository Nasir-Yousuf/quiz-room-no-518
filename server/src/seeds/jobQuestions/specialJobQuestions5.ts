import { IJobQuestionItem } from './banglaQuestions.js';

export const specialJobQuestions5: IJobQuestionItem[] = [
  // ========================================================
  // 1. ENGLISH GRAMMAR & VOCABULARY (40 questions)
  // ========================================================
  {
    questionText: 'Change into passive voice: "Who taught you French?"',
    type: 'multiple-choice',
    options: [
      'By whom were you taught French?',
      'Who was French taught by you?',
      'By whom French was taught to you?',
      'Whom did you teach French?'
    ],
    correctAnswer: 'By whom were you taught French?',
    explanation: 'Passive structure for "Who": By whom + auxiliary (were) + subject (you) + V3 (taught) + object (French)?',
    points: 1,
    subject: 'English',
    topic: 'Voice Change',
    difficulty: 'intermediate'
  },
  {
    questionText: 'Change into passive voice: "Do the work immediately."',
    type: 'multiple-choice',
    options: [
      'Let the work be done immediately.',
      'The work should be done.',
      'Let you do the work immediately.',
      'You are asked to do work.'
    ],
    correctAnswer: 'Let the work be done immediately.',
    explanation: 'Imperative sentences with transitive verbs take: Let + object + be + past participle (V3).',
    points: 1,
    subject: 'English',
    topic: 'Voice Change',
    difficulty: 'beginner'
  },
  {
    questionText: 'Change into passive: "Panic seized the crowd."',
    type: 'multiple-choice',
    options: [
      'The crowd was seized with panic.',
      'The crowd was seized by panic.',
      'The crowd had been seized in panic.',
      'Panic was seized by crowd.'
    ],
    correctAnswer: 'The crowd was seized with panic.',
    explanation: 'Verbs like "seize", "fill", and "satisfy" take preposition "with" in the passive voice rather than "by".',
    points: 1,
    subject: 'English',
    topic: 'Voice Change',
    difficulty: 'advanced'
  },
  {
    questionText: 'Change the narration: He said, "I am reading an engrossing novel."',
    type: 'multiple-choice',
    options: [
      'He said that he was reading an engrossing novel.',
      'He said that I was reading an engrossing novel.',
      'He said he has been reading an engrossing novel.',
      'He said that he had read an engrossing novel.'
    ],
    correctAnswer: 'He said that he was reading an engrossing novel.',
    explanation: 'Present continuous tense ("am reading") changes to past continuous tense ("was reading") in indirect speech.',
    points: 1,
    subject: 'English',
    topic: 'Narration Change',
    difficulty: 'beginner'
  },
  {
    questionText: 'Change into indirect speech: The teacher said to the students, "The earth moves round the sun."',
    type: 'multiple-choice',
    options: [
      'The teacher told the students that the earth moves round the sun.',
      'The teacher told the students that the earth moved round the sun.',
      'The teacher said that earth had moved round the sun.',
      'The teacher asked students if earth moves round the sun.'
    ],
    correctAnswer: 'The teacher told the students that the earth moves round the sun.',
    explanation: 'Universal truths, scientific facts, and habitual facts do NOT change their tense in indirect speech.',
    points: 1,
    subject: 'English',
    topic: 'Narration Change',
    difficulty: 'beginner'
  },
  {
    questionText: 'Choose the correct sentence:',
    type: 'multiple-choice',
    options: [
      'I prefer tea to coffee.',
      'I prefer tea than coffee.',
      'I prefer tea more than coffee.',
      'I prefer tea over coffee.'
    ],
    correctAnswer: 'I prefer tea to coffee.',
    explanation: 'Latin comparatives like "prefer", "senior", "junior", "superior", "inferior" take preposition "to", not "than".',
    points: 1,
    subject: 'English',
    topic: 'Sentence Correction',
    difficulty: 'beginner'
  },
  {
    questionText: 'Choose the correct sentence:',
    type: 'multiple-choice',
    options: [
      'He insisted on my going there.',
      'He insisted to go there.',
      'He insisted me on going there.',
      'He insisted for my going there.'
    ],
    correctAnswer: 'He insisted on my going there.',
    explanation: '"Insist" takes the preposition "on" (or upon) followed by a possessive adjective + gerund (my going).',
    points: 1,
    subject: 'English',
    topic: 'Sentence Correction',
    difficulty: 'intermediate'
  },
  {
    questionText: 'Choose the correct sentence:',
    type: 'multiple-choice',
    options: [
      'The scenery of Cox’s Bazar is breathtaking.',
      'The sceneries of Cox’s Bazar are breathtaking.',
      'The scenery of Cox’s Bazar are breathtaking.',
      'A scenery of Cox’s Bazar is breathtaking.'
    ],
    correctAnswer: 'The scenery of Cox’s Bazar is breathtaking.',
    explanation: '"Scenery" is an uncountable abstract noun and never takes a plural form (-ies) or plural verb.',
    points: 1,
    subject: 'English',
    topic: 'Nouns & Numbers',
    difficulty: 'beginner'
  },
  {
    questionText: 'Choose the correct sentence:',
    type: 'multiple-choice',
    options: [
      'All the information was reliable.',
      'All the informations were reliable.',
      'All information are reliable.',
      'All the informations was reliable.'
    ],
    correctAnswer: 'All the information was reliable.',
    explanation: '"Information" is uncountable and singular; "informations" is grammatically incorrect.',
    points: 1,
    subject: 'English',
    topic: 'Nouns & Numbers',
    difficulty: 'beginner'
  },
  {
    questionText: 'Choose the correct sentence:',
    type: 'multiple-choice',
    options: [
      'He gave me some good advice.',
      'He gave me some good advices.',
      'He gave me an advice.',
      'He gave me a few advices.'
    ],
    correctAnswer: 'He gave me some good advice.',
    explanation: '"Advice" is uncountable; we say "some advice" or "a piece of advice", never "advices".',
    points: 1,
    subject: 'English',
    topic: 'Nouns & Numbers',
    difficulty: 'beginner'
  },
  {
    questionText: 'What is the noun form of the verb "DEPART"?',
    type: 'multiple-choice',
    options: ['Departure', 'Departed', 'Department', 'Departing'],
    correctAnswer: 'Departure',
    explanation: 'The noun form of depart is "departure" (as in airport departures).',
    points: 1,
    subject: 'English',
    topic: 'Parts of Speech',
    difficulty: 'beginner'
  },
  {
    questionText: 'What is the adjective form of the noun "COURAGE"?',
    type: 'multiple-choice',
    options: ['Courageous', 'Courageously', 'Encourage', 'Couraging'],
    correctAnswer: 'Courageous',
    explanation: 'Noun: Courage; Adjective: Courageous; Adverb: Courageously; Verb: Encourage.',
    points: 1,
    subject: 'English',
    topic: 'Parts of Speech',
    difficulty: 'beginner'
  },
  {
    questionText: 'What is the verb form of the adjective "BROAD"?',
    type: 'multiple-choice',
    options: ['Broaden', 'Breadth', 'Broadly', 'Broadness'],
    correctAnswer: 'Broaden',
    explanation: 'Adjective: Broad; Verb: Broaden (to make broad); Noun: Breadth.',
    points: 1,
    subject: 'English',
    topic: 'Parts of Speech',
    difficulty: 'beginner'
  },
  {
    questionText: 'What is the antonym of "PRODIGAL"?',
    type: 'multiple-choice',
    options: ['Frugal / Thrifty', 'Extravagant', 'Wasteful', 'Generous'],
    correctAnswer: 'Frugal / Thrifty',
    explanation: '"Prodigal" means wastefully extravagant or spending money recklessly; its opposite is "frugal" or "thrifty".',
    points: 1,
    subject: 'English',
    topic: 'Antonyms',
    difficulty: 'intermediate'
  },
  {
    questionText: 'What is the synonym of "CANDID"?',
    type: 'multiple-choice',
    options: ['Frank / Outspoken / Honest', 'Deceitful', 'Secretive', 'Shy'],
    correctAnswer: 'Frank / Outspoken / Honest',
    explanation: '"Candid" describes truthfulness, frankness, and straightforwardness.',
    points: 1,
    subject: 'English',
    topic: 'Synonyms',
    difficulty: 'beginner'
  },

  // ========================================================
  // 2. GENERAL KNOWLEDGE - BANGLADESH & INTERNATIONAL (40 items)
  // ========================================================
  {
    questionText: 'বাংলাদেশের সংবিধানের কোন অনুচ্ছেদে বাক ও ভাব প্রকাশের স্বাধীনতা এবং সংবাদপত্রের স্বাধীনতার নিশ্চয়তা দেওয়া হয়েছে?',
    type: 'multiple-choice',
    options: ['অনুচ্ছেদ ৩৯', 'অনুচ্ছেদ ৩৬', 'অনুচ্ছেদ ২৭', 'অনুচ্ছেদ ৩২'],
    correctAnswer: 'অনুচ্ছেদ ৩৯',
    explanation: '৩৯(১) চিন্তা ও বিবেকের স্বাধীনতা এবং ৩৯(২) বাক ও ভাব প্রকাশের স্বাধীনতা এবং সংবাদক্ষেত্রের স্বাধীনতার অধিকার নিশ্চিত করে।',
    points: 1,
    subject: 'General Knowledge',
    topic: 'সংবিধানের মৌলিক অধিকার',
    difficulty: 'intermediate'
  },
  {
    questionText: 'সংবিধান অনুযায়ী বাংলাদেশে রাষ্ট্রপতি হতে হলে সর্বনিম্ন বয়স কত হতে হয়?',
    type: 'multiple-choice',
    options: ['৩৫ বছর', '২৫ বছর', '৩০ বছর', '৪০ বছর'],
    correctAnswer: '৩৫ বছর',
    explanation: 'সংবিধানের ৪৮(৪) অনুচ্ছেদ অনুযায়ী রাষ্ট্রপতির ন্যূনতম বয়স ৩৫ বছর। সংসদ সদস্য ও প্রধানমন্ত্রীর জন্য ন্যূনতম বয়স ২৫ বছর।',
    points: 1,
    subject: 'General Knowledge',
    topic: 'সংবিধান ও শাসনব্যবস্থা',
    difficulty: 'beginner'
  },
  {
    questionText: 'বাংলাদেশের জাতীয় সংসদের অধিবেশন কে আহ্বান, স্থগিত ও ভেঙে দেন?',
    type: 'multiple-choice',
    options: ['মহামান্য রাষ্ট্রপতি (প্রধানমন্ত্রীর লিখিত পরামর্শে)', 'স্পিকার', 'প্রধানমন্ত্রী', 'প্রধান বিচারপতি'],
    correctAnswer: 'মহামান্য রাষ্ট্রপতি (প্রধানমন্ত্রীর লিখিত পরামর্শে)',
    explanation: 'সংবিধানের ৭২(১) অনুচ্ছেদ অনুযায়ী রাষ্ট্রপতি সংসদের অধিবেশন আহ্বান, স্থগিত ও সমাপ্ত ঘোষণা করেন। স্পিকার সভাপতিত্ব করেন।',
    points: 1,
    subject: 'General Knowledge',
    topic: 'জাতীয় সংসদ',
    difficulty: 'beginner'
  },
  {
    questionText: 'একটি সংসদ অধিবেশন সমাপ্তির কত দিনের মধ্যে পরবর্তী অধিবেশন আহ্বান করা বাধ্যতামূলক?',
    type: 'multiple-choice',
    options: ['৬০ দিন', '৯০ দিন', '৩০ দিন', '৪৫ দিন'],
    correctAnswer: '৬০ দিন',
    explanation: 'সংবিধানের ৭২(১) অনুচ্ছেদ অনুযায়ী এক অধিবেশনের সমাপ্তি ও পরবর্তী অধিবেশনের প্রথম বৈঠকের মধ্যবর্তী বিরতি ৬০ দিনের অধিক হবে না।',
    points: 1,
    subject: 'General Knowledge',
    topic: 'জাতীয় সংসদ',
    difficulty: 'intermediate'
  },
  {
    questionText: 'জাতীয় সংসদের কোরাম গঠিত হতে কতজন সদস্যের উপস্থিতি প্রয়োজন হয়?',
    type: 'multiple-choice',
    options: ['৬০ জন সংসদ সদস্য', '৫০ জন', '৭৫ জন', '১০০ জন'],
    correctAnswer: '৬০ জন সংসদ সদস্য',
    explanation: 'সংবিধানের ৭৫(২) অনুচ্ছেদ অনুসারে জাতীয় সংসদের বৈঠক বৈধভাবে পরিচালনার জন্য ন্যূনতম ৬০ জন সদস্যের উপস্থিতি আবশ্যক।',
    points: 1,
    subject: 'General Knowledge',
    topic: 'জাতীয় সংসদ',
    difficulty: 'intermediate'
  },
  {
    questionText: 'আন্তর্জাতিক নদী হিসেবে গঙ্গা নদীর বাংলাদেশ অংশের নাম কী?',
    type: 'multiple-choice',
    options: ['পদ্মা নদী', 'মেঘনা নদী', 'যমুনা নদী', 'সুরমা নদী'],
    correctAnswer: 'পদ্মা নদী',
    explanation: 'হিমালয়ের গঙ্গোত্রী হিমবাহ থেকে সৃষ্ট গঙ্গা নদী চাঁপাইনবাবগঞ্জ দিয়ে বাংলাদেশে প্রবেশ করে ‘পদ্মা’ নামে প্রবাহিত হয়েছে।',
    points: 1,
    subject: 'General Knowledge',
    topic: 'বাংলাদেশের নদী',
    difficulty: 'beginner'
  },
  {
    questionText: 'ব্রহ্মপুত্র নদ কোন স্থানে যমুনা নদীতে রূপান্তরিত হয়েছে?',
    type: 'multiple-choice',
    options: ['দেওয়ানগঞ্জ, জামালপুর (১৭৮৭ সালের প্রলয়ঙ্করী ভূমিকম্পের পর)', 'গোয়ালন্দ', 'ভৈরব', 'কুড়িগ্রাম'],
    correctAnswer: 'দেওয়ানগঞ্জ, জামালপুর (১৭৮৭ সালের প্রলয়ঙ্করী ভূমিকম্পের পর)',
    explanation: '১৭৮৭ সালের ভূমিকম্পে ব্রহ্মপুত্রের তলদেশ উঁচু হয়ে নতুন জলধারা তৈরি হয়, যা দেওয়ানগঞ্জ থেকে দক্ষিণে যমুনা নামে প্রবাহিত হয়।',
    points: 1,
    subject: 'General Knowledge',
    topic: 'বাংলাদেশের নদ-নদী',
    difficulty: 'intermediate'
  },
  {
    questionText: 'বাংলাদেশ ও মায়ানমারকে বিভক্তকারী সীমান্ত নদী কোনটি?',
    type: 'multiple-choice',
    options: ['নাফ নদী (দৈর্ঘ্য প্রায় ৬৪ কিমি)', 'কর্ণফুলী নদী', 'সাঙ্গু নদী', 'মাতামুহুরী নদী'],
    correctAnswer: 'নাফ নদী (দৈর্ঘ্য প্রায় ৬৪ কিমি)',
    explanation: 'কক্সবাজারের টেকনাফ সীমান্তে নাফ নদী বাংলাদেশ ও মায়ানমারের মধ্যবর্তী প্রাকৃতিক আন্তর্জাতিক সীমারেখা তৈরি করেছে।',
    points: 1,
    subject: 'General Knowledge',
    topic: 'সীমান্ত নদী',
    difficulty: 'beginner'
  },
  {
    questionText: 'বাংলাদেশ ও ভারতের মধ্যে বিদ্যমান যৌথ অভিন্ন নদী কয়টি?',
    type: 'multiple-choice',
    options: ['৫৪টি নদী (এবং মায়ানমারের সাথে ৩টি)', '৫৭টি', '৫২টি', '৪৮টি'],
    correctAnswer: '৫৪টি নদী (এবং মায়ানমারের সাথে ৩টি)',
    explanation: 'যৌথ নদী কমিশন (JRC) স্বীকৃত বাংলাদেশ ও ভারতের মধ্যে ৫৪টি এবং মায়ানমারের সাথে ৩টি মিলিয়ে মোট ৫৭টি আন্তঃসীমান্ত নদী রয়েছে।',
    points: 1,
    subject: 'General Knowledge',
    topic: 'আন্তর্জাতিক নদী',
    difficulty: 'intermediate'
  },
  {
    questionText: '‘ছিটমহল’ বিনিময় ঐতিহাসিক স্থল সীমান্ত চুক্তি (LBA) কত তারিখে কার্যকর হয়?',
    type: 'multiple-choice',
    options: ['১লা আগস্ট ২০১৫ মধ্যরাতে', '১লা জুলাই ২০১৪', '১৬ই ডিসেম্বর ২০১৫', '২৬শে মার্চ ২০১৬'],
    correctAnswer: '১লা আগস্ট ২০১৫ মধ্যরাতে',
    explanation: '১৯৭৪ সালের মুজিব-ইন্দিরা চুক্তি বাস্তবায়নের মাধ্যমে ১লা আগস্ট ২০১৫ সালে বাংলাদেশ ও ভারতের ১৬২টি ছিটমহল বিনিময় সমাপ্ত হয়।',
    points: 1,
    subject: 'General Knowledge',
    topic: 'ছিটমহল ও সীমান্ত',
    difficulty: 'beginner'
  },
  {
    questionText: 'ইউক্রেনের রাজধানীর নাম কী এবং মুদ্রা কোনটি?',
    type: 'multiple-choice',
    options: ['কিয়েভ (Kyiv) এবং রিভনিয়া (Hryvnia)', 'মস্কো এবং রুবল', 'ওয়ারশ এবং জলটি', 'বুখারেস্ট এবং লেউ'],
    correctAnswer: 'কিয়েভ (Kyiv) এবং রিভনিয়া (Hryvnia)',
    explanation: 'পূর্ব ইউরোপীয় দেশ ইউক্রেনের রাজধানী কিয়েভ এবং জাতীয় মুদ্রার নাম রিভনিয়া (UAH)।',
    points: 1,
    subject: 'General Knowledge',
    topic: 'বিশ্ব রাজধানী ও মুদ্রা',
    difficulty: 'beginner'
  },
  {
    questionText: 'তুরস্কের রাজধানীর নাম কী এবং মুদ্রা কোনটি?',
    type: 'multiple-choice',
    options: ['আঙ্কারা (Ankara) এবং তুর্কি লিরা (Lira)', 'ইস্তাম্বুল এবং দিনার', 'ইজমির এবং রিয়াল', 'আন্টালিয়া এবং ইউরো'],
    correctAnswer: 'আঙ্কারা (Ankara) এবং তুর্কি লিরা (Lira)',
    explanation: 'তুরস্কের রাজধানী আঙ্কারা (ঐতিহাসিক বৃহত্তম শহর ইস্তাম্বুল) এবং এর মুদ্রা হলো লিরা।',
    points: 1,
    subject: 'General Knowledge',
    topic: 'বিশ্ব রাজধানী ও মুদ্রা',
    difficulty: 'beginner'
  },
  {
    questionText: 'বিশ্বের বৃহত্তম দ্বীপ কোনটি?',
    type: 'multiple-choice',
    options: ['গ্রিনল্যান্ড (ডেনমার্কের অধীন স্বায়ত্তশাসিত)', 'নিউগিনি', 'মাদাগাস্কার', 'বোর্নিও'],
    correctAnswer: 'গ্রিনল্যান্ড (ডেনমার্কের অধীন স্বায়ত্তশাসিত)',
    explanation: '২১ লক্ষ বর্গকিলোমিটার আয়তনের গ্রিনল্যান্ড বিশ্বের বৃহত্তম অ-মহাদেশীয় দ্বীপ।',
    points: 1,
    subject: 'General Knowledge',
    topic: 'বিশ্ব ভূগোল',
    difficulty: 'beginner'
  },
  {
    questionText: 'বিশ্বের গভীরতম হ্রদ কোনটি?',
    type: 'multiple-choice',
    options: ['বৈকাল হ্রদ (রাশিয়া, গভীরতা ১৬৪২ মিটার)', 'ক্যাস্পিয়ান সাগর', 'সুপিরিয়র হ্রদ', 'ভিক্টোরিয়া হ্রদ'],
    correctAnswer: 'বৈকাল হ্রদ (রাশিয়া, গভীরতা ১৬৪২ মিটার)',
    explanation: 'রাশিয়ার সাইবেরিয়ায় অবস্থিত বৈকাল হ্রদ বিশ্বের প্রাচীনতম ও গভীরতম মিঠা পানির হ্রদ। বৃহত্তম ক্যাস্পিয়ান সাগর।',
    points: 1,
    subject: 'General Knowledge',
    topic: 'বিশ্ব ভূগোল',
    difficulty: 'beginner'
  },
  {
    questionText: 'কোন শহর দুটি মহাদেশে (এশিয়া ও ইউরোপ) অবস্থিত?',
    type: 'multiple-choice',
    options: ['ইস্তাম্বুল, তুরস্ক', 'কায়রো, মিশর', 'মস্কো, রাশিয়া', 'বাকু, আজারবাইজান'],
    correctAnswer: 'ইস্তাম্বুল, তুরস্ক',
    explanation: 'বসফরাস প্রণালী দ্বারা বিভক্ত ইস্তাম্বুল বিশ্বের একমাত্র ঐতিহাসিক মেগাসিটি যা এশিয়া ও ইউরোপ উভয় মহাদেশে বিস্তৃত।',
    points: 1,
    subject: 'General Knowledge',
    topic: 'বিশ্ব ভূগোল',
    difficulty: 'beginner'
  },

  // ========================================================
  // 3. MATHEMATICS & REASONING (40 questions)
  // ========================================================
  {
    questionText: 'এক ব্যক্তি ২০ টাকায় ১২টি ডিম ক্রয় করে ২০ টাকায় ৮টি ডিম বিক্রয় করলে শতকরা কত লাভ হবে?',
    type: 'multiple-choice',
    options: ['৫০%', '৩৩.৩৩%', '২৫%', '৪০%'],
    correctAnswer: '৫০%',
    explanation: 'টাকায় ১২টি কিনে ৮টি বেচলে লাভ = [(১২ - ৮) / ৮] × ১০০% = (৪/৮) × ১০০% = ৫০% লাভ।',
    points: 1,
    subject: 'Mathematics',
    topic: 'লাভ-ক্ষতি শর্টকাট',
    difficulty: 'intermediate'
  },
  {
    questionText: 'একটি সংখ্যার ৪ গুণ থেকে ১৬ বিয়োগ করলে ফলাফল হয় ওই সংখ্যার দ্বিগুণ অপেক্ষা ২৪ বেশি। সংখ্যাটি কত?',
    type: 'multiple-choice',
    options: ['২০', '১৫', '২৫', '১৮'],
    correctAnswer: '২০',
    explanation: '৪x - ১৬ = ২x + ২৪ ⇒ ৪x - ২x = ২৪ + ১৬ ⇒ ২x = ৪০ ⇒ x = ২০।',
    points: 1,
    subject: 'Mathematics',
    topic: 'বীজগণিত - সমীকরণ',
    difficulty: 'beginner'
  },
  {
    questionText: 'একটি চতুর্ভুজের চার কোণের সমষ্টি কত সমকোণ?',
    type: 'multiple-choice',
    options: ['৪ সমকোণ (৩৬০°)', '২ সমকোণ (১৮০°)', '৩ সমকোণ', '৮ সমকোণ'],
    correctAnswer: '৪ সমকোণ (৩৬০°)',
    explanation: 'যেকোনো চতুর্ভুজের অন্তঃস্থ চার কোণের সমষ্টি সর্বদা ৩৬০ ডিগ্রি বা ৪ সমকোণ।',
    points: 1,
    subject: 'Mathematics',
    topic: 'জ্যামিতি - চতুর্ভুজ',
    difficulty: 'beginner'
  },
  {
    questionText: 'যদি একটি সমদ্বিবাহু ত্রিভুজের শীর্ষকোণ ৮০° হয়, তবে এর অপর দুটি ভূমিসংলগ্ন কোণের প্রতিটির মান কত?',
    type: 'multiple-choice',
    options: ['৫০°', '৪০°', '৬০°', '৪৫°'],
    correctAnswer: '৫০°',
    explanation: 'সমদ্বিবাহু ত্রিভুজের ভূমির কোণদ্বয় পরস্পর সমান। প্রতিটি কোণ = (১৮০° - ৮০°) / ২ = ১০০° / ২ = ৫০°।',
    points: 1,
    subject: 'Mathematics',
    topic: 'জ্যামিতি - ত্রিভুজ',
    difficulty: 'beginner'
  },
  {
    questionText: 'কোনো বৃত্তের ব্যাসার্ধ ৫০% কমালে ক্ষেত্রফল শতকরা কত হ্রাস পাবে?',
    type: 'multiple-choice',
    options: ['৭৫%', '৫০%', '২৫%', '৬০%'],
    correctAnswer: '৭৫%',
    explanation: 'হ্রাস = -৫০ - ৫০ + (৫০ × ৫০)/১০০ = -১০০ + ২৫ = -৭৫% (অর্থাৎ ৭৫% ক্ষেত্রফল হ্রাস পাবে)।',
    points: 1,
    subject: 'Mathematics',
    topic: 'শতকরা ও বৃত্ত',
    difficulty: 'intermediate'
  }
];
