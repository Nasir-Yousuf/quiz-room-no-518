import { IJobQuestionItem } from './banglaQuestions.js';

export const extraMathQuestions: IJobQuestionItem[] = [
  // পাটিগণিত - বাস্তব সংখ্যা ও লসাগু-গসাগু
  {
    questionText: 'কোন ক্ষুদ্রতম সংখ্যাকে ৪, ৫ এবং ৬ দ্বারা ভাগ করলে প্রতি ক্ষেত্রে ৩ অবশিষ্ট থাকে?',
    type: 'multiple-choice',
    options: ['৬৩', '৫৭', '৬৭', '৩৩'],
    correctAnswer: '৬৩',
    explanation: '৪, ৫ ও ৬ এর লসাগু = ৬০। সংখ্যাটি হবে ৬০ + ৩ = ৬৩।',
    points: 1,
    subject: 'Mathematics',
    topic: 'লসাগু ও গসাগু',
    difficulty: 'beginner'
  },
  {
    questionText: 'দুটি সংখ্যার গসাগু ১১ এবং লসাগু ৭৭০০। একটি সংখ্যা ২৭৫ হলে অপর সংখ্যাটি কত?',
    type: 'multiple-choice',
    options: ['৩০৮', '৩১৮', '২৯৮', '৩২৮'],
    correctAnswer: '৩০৮',
    explanation: 'দুটি সংখ্যার গুণফল = লসাগু × গসাগু। অপর সংখ্যা = (১১ × ৭৭০০) / ২৭৫ = ৩০৮।',
    points: 1,
    subject: 'Mathematics',
    topic: 'লসাগু ও গসাগু',
    difficulty: 'intermediate'
  },
  {
    questionText: '১ থেকে ১০০ পর্যন্ত মৌলিক সংখ্যা কয়টি?',
    type: 'multiple-choice',
    options: ['২৫টি', '২৪টি', '২৬টি', '২১টি'],
    correctAnswer: '২৫টি',
    explanation: '১ থেকে ১০০ পর্যন্ত মোট ২৫টি মৌলিক সংখ্যা রয়েছে (মডেল: ৪৪২২৩২২৩২১ = ২৫)।',
    points: 1,
    subject: 'Mathematics',
    topic: 'বাস্তব সংখ্যা',
    difficulty: 'beginner'
  },
  {
    questionText: 'কোনো মৌলিক সংখ্যার উৎপাদক বা গুণনীয়ক কয়টি থাকে?',
    type: 'multiple-choice',
    options: ['২টি (১ এবং সংখ্যাটি নিজে)', '১টি', '৩টি', 'অসংখ্য'],
    correctAnswer: '২টি (১ এবং সংখ্যাটি নিজে)',
    explanation: 'যে সংখ্যার ১ এবং ওই সংখ্যাটি ছাড়া অন্য কোনো উৎপাদক থাকে না তাকে মৌলিক সংখ্যা বলে।',
    points: 1,
    subject: 'Mathematics',
    topic: 'বাস্তব সংখ্যা',
    difficulty: 'beginner'
  },
  {
    questionText: 'সবচেয়ে ছোট মৌলিক সংখ্যা কোনটি?',
    type: 'multiple-choice',
    options: ['২', '১', '৩', '০'],
    correctAnswer: '২',
    explanation: '২ হলো একমাত্র জোড় মৌলিক সংখ্যা এবং ক্ষুদ্রতম মৌলিক সংখ্যা। ১ মৌলিক সংখ্যা নয়।',
    points: 1,
    subject: 'Mathematics',
    topic: 'বাস্তব সংখ্যা',
    difficulty: 'beginner'
  },

  // পাটিগণিত - শতকরা ও লাভ-ক্ষতি
  {
    questionText: 'একটি কলম ৫০ টাকায় কিনে ৬০ টাকায় বিক্রয় করলে শতকরা কত লাভ হয়?',
    type: 'multiple-choice',
    options: ['২০%', '১০%', '২৫%', '১৫%'],
    correctAnswer: '২০%',
    explanation: 'লাভ = ৬০ - ৫০ = ১০ টাকা। শতকরা লাভ = (১০ / ৫০) × ১০০% = ২০%।',
    points: 1,
    subject: 'Mathematics',
    topic: 'শতকরা ও লাভ-ক্ষতি',
    difficulty: 'beginner'
  },
  {
    questionText: 'চিনির মূল্য ২৫% বৃদ্ধি পাওয়ায় একটি পরিবার চিনির ব্যবহার কত শতাংশ কমালে খরচ অপরিবর্তিত থাকবে?',
    type: 'multiple-choice',
    options: ['২০%', '২৫%', '১৬.৬৭%', '৩০%'],
    correctAnswer: '২০%',
    explanation: 'ব্যবহার হ্রাসের হার = [১০০ × ২৫ / (১০০ + ২৫)]% = (২৫০০ / ১২৫)% = ২০%।',
    points: 1,
    subject: 'Mathematics',
    topic: 'শতকরা ও লাভ-ক্ষতি',
    difficulty: 'intermediate'
  },
  {
    questionText: 'একটি দ্রব্যের ক্রয়মূল্য ৮০০ টাকা। ১০% ক্ষতিতে দ্রব্যটির বিক্রয়মূল্য কত?',
    type: 'multiple-choice',
    options: ['৭২০ টাকা', '৭৫০ টাকা', '৭০০ টাকা', '৭৮০ টাকা'],
    correctAnswer: '৭২০ টাকা',
    explanation: '১০% ক্ষতিতে বিক্রয়মূল্য = ৮০০ × (১ - ০.১০) = ৮০০ × ০.৯০ = ৭২০ টাকা।',
    points: 1,
    subject: 'Mathematics',
    topic: 'শতকরা ও লাভ-ক্ষতি',
    difficulty: 'beginner'
  },
  {
    questionText: 'একটি বই ১২০ টাকায় কিনে ১০০ টাকায় বিক্রয় করলে শতকরা কত ক্ষতি হবে?',
    type: 'multiple-choice',
    options: ['১৬.৬৭%', '২০%', '১৫%', '২৫%'],
    correctAnswer: '১৬.৬৭%',
    explanation: 'ক্ষতি = ২০ টাকা। শতকরা ক্ষতি = (২০ / ১২০) × ১০০% = ১৬.৬৭% বা ১৬ সমস্ত ২/৩%।',
    points: 1,
    subject: 'Mathematics',
    topic: 'শতকরা ও লাভ-ক্ষতি',
    difficulty: 'intermediate'
  },
  {
    questionText: 'টাকায় ৩টি করে লেবু কিনে টাকায় ২টি করে বিক্রয় করলে শতকরা কত লাভ হবে?',
    type: 'multiple-choice',
    options: ['৫০%', '৩৩.৩৩%', '২৫%', '৬০%'],
    correctAnswer: '৫০%',
    explanation: '১টির ক্রয়মূল্য ১/৩ টাকা, বিক্রয়মূল্য ১/২ টাকা। লাভ = ১/২ - ১/৩ = ১/৬ টাকা। শতকরা লাভ = [(১/৬) / (১/৩)] × ১০০% = ৫০%।',
    points: 1,
    subject: 'Mathematics',
    topic: 'শতকরা ও লাভ-ক্ষতি',
    difficulty: 'intermediate'
  },
  {
    questionText: 'একটি ঘড়ি ৫৬০ টাকায় বিক্রয় করায় ১২% ক্ষতি হলো। ঘড়িটির ক্রয়মূল্য কত ছিল?',
    type: 'multiple-choice',
    options: ['৬৩৬.৩৬ টাকা', '৬০০ টাকা', '৬২৫ টাকা', '৬৫০ টাকা'],
    correctAnswer: '৬৩৬.৩৬ টাকা',
    explanation: '৮৮% = ৫৬০ টাকা ⇒ ১০০% = (৫৬০ × ১০০) / ৮৮ = ৬৩৬.৩৬ টাকা।',
    points: 1,
    subject: 'Mathematics',
    topic: 'শতকরা ও লাভ-ক্ষতি',
    difficulty: 'intermediate'
  },

  // পাটিগণিত - সরল সুদ ও চক্রবৃদ্ধি সুদ
  {
    questionText: 'বার্ষিক ১০% হারে ৫০০ টাকার ৩ বছরের সরল সুদ কত?',
    type: 'multiple-choice',
    options: ['১৫০ টাকা', '১০০ টাকা', '২০০ টাকা', '১৮০ টাকা'],
    correctAnswer: '১৫০ টাকা',
    explanation: 'I = Pnr = ৫০০ × ৩ × (১০/১০০) = ১৫০ টাকা।',
    points: 1,
    subject: 'Mathematics',
    topic: 'সরল ও চক্রবৃদ্ধি সুদ',
    difficulty: 'beginner'
  },
  {
    questionText: 'কত বছরে ১০% হারে যেকোনো মূলধন সুদে-আসলে দ্বিগুণ হবে?',
    type: 'multiple-choice',
    options: ['১০ বছর', '৮ বছর', '১২ বছর', '১৫ বছর'],
    correctAnswer: '১০ বছর',
    explanation: 'সুদে-আসলে দ্বিগুণ হলে সুদ = আসল। সময় n = ১০০ / r = ১০০ / ১০ = ১০ বছর।',
    points: 1,
    subject: 'Mathematics',
    topic: 'সরল ও চক্রবৃদ্ধি সুদ',
    difficulty: 'beginner'
  },
  {
    questionText: 'বার্ষিক ৫% হারে কত বছরে কোনো আসল সুদে-আসলে তিনগুণ হবে?',
    type: 'multiple-choice',
    options: ['৪০ বছর', '২০ বছর', '৩০ বছর', '৫০ বছর'],
    correctAnswer: '৪০ বছর',
    explanation: 'সুদে-আসলে তিনগুণ হলে সুদ আসলের ২ গুণ (I = 2P)। সময় n = (২ × ১০০) / ৫ = ৪০ বছর।',
    points: 1,
    subject: 'Mathematics',
    topic: 'সরল ও চক্রবৃদ্ধি সুদ',
    difficulty: 'intermediate'
  },
  {
    questionText: '১০০০ টাকার ১০% চক্রবৃদ্ধি হারে ২ বছরের চক্রবৃদ্ধি মূলধন (Compound Amount) কত হবে?',
    type: 'multiple-choice',
    options: ['১২১০ টাকা', '১২০০ টাকা', '১২৫০ টাকা', '১১০০ টাকা'],
    correctAnswer: '১২১০ টাকা',
    explanation: 'C = P(1 + r)² = ১০০০ × (১.১)² = ১০০০ × ১.২১ = ১২১০ টাকা।',
    points: 1,
    subject: 'Mathematics',
    topic: 'সরল ও চক্রবৃদ্ধি সুদ',
    difficulty: 'intermediate'
  },
  {
    questionText: '১০০০ টাকার ১০% হারে ২ বছরের চক্রবৃদ্ধি সুদ ও সরল সুদের পার্থক্য কত?',
    type: 'multiple-choice',
    options: ['১০ টাকা', '২০ টাকা', '১৫ টাকা', '৫ টাকা'],
    correctAnswer: '১০ টাকা',
    explanation: 'পার্থক্য = P × r² = ১০০০ × (০.১)² = ১০০০ × ০.০১ = ১০ টাকা।',
    points: 1,
    subject: 'Mathematics',
    topic: 'সরল ও চক্রবৃদ্ধি সুদ',
    difficulty: 'intermediate'
  },

  // পাটিগণিত - অনুপাত ও সমানুপাত এবং বয়স
  {
    questionText: 'ক ও খ এর বেতনের অনুপাত ৭ : ৫। ক, খ অপেক্ষা ২০০ টাকা বেশি পেলে খ এর বেতন কত?',
    type: 'multiple-choice',
    options: ['৫০০ টাকা', '৭০০ টাকা', '৬০০ টাকা', '৪৫০ টাকা'],
    correctAnswer: '৫০০ টাকা',
    explanation: 'অনুপাতের পার্থক্য ৭ - ৫ = ২ একক = ২০০ টাকা ⇒ ১ একক = ১০০ টাকা। খ এর বেতন = ৫ × ১০০ = ৫০০ টাকা।',
    points: 1,
    subject: 'Mathematics',
    topic: 'অনুপাত ও সমানুপাত',
    difficulty: 'beginner'
  },
  {
    questionText: 'পিতা ও পুত্রের বর্তমান বয়সের অনুপাত ৭ : ২। ৫ বছর পর তাদের বয়সের অনুপাত ৮ : ৩ হলে পিতার বর্তমান বয়স কত?',
    type: 'multiple-choice',
    options: ['৩৫ বছর', '৪২ বছর', '২৮ বছর', '৪০ বছর'],
    correctAnswer: '৩৫ বছর',
    explanation: '(৭x + ৫)/(২x + ৫) = ৮/৩ ⇒ ২১x + ১৫ = ১৬x + ৪০ ⇒ ৫x = ২৫ ⇒ x = ৫। পিতার বয়স ৭ × ৫ = ৩৫ বছর।',
    points: 1,
    subject: 'Mathematics',
    topic: 'বয়স ও অনুপাত',
    difficulty: 'intermediate'
  },
  {
    questionText: '৬০ লিটার মিশ্রণে অ্যাসিড ও পানির অনুপাত ৭ : ৩। ওই মিশ্রণে কত লিটার পানি মেশালে অনুপাত ৩ : ৭ হবে?',
    type: 'multiple-choice',
    options: ['৮০ লিটার', '৪০ লিটার', '৬০ লিটার', '৫০ লিটার'],
    correctAnswer: '৮০ লিটার',
    explanation: 'অ্যাসিড = (৬০ × ৭)/১০ = ৪২ লি., পানি = ১৮ লি.। (৪২) / (১৮ + x) = ৩ / ৭ ⇒ ৩(১৮ + x) = ২৯৪ ⇒ ৫৪ + ৩x = ২৯৪ ⇒ ৩x = ২৪০ ⇒ x = ৮০ লিটার।',
    points: 1,
    subject: 'Mathematics',
    topic: 'অনুপাত ও মিশ্রণ',
    difficulty: 'advanced'
  },
  {
    questionText: 'একটি সোনার গহনার ওজন ১৬ গ্রাম। এতে সোনা ও তামার অনুপাত ৩ : ১। এতে আর কত গ্রাম সোনা মেশালে অনুপাত ৪ : ১ হবে?',
    type: 'multiple-choice',
    options: ['৪ গ্রাম', '২ গ্রাম', '৬ গ্রাম', '৩ গ্রাম'],
    correctAnswer: '৪ গ্রাম',
    explanation: 'সোনা = ১২ গ্রাম, তামা = ৪ গ্রাম। সোনা x গ্রাম যোগ করলে: (১২ + x)/৪ = ৪/১ ⇒ ১২ + x = ১৬ ⇒ x = ৪ গ্রাম।',
    points: 1,
    subject: 'Mathematics',
    topic: 'অনুপাত ও মিশ্রণ',
    difficulty: 'intermediate'
  },

  // পাটিগণিত - ঐকিক নিয়ম, কাজ ও সময়
  {
    questionText: '১২ জন শ্রমিক একটি কাজ ৬ দিনে করতে পারে। একই কাজ ৮ দিনে করতে কতজন শ্রমিক লাগবে?',
    type: 'multiple-choice',
    options: ['৯ জন', '১০ জন', '৮ জন', '১১ জন'],
    correctAnswer: '৯ জন',
    explanation: 'শ্রমিক × দিন = ধ্রুবক। ১২ × ৬ = ৮ × x ⇒ x = ৭২ / ৮ = ৯ জন।',
    points: 1,
    subject: 'Mathematics',
    topic: 'ঐকিক নিয়ম',
    difficulty: 'beginner'
  },
  {
    questionText: 'ক একটি কাজ ১০ দিনে এবং খ তা ১৫ দিনে করতে পারে। তারা একসাথে কাজটি কত দিনে সম্পন্ন করতে পারবে?',
    type: 'multiple-choice',
    options: ['৬ দিনে', '৫ দিনে', '৮ দিনে', '৭ দিনে'],
    correctAnswer: '৬ দিনে',
    explanation: 'একসাথে সময় = (ab) / (a + b) = (১০ × ১৫) / (১০ + ১৫) = ১৫০ / ২৫ = ৬ দিনে।',
    points: 1,
    subject: 'Mathematics',
    topic: 'কাজ ও সময়',
    difficulty: 'intermediate'
  },
  {
    questionText: 'একটি পানির ট্যাংকে দুটি নল লাগানো আছে। ১ম নল দ্বারা ২০ মিনিটে এবং ২য় নল দ্বারা ৩০ মিনিটে ট্যাংকটি পূর্ণ হয়। নল দুটি একসাথে খুলে দিলে কত মিনিটে ট্যাংকটি পূর্ণ হবে?',
    type: 'multiple-choice',
    options: ['১২ মিনিটে', '১৫ মিনিটে', '১০ মিনিটে', '১৮ মিনিটে'],
    correctAnswer: '১২ মিনিটে',
    explanation: 'সময় = (২০ × ৩০) / (২০ + ৩০) = ৬০০ / ৫০ = ১২ মিনিটে।',
    points: 1,
    subject: 'Mathematics',
    topic: 'নল ও চৌবাচ্চা',
    difficulty: 'intermediate'
  },
  {
    questionText: 'একটি পাইপ দিয়ে একটি চৌবাচ্চা ১২ মিনিটে পূর্ণ হয় এবং অপর পাইপ দিয়ে ২৪ মিনিটে খালি হয়। নল দুটি একসাথে খুললে চৌবাচ্চাটি পূর্ণ হতে কত সময় লাগবে?',
    type: 'multiple-choice',
    options: ['২৪ মিনিটে', '১৮ মিনিটে', '১২ মিনিটে', '৩৬ মিনিটে'],
    correctAnswer: '২৪ মিনিটে',
    explanation: '১ মিনিটে পূর্ণ হয় = ১/১২ - ১/২৪ = ১/২৪ অংশ। সুতরাং পূর্ণ হতে ২৪ মিনিট লাগবে।',
    points: 1,
    subject: 'Mathematics',
    topic: 'নল ও চৌবাচ্চা',
    difficulty: 'intermediate'
  },

  // পাটিগণিত - গতিবেগ, ট্রেন, নৌকা ও স্রোত
  {
    questionText: 'একটি ট্রেনের গতিবেগ ঘণ্টায় ৭২ কিমি হলে প্রতি সেকেন্ডে ট্রেনটির গতিবেগ কত মিটার?',
    type: 'multiple-choice',
    options: ['২০ মিটার', '১৮ মিটার', '২৫ মিটার', '১৫ মিটার'],
    correctAnswer: '২০ মিটার',
    explanation: 'কিমি/ঘণ্টাকে মি/সেকেন্ডে রূপান্তর করতে ৫/১৮ দিয়ে গুণ করতে হয়: ৭২ × (৫/১৮) = ২০ মিটার/সেকেন্ড।',
    points: 1,
    subject: 'Mathematics',
    topic: 'গতিবেগ ও ট্রেন',
    difficulty: 'beginner'
  },
  {
    questionText: '১২০ মিটার দীর্ঘ একটি ট্রেন ঘণ্টায় ৫৪ কিমি বেগে একটি ল্যাম্পপোস্ট অতিক্রম করতে কত সময় নেবে?',
    type: 'multiple-choice',
    options: ['৮ সেকেন্ড', '১০ সেকেন্ড', '৬ সেকেন্ড', '১২ সেকেন্ড'],
    correctAnswer: '৮ সেকেন্ড',
    explanation: 'বেগ = ৫৪ × (৫/১৮) = ১৫ মি/সে। সময় = দূরত্ব / বেগ = ১২০ / ১৫ = ৮ সেকেন্ড।',
    points: 1,
    subject: 'Mathematics',
    topic: 'গতিবেগ ও ট্রেন',
    difficulty: 'intermediate'
  },
  {
    questionText: 'স্থির পানিতে নৌকার গতিবেগ ১০ কিমি/ঘণ্টা এবং স্রোতের বেগ ২ কিমি/ঘণ্টা হলে স্রোতের অনুকূলে গতিবেগ কত?',
    type: 'multiple-choice',
    options: ['১২ কিমি/ঘণ্টা', '৮ কিমি/ঘণ্টা', '১০ কিমি/ঘণ্টা', '১৪ কিমি/ঘণ্টা'],
    correctAnswer: '১২ কিমি/ঘণ্টা',
    explanation: 'অনুকূলে বেগ = নৌকার বেগ + স্রোতের বেগ = ১০ + ২ = ১২ কিমি/ঘণ্টা। প্রতিকূলে বেগ = ১০ - ২ = ৮ কিমি/ঘণ্টা।',
    points: 1,
    subject: 'Mathematics',
    topic: 'নৌকা ও স্রোত',
    difficulty: 'beginner'
  },
  {
    questionText: 'স্রোতের অনুকূলে একটি নৌকা ৩ ঘণ্টায় ৩৬ কিমি যায়। স্রোতের প্রতিকূলে ওই দূরত্ব যেতে ৬ ঘণ্টা সময় লাগলে নৌকার স্থির বেগ কত?',
    type: 'multiple-choice',
    options: ['৯ কিমি/ঘণ্টা', '৩ কিমি/ঘণ্টা', '১২ কিমি/ঘণ্টা', '৬ কিমি/ঘণ্টা'],
    correctAnswer: '৯ কিমি/ঘণ্টা',
    explanation: 'অনুকূলে বেগ u = ৩৬/৩ = ১২ কিমি/ঘণ্টা। প্রতিকূলে বেগ v = ৩৬/৬ = ৬ কিমি/ঘণ্টা। নৌকার বেগ = (u + v)/২ = (১২ + ৬)/২ = ৯ কিমি/ঘণ্টা।',
    points: 1,
    subject: 'Mathematics',
    topic: 'নৌকা ও স্রোত',
    difficulty: 'intermediate'
  },

  // পাটিগণিত - গড়
  {
    questionText: '১, ২, ৩, ৪, ৫, ৬, ৭ এর গড় কত?',
    type: 'multiple-choice',
    options: ['৪', '৩.৫', '৫', '৪.৫'],
    correctAnswer: '৪',
    explanation: 'ক্রমিক বিজোড় সংখ্যক সংখ্যার ক্ষেত্রে মধ্যম পদই গড়। সমষ্টি = ২৮ / ৭ = ৪।',
    points: 1,
    subject: 'Mathematics',
    topic: 'গড়',
    difficulty: 'beginner'
  },
  {
    questionText: '৫টি সংখ্যার গড় ২০। একটি সংখ্যা বাদ দিলে গড় হয় ১৮। বাদ দেওয়া সংখ্যাটি কত?',
    type: 'multiple-choice',
    options: ['২৮', '২৬', '২২', '৩০'],
    correctAnswer: '২৮',
    explanation: '৫টি সংখ্যার সমষ্টি = ৫ × ২০ = ১০০। ৪টি সংখ্যার সমষ্টি = ৪ × ১৮ = ৭২। বাদ দেওয়া সংখ্যা = ১০০ - ৭২ = ২৮।',
    points: 1,
    subject: 'Mathematics',
    topic: 'গড়',
    difficulty: 'beginner'
  },

  // বীজগণিত - মান নির্ণয় ও উৎপাদক
  {
    questionText: 'যদি x + y = 7 এবং x - y = 3 হয়, তবে xy এর মান কত?',
    type: 'multiple-choice',
    options: ['10', '12', '14', '8'],
    correctAnswer: '10',
    explanation: 'xy = [(x + y)² - (x - y)²] / 4 = [7² - 3²] / 4 = [49 - 9] / 4 = 40 / 4 = 10।',
    points: 1,
    subject: 'Mathematics',
    topic: 'বীজগণিতীয় মান নির্ণয়',
    difficulty: 'beginner'
  },
  {
    questionText: 'যদি x + 1/x = 3 হয়, তবে x² + 1/x² এর মান কত?',
    type: 'multiple-choice',
    options: ['7', '9', '11', '6'],
    correctAnswer: '7',
    explanation: 'x² + 1/x² = (x + 1/x)² - 2 = 3² - 2 = 9 - 2 = 7।',
    points: 1,
    subject: 'Mathematics',
    topic: 'বীজগণিতীয় মান নির্ণয়',
    difficulty: 'beginner'
  },
  {
    questionText: 'যদি x + 1/x = 2 হয়, তবে x³ + 1/x³ এর মান কত?',
    type: 'multiple-choice',
    options: ['2', '4', '8', '6'],
    correctAnswer: '2',
    explanation: 'x³ + 1/x³ = (x + 1/x)³ - 3(x + 1/x) = 2³ - 3(2) = 8 - 6 = 2 (এখানে x = 1)।',
    points: 1,
    subject: 'Mathematics',
    topic: 'বীজগণিতীয় মান নির্ণয়',
    difficulty: 'beginner'
  },
  {
    questionText: 'যদি a + b = 5 এবং ab = 6 হয়, তবে a³ + b³ এর মান কত?',
    type: 'multiple-choice',
    options: ['35', '45', '25', '65'],
    correctAnswer: '35',
    explanation: 'a³ + b³ = (a + b)³ - 3ab(a + b) = 5³ - 3(6)(5) = 125 - 90 = 35।',
    points: 1,
    subject: 'Mathematics',
    topic: 'বীজগণিতীয় মান নির্ণয়',
    difficulty: 'intermediate'
  },
  {
    questionText: 'x² - 5x + 6 এর উৎপাদক জোড়া কোনটি?',
    type: 'multiple-choice',
    options: ['(x - 2)(x - 3)', '(x + 2)(x + 3)', '(x - 1)(x - 6)', '(x + 1)(x - 6)'],
    correctAnswer: '(x - 2)(x - 3)',
    explanation: 'x² - 3x - 2x + 6 = x(x - 3) - 2(x - 3) = (x - 2)(x - 3)।',
    points: 1,
    subject: 'Mathematics',
    topic: 'উৎপাদকে বিশ্লেষণ',
    difficulty: 'beginner'
  },
  {
    questionText: 'x² - y² - 2y - 1 এর উৎপাদক কোনটি?',
    type: 'multiple-choice',
    options: ['(x + y + 1)(x - y - 1)', '(x - y + 1)(x + y - 1)', '(x + y - 1)(x - y + 1)', '(x - y - 1)(x - y - 1)'],
    correctAnswer: '(x + y + 1)(x - y - 1)',
    explanation: 'x² - (y² + 2y + 1) = x² - (y + 1)² = [x + (y + 1)][x - (y + 1)] = (x + y + 1)(x - y - 1)।',
    points: 1,
    subject: 'Mathematics',
    topic: 'উৎপাদকে বিশ্লেষণ',
    difficulty: 'intermediate'
  },

  // বীজগণিত - সূচক ও লগারিদম
  {
    questionText: '2^(x + 3) = 32 হলে x এর মান কত?',
    type: 'multiple-choice',
    options: ['2', '3', '1', '5'],
    correctAnswer: '2',
    explanation: '32 = 2⁵ ⇒ 2^(x + 3) = 2⁵ ⇒ x + 3 = 5 ⇒ x = 2।',
    points: 1,
    subject: 'Mathematics',
    topic: 'সূচক',
    difficulty: 'beginner'
  },
  {
    questionText: '4^x = 8 হলে x এর মান কত?',
    type: 'multiple-choice',
    options: ['3/2', '2/3', '2', '1/2'],
    correctAnswer: '3/2',
    explanation: '(2²)^x = 2³ ⇒ 2^(2x) = 2³ ⇒ 2x = 3 ⇒ x = 3/2।',
    points: 1,
    subject: 'Mathematics',
    topic: 'সূচক',
    difficulty: 'intermediate'
  },
  {
    questionText: 'log₂ 64 এর মান কত?',
    type: 'multiple-choice',
    options: ['6', '5', '7', '8'],
    correctAnswer: '6',
    explanation: '64 = 2⁶ ⇒ log₂ 2⁶ = 6 log₂ 2 = 6 × 1 = 6।',
    points: 1,
    subject: 'Mathematics',
    topic: 'লগারিদম',
    difficulty: 'beginner'
  },
  {
    questionText: 'log₁₀ 0.001 এর মান কত?',
    type: 'multiple-choice',
    options: ['-3', '-2', '3', '-1'],
    correctAnswer: '-3',
    explanation: '0.001 = 10⁻³ ⇒ log₁₀ 10⁻³ = -3।',
    points: 1,
    subject: 'Mathematics',
    topic: 'লগারিদম',
    difficulty: 'beginner'
  },

  // সমান্তর ও গুণোত্তর ধারা
  {
    questionText: '১ + ২ + ৩ + ..... + ১০০ ধারাটির সমষ্টি কত?',
    type: 'multiple-choice',
    options: ['৫০৫০', '৫০০০', '৫১০০', '৫০০৫'],
    correctAnswer: '৫০৫০',
    explanation: 'স্বাভাবিক সংখ্যার সমষ্টি S = [n(n + 1)] / 2 = (১০০ × ১০১) / ২ = ৫০ × ১০১ = ৫০৫০।',
    points: 1,
    subject: 'Mathematics',
    topic: 'সমান্তর ধারা',
    difficulty: 'beginner'
  },
  {
    questionText: '১ + ৩ + ৫ + ..... + (২n - ১) অর্থাৎ প্রথম n সংখ্যক বিজোড় সংখ্যার সমষ্টি কত?',
    type: 'multiple-choice',
    options: ['n²', 'n(n + 1)', 'n(n - 1)', '2n²'],
    correctAnswer: 'n²',
    explanation: 'প্রথম n সংখ্যক স্বাভাবিক বিজোড় সংখ্যার সমষ্টি সর্বদা n²।',
    points: 1,
    subject: 'Mathematics',
    topic: 'সমান্তর ধারা',
    difficulty: 'beginner'
  },
  {
    questionText: '২ + ৪ + ৮ + ১৬ + ..... ধারাটির ৭ম পদ কত?',
    type: 'multiple-choice',
    options: ['১২৮', '৬৪', '২৫৬', '৫১২'],
    correctAnswer: '১২৮',
    explanation: 'গুণোত্তর ধারার সাধারণ অনুপাত r = ২, ১ম পদ a = ২। ৭ম পদ = ar⁶ = ২ × ২⁶ = ২ × ৬৪ = ১২৮।',
    points: 1,
    subject: 'Mathematics',
    topic: 'গুণোত্তর ধারা',
    difficulty: 'intermediate'
  },
  {
    questionText: '৫ + ৮ + ১১ + ১৪ + ..... ধারাটির কোন পদ ৩৩২?',
    type: 'multiple-choice',
    options: ['১১০তম', '১০৯তম', '১১১তম', '১০০তম'],
    correctAnswer: '১১০তম',
    explanation: 'a + (n - 1)d = ৩৩২ ⇒ ৫ + (n - 1)৩ = ৩৩২ ⇒ ৩(n - 1) = ৩২৭ ⇒ n - 1 = ১০৯ ⇒ n = ১১০।',
    points: 1,
    subject: 'Mathematics',
    topic: 'সমান্তর ধারা',
    difficulty: 'intermediate'
  },

  // জ্যামিতি - কোণ ও রেখা
  {
    questionText: 'এক সমকোণ অপেক্ষা বড় কিন্তু দুই সমকোণ অপেক্ষা ছোট কোণকে কী বলে?',
    type: 'multiple-choice',
    options: ['স্থূলকোণ', 'সূক্ষ্মকোণ', 'প্রবৃদ্ধ কোণ', 'সরলকোণ'],
    correctAnswer: 'স্থূলকোণ',
    explanation: '৯০° থেকে ১৮০° এর মধ্যবর্তী কোণকে স্থূলকোণ বলে। ১৮০° থেকে ৩৬০° এর মধ্যবর্তী কোণ প্রবৃদ্ধ কোণ।',
    points: 1,
    subject: 'Mathematics',
    topic: 'জ্যামিতি - কোণ',
    difficulty: 'beginner'
  },
  {
    questionText: 'দুটি কোণের সমষ্টি ৯০° হলে তাদের একটিকে অপরটির কী কোণ বলে?',
    type: 'multiple-choice',
    options: ['পূরক কোণ (Complementary Angle)', 'সম্পূরক কোণ', 'বিপ্রতীপ কোণ', 'একান্তর কোণ'],
    correctAnswer: 'পূরক কোণ (Complementary Angle)',
    explanation: 'দুটি কোণের যোগফল ৯০° হলে তারা পরস্পরের পূরক কোণ; যোগফল ১৮০° হলে পরস্পরের সম্পূরক কোণ।',
    points: 1,
    subject: 'Mathematics',
    topic: 'জ্যামিতি - কোণ',
    difficulty: 'beginner'
  },
  {
    questionText: '৭০° কোণের সম্পূরক কোণ কত ডিগ্রি?',
    type: 'multiple-choice',
    options: ['১১০°', '২০°', '১০০°', '১২০°'],
    correctAnswer: '১১০°',
    explanation: 'সম্পূরক কোণ = ১৮০° - ৭০° = ১১০°।',
    points: 1,
    subject: 'Mathematics',
    topic: 'জ্যামিতি - কোণ',
    difficulty: 'beginner'
  },
  {
    questionText: '৫০° কোণের পূরক কোণ কত ডিগ্রি?',
    type: 'multiple-choice',
    options: ['৪০°', '১৩০°', '৫০°', '৪৫°'],
    correctAnswer: '৪০°',
    explanation: 'পূরক কোণ = ৯০° - ৫০° = ৪০°।',
    points: 1,
    subject: 'Mathematics',
    topic: 'জ্যামিতি - কোণ',
    difficulty: 'beginner'
  },

  // জ্যামিতি - ত্রিভুজ
  {
    questionText: 'একটি ত্রিভুজের তিন কোণের অনুপাত ২ : ৩ : ৫ হলে ক্ষুদ্রতম কোণটি কত ডিগ্রি?',
    type: 'multiple-choice',
    options: ['৩৬°', '৫৪°', '৯০°', '৪৫°'],
    correctAnswer: '৩৬°',
    explanation: 'অনুপাত যোগফল = ২ + ৩ + ৫ = ১০। ত্রিভুজের তিন কোণের সমষ্টি ১৮০°। ক্ষুদ্রতম কোণ = (১৮০° × ২) / ১০ = ৩৬°।',
    points: 1,
    subject: 'Mathematics',
    topic: 'জ্যামিতি - ত্রিভুজ',
    difficulty: 'beginner'
  },
  {
    questionText: 'একটি সমবাহু ত্রিভুজের এক বাহুর দৈর্ঘ্য ৪ সেমি হলে এর ক্ষেত্রফল কত?',
    type: 'multiple-choice',
    options: ['4√3 বর্গ সেমি', '8√3 বর্গ সেমি', '16 বর্গ সেমি', '2√3 বর্গ সেমি'],
    correctAnswer: '4√3 বর্গ সেমি',
    explanation: 'সমবাহু ত্রিভুজের ক্ষেত্রফল = (√3 / 4) × a² = (√3 / 4) × 16 = 4√3 বর্গ সেমি।',
    points: 1,
    subject: 'Mathematics',
    topic: 'জ্যামিতি - পরিমিতি',
    difficulty: 'intermediate'
  },
  {
    questionText: 'একটি সমকোণী ত্রিভুজের অতিভুজ ১৩ সেমি ও ভূমি ১২ সেমি হলে উচ্চতা বা লম্ব কত সেমি?',
    type: 'multiple-choice',
    options: ['৫ সেমি', '৪ সেমি', '৬ সেমি', '৭ সেমি'],
    correctAnswer: '৫ সেমি',
    explanation: 'পিথাগোরাস উপপাদ্য: লম্ব = √(১৩² - ১২²) = √(১৬৯ - ১৪৪) = √২৫ = ৫ সেমি (৫-১২-১৩ ট্রিপ্লেট)।',
    points: 1,
    subject: 'Mathematics',
    topic: 'জ্যামিতি - পিথাগোরাস',
    difficulty: 'beginner'
  },

  // জ্যামিতি - বৃত্ত
  {
    questionText: 'বৃত্তের পরিধি ও ব্যাসের অনুপাত কত?',
    type: 'multiple-choice',
    options: ['π (পাই বা প্রায় ২২/৭)', '২π', 'π/২', '৪π'],
    correctAnswer: 'π (পাই বা প্রায় ২২/৭)',
    explanation: 'পরিধি = ২πr এবং ব্যাস = ২r। অনুপাত = ২πr / ২r = π।',
    points: 1,
    subject: 'Mathematics',
    topic: 'জ্যামিতি - বৃত্ত',
    difficulty: 'beginner'
  },
  {
    questionText: 'বৃত্তের পরিধি ১৪π সেমি হলে বৃত্তের ব্যাসার্ধ কত সেমি?',
    type: 'multiple-choice',
    options: ['৭ সেমি', '১৪ সেমি', '৩.৫ সেমি', '২৮ সেমি'],
    correctAnswer: '৭ সেমি',
    explanation: 'পরিধি = ২πr = ১৪π ⇒ ২r = ১৪ ⇒ r = ৭ সেমি।',
    points: 1,
    subject: 'Mathematics',
    topic: 'জ্যামিতি - বৃত্ত',
    difficulty: 'beginner'
  },
  {
    questionText: 'অর্ধবৃত্তস্থ কোণ সর্বদা কত ডিগ্রি?',
    type: 'multiple-choice',
    options: ['এক সমকোণ (৯০°)', 'দুই সমকোণ (১৮০°)', '৪৫°', '৬০°'],
    correctAnswer: 'এক সমকোণ (৯০°)',
    explanation: 'জ্যামিতির মৌলিক উপপাদ্য: যেকোনো অর্ধবৃত্তস্থ কোণ সর্বদা এক সমকোণ বা ৯০° হয়।',
    points: 1,
    subject: 'Mathematics',
    topic: 'জ্যামিতি - বৃত্ত',
    difficulty: 'beginner'
  },
  {
    questionText: 'একটি বৃত্তের ব্যাস ১৪ সেমি হলে ক্ষেত্রফল কত বর্গ সেমি? (π = ২২/৭)',
    type: 'multiple-choice',
    options: ['১৫৪ বর্গ সেমি', '৪৪ বর্গ সেমি', '৩০৮ বর্গ সেমি', '৬১৬ বর্গ সেমি'],
    correctAnswer: '১৫৪ বর্গ সেমি',
    explanation: 'ব্যাসার্ধ r = ৭ সেমি। ক্ষেত্রফল = πr² = (২২/৭) × ৭ × ৭ = ১৫৪ বর্গ সেমি।',
    points: 1,
    subject: 'Mathematics',
    topic: 'জ্যামিতি - পরিমিতি',
    difficulty: 'intermediate'
  },

  // জ্যামিতি - বহুভুজ ও পরিমিতি
  {
    questionText: 'একটি সুষম পঞ্চভুজের অন্তঃস্থ কোণগুলোর সমষ্টি কত?',
    type: 'multiple-choice',
    options: ['৫৪০°', '৩৬০°', '৭২০°', '১৮০°'],
    correctAnswer: '৫৪০°',
    explanation: 'n-ভুজের কোণসমষ্টি = (n - 2) × ১৮০° = (৫ - ২) × ১৮০° = ৩ × ১৮০° = ৫৪০°। প্রতিটি কোণ = ১০৮°।',
    points: 1,
    subject: 'Mathematics',
    topic: 'জ্যামিতি - বহুভুজ',
    difficulty: 'intermediate'
  },
  {
    questionText: 'একটি সুষম ষড়ভুজের প্রতিটি অন্তঃকোণের মান কত ডিগ্রি?',
    type: 'multiple-choice',
    options: ['১২০°', '১০৮°', '১৩৫°', '১৪০°'],
    correctAnswer: '১২০°',
    explanation: 'কোণ সমষ্টি = (৬ - ২) × ১৮০° = ৭২০°। প্রতিটি কোণ = ৭২০° / ৬ = ১২০°।',
    points: 1,
    subject: 'Mathematics',
    topic: 'জ্যামিতি - বহুভুজ',
    difficulty: 'intermediate'
  },
  {
    questionText: 'একটি ঘনকের ধার ৪ মিটার হলে এর আয়তন কত ঘনমিটার?',
    type: 'multiple-choice',
    options: ['৬৪ ঘনমিটার', '১৬ ঘনমিটার', '৯৬ ঘনমিটার', '৩২ ঘনমিটার'],
    correctAnswer: '৬৪ ঘনমিটার',
    explanation: 'ঘনকের আয়তন V = a³ = ৪³ = ৬৪ ঘনমিটার। সমগ্রতলের ক্ষেত্রফল = 6a² = ৯৬ বর্গমিটার।',
    points: 1,
    subject: 'Mathematics',
    topic: 'জ্যামিতি - ঘনবস্তু',
    difficulty: 'beginner'
  },

  // মানসিক দক্ষতা - সংখ্যা ও বর্ণ ধারা
  {
    questionText: '৩, ৬, ১২, ২৪, ৪৮, _____ পরবর্তী সংখ্যা কত?',
    type: 'multiple-choice',
    options: ['৯৬', '৭২', '৮৪', '১০৮'],
    correctAnswer: '৯৬',
    explanation: 'প্রতিটি পদ পূর্ববর্তী পদের ২ গুণ (৪৮ × ২ = ৯৬)।',
    points: 1,
    subject: 'Mathematics',
    topic: 'মানসিক দক্ষতা - ধারা',
    difficulty: 'beginner'
  },
  {
    questionText: '১, ৪, ৯, ১৬, ২৫, ৩৬, _____ পরবর্তী সংখ্যাটি কত?',
    type: 'multiple-choice',
    options: ['৪৯', '৪৮', '৬৪', '৫২'],
    correctAnswer: '৪৯',
    explanation: 'স্বাভাবিক সংখ্যার বর্গ: ১², ২², ৩², ৪², ৫², ৬², ৭² = ৪৯।',
    points: 1,
    subject: 'Mathematics',
    topic: 'মানসিক দক্ষতা - ধারা',
    difficulty: 'beginner'
  },
  {
    questionText: '১, ৮, ২৭, ৬৪, ১২৫, _____ পরবর্তী সংখ্যা কত?',
    type: 'multiple-choice',
    options: ['২১৬', '২৫৬', '৩৪৩', '১৯৬'],
    correctAnswer: '২১৬',
    explanation: 'স্বাভাবিক সংখ্যার ঘন (Cubes): ১³, ২³, ৩³, ৪³, ৫³, ৬³ = ২১৬।',
    points: 1,
    subject: 'Mathematics',
    topic: 'মানসিক দক্ষতা - ধারা',
    difficulty: 'beginner'
  },
  {
    questionText: 'A, C, F, J, O, _____ পরবর্তী বর্ণ কোনটি?',
    type: 'multiple-choice',
    options: ['U', 'T', 'V', 'W'],
    correctAnswer: 'U',
    explanation: 'পার্থক্য: +২ (C), +৩ (F), +৪ (J), +৫ (O), +৬ (U)।',
    points: 1,
    subject: 'Mathematics',
    topic: 'মানসিক দক্ষতা - বর্ণমালা',
    difficulty: 'intermediate'
  },
  {
    questionText: 'যদি CAT = 24 হয় এবং DOG = 26 হয়, তবে BAT = ?',
    type: 'multiple-choice',
    options: ['23', '21', '25', '22'],
    correctAnswer: '23',
    explanation: 'অক্ষরের অবস্থান যোগফল: B(2) + A(1) + T(20) = 23।',
    points: 1,
    subject: 'Mathematics',
    topic: 'মানসিক দক্ষতা - কোডিং',
    difficulty: 'beginner'
  },

  // মানসিক দক্ষতা - ঘড়ি ও কোণ
  {
    questionText: 'ঘড়িতে যখন ২টা ১৫ বাজে তখন ঘণ্টার কাঁটা ও মিনিটের কাঁটার মধ্যবর্তী কোণ কত ডিগ্রি?',
    type: 'multiple-choice',
    options: ['২২.৫°', '৩০°', '১৫°', '৭.৫°'],
    correctAnswer: '২২.৫°',
    explanation: 'সূত্র: |(৬০H - ১১M) / ২| = |(৬০×২ - ১১×১৫) / ২| = |(১২০ - ১৬৫) / ২| = |-৪৫ / ২| = ২২.৫°।',
    points: 1,
    subject: 'Mathematics',
    topic: 'মানসিক দক্ষতা - ঘড়ি',
    difficulty: 'intermediate'
  },
  {
    questionText: 'ঘড়িতে যখন ৮টা বাজে তখন দুই কাঁটার মধ্যবর্তী ক্ষুদ্রতম কোণ কত ডিগ্রি?',
    type: 'multiple-choice',
    options: ['১২০°', '২৪০°', '১০০°', '১১০°'],
    correctAnswer: '১২০°',
    explanation: '|(৬০×৮ - ১১×০)/২| = ৪৮০/২ = ২৪০°। ক্ষুদ্রতম কোণ = ৩৬০° - ২৪০° = ১২০°।',
    points: 1,
    subject: 'Mathematics',
    topic: 'মানসিক দক্ষতা - ঘড়ি',
    difficulty: 'beginner'
  },
  {
    questionText: 'আয়নায় ঘড়ির প্রতিবিম্বে সময় দেখাচ্ছে ৯টা ২০ মিনিট। ঘড়িতে প্রকৃত সময় কত?',
    type: 'multiple-choice',
    options: ['২টা ৪০ মিনিট', '২টা ২০ মিনিট', '৩টা ৪০ মিনিট', '৩টা ২০ মিনিট'],
    correctAnswer: '২টা ৪০ মিনিট',
    explanation: 'আয়নার সময়ের ক্ষেত্রে ১১:৬০ থেকে বিয়োগ করতে হয়: ১১:৬০ - ৯:২০ = ২:৪০।',
    points: 1,
    subject: 'Mathematics',
    topic: 'মানসিক দক্ষতা - ঘড়ি ও আয়না',
    difficulty: 'intermediate'
  },

  // মানসিক দক্ষতা - দিন ও বর্ষপঞ্জি এবং দিক
  {
    questionText: 'আজ সোমবার হলে ৬১ দিন পর কী বার হবে?',
    type: 'multiple-choice',
    options: ['শনিবার', 'রবিবার', 'শুক্রবার', 'সোমবার'],
    correctAnswer: 'শনিবার',
    explanation: '৬১ / ৭ = ৮ সপ্তাহ ভাগশেষ ৫ দিন। সোমবারের পর ৫ দিন গণনা করলে: মঙ্গল, বুধ, বৃহস্পতি, শুক্র, শনি।',
    points: 1,
    subject: 'Mathematics',
    topic: 'মানসিক দক্ষতা - দিন নির্ণয়',
    difficulty: 'beginner'
  },
  {
    questionText: 'এক ব্যক্তি উত্তর দিকে ৪ কিমি গিয়ে ডান দিকে ঘুরে ৩ কিমি গেল। যাত্রা বিন্দু থেকে তার সোজাসুজি দূরত্ব কত?',
    type: 'multiple-choice',
    options: ['৫ কিমি', '৭ কিমি', '১ কিমি', '৬ কিমি'],
    correctAnswer: '৫ কিমি',
    explanation: 'পিথাগোরাস উপপাদ্য: দূরত্ব = √(৪² + ৩²) = √(১৬ + ৯) = √২৫ = ৫ কিমি।',
    points: 1,
    subject: 'Mathematics',
    topic: 'মানসিক দক্ষতা - দিক নির্ণয়',
    difficulty: 'beginner'
  },
  {
    questionText: 'একটি লাইনে রহিমের অবস্থান সামনে থেকে দশম এবং পেছন থেকে পঞ্চদশ। লাইনে মোট কতজন লোক আছে?',
    type: 'multiple-choice',
    options: ['২৪ জন', '২৫ জন', '২৩ জন', '২৬ জন'],
    correctAnswer: '২৪ জন',
    explanation: 'মোট লোক = (সামনে থেকে অবস্থান + পেছন থেকে অবস্থান) - ১ = ১০ + ১৫ - ১ = ২৪ জন।',
    points: 1,
    subject: 'Mathematics',
    topic: 'মানসিক দক্ষতা - অবস্থান ক্রম',
    difficulty: 'beginner'
  }
];
