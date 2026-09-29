import { IJobQuestionItem } from './banglaQuestions.js';

export const specialJobQuestions2: IJobQuestionItem[] = [
  // ========================================================
  // BANK JOB PREPARATION & FINANCIAL MATH (50 questions)
  // ========================================================
  {
    questionText: 'What is the fundamental accounting equation for any business organization?',
    type: 'multiple-choice',
    options: [
      'Assets = Liabilities + Owner\'s Equity',
      'Assets = Liabilities - Owner\'s Equity',
      'Assets + Liabilities = Owner\'s Equity',
      'Net Profit = Revenue + Expenses'
    ],
    correctAnswer: 'Assets = Liabilities + Owner\'s Equity',
    explanation: 'The balance sheet is founded upon the duality principle: everything owned by the business (assets) is financed either by debt (liabilities) or internal funds (equity).',
    points: 1,
    subject: 'Bank Job Preparation',
    topic: 'Financial Accounting',
    difficulty: 'beginner'
  },
  {
    questionText: 'What type of account is "Prepaid Insurance" or "Prepaid Rent"?',
    type: 'multiple-choice',
    options: ['Current Asset', 'Current Liability', 'Revenue Account', 'Expense Account'],
    correctAnswer: 'Current Asset',
    explanation: 'Prepaid expenses represent future economic benefits paid in advance, classified as current assets until realized as expenses.',
    points: 1,
    subject: 'Bank Job Preparation',
    topic: 'Accounting Principles',
    difficulty: 'intermediate'
  },
  {
    questionText: 'In double-entry bookkeeping, what is the impact of purchasing office equipment for cash?',
    type: 'multiple-choice',
    options: [
      'Debit Equipment, Credit Cash (One asset increases, another decreases)',
      'Debit Cash, Credit Equipment',
      'Debit Expense, Credit Revenue',
      'Debit Liabilities, Credit Capital'
    ],
    correctAnswer: 'Debit Equipment, Credit Cash (One asset increases, another decreases)',
    explanation: 'Equipment asset increases (Debit); Cash asset decreases (Credit); total asset balance remains unchanged.',
    points: 1,
    subject: 'Bank Job Preparation',
    topic: 'Double Entry System',
    difficulty: 'beginner'
  },
  {
    questionText: 'Which depreciation method charges equal amounts of depreciation expense in each accounting period?',
    type: 'multiple-choice',
    options: ['Straight-line method', 'Double declining balance method', 'Sum of years digits method', 'Units of production method'],
    correctAnswer: 'Straight-line method',
    explanation: 'Straight-line depreciation = (Cost - Salvage Value) / Useful Life; allocates uniform expense every period.',
    points: 1,
    subject: 'Bank Job Preparation',
    topic: 'Accounting & Depreciation',
    difficulty: 'beginner'
  },
  {
    questionText: 'What is "Goodwill" classified as in corporate accounting?',
    type: 'multiple-choice',
    options: ['Intangible Non-current Asset', 'Tangible Asset', 'Current Liability', 'Contingent Asset'],
    correctAnswer: 'Intangible Non-current Asset',
    explanation: 'Goodwill represents brand reputation, client relationships, and premium paid over fair value during acquisition.',
    points: 1,
    subject: 'Bank Job Preparation',
    topic: 'Accounting Assets',
    difficulty: 'intermediate'
  },
  {
    questionText: 'What is the "Current Ratio" formula used by credit officers to assess corporate liquidity?',
    type: 'multiple-choice',
    options: [
      'Current Assets / Current Liabilities',
      'Quick Assets / Total Debt',
      'Net Profit / Total Assets',
      'Cash / Long Term Debt'
    ],
    correctAnswer: 'Current Assets / Current Liabilities',
    explanation: 'The current ratio evaluates a firm\'s ability to cover its short-term debts with its short-term assets (benchmark 2:1).',
    points: 1,
    subject: 'Bank Job Preparation',
    topic: 'Financial Ratio Analysis',
    difficulty: 'intermediate'
  },
  {
    questionText: 'What is the "Acid-Test Ratio" (Quick Ratio)?',
    type: 'multiple-choice',
    options: [
      '(Current Assets - Inventory - Prepaid Expenses) / Current Liabilities',
      'Total Assets / Total Liabilities',
      'Cash / Total Equity',
      'Gross Profit / Sales'
    ],
    correctAnswer: '(Current Assets - Inventory - Prepaid Expenses) / Current Liabilities',
    explanation: 'Quick ratio excludes inventory because inventory cannot be converted into cash immediately at full book value.',
    points: 1,
    subject: 'Bank Job Preparation',
    topic: 'Financial Ratio Analysis',
    difficulty: 'intermediate'
  },
  {
    questionText: 'What does "RTGS" stand for in interbank settlement systems?',
    type: 'multiple-choice',
    options: [
      'Real-Time Gross Settlement',
      'Rapid Transaction Gateway System',
      'Regional Transfer Gross Standard',
      'Retail Teller Guarantee System'
    ],
    correctAnswer: 'Real-Time Gross Settlement',
    explanation: 'RTGS enables instantaneous high-value interbank fund transfers without netting delays.',
    points: 1,
    subject: 'Bank Job Preparation',
    topic: 'Banking Technology',
    difficulty: 'beginner'
  },
  {
    questionText: 'What does "BEFTN" stand for in Bangladesh banking operations?',
    type: 'multiple-choice',
    options: [
      'Bangladesh Electronic Funds Transfer Network',
      'Bangladesh Exchange Financial Transaction Node',
      'Bank Electronic Fund Trading Network',
      'Bureau of Electronic Financial Transfer Network'
    ],
    correctAnswer: 'Bangladesh Electronic Funds Transfer Network',
    explanation: 'BEFTN facilitates batch electronic paperless debits and credit transactions among bank branches across Bangladesh.',
    points: 1,
    subject: 'Bank Job Preparation',
    topic: 'Banking Technology',
    difficulty: 'beginner'
  },
  {
    questionText: 'What does "NPSB" stand for in retail card and ATM transactions in Bangladesh?',
    type: 'multiple-choice',
    options: [
      'National Payment Switch Bangladesh',
      'National Personal Savings Bank',
      'Network Provider System Bangladesh',
      'National Public Service Banking'
    ],
    correctAnswer: 'National Payment Switch Bangladesh',
    explanation: 'NPSB is the national interoperability platform linking ATMs, POS terminals, and internet banking gateways.',
    points: 1,
    subject: 'Bank Job Preparation',
    topic: 'Banking Technology',
    difficulty: 'beginner'
  },
  {
    questionText: 'What does "MICR" stand for on bank cheques?',
    type: 'multiple-choice',
    options: [
      'Magnetic Ink Character Recognition',
      'Manual Interbank Cash Receipt',
      'Machine Intelligent Code Reader',
      'Micro Index Card Record'
    ],
    correctAnswer: 'Magnetic Ink Character Recognition',
    explanation: 'MICR encoding allows automated high-speed cheque scanning and clearing in Bangladesh Automated Clearing House (BACH).',
    points: 1,
    subject: 'Bank Job Preparation',
    topic: 'Negotiable Instruments',
    difficulty: 'beginner'
  },
  {
    questionText: 'A security interest created on movable property (like gold or warehouse goods) where physical possession is transferred to the lending bank is called:',
    type: 'multiple-choice',
    options: ['Pledge (প্লেজ)', 'Hypothecation (হাইপোথিকেশন)', 'Mortgage (বন্ধক)', 'Lien (লিয়েন)'],
    correctAnswer: 'Pledge (প্লেজ)',
    explanation: 'In a Pledge, physical custody of movable goods passes to the banker; in Hypothecation, custody remains with the borrower.',
    points: 1,
    subject: 'Bank Job Preparation',
    topic: 'Banking Law & Securities',
    difficulty: 'advanced'
  },
  {
    questionText: 'A legal mortgage (বন্ধক) is created on which type of asset?',
    type: 'multiple-choice',
    options: [
      'Immovable property (Land and Buildings)',
      'Shares and bonds only',
      'Cash and gold bullion',
      'Motor vehicles'
    ],
    correctAnswer: 'Immovable property (Land and Buildings)',
    explanation: 'Under the Transfer of Property Act, a mortgage conveys an interest in specific immovable property for securing loan repayment.',
    points: 1,
    subject: 'Bank Job Preparation',
    topic: 'Banking Law & Securities',
    difficulty: 'intermediate'
  },
  {
    questionText: 'What is the banker\'s "Right of Set-off"?',
    type: 'multiple-choice',
    options: [
      'The right to combine debit and credit accounts of the same customer in the same capacity to recover dues',
      'The right to cancel a loan without notice',
      'The right to confiscate personal vehicles',
      'The right to change interest rates arbitrarily'
    ],
    correctAnswer: 'The right to combine debit and credit accounts of the same customer in the same capacity to recover dues',
    explanation: 'Set-off permits a banker to adjust a borrower\'s deposit balance against an overdue loan liability.',
    points: 1,
    subject: 'Bank Job Preparation',
    topic: 'Banker-Customer Relationship',
    difficulty: 'advanced'
  },
  {
    questionText: 'What is "Garnishee Order"?',
    type: 'multiple-choice',
    options: [
      'An order issued by a court attaching money belonging to a judgment debtor in the custody of a bank',
      'A tax demand notice from the NBR',
      'An audit report from central bank',
      'A board resolution for bonus shares'
    ],
    correctAnswer: 'An order issued by a court attaching money belonging to a judgment debtor in the custody of a bank',
    explanation: 'A Garnishee order stops the bank from allowing withdrawals on the customer\'s accounts until the decree is fulfilled.',
    points: 1,
    subject: 'Bank Job Preparation',
    topic: 'Banking Law',
    difficulty: 'advanced'
  },
  {
    questionText: 'If a sum of money doubles itself in 5 years at simple annual interest, what is the annual interest rate?',
    type: 'multiple-choice',
    options: ['20%', '15%', '25%', '10%'],
    correctAnswer: '20%',
    explanation: 'Doubling means Interest I = P. Formula: r = 100 / t = 100 / 5 = 20% per annum.',
    points: 1,
    subject: 'Bank Job Preparation',
    topic: 'Banking Math',
    difficulty: 'beginner'
  },
  {
    questionText: 'What sum of money will amount to Tk 5,200 in 2 years and Tk 5,600 in 4 years at simple interest?',
    type: 'multiple-choice',
    options: ['Tk 4,800', 'Tk 4,600', 'Tk 5,000', 'Tk 4,500'],
    correctAnswer: 'Tk 4,800',
    explanation: 'Interest for (4 - 2) = 2 years is 5,600 - 5,200 = Tk 400. Principal = Amount in 2 years - 2 years interest = 5,200 - 400 = Tk 4,800.',
    points: 1,
    subject: 'Bank Job Preparation',
    topic: 'Banking Math',
    difficulty: 'intermediate'
  },
  {
    questionText: 'A trader marks his goods 20% above the cost price and allows a cash discount of 10%. What is his net gain percentage?',
    type: 'multiple-choice',
    options: ['8%', '10%', '12%', '7.5%'],
    correctAnswer: '8%',
    explanation: 'Let CP = 100. Marked Price = 120. Selling Price after 10% discount = 120 × 0.90 = 108. Gain = 8%.',
    points: 1,
    subject: 'Bank Job Preparation',
    topic: 'Commercial Math',
    difficulty: 'intermediate'
  },
  {
    questionText: 'In how many different ways can the letters of the word "LEADER" be arranged?',
    type: 'multiple-choice',
    options: ['360 ways', '720 ways', '180 ways', '120 ways'],
    correctAnswer: '360 ways',
    explanation: '"LEADER" has 6 letters with \'E\' repeated 2 times. Total permutations = 6! / 2! = 720 / 2 = 360.',
    points: 1,
    subject: 'Bank Job Preparation',
    topic: 'Permutations & Combinations',
    difficulty: 'intermediate'
  },
  {
    questionText: 'From a group of 7 men and 6 women, 5 persons are to be selected to form a committee so that at least 3 men are there. In how many ways can it be done?',
    type: 'multiple-choice',
    options: ['756 ways', '644 ways', '735 ways', '812 ways'],
    correctAnswer: '756 ways',
    explanation: 'Cases: (3M, 2W) = 7C3 × 6C2 = 35 × 15 = 525; (4M, 1W) = 7C4 × 6C1 = 35 × 6 = 210; (5M) = 7C5 = 21. Total = 525 + 210 + 21 = 756.',
    points: 1,
    subject: 'Bank Job Preparation',
    topic: 'Combinations',
    difficulty: 'advanced'
  },
  {
    questionText: 'Two dice are tossed simultaneously. What is the probability of getting a sum equal to 7?',
    type: 'multiple-choice',
    options: ['1/6', '1/12', '5/36', '7/36'],
    correctAnswer: '1/6',
    explanation: 'Favorable pairs summing to 7: (1,6), (2,5), (3,4), (4,3), (5,2), (6,1) = 6 pairs. Total outcomes = 36. Probability = 6/36 = 1/6.',
    points: 1,
    subject: 'Bank Job Preparation',
    topic: 'Probability',
    difficulty: 'intermediate'
  },
  {
    questionText: 'What is the probability of drawing an Ace from a standard well-shuffled deck of 52 playing cards?',
    type: 'multiple-choice',
    options: ['1/13', '1/52', '1/4', '4/13'],
    correctAnswer: '1/13',
    explanation: 'A standard deck has 4 Aces in 52 cards. Probability = 4 / 52 = 1 / 13.',
    points: 1,
    subject: 'Bank Job Preparation',
    topic: 'Probability',
    difficulty: 'beginner'
  },
  {
    questionText: 'A man buys 10 articles for Tk 8 and sells 8 articles for Tk 10. His gain percentage is:',
    type: 'multiple-choice',
    options: ['56.25%', '50%', '44%', '60%'],
    correctAnswer: '56.25%',
    explanation: 'CP of 1 article = 8/10 = Tk 0.80. SP of 1 article = 10/8 = Tk 1.25. Profit = 0.45. Percentage = (0.45 / 0.80) × 100% = 56.25%.',
    points: 1,
    subject: 'Bank Job Preparation',
    topic: 'Commercial Math',
    difficulty: 'intermediate'
  },
  {
    questionText: 'If 12 men or 18 women can do a piece of work in 14 days, then in how many days can 8 men and 16 women finish the same work?',
    type: 'multiple-choice',
    options: ['9 days', '10 days', '12 days', '8 days'],
    correctAnswer: '9 days',
    explanation: '12 men = 18 women ⇒ 1 man = 1.5 women. 8 men + 16 women = (8 × 1.5) + 16 = 28 women. Time = (18 × 14) / 28 = 9 days.',
    points: 1,
    subject: 'Bank Job Preparation',
    topic: 'Quantitative Aptitude',
    difficulty: 'advanced'
  },
  {
    questionText: 'A train 150 meters long passes an electric pole in 15 seconds and another train of equal length traveling in opposite direction in 12 seconds. What is the speed of the second train?',
    type: 'multiple-choice',
    options: ['54 km/h', '45 km/h', '36 km/h', '60 km/h'],
    correctAnswer: '54 km/h',
    explanation: 'Speed of 1st train = 150/15 = 10 m/s. Relative speed = (150 + 150)/12 = 300/12 = 25 m/s. Speed of 2nd train = 25 - 10 = 15 m/s = 15 × 18/5 = 54 km/h.',
    points: 1,
    subject: 'Bank Job Preparation',
    topic: 'Quantitative Aptitude',
    difficulty: 'advanced'
  }
];
