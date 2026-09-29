import { IJobQuestionItem } from './banglaQuestions.js';

export const extraBankQuestions: IJobQuestionItem[] = [
  // কেন্দ্রীয় ব্যাংক ও মুদ্রানীতি
  {
    questionText: 'What is the "Repo Rate" in central bank operations?',
    type: 'multiple-choice',
    options: [
      'The policy interest rate at which commercial banks borrow short-term funds from Bangladesh Bank',
      'The interest rate banks pay on savings accounts',
      'The rate of foreign exchange conversion',
      'The tax rate on bank dividends'
    ],
    correctAnswer: 'The policy interest rate at which commercial banks borrow short-term funds from Bangladesh Bank',
    explanation: 'Repo (Repurchase Option) rate is the benchmark policy rate used by central banks to control monetary liquidity and inflation.',
    points: 1,
    subject: 'Bank Job Preparation',
    topic: 'Monetary Policy',
    difficulty: 'intermediate'
  },
  {
    questionText: 'What is "Reverse Repo Rate"?',
    type: 'multiple-choice',
    options: [
      'The rate at which the central bank absorbs excess liquidity from commercial banks',
      'The interest rate charged on personal loans',
      'The rate at which foreign remittances are received',
      'Penalty interest rate on bad loans'
    ],
    correctAnswer: 'The rate at which the central bank absorbs excess liquidity from commercial banks',
    explanation: 'When central banks want to mop up surplus liquidity from the financial system, they borrow funds from banks at Reverse Repo rate.',
    points: 1,
    subject: 'Bank Job Preparation',
    topic: 'Monetary Policy',
    difficulty: 'intermediate'
  },
  {
    questionText: 'What is the full meaning of "NPL" in bank credit monitoring?',
    type: 'multiple-choice',
    options: ['Non-Performing Loan', 'Net Profit Liability', 'National Pension License', 'Non-Pledged Liquidity'],
    correctAnswer: 'Non-Performing Loan',
    explanation: 'NPL refers to loans or advances in default where scheduled interest and principal payments have not been made for 90 days or more.',
    points: 1,
    subject: 'Bank Job Preparation',
    topic: 'Credit Risk Management',
    difficulty: 'beginner'
  },
  {
    questionText: 'In the CAMELS rating framework for bank supervision, what does the letter "C" stand for?',
    type: 'multiple-choice',
    options: ['Capital Adequacy', 'Cash Reserves', 'Credit Rating', 'Current Assets'],
    correctAnswer: 'Capital Adequacy',
    explanation: 'CAMELS stands for: Capital adequacy, Asset quality, Management capability, Earnings, Liquidity, and Sensitivity to market risk.',
    points: 1,
    subject: 'Bank Job Preparation',
    topic: 'Banking Supervision',
    difficulty: 'intermediate'
  },
  {
    questionText: 'Under the Basel III international regulatory framework, what is the minimum Capital to Risk-weighted Assets Ratio (CRAR) required in Bangladesh?',
    type: 'multiple-choice',
    options: ['10.0% (plus 2.5% Capital Conservation Buffer)', '8.0%', '15.0%', '6.0%'],
    correctAnswer: '10.0% (plus 2.5% Capital Conservation Buffer)',
    explanation: 'Bangladesh Bank Basel III guidelines mandate a minimum CRAR of 10% plus a 2.5% Capital Conservation Buffer (total 12.5%).',
    points: 1,
    subject: 'Bank Job Preparation',
    topic: 'Basel Regulatory Framework',
    difficulty: 'advanced'
  },

  // বাণিজ্যিক ব্যাংকিং ও বাণিজ্য অর্থায়ন
  {
    questionText: 'What does "L/C" stand for in international trade and import-export finance?',
    type: 'multiple-choice',
    options: ['Letter of Credit', 'Loan Collateral', 'Liquidity Certificate', 'Legal Contract'],
    correctAnswer: 'Letter of Credit',
    explanation: 'A Letter of Credit (L/C) is a documentary commitment issued by a bank guaranteeing that a buyer\'s payment will be made to a seller.',
    points: 1,
    subject: 'Bank Job Preparation',
    topic: 'Trade Finance',
    difficulty: 'beginner'
  },
  {
    questionText: 'What is the full form of "KYC" in bank compliance and anti-money laundering (AML)?',
    type: 'multiple-choice',
    options: ['Know Your Customer', 'Keep Your Cash', 'Knowledge of Yield and Credit', 'Key Year Currency'],
    correctAnswer: 'Know Your Customer',
    explanation: 'KYC is the mandatory verification protocol banks and financial institutions conduct to verify identity and evaluate financial integrity.',
    points: 1,
    subject: 'Bank Job Preparation',
    topic: 'AML & Compliance',
    difficulty: 'beginner'
  },
  {
    questionText: 'Which entity in Bangladesh serves as the financial intelligence unit (FIU) to combat money laundering and terrorist financing?',
    type: 'multiple-choice',
    options: [
      'BFIU (Bangladesh Financial Intelligence Unit)',
      'Anti-Corruption Commission (ACC)',
      'Security and Exchange Commission (BSEC)',
      'Criminal Investigation Department (CID)'
    ],
    correctAnswer: 'BFIU (Bangladesh Financial Intelligence Unit)',
    explanation: 'BFIU operates under Bangladesh Bank as the central national agency to analyze suspicious transaction reports (STRs).',
    points: 1,
    subject: 'Bank Job Preparation',
    topic: 'Financial Regulations',
    difficulty: 'intermediate'
  },
  {
    questionText: 'What is a "Bearer Cheque"?',
    type: 'multiple-choice',
    options: [
      'A cheque payable to anyone who presents it physically across the bank counter',
      'A cheque payable strictly to a named individual through account only',
      'A cheque that has expired after 6 months',
      'A cheque issued by a government treasury'
    ],
    correctAnswer: 'A cheque payable to anyone who presents it physically across the bank counter',
    explanation: 'A bearer cheque is negotiable by mere physical delivery without endorsement; anyone holding it can encash it.',
    points: 1,
    subject: 'Bank Job Preparation',
    topic: 'Negotiable Instruments',
    difficulty: 'beginner'
  },
  {
    questionText: 'What is the standard validity period of a bank cheque in Bangladesh before it becomes "stale"?',
    type: 'multiple-choice',
    options: ['6 months from the date of issuance', '3 months', '1 year', '30 days'],
    correctAnswer: '6 months from the date of issuance',
    explanation: 'Under the Negotiable Instruments Act, a cheque presented after 6 months from the written date is stale and will be dishonored.',
    points: 1,
    subject: 'Bank Job Preparation',
    topic: 'Negotiable Instruments',
    difficulty: 'beginner'
  },

  // ব্যাংক গণিত ও অ্যানালিটিক্যাল দক্ষতা
  {
    questionText: 'A and B entered into a partnership. A invested Tk 50,000 for 12 months, and B invested Tk 75,000 for 8 months. What is their profit-sharing ratio?',
    type: 'multiple-choice',
    options: ['1 : 1', '2 : 3', '3 : 2', '4 : 5'],
    correctAnswer: '1 : 1',
    explanation: 'Profit ratio = (50,000 × 12) : (75,000 × 8) = 600,000 : 600,000 = 1 : 1.',
    points: 1,
    subject: 'Bank Job Preparation',
    topic: 'Partnership Math',
    difficulty: 'intermediate'
  },
  {
    questionText: 'A bank offers 8% annual compound interest compounded semi-annually. What is the effective annual rate (EAR)?',
    type: 'multiple-choice',
    options: ['8.16%', '8.00%', '8.24%', '8.50%'],
    correctAnswer: '8.16%',
    explanation: 'EAR = (1 + r/m)^m - 1 = (1 + 0.08/2)² - 1 = (1.04)² - 1 = 1.0816 - 1 = 8.16%.',
    points: 1,
    subject: 'Bank Job Preparation',
    topic: 'Financial Math',
    difficulty: 'advanced'
  },
  {
    questionText: 'The present value of a future sum of Tk 1,210 due in 2 years discounted at 10% compound interest per annum is:',
    type: 'multiple-choice',
    options: ['Tk 1,000', 'Tk 1,100', 'Tk 950', 'Tk 1,050'],
    correctAnswer: 'Tk 1,000',
    explanation: 'PV = FV / (1 + r)² = 1210 / (1.10)² = 1210 / 1.21 = Tk 1,000.',
    points: 1,
    subject: 'Bank Job Preparation',
    topic: 'Time Value of Money',
    difficulty: 'intermediate'
  },
  {
    questionText: 'In financial market terminology, what is a "Bull Market"?',
    type: 'multiple-choice',
    options: [
      'A financial market characterized by rising prices and optimism',
      'A market characterized by falling prices and prolonged pessimism',
      'A livestock commodity auction market',
      'A market where only government securities trade'
    ],
    correctAnswer: 'A financial market characterized by rising prices and optimism',
    explanation: 'A bull market is a market condition where asset prices are trending upward; a bear market is where prices are declining.',
    points: 1,
    subject: 'Bank Job Preparation',
    topic: 'Capital Markets',
    difficulty: 'beginner'
  },
  {
    questionText: 'What is "Treasury Bill" (T-Bill)?',
    type: 'multiple-choice',
    options: [
      'A short-term debt security issued by the government with maturity up to 1 year',
      'A long-term bond with 20-year maturity',
      'A corporate share issued by state banks',
      'An export invoice'
    ],
    correctAnswer: 'A short-term debt security issued by the government with maturity up to 1 year',
    explanation: 'T-Bills are zero-coupon sovereign debt instruments issued at a discount with maturities of 91, 182, or 364 days.',
    points: 1,
    subject: 'Bank Job Preparation',
    topic: 'Money Market',
    difficulty: 'intermediate'
  }
];
