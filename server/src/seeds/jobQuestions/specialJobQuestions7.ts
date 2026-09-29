import { IJobQuestionItem } from './banglaQuestions.js';

export const specialJobQuestions7: IJobQuestionItem[] = [
  // ========================================================
  // 1. BANK JOB PREPARATION & FINANCIAL MATH (30 items)
  // ========================================================
  {
    questionText: 'বাংলাদেশ ব্যাংক কোন রাষ্ট্রপতির আদেশের মাধ্যমে আনুষ্ঠানিকভাবে প্রতিষ্ঠিত হয়?',
    type: 'multiple-choice',
    options: ['বাংলাদেশ ব্যাংক আদেশ ১৯৭২ (রাষ্ট্রপতির আদেশ নং ১২৭)', 'ব্যাংক কোম্পানি আইন ১৯৯১', 'অর্থঋণ আদালত আইন ২০০৩', 'মুদ্রা আইন ১৯৭২'],
    correctAnswer: 'বাংলাদেশ ব্যাংক আদেশ ১৯৭২ (রাষ্ট্রপতির আদেশ নং ১২৭)',
    explanation: '১৯৭১ সালের ১৬ই ডিসেম্বর থেকে কার্যকর পূর্ব পাকিস্তান স্টেট ব্যাংকের যাবতীয় দায় ও সম্পত্তি নিয়ে বাংলাদেশ ব্যাংক আদেশ ১৯৭২ জারি করা হয়।',
    points: 1,
    subject: 'Bank Job Preparation',
    topic: 'কেন্দ্রীয় ব্যাংক ইতিহাস',
    difficulty: 'beginner'
  },
  {
    questionText: 'স্বাধীন বাংলাদেশের নিজস্ব মুদ্রা ‘টাকা’ কত তারিখে প্রথম চালু হয়?',
    type: 'multiple-choice',
    options: ['৪ঠা মার্চ ১৯৭২', '১৬ই ডিসেম্বর ১৯৭১', '২৬শে মার্চ ১৯৭২', '১লা জানুয়ারি ১৯৭৩'],
    correctAnswer: '৪ঠা মার্চ ১৯৭২',
    explanation: '১৯৭২ সালের ৪ঠা মার্চ স্বাধীন বাংলাদেশের প্রথম ১ টাকার কাগুজে নোট এবং পয়সা বাজারে চালু করা হয়।',
    points: 1,
    subject: 'Bank Job Preparation',
    topic: 'বাংলাদেশের মুদ্রা',
    difficulty: 'beginner'
  },
  {
    questionText: 'বাংলাদেশের কাগুজে নোটের মধ্যে কোনগুলো ‘সরকারি নোট’ (Government Currency Notes)?',
    type: 'multiple-choice',
    options: ['১ টাকা, ২ টাকা ও ৫ টাকার নোট', '১০ টাকা ও ২০ টাকার নোট', '৫০ টাকা ও ১০০ টাকা', '৫০০ ও ১০০০ টাকা'],
    correctAnswer: '১ টাকা, ২ টাকা ও ৫ টাকার নোট',
    explanation: '১, ২ ও ৫ টাকার নোটে অর্থ সচিবের স্বাক্ষর থাকে এবং এগুলো সরকারি নোট। ১০ টাকা থেকে ১০০০ টাকার নোটে গভর্নরের স্বাক্ষর থাকে এবং এগুলো ব্যাংক নোট।',
    points: 1,
    subject: 'Bank Job Preparation',
    topic: 'বাংলাদেশের মুদ্রা',
    difficulty: 'intermediate'
  },
  {
    questionText: 'Under the Negotiable Instruments Act 1881, Section 138 deals with which major offense?',
    type: 'multiple-choice',
    options: [
      'Dishonour of cheque for insufficiency of funds in the account',
      'Forging a promissory note',
      'Late payment of tax',
      'Unauthorized currency conversion'
    ],
    correctAnswer: 'Dishonour of cheque for insufficiency of funds in the account',
    explanation: 'Section 138 establishes penal liability (imprisonment up to 1 year or fine up to thrice the cheque amount) for bounced cheques.',
    points: 1,
    subject: 'Bank Job Preparation',
    topic: 'Negotiable Instruments Act',
    difficulty: 'intermediate'
  },
  {
    questionText: 'To initiate legal proceedings under Section 138 of NI Act for a bounced cheque, within how many days must a legal notice be served to the drawer?',
    type: 'multiple-choice',
    options: [
      'Within 30 days of receiving the cheque return memo from the bank',
      'Within 15 days',
      'Within 60 days',
      'Within 90 days'
    ],
    correctAnswer: 'Within 30 days of receiving the cheque return memo from the bank',
    explanation: 'The payee must issue a statutory demand notice within 30 days of receipt of return memo, allowing 30 days for payment before filing court suit.',
    points: 1,
    subject: 'Bank Job Preparation',
    topic: 'Negotiable Instruments Act',
    difficulty: 'advanced'
  },
  {
    questionText: 'What is a "Promissory Note" (অঙ্গীকারপত্র)?',
    type: 'multiple-choice',
    options: [
      'An unconditional written promise signed by the maker to pay a certain sum of money to a specified person or bearer',
      'An unconditional order addressed to a bank',
      'A receipt of bill payment',
      'A share ownership certificate'
    ],
    correctAnswer: 'An unconditional written promise signed by the maker to pay a certain sum of money to a specified person or bearer',
    explanation: 'Defined in Section 4 of NI Act 1881 as a two-party instrument containing an unconditional promise to pay money on demand or at fixed future date.',
    points: 1,
    subject: 'Bank Job Preparation',
    topic: 'Negotiable Instruments Act',
    difficulty: 'intermediate'
  },
  {
    questionText: 'What is "Bank Rate"?',
    type: 'multiple-choice',
    options: [
      'The standard rate at which the central bank is prepared to buy or rediscount bills of exchange or eligible commercial paper',
      'The retail mortgage loan rate',
      'The savings account deposit rate',
      'The fee charged for debit cards'
    ],
    correctAnswer: 'The standard rate at which the central bank is prepared to buy or rediscount bills of exchange or eligible commercial paper',
    explanation: 'Bank Rate is the long-term rediscounting rate utilized by Bangladesh Bank to influence broader credit market interest rates.',
    points: 1,
    subject: 'Bank Job Preparation',
    topic: 'Central Banking',
    difficulty: 'intermediate'
  },
  {
    questionText: 'What does "SPREAD" mean in banking financial performance?',
    type: 'multiple-choice',
    options: [
      'The difference between the lending interest rate and the deposit interest rate',
      'Total administrative expenditures',
      'The fee for international ATM withdrawals',
      'Branch physical floor area'
    ],
    correctAnswer: 'The difference between the lending interest rate and the deposit interest rate',
    explanation: 'Interest rate spread (Net Interest Margin driver) measures the profit margin between what a bank earns on loans and what it pays to depositors.',
    points: 1,
    subject: 'Bank Job Preparation',
    topic: 'Banking Economics',
    difficulty: 'beginner'
  },
  {
    questionText: 'What is the "Call Money Rate"?',
    type: 'multiple-choice',
    options: [
      'The interest rate charged on overnight interbank borrowings to fulfill statutory reserve requirements',
      'Customer service telephone tariff',
      'Government treasury yield',
      'Remittance service fee'
    ],
    correctAnswer: 'The interest rate charged on overnight interbank borrowings to fulfill statutory reserve requirements',
    explanation: 'Banks experiencing temporary daily liquidity deficits borrow overnight from cash-surplus banks at the call money rate.',
    points: 1,
    subject: 'Bank Job Preparation',
    topic: 'Money Markets',
    difficulty: 'intermediate'
  },
  {
    questionText: 'What is "CIB" in credit appraisal at Bangladeshi commercial banks?',
    type: 'multiple-choice',
    options: [
      'Credit Information Bureau (managed by Bangladesh Bank)',
      'Central Investment Board',
      'Commercial Insurance Bureau',
      'Certified International Banker'
    ],
    correctAnswer: 'Credit Information Bureau (managed by Bangladesh Bank)',
    explanation: 'CIB maintains comprehensive credit histories and default records of all borrowers across the entire banking and NBFI network.',
    points: 1,
    subject: 'Bank Job Preparation',
    topic: 'Credit Risk Analysis',
    difficulty: 'beginner'
  },
  {
    questionText: 'A bank deposit of Tk 20,000 earns 10% annual interest compounded semi-annually. How much interest is earned after 1 year?',
    type: 'multiple-choice',
    options: ['Tk 2,050', 'Tk 2,000', 'Tk 2,100', 'Tk 1,950'],
    correctAnswer: 'Tk 2,050',
    explanation: 'Semi-annual rate = 5%. A = 20,000 × (1.05)² = 20,000 × 1.1025 = Tk 22,050. Interest = 22,050 - 20,000 = Tk 2,050.',
    points: 1,
    subject: 'Bank Job Preparation',
    topic: 'Financial Math',
    difficulty: 'intermediate'
  },
  {
    questionText: 'Three partners P, Q, and R invest Tk 12,000, Tk 14,000, and Tk 16,000 respectively in a business. At year-end, the total profit is Tk 21,000. What is Q\'s share of the profit?',
    type: 'multiple-choice',
    options: ['Tk 7,000', 'Tk 6,000', 'Tk 8,000', 'Tk 7,500'],
    correctAnswer: 'Tk 7,000',
    explanation: 'Investment ratio = 12 : 14 : 16 = 6 : 7 : 8. Sum of ratios = 6 + 7 + 8 = 21. Q\'s share = (7 / 21) × 21,000 = Tk 7,000.',
    points: 1,
    subject: 'Bank Job Preparation',
    topic: 'Partnership Math',
    difficulty: 'intermediate'
  },
  {
    questionText: 'What is the single discount equivalent to a successive series of trade discounts of 20% and 10%?',
    type: 'multiple-choice',
    options: ['28%', '30%', '25%', '27%'],
    correctAnswer: '28%',
    explanation: 'Equivalent discount = d1 + d2 - (d1 × d2)/100 = 20 + 10 - (200/100) = 30 - 2 = 28%.',
    points: 1,
    subject: 'Bank Job Preparation',
    topic: 'Commercial Math',
    difficulty: 'intermediate'
  },
  {
    questionText: 'What does "Offshore Banking" refer to in Bangladesh?',
    type: 'multiple-choice',
    options: [
      'Banking units that deal exclusively in designated foreign currencies with non-residents and eligible local enterprises',
      'Banks located on ships in coastal waters',
      'Marine fisheries financing units',
      'Illegal foreign bank branches'
    ],
    correctAnswer: 'Banking units that deal exclusively in designated foreign currencies with non-residents and eligible local enterprises',
    explanation: 'Offshore Banking Units (OBUs) operate under special regulatory framework to attract foreign currency deposits and facilitate trade credit.',
    points: 1,
    subject: 'Bank Job Preparation',
    topic: 'International Banking',
    difficulty: 'intermediate'
  },
  {
    questionText: 'What is "Islamic Banking" (ইসলামী ব্যাংকিং) based upon fundamentally?',
    type: 'multiple-choice',
    options: [
      'Prohibition of interest (Riba) and adherence to Shariah profit-and-loss sharing principles (Mudaraba & Musharaka)',
      'Free loans without any charges',
      'Cashless digital payments only',
      'State-run welfare trusts'
    ],
    correctAnswer: 'Prohibition of interest (Riba) and adherence to Shariah profit-and-loss sharing principles (Mudaraba & Musharaka)',
    explanation: 'Islamic finance replaces predetermined interest with equity participation, asset-backed leasing (Ijara), and mark-up sales (Murabaha).',
    points: 1,
    subject: 'Bank Job Preparation',
    topic: 'Islamic Banking',
    difficulty: 'beginner'
  },
  {
    questionText: 'In Islamic banking contracts, what is "Mudaraba"?',
    type: 'multiple-choice',
    options: [
      'A partnership where one party provides capital (Rab-al-Maal) and the other provides management and entrepreneurial expertise (Mudarib)',
      'Joint equity partnership with joint management',
      'Cost-plus mark-up sale agreement',
      'Leasing contract for physical equipment'
    ],
    correctAnswer: 'A partnership where one party provides capital (Rab-al-Maal) and the other provides management and entrepreneurial expertise (Mudarib)',
    explanation: 'Under Mudaraba, profits are shared according to a pre-agreed ratio, while financial losses are borne solely by the capital provider.',
    points: 1,
    subject: 'Bank Job Preparation',
    topic: 'Islamic Banking',
    difficulty: 'intermediate'
  },
  {
    questionText: 'What is "CAMELS" rating component "A" evaluating?',
    type: 'multiple-choice',
    options: ['Asset Quality (classification of loan portfolio, non-performing loans, and provisioning)', 'Auditor Reputation', 'Accounting Standards', 'Annual Turnover'],
    correctAnswer: 'Asset Quality (classification of loan portfolio, non-performing loans, and provisioning)',
    explanation: 'Asset Quality scrutinizes credit risk exposure, concentration risk, and the adequacy of loan-loss provisions.',
    points: 1,
    subject: 'Bank Job Preparation',
    topic: 'Bank Supervision',
    difficulty: 'intermediate'
  },
  {
    questionText: 'What is "Bearer Bond"?',
    type: 'multiple-choice',
    options: [
      'A debt security whose ownership is not registered in the issuer\'s books and belongs to whoever holds it physically',
      'A government treasury bill registered online',
      'A corporate equity share with dividend rights',
      'A certified loan statement'
    ],
    correctAnswer: 'A debt security whose ownership is not registered in the issuer\'s books and belongs to whoever holds it physically',
    explanation: 'Bearer bonds (like Prize Bonds in Bangladesh) contain detachable coupons and transfer ownership through physical delivery.',
    points: 1,
    subject: 'Bank Job Preparation',
    topic: 'Securities',
    difficulty: 'intermediate'
  },
  {
    questionText: 'What is the full form of "ATM" in self-service banking?',
    type: 'multiple-choice',
    options: ['Automated Teller Machine', 'Any Time Money', 'Automatic Transaction Method', 'Account Transfer Mechanism'],
    correctAnswer: 'Automated Teller Machine',
    explanation: 'Invented by John Shepherd-Barron in 1967, ATM stands for Automated Teller Machine.',
    points: 1,
    subject: 'Bank Job Preparation',
    topic: 'Retail Banking',
    difficulty: 'beginner'
  },
  {
    questionText: 'What is "PIN" in payment card authentication?',
    type: 'multiple-choice',
    options: ['Personal Identification Number', 'Payment Index Number', 'Postal Identification Node', 'Private Insurance Number'],
    correctAnswer: 'Personal Identification Number',
    explanation: 'PIN is a secret numeric password shared between a cardholder and a bank to authenticate card transactions at POS and ATMs.',
    points: 1,
    subject: 'Bank Job Preparation',
    topic: 'Payment Systems',
    difficulty: 'beginner'
  },
  {
    questionText: 'What is a "Letter of Credit" (L/C) where the issuing bank cannot cancel or modify the terms without consent of all parties?',
    type: 'multiple-choice',
    options: ['Irrevocable Letter of Credit', 'Revocable L/C', 'Back-to-back L/C', 'Standby L/C'],
    correctAnswer: 'Irrevocable Letter of Credit',
    explanation: 'Under UCP 600 international trade rules, all letters of credit are deemed irrevocable unless explicitly stated otherwise.',
    points: 1,
    subject: 'Bank Job Preparation',
    topic: 'Trade Finance',
    difficulty: 'intermediate'
  },
  {
    questionText: 'What is "Back-to-Back L/C"?',
    type: 'multiple-choice',
    options: [
      'A second letter of credit opened by an exporter in favor of local raw material suppliers based on an original master export L/C',
      'An L/C opened after goods arrive at port',
      'A cash advance loan for shipping costs',
      'A reciprocal barter agreement'
    ],
    correctAnswer: 'A second letter of credit opened by an exporter in favor of local raw material suppliers based on an original master export L/C',
    explanation: 'Commonly used in Bangladesh readymade garments (RMG) sector to procure fabrics and accessories using the master export credit line.',
    points: 1,
    subject: 'Bank Job Preparation',
    topic: 'Trade Finance',
    difficulty: 'intermediate'
  },
  {
    questionText: 'If a bank loan of Tk 50,000 has a simple interest rate of 12% per year, what is the monthly interest payable?',
    type: 'multiple-choice',
    options: ['Tk 500', 'Tk 600', 'Tk 400', 'Tk 450'],
    correctAnswer: 'Tk 500',
    explanation: 'Annual interest = 50,000 × 0.12 = Tk 6,000. Monthly interest = 6,000 / 12 = Tk 500.',
    points: 1,
    subject: 'Bank Job Preparation',
    topic: 'Banking Math',
    difficulty: 'beginner'
  },
  {
    questionText: 'What is the full form of "POS" in retail payment terminals?',
    type: 'multiple-choice',
    options: ['Point of Sale', 'Payment On Service', 'Portal Online Settlement', 'Process of Storage'],
    correctAnswer: 'Point of Sale',
    explanation: 'POS machines in retail stores allow customers to pay for goods and services using debit and credit cards electronically.',
    points: 1,
    subject: 'Bank Job Preparation',
    topic: 'Banking Technology',
    difficulty: 'beginner'
  },
  {
    questionText: 'What is the term for a borrower who has the financial capability to pay loan installments but deliberately refrains from paying?',
    type: 'multiple-choice',
    options: ['Willful Defaulter (ইচ্ছাকৃত ঋণখেলাপি)', 'Insolvent Debtor', 'Bankrupt', 'Guarantor'],
    correctAnswer: 'Willful Defaulter (ইচ্ছাকৃত ঋণখেলাপি)',
    explanation: 'Under Bank Company (Amendment) Act 2023, willful defaulters face strict sanctions including travel bans and trade license cancellations.',
    points: 1,
    subject: 'Bank Job Preparation',
    topic: 'Credit Regulation',
    difficulty: 'intermediate'
  },
  {
    questionText: 'A project yields net cash inflows of Tk 30,000 in Year 1, Tk 40,000 in Year 2, and Tk 50,000 in Year 3 against an initial cost of Tk 70,000. What is the payback period?',
    type: 'multiple-choice',
    options: ['2 years', '2.5 years', '1.5 years', '3 years'],
    correctAnswer: '2 years',
    explanation: 'Cumulative cash flow: Year 1 = 30,000; Year 2 = 30,000 + 40,000 = 70,000 (recovers exact initial investment in 2 years).',
    points: 1,
    subject: 'Bank Job Preparation',
    topic: 'Capital Budgeting',
    difficulty: 'intermediate'
  },
  {
    questionText: 'What is "BACS" or "BACH" in Bangladesh central banking infrastructure?',
    type: 'multiple-choice',
    options: [
      'Bangladesh Automated Clearing House',
      'Bank Automation Clearing Hub',
      'Bureau of Automated Commercial Housing',
      'Bangladesh Account Clearing House'
    ],
    correctAnswer: 'Bangladesh Automated Clearing House',
    explanation: 'BACH handles automated electronic cheque processing (BACPS) and electronic funds transfer (BEFTN) nationwide.',
    points: 1,
    subject: 'Bank Job Preparation',
    topic: 'Banking Technology',
    difficulty: 'beginner'
  },
  {
    questionText: 'A person sells two watches for Tk 990 each, gaining 10% on one and losing 10% on the other. His overall result in the entire transaction is:',
    type: 'multiple-choice',
    options: ['1% loss', '1% gain', 'No profit no loss', '2% loss'],
    correctAnswer: '1% loss',
    explanation: 'When two articles are sold at same price with x% gain on one and x% loss on other, net result is always a loss of (x/10)²% = (10/10)² = 1% loss.',
    points: 1,
    subject: 'Bank Job Preparation',
    topic: 'Commercial Math',
    difficulty: 'intermediate'
  },
  {
    questionText: 'What is the "Marginal Cost of Funds based Lending Rate" (SMART in Bangladesh Bank monetary policy context)?',
    type: 'multiple-choice',
    options: [
      'Six-months Moving Average Rate of Treasury bill',
      'Standard Monetary Allocation Rate for Trade',
      'Systematic Market Adjustment Rate Term',
      'Single Money Asset Repo Target'
    ],
    correctAnswer: 'Six-months Moving Average Rate of Treasury bill',
    explanation: 'SMART was the 182-day Treasury bill six-month moving average benchmark rate utilized for calculating commercial loan interest caps.',
    points: 1,
    subject: 'Bank Job Preparation',
    topic: 'Monetary Policy',
    difficulty: 'advanced'
  },
  {
    questionText: 'In financial market analysis, what is "Arbitrage"?',
    type: 'multiple-choice',
    options: [
      'The simultaneous purchase and sale of an asset in different markets to exploit fleeting price differences for risk-free profit',
      'A long-term government bond auction',
      'A legal court settlement between lenders',
      'A tax evasion scheme'
    ],
    correctAnswer: 'The simultaneous purchase and sale of an asset in different markets to exploit fleeting price differences for risk-free profit',
    explanation: 'Arbitrageurs buy low in one venue and sell high in another, restoring price equilibrium across financial markets.',
    points: 1,
    subject: 'Bank Job Preparation',
    topic: 'Financial Markets',
    difficulty: 'advanced'
  },

  // ========================================================
  // 2. PRIMARY TEACHER EXAM & PEDAGOGY (35 items)
  // ========================================================
  {
    questionText: 'ব্লুমের শিখন স্তরের (Bloom\'s Taxonomy) জ্ঞানীয় ক্ষেত্রের (Cognitive Domain) সর্বোচ্চ স্তর কোনটি?',
    type: 'multiple-choice',
    options: ['সৃজনশীলতা বা সৃষ্টি করা (Creating / Evaluation)', 'প্রয়োগ (Applying)', 'জ্ঞান (Remembering)', 'অনুধাবন (Understanding)'],
    correctAnswer: 'সৃজনশীলতা বা সৃষ্টি করা (Creating / Evaluation)',
    explanation: 'সংশোধিত ব্লুমের টেক্সোনমিতে ৬টি ধাপ: Remembering, Understanding, Applying, Analyzing, Evaluating এবং সর্বোচ্চ Creating।',
    points: 1,
    subject: 'Primary Teacher Exam',
    topic: 'শিক্ষণবিজ্ঞান ও মূল্যায়ন',
    difficulty: 'intermediate'
  },
  {
    questionText: 'প্রাথমিক বিদ্যালয়ে শিক্ষক-শিক্ষার্থী অনুপাত (Teacher-Student Ratio) জাতীয় শিক্ষানীতি অনুযায়ী আদর্শ কত?',
    type: 'multiple-choice',
    options: ['১ : ৩০', '১ : ৫০', '১ : ২০', '১ : ৪০'],
    correctAnswer: '১ : ৩০',
    explanation: 'জাতীয় শিক্ষানীতি ২০১০-এ প্রতিটি শ্রেণিকক্ষে ফলপ্রসূ পাঠদানের জন্য শিক্ষক-শিক্ষার্থী অনুপাত ১:৩০ এ নামিয়ে আনার রূপরেখা দেওয়া হয়েছে।',
    points: 1,
    subject: 'Primary Teacher Exam',
    topic: 'শিক্ষা নীতিমালা',
    difficulty: 'beginner'
  },
  {
    questionText: 'প্রাথমিক শিক্ষার মানোন্নয়নে চলমান সমন্বিত সরকারি প্রকল্পটির নাম কী?',
    type: 'multiple-choice',
    options: [
      'PEDP-4 (Fourth Primary Education Development Program)',
      'SEQAEP',
      'SESIP',
      'ROSC'
    ],
    correctAnswer: 'PEDP-4 (Fourth Primary Education Development Program)',
    explanation: 'চতুর্থ প্রাথমিক শিক্ষা উন্নয়ন কর্মসূচি (PEDP-4) প্রাথমিক বিদ্যালয়ের ভৌত অবকাঠামো, শিক্ষক প্রশিক্ষণ ও আধুনিক শিক্ষণ উপকরণ প্রদান করে।',
    points: 1,
    subject: 'Primary Teacher Exam',
    topic: 'শিক্ষা প্রকল্প',
    difficulty: 'beginner'
  },
  {
    questionText: '‘উপকরণ ব্যবহারে পাঠ সহজ ও প্রাণবন্ত হয়’—প্রাথমিক শ্রেণিকক্ষে ব্যবহৃত স্বল্পমূল্যের বা বিনামূল্যের উপকরণের পরিভাষা কী?',
    type: 'multiple-choice',
    options: ['লো-কস্ট অ্যান্ড নো-কস্ট ম্যাটেরিয়ালস (Low-cost and No-cost teaching aids)', 'ডিজিটাল ট্যাবলেট', 'ব্যয়বহুল মডেল', 'বিদেশি খেলনা'],
    correctAnswer: 'লো-কস্ট অ্যান্ড নো-কস্ট ম্যাটেরিয়ালস (Low-cost and No-cost teaching aids)',
    explanation: 'স্থানীয় সহজলভ্য উপাদান যেমন পাতা, কাঠি, বীজ, মাটির তৈরি পুতুল ইত্যাদি ব্যবহার করে স্বল্পব্যয়ে পাঠোপকরণ তৈরি করা হয়।',
    points: 1,
    subject: 'Primary Teacher Exam',
    topic: 'পাঠোপকরণ ও পেডাগোজি',
    difficulty: 'beginner'
  },
  {
    questionText: 'শিশুর বুদ্ধিমত্তা বা আইকিউ (IQ - Intelligence Quotient) পরিমাপের বৈজ্ঞানিক সূত্র কোনটি?',
    type: 'multiple-choice',
    options: ['(মানসিক বয়স / প্রকৃত বয়স) × ১০০ [IQ = (MA / CA) × 100]', '(প্রকৃত বয়স / মানসিক বয়স) × ১০০', 'মানসিক বয়স + প্রকৃত বয়স', 'মানসিক বয়স × প্রকৃত বয়স'],
    correctAnswer: '(মানসিক বয়স / প্রকৃত বয়স) × ১০০ [IQ = (MA / CA) × 100]',
    explanation: '১৯১২ সালে উইলিয়াম স্টার্ন কর্তৃক উদ্ভাবিত এবং টারম্যান কর্তৃক পরিমার্জিত সূত্র: Mental Age (MA) / Chronological Age (CA) × 100।',
    points: 1,
    subject: 'Primary Teacher Exam',
    topic: 'শিশু মনোবিজ্ঞান',
    difficulty: 'intermediate'
  },
  {
    questionText: 'স্বাভাবিক গড় বুদ্ধিমত্তা সম্পন্ন শিশুর আইকিউ (IQ) স্কোর সাধারণত কত পরিসরে থাকে?',
    type: 'multiple-choice',
    options: ['৯০ থেকে ১০৯', '৭০ এর নিচে (প্রতিবন্ধী)', '১৪০ এর ওপরে (প্রতিভাধর)', '৫০ থেকে ৭০'],
    correctAnswer: '৯০ থেকে ১০৯',
    explanation: 'আইকিউ স্কেলে ৯০-১০৯ হলো স্বাভাবিক বা গড় বুদ্ধিমান; ১১০-১১৯ উচ্চ গড়; ১২০-১২৯ শ্রেষ্ঠ এবং ১৪০+ প্রতিভাবান বা জিনিয়াস।',
    points: 1,
    subject: 'Primary Teacher Exam',
    topic: 'বুদ্ধিমত্তা ও মনোবিজ্ঞান',
    difficulty: 'intermediate'
  },
  {
    questionText: '‘ডিসলেক্সিয়া’ (Dyslexia) শিশুদের কোন ধরনের শিখন অক্ষমতাকে নির্দেশ করে?',
    type: 'multiple-choice',
    options: ['পঠন বা রিডিং পড়তে সমস্যা ও বর্ণের বিভ্রান্তি', 'গণিত গণনায় সমস্যা (Dyscalculia)', 'লিখতে সমস্যা (Dysgraphia)', 'শ্রবণ প্রতিবন্ধকতা'],
    correctAnswer: 'পঠন বা রিডিং পড়তে সমস্যা ও বর্ণের বিভ্রান্তি',
    explanation: 'ডিসলেক্সিয়া একটি স্নায়বিক শিখন বৈকল্য যেখানে শিশু বর্ণ চিনে শব্দ পড়তে ও উচ্চারণ করতে বাধার সম্মুখীন হয়।',
    points: 1,
    subject: 'Primary Teacher Exam',
    topic: 'বিশেষ চাহিদাসম্পন্ন শিশু',
    difficulty: 'intermediate'
  },
  {
    questionText: 'গণিত সংক্রান্ত গণনা ও সংখ্যার ধারণা বোঝার শিখন অক্ষমতাকে কী বলা হয়?',
    type: 'multiple-choice',
    options: ['ডিসক্যালকুলিয়া (Dyscalculia)', 'ডিসলেক্সিয়া', 'ডিসগ্রাফিয়া', 'অটিজম'],
    correctAnswer: 'ডিসক্যালকুলিয়া (Dyscalculia)',
    explanation: 'ডিসক্যালকুলিয়ায় আক্রান্ত শিশু সংখ্যার প্রতীক ও গাণিতিক হিসাব-নিকাশ সমাধান করতে তীব্র বিভ্রান্তিতে পড়ে।',
    points: 1,
    subject: 'Primary Teacher Exam',
    topic: 'বিশেষ চাহিদাসম্পন্ন শিশু',
    difficulty: 'intermediate'
  },
  {
    questionText: 'অটিজম (Autism Spectrum Disorder) আক্রান্ত শিশুর প্রধান চারিত্রিক বৈশিষ্ট্য কোনটি?',
    type: 'multiple-choice',
    options: [
      'সামাজিক যোগাযোগে সীমাবদ্ধতা এবং একই কাজ বারবার করার প্রবণতা (Repetitive behavior)',
      'উচ্চ দৃষ্টিহীনতা',
      'হাত-পা অবশ হয়ে যাওয়া',
      'প্রচণ্ড ভয় পাওয়া'
    ],
    correctAnswer: 'সামাজিক যোগাযোগে সীমাবদ্ধতা এবং একই কাজ বারবার করার প্রবণতা (Repetitive behavior)',
    explanation: 'অটিজম একটি বিকাশজনিত বৈশিষ্ট্য যেখানে চোখের যোগাযোগ কম করা, আবেগ প্রকাশে অনীহা এবং একাকী থাকতে পছন্দ করার প্রবণতা দেখা যায়।',
    points: 1,
    subject: 'Primary Teacher Exam',
    topic: 'অন্তর্ভুক্তিমূলক শিক্ষা',
    difficulty: 'beginner'
  },
  {
    questionText: 'আন্তর্জাতিক অটিজম সচেতনতা দিবস প্রতি বছর কোন তারিখে বিশ্বব্যাপী পালিত হয়?',
    type: 'multiple-choice',
    options: ['২রা এপ্রিল', '৮ই সেপ্টেম্বর', '৫ই অক্টোবর', '৩রা ডিসেম্বর'],
    correctAnswer: '২রা এপ্রিল',
    explanation: 'জাতিসংঘ ঘোষিত ২রা এপ্রিল বিশ্ব অটিজম সচেতনতা দিবস হিসেবে নীল বাতি প্রজ্বালনের মাধ্যমে পালিত হয়।',
    points: 1,
    subject: 'Primary Teacher Exam',
    topic: 'আন্তর্জাতিক দিবস ও শিক্ষা',
    difficulty: 'beginner'
  },
  {
    questionText: 'একটি চতুর্ভুজের বিপরীত বাহুগুলো পরস্পর সমান ও সমান্তরাল কিন্তু কোনো কোণই সমকোণ নয়—তাকে কী বলে?',
    type: 'multiple-choice',
    options: ['সামান্তরিক (Parallelogram)', 'আয়তক্ষেত্র', 'বর্গক্ষেত্র', 'ট্রাপিজিয়াম'],
    correctAnswer: 'সামান্তরিক (Parallelogram)',
    explanation: 'যদি কোণগুলো সমকোণ (৯০°) হতো তবে তা আয়ত হতো; কোণ সমকোণ না হলে এবং বাহু সমান ও সমান্তরাল হলে তা সামান্তরিক।',
    points: 1,
    subject: 'Primary Teacher Exam',
    topic: 'প্রাথমিক শিক্ষক গণিত - জ্যামিতি',
    difficulty: 'beginner'
  },
  {
    questionText: 'যে চতুর্ভুজের চারটি বাহুই সমান কিন্তু কোনো কোণই সমকোণ নয় তাকে কী বলে?',
    type: 'multiple-choice',
    options: ['রম্বস (Rhombus)', 'বর্গক্ষেত্র', 'আয়তক্ষেত্র', 'ঘুড়ি'],
    correctAnswer: 'রম্বস (Rhombus)',
    explanation: 'চারটি বাহু সমান এবং কোণগুলো সমকোণ হলে বর্গক্ষেত্র; কোণগুলো সমকোণ না হলে তা রম্বস।',
    points: 1,
    subject: 'Primary Teacher Exam',
    topic: 'প্রাথমিক শিক্ষক গণিত - জ্যামিতি',
    difficulty: 'beginner'
  },
  {
    questionText: 'বৃত্তের কেন্দ্র থেকে পরিধি পর্যন্ত অঙ্কিত সরলরেখাকে কী বলা হয়?',
    type: 'multiple-choice',
    options: ['ব্যাসার্ধ (Radius)', 'ব্যাস (Diameter)', 'জ্যা (Chord)', 'স্পর্শক'],
    correctAnswer: 'ব্যাসার্ধ (Radius)',
    explanation: 'কেন্দ্র থেকে পরিধির দূরত্ব হলো ব্যাসার্ধ (r); কেন্দ্রগামী জ্যা হলো বৃহত্তম জ্যা বা ব্যাস (2r)।',
    points: 1,
    subject: 'Primary Teacher Exam',
    topic: 'প্রাথমিক শিক্ষক গণিত - জ্যামিতি',
    difficulty: 'beginner'
  },
  {
    questionText: 'বৃত্তের যেকোনো দুটি বিন্দুর সংযোজক সরলরেখাংশকে কী বলে?',
    type: 'multiple-choice',
    options: ['জ্যা (Chord)', 'ব্যাসার্ধ', 'চাপ (Arc)', 'ছেদক'],
    correctAnswer: 'জ্যা (Chord)',
    explanation: 'পরিধির যেকোনো দুটি বিন্দুর সরলরেখা হলো জ্যা। কেন্দ্রগামী জ্যা-ই বৃত্তের ব্যাস।',
    points: 1,
    subject: 'Primary Teacher Exam',
    topic: 'প্রাথমিক শিক্ষক গণিত - জ্যামিতি',
    difficulty: 'beginner'
  },
  {
    questionText: '০.১ × ০.০১ × ০.০০১ এর মান কত?',
    type: 'multiple-choice',
    options: ['০.০০০০০১ (0.000001)', '০.০০০১', '০.০১', '০.০০১'],
    correctAnswer: '০.০০০০০১ (0.000001)',
    explanation: 'দশমিকের পর অঙ্ক গণনা: ১ + ২ + ৩ = ৬ ঘর। অতএব ১ এর পূর্বে ৫টি শূন্য বসে দশমিক বসবে = ০.০০০০০১।',
    points: 1,
    subject: 'Primary Teacher Exam',
    topic: 'প্রাথমিক শিক্ষক গণিত - ভগ্নাংশ',
    difficulty: 'beginner'
  },
  {
    questionText: '‘সবুজ কুঁড়ি’ বা প্রাক-প্রাথমিক শিক্ষার বয়সসীমা কত?',
    type: 'multiple-choice',
    options: ['৪ থেকে ৫+ বছর', '২ থেকে ৩ বছর', '৬ থেকে ৭ বছর', '৩ থেকে ৪ বছর'],
    correctAnswer: '৪ থেকে ৫+ বছর',
    explanation: 'জাতীয় শিক্ষাক্রম অনুযায়ী ৪+ থেকে ৫+ বছর বয়সী শিশুদের প্রাক-প্রাথমিক শ্রেণিতে ভর্তি করা হয়।',
    points: 1,
    subject: 'Primary Teacher Exam',
    topic: 'প্রাক-প্রাথমিক শিক্ষা',
    difficulty: 'beginner'
  },
  {
    questionText: 'বিদ্যালয়ে শিশুদের পুষ্টি নিশ্চিত ও ড্রপ-আউট হ্রাসে গৃহীত জাতীয় কর্মসূচির নাম কী?',
    type: 'multiple-choice',
    options: ['মিড-ডে মিল বা স্কুল মিল কর্মসূচি (School Feeding Program)', 'কাজের বিনিময়ে খাদ্য', 'ভিজিএফ', 'টিআর'],
    correctAnswer: 'মিড-ডে মিল বা স্কুল মিল কর্মসূচি (School Feeding Program)',
    explanation: 'বিদ্যালয়ে রান্না করা গরম খাবার বা পুষ্টিকর বিস্কুট প্রদানের মাধ্যমে শিশুদের মনোযোগ ও উপস্থিতি উল্লেখযোগ্য হারে বৃদ্ধি পায়।',
    points: 1,
    subject: 'Primary Teacher Exam',
    topic: 'প্রাথমিক শিক্ষা কার্যক্রম',
    difficulty: 'beginner'
  },
  {
    questionText: 'শিশুর সামাজিকীকরণের (Socialization) প্রথম ও সবচেয়ে গুরুত্বপূর্ণ মাধ্যম কোনটি?',
    type: 'multiple-choice',
    options: ['পরিবার (Family)', 'বিদ্যালয়', 'খেলার মাঠ', 'গণমাধ্যম'],
    correctAnswer: 'পরিবার (Family)',
    explanation: 'পরিবার হলো শিশুর প্রথম পাঠশালা যেখানে মা-বাবা ও স্বজনদের অনুকরণে প্রাথমিক ভাষা, মূল্যবোধ ও শিষ্টাচার গড়ে ওঠে।',
    points: 1,
    subject: 'Primary Teacher Exam',
    topic: 'সমাজবিজ্ঞান ও শিশু বিকাশ',
    difficulty: 'beginner'
  },
  {
    questionText: '‘হস্তলিপি ও চিত্রাঙ্কন’ শিশুর কোন ধরনের শারীরিক দক্ষতার বিকাশ ঘটায়?',
    type: 'multiple-choice',
    options: ['সূক্ষ্ম পেশিজ দক্ষতা (Fine Motor Skills)', 'স্থূল পেশিজ দক্ষতা (Gross Motor Skills)', 'শারীরিক ক্ষিপ্রতা', 'ভারসাম্য'],
    correctAnswer: 'সূক্ষ্ম পেশিজ দক্ষতা (Fine Motor Skills)',
    explanation: 'আঙুল ও কবজির সূক্ষ্ম নিয়ন্ত্রণের মাধ্যমে লেখা ও আঁকার দক্ষতা সূক্ষ্ম পেশিজ বা ফাইন মোটর স্কিল।',
    points: 1,
    subject: 'Primary Teacher Exam',
    topic: 'শিশু বিকাশ ও শারীরিক বৃদ্ধি',
    difficulty: 'intermediate'
  },
  {
    questionText: '‘দৌড়ানো, লাফানো ও বল নিক্ষেপ’ শিশুর কোন শারীরিক দক্ষতার উদাহরণ?',
    type: 'multiple-choice',
    options: ['স্থূল পেশিজ দক্ষতা (Gross Motor Skills)', 'ফাইন মোটর স্কিল', 'জ্ঞানমূলক দক্ষতা', 'স্মরণ দক্ষতা'],
    correctAnswer: 'স্থূল পেশিজ দক্ষতা (Gross Motor Skills)',
    explanation: 'হাত, পা ও সমগ্র শরীরের বৃহৎ পেশিসমূহের সমন্বয় ও শক্তি বৃদ্ধির কাজ হলো গ্রস মোটর স্কিল।',
    points: 1,
    subject: 'Primary Teacher Exam',
    topic: 'শারীরিক শিক্ষা ও বিকাশ',
    difficulty: 'intermediate'
  },
  {
    questionText: 'শ্রেণিকক্ষে পাঠদানের সময় শিক্ষকের ব্ল্যাকবোর্ড বা হোয়াইটবোর্ডের কোন পাশে দাঁড়ানো নিয়ম?',
    type: 'multiple-choice',
    options: ['বোর্ডের বাম পাশে ৪৫ ডিগ্রি কোণে', 'বোর্ডের ঠিক মাঝখানে পিঠ দিয়ে', 'বোর্ডের ডান পাশে', 'ক্লাসের একদম পেছনে'],
    correctAnswer: 'বোর্ডের বাম পাশে ৪৫ ডিগ্রি কোণে',
    explanation: 'বাম পাশে ৪৫ ডিগ্রি কোণে দাঁড়ালে শিক্ষক লেখার সময় শিক্ষার্থীদের পর্যবেক্ষণ করতে পারেন এবং শিক্ষার্থীদের দৃষ্টি বাধাগ্রস্ত হয় না।',
    points: 1,
    subject: 'Primary Teacher Exam',
    topic: 'শ্রেণিকক্ষ ব্যবস্থাপনা',
    difficulty: 'beginner'
  },
  {
    questionText: 'সহপাঠক্রমিক কার্যাবলি (Co-curricular Activities) বলতে কোনগুলোকে বোঝায়?',
    type: 'multiple-choice',
    options: ['খেলাধুলা, বিতর্ক প্রতিযোগিতা, সাংস্কৃতিক অনুষ্ঠান ও কাব-স্কাউটিং', 'শুধুমাত্র গৃহকাজ', 'পরীক্ষায় খাতা মূল্যায়ন', 'বেতন পরিশোধ'],
    correctAnswer: 'খেলাধুলা, বিতর্ক প্রতিযোগিতা, সাংস্কৃতিক অনুষ্ঠান ও কাব-স্কাউটিং',
    explanation: 'পাঠ্যবইয়ের বাইরে শিক্ষার্থীর নেতৃত্ব, সৃজনশীলতা, শারীরিক সক্ষমতা ও মানসিক বিকাশে সহপাঠক্রমিক কাজ অপরিহার্য।',
    points: 1,
    subject: 'Primary Teacher Exam',
    topic: 'সহপাঠক্রমিক কার্যাবলি',
    difficulty: 'beginner'
  },
  {
    questionText: '‘কিশোরকাল বা বয়ঃসন্ধিকাল’ (Adolescence) কে ‘ঝড়-ঝঞ্ঝার কাল’ (A period of storm and stress) বলে কে অভিহিত করেছেন?',
    type: 'multiple-choice',
    options: ['জি. স্ট্যানলি হল (G. Stanley Hall)', 'সিগমন্ড ফ্রয়েড', 'জিন পিয়াজে', 'এরিক এরিকসন'],
    correctAnswer: 'জি. স্ট্যানলি হল (G. Stanley Hall)',
    explanation: '১৯০৪ সালে আমেরিকান মনোবিজ্ঞানী স্ট্যানলি হল কিশোর বয়সের তীব্র শারীরিক ও মানসিক টানাপোড়েনকে ঝড়-ঝঞ্ঝার কাল বলেছেন।',
    points: 1,
    subject: 'Primary Teacher Exam',
    topic: 'কিশোর মনোবিজ্ঞান',
    difficulty: 'intermediate'
  },
  {
    questionText: 'শ্রেণিকক্ষে শিক্ষার্থী কোনো প্রশ্নের অসত্য বা ভুল উত্তর দিলে শিক্ষকের তাৎক্ষণিক করণীয় কী?',
    type: 'multiple-choice',
    options: [
      'ধমক না দিয়ে ক্লু বা সহায়ক প্রশ্ন করে শিক্ষার্থীকে সঠিক উত্তরে পৌঁছাতে উৎসাহিত করা',
      'ক্লাস থেকে বের করে দেওয়া',
      'উপহাস করা',
      'পরবর্তী রোল নম্বরকে দাঁড় করানো'
    ],
    correctAnswer: 'ধমক না দিয়ে ক্লু বা সহায়ক প্রশ্ন করে শিক্ষার্থীকে সঠিক উত্তরে পৌঁছাতে উৎসাহিত করা',
    explanation: 'ভয়ভীতিহীন ও ইতিবাচক শ্রেণিকক্ষে শিক্ষকের গঠনমূলক উৎসাহদান শিক্ষার্থীর আত্মবিশ্বাস ও শিখন আকাঙ্ক্ষা বৃদ্ধি করে।',
    points: 1,
    subject: 'Primary Teacher Exam',
    topic: 'পেডাগোজি ও শিক্ষাদান কৌশল',
    difficulty: 'beginner'
  },
  {
    questionText: 'প্রাথমিক স্তরে বিজ্ঞান শিক্ষার সবচেয়ে কার্যকরী কৌশল কোনটি?',
    type: 'multiple-choice',
    options: ['হাতে-কলমে পরীক্ষণ ও বাস্তব পর্যবেক্ষণ পদ্ধতি (Hands-on experiment)', 'শুধুমাত্র সূত্র মুখস্থ করানো', 'বক্তৃতা দেওয়া', 'কঠিন সংজ্ঞা পড়ানো'],
    correctAnswer: 'হাতে-কলমে পরীক্ষণ ও বাস্তব পর্যবেক্ষণ পদ্ধতি (Hands-on experiment)',
    explanation: 'বাস্তবে চারাগাছের বৃদ্ধি, আলোর প্রতিফলন বা পানির রূপান্তর প্রত্যক্ষ করলে শিশুর বৈজ্ঞানিক কৌতূহল ও স্থায়ী ধারণা গঠিত হয়।',
    points: 1,
    subject: 'Primary Teacher Exam',
    topic: 'বিজ্ঞান শিক্ষাদান পদ্ধতি',
    difficulty: 'beginner'
  },
  {
    questionText: '১ কিলোমিটার সমান কত মিটার?',
    type: 'multiple-choice',
    options: ['১০০০ মিটার', '১০০ মিটার', '১০,০০০ মিটার', '৫০০ মিটার'],
    correctAnswer: '১০০০ মিটার',
    explanation: 'আন্তর্জাতিক ম্যাট্রিক পদ্ধতিতে ১ কিলোমিটার = ১০০০ মিটার = ১০০,০০০ সেন্টিমিটার।',
    points: 1,
    subject: 'Primary Teacher Exam',
    topic: 'পরিমাপ ও একক',
    difficulty: 'beginner'
  },
  {
    questionText: '১ কিলোগ্রাম (কেজি) সমান কত গ্রাম?',
    type: 'multiple-choice',
    options: ['১০০০ গ্রাম', '১০০ গ্রাম', '৫০০ গ্রাম', '১০,০০০ গ্রাম'],
    correctAnswer: '১০০০ গ্রাম',
    explanation: 'ওজন পরিমাপের মান একক গ্রাম; ১ কিলোগ্রাম = ১০০০ গ্রাম।',
    points: 1,
    subject: 'Primary Teacher Exam',
    topic: 'পরিমাপ ও একক',
    difficulty: 'beginner'
  },
  {
    questionText: '১ কুইন্টাল সমান কত কেজি এবং ১ মেট্রিক টন সমান কত কেজি?',
    type: 'multiple-choice',
    options: ['১ কুইন্টাল = ১০০ কেজি এবং ১ মেট্রিক টন = ১০০০ কেজি', '১ কুইন্টাল = ১০০০ কেজি', '১ কুইন্টাল = ৫০ কেজি', '১ মেট্রিক টন = ১০০ কেজি'],
    correctAnswer: '১ কুইন্টাল = ১০০ কেজি এবং ১ মেট্রিক টন = ১০০০ কেজি',
    explanation: '১ কুইন্টাল = ১০০ কেজি; ১০ কুইন্টাল = ১ মেট্রিক টন = ১০০০ কেজি।',
    points: 1,
    subject: 'Primary Teacher Exam',
    topic: 'পরিমাপ ও একক',
    difficulty: 'beginner'
  },
  {
    questionText: '১ একর সমান কত বর্গগজ?',
    type: 'multiple-choice',
    options: ['৪৮৪০ বর্গগজ (বা ১০০ শতক)', '৪৩৫৬০ বর্গফুট', '৪০০০ বর্গগজ', '৫০০০ বর্গগজ'],
    correctAnswer: '৪৮৪০ বর্গগজ (বা ১০০ শতক)',
    explanation: '১ একর = ৪৮৪০ বর্গগজ = ৪৩৫৬০ বর্গফুট = ১০০ শতক = ৪০৪৬.৮৬ বর্গমিটার।',
    points: 1,
    subject: 'Primary Teacher Exam',
    topic: 'ভূমি পরিমাপ ও গণিত',
    difficulty: 'intermediate'
  },
  {
    questionText: '১ মিটার সমান কত ইঞ্চি (প্রায়)?',
    type: 'multiple-choice',
    options: ['৩৯.৩৭ ইঞ্চি', '৩৬ ইঞ্চি (১ গজ)', '৪০ ইঞ্চি', '৩৮.৫ ইঞ্চি'],
    correctAnswer: '৩৯.৩৭ ইঞ্চি',
    explanation: '১ মিটার = ৩৯.৩৭ ইঞ্চি = ৩.২৮ ফুট (প্রায়)। ১ গজ = ৩৬ ইঞ্চি = ৩ ফুট।',
    points: 1,
    subject: 'Primary Teacher Exam',
    topic: 'পরিমাপ ও রূপান্তর',
    difficulty: 'beginner'
  },
  {
    questionText: 'একটি সমকোণী ত্রিভুজের একটি সূক্ষ্মকোণ ৪৫° হলে অপর সূক্ষ্মকোণটি কত ডিগ্রি?',
    type: 'multiple-choice',
    options: ['৪৫° (সমকোণী সমদ্বিবাহু ত্রিভুজ)', '৫০°', '৩৫°', '৬০°'],
    correctAnswer: '৪৫° (সমকোণী সমদ্বিবাহু ত্রিভুজ)',
    explanation: 'ত্রিভুজের কোণসমষ্টি ১৮০°। সমকোণ = ৯০°। অপর কোণ = ১৮০° - (৯০° + ৪৫°) = ৪৫°।',
    points: 1,
    subject: 'Primary Teacher Exam',
    topic: 'জ্যামিতি - ত্রিভুজ',
    difficulty: 'beginner'
  },
  {
    questionText: '১ হেক্টরে কত শতক বা কত একর?',
    type: 'multiple-choice',
    options: ['২৪৭ শতক বা প্রায় ২.৪৭ একর', '১০০ শতক', '২০০ শতক', '৩০০ শতক'],
    correctAnswer: '২৪৭ শতক বা প্রায় ২.৪৭ একর',
    explanation: '১ হেক্টর = ১০,০০০ বর্গমিটার = প্রায় ২.৪৭ একর = ২৪৭.১ শতক।',
    points: 1,
    subject: 'Primary Teacher Exam',
    topic: 'পরিমাপ ও ভূমি জরিপ',
    difficulty: 'intermediate'
  },
  {
    questionText: '‘জাতীয় শিক্ষক দিবস’ বাংলাদেশে প্রতি বছর কত তারিখে উদযাপিত হয়?',
    type: 'multiple-choice',
    options: ['২৭শে অক্টোবর', '৫ই অক্টোবর (বিশ্ব শিক্ষক দিবস)', '২১শে ফেব্রুয়ারি', '৭ই মার্চ'],
    correctAnswer: '২৭শে অক্টোবর',
    explanation: 'বাংলাদেশে জাতীয় শিক্ষক দিবস পালিত হয় প্রতি বছর ২৭শে অক্টোবর। ইউনেস্কো ঘোষিত বিশ্ব শিক্ষক দিবস হলো ৫ই অক্টোবর।',
    points: 1,
    subject: 'Primary Teacher Exam',
    topic: 'শিক্ষা দিবস',
    difficulty: 'beginner'
  },
  {
    questionText: '‘বিশ্ব পরিবেশ দিবস’ প্রতি বছর কোন তারিখে বিশ্বব্যাপী পালিত হয়?',
    type: 'multiple-choice',
    options: ['৫ই জুন (UNEP ঘোষিত)', '২২শে এপ্রিল (ধরিত্রী দিবস)', '২১শে মার্চ (বন দিবস)', '২২শে মে'],
    correctAnswer: '৫ই জুন (UNEP ঘোষিত)',
    explanation: '১৯৭২ সালের জাতিসংঘ স্টকহোম সম্মেলনের স্মরণে প্রতি বছর ৫ই জুন বিশ্ব পরিবেশ দিবস উদযাপিত হয়। ২২শে এপ্রিল ধরিত্রী দিবস।',
    points: 1,
    subject: 'Primary Teacher Exam',
    topic: 'আন্তর্জাতিক দিবস ও পরিবেশ',
    difficulty: 'beginner'
  },
  {
    questionText: '‘আন্তর্জাতিক নারী দিবস’ কোন তারিখে বিশ্বব্যাপী পালিত হয়?',
    type: 'multiple-choice',
    options: ['৮ই মার্চ', '১লা মে', '১০ই ডিসেম্বর', '১৫ই অক্টোবর'],
    correctAnswer: '৮ই মার্চ',
    explanation: '১৯১০ সালে ক্লারা জেটকিন প্রস্তাবিত এবং জাতিসংঘ স্বীকৃত ৮ই মার্চ আন্তর্জাতিক নারী দিবস হিসেবে পালিত হয়।',
    points: 1,
    subject: 'Primary Teacher Exam',
    topic: 'আন্তর্জাতিক দিবস',
    difficulty: 'beginner'
  },
  {
    questionText: '‘বিশ্ব তামাকমুক্ত দিবস’ (World No Tobacco Day) কোন তারিখে পালিত হয়?',
    type: 'multiple-choice',
    options: ['৩১শে মে', '৭ই এপ্রিল', '১লা ডিসেম্বর (এইডস দিবস)', '২৬শে জুন'],
    correctAnswer: '৩১শে মে',
    explanation: 'বিশ্ব স্বাস্থ্য সংস্থা (WHO) কর্তৃক তামাকের প্রাণঘাতী ক্ষতি সম্পর্কে জনসচেতনতা সৃষ্টিতে ৩১শে মে তামাকমুক্ত দিবস পালিত হয়।',
    points: 1,
    subject: 'Primary Teacher Exam',
    topic: 'আন্তর্জাতিক স্বাস্থ্য দিবস',
    difficulty: 'beginner'
  },
  {
    questionText: '‘আন্তর্জাতিক যুব দিবস’ (International Youth Day) প্রতি বছর কোন তারিখে উদযাপিত হয়?',
    type: 'multiple-choice',
    options: ['১২ই আগস্ট', '১লা নভেম্বর (জাতীয় যুব দিবস বাংলাদেশ)', '১২ই জানুয়ারি', '১৫ই জুলাই'],
    correctAnswer: '১২ই আগস্ট',
    explanation: 'আন্তর্জাতিক যুব দিবস ১২ই আগস্ট এবং বাংলাদেশে জাতীয় যুব দিবস ১লা নভেম্বর উদযাপিত হয়।',
    points: 1,
    subject: 'Primary Teacher Exam',
    topic: 'আন্তর্জাতিক দিবস',
    difficulty: 'beginner'
  }
];
