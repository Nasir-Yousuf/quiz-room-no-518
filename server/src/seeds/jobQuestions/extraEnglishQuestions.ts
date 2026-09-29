import { IJobQuestionItem } from './banglaQuestions.js';

export const extraEnglishQuestions: IJobQuestionItem[] = [
  // Subject-Verb Agreement & Syntax
  {
    questionText: 'Neither the teacher nor the students _____ present in the seminar.',
    type: 'multiple-choice',
    options: ['were', 'was', 'is', 'are being'],
    correctAnswer: 'were',
    explanation: 'When subjects are joined by "neither... nor", the verb agrees with the subject closer to it (students = plural -> were).',
    points: 1,
    subject: 'English',
    topic: 'Subject-Verb Agreement',
    difficulty: 'intermediate'
  },
  {
    questionText: 'The CEO, along with his advisors, _____ attending the global summit.',
    type: 'multiple-choice',
    options: ['is', 'are', 'were', 'have been'],
    correctAnswer: 'is',
    explanation: 'Phrases like "along with", "as well as", "together with", and "in addition to" do not change the number of the main singular subject (The CEO is).',
    points: 1,
    subject: 'English',
    topic: 'Subject-Verb Agreement',
    difficulty: 'intermediate'
  },
  {
    questionText: 'Each of the participants _____ given a certificate of merit.',
    type: 'multiple-choice',
    options: ['was', 'were', 'are', 'have been'],
    correctAnswer: 'was',
    explanation: '"Each", "every", and "neither" take a singular verb (Each was given).',
    points: 1,
    subject: 'English',
    topic: 'Subject-Verb Agreement',
    difficulty: 'beginner'
  },
  {
    questionText: 'Slow and steady _____ the race.',
    type: 'multiple-choice',
    options: ['wins', 'win', 'winning', 'have won'],
    correctAnswer: 'wins',
    explanation: 'When two nouns express a single unified idea or concept, they take a singular verb.',
    points: 1,
    subject: 'English',
    topic: 'Subject-Verb Agreement',
    difficulty: 'beginner'
  },
  {
    questionText: 'Fifty miles _____ a long distance to walk in one day.',
    type: 'multiple-choice',
    options: ['is', 'are', 'were', 'be'],
    correctAnswer: 'is',
    explanation: 'Plural expressions of distance, money, or time functioning as a single collective unit take a singular verb.',
    points: 1,
    subject: 'English',
    topic: 'Subject-Verb Agreement',
    difficulty: 'beginner'
  },
  {
    questionText: 'One of my friends _____ an astrophysicist at NASA.',
    type: 'multiple-choice',
    options: ['is', 'are', 'were', 'have been'],
    correctAnswer: 'is',
    explanation: '"One of + plural noun" takes a singular verb because the subject is "One".',
    points: 1,
    subject: 'English',
    topic: 'Subject-Verb Agreement',
    difficulty: 'beginner'
  },
  {
    questionText: 'The committee _____ divided in their opinions.',
    type: 'multiple-choice',
    options: ['were', 'was', 'is', 'has been'],
    correctAnswer: 'were',
    explanation: 'When members of a collective noun act individually or disagree, a plural verb is used (noun of multitude).',
    points: 1,
    subject: 'English',
    topic: 'Collective Nouns',
    difficulty: 'advanced'
  },

  // Right Forms of Verbs & Conditionals
  {
    questionText: 'If he had studied rigorously, he _____ the civil service examination.',
    type: 'multiple-choice',
    options: ['would have passed', 'would pass', 'will pass', 'passed'],
    correctAnswer: 'would have passed',
    explanation: 'Third conditional pattern: If + Past Perfect, Subject + would have + Past Participle (V3).',
    points: 1,
    subject: 'English',
    topic: 'Conditionals',
    difficulty: 'intermediate'
  },
  {
    questionText: 'If it rains tomorrow, we _____ the outdoor event.',
    type: 'multiple-choice',
    options: ['will postpone', 'would postpone', 'would have postponed', 'postponed'],
    correctAnswer: 'will postpone',
    explanation: 'First conditional: If + Present Simple, Subject + will/can/may + Base Form.',
    points: 1,
    subject: 'English',
    topic: 'Conditionals',
    difficulty: 'beginner'
  },
  {
    questionText: 'Walk briskly lest you _____ the commuter train.',
    type: 'multiple-choice',
    options: ['should miss', 'miss', 'will miss', 'would miss'],
    correctAnswer: 'should miss',
    explanation: '"Lest" is followed by subject + "should" (or subjunctive bare infinitive) and expresses negative fear.',
    points: 1,
    subject: 'English',
    topic: 'Conjunctions',
    difficulty: 'intermediate'
  },
  {
    questionText: 'It is high time we _____ our lifestyle habits.',
    type: 'multiple-choice',
    options: ['changed', 'change', 'have changed', 'will change'],
    correctAnswer: 'changed',
    explanation: 'After "It is time" or "It is high time", the following clause takes the simple past tense.',
    points: 1,
    subject: 'English',
    topic: 'Right Forms of Verbs',
    difficulty: 'beginner'
  },
  {
    questionText: 'I look forward to _____ from you soon.',
    type: 'multiple-choice',
    options: ['hearing', 'hear', 'have heard', 'heard'],
    correctAnswer: 'hearing',
    explanation: 'Expressions like "look forward to", "with a view to", "used to", "accustomed to" take the gerund (-ing form).',
    points: 1,
    subject: 'English',
    topic: 'Gerund & Preposition',
    difficulty: 'beginner'
  },
  {
    questionText: 'He speaks as if he _____ everything in the world.',
    type: 'multiple-choice',
    options: ['knew', 'knows', 'has known', 'is knowing'],
    correctAnswer: 'knew',
    explanation: 'Clauses with "as if" or "as though" denoting an unreal condition take the past subjunctive form.',
    points: 1,
    subject: 'English',
    topic: 'Subjunctive Mood',
    difficulty: 'intermediate'
  },
  {
    questionText: 'I would rather starve than _____ food.',
    type: 'multiple-choice',
    options: ['beg', 'begging', 'to beg', 'begged'],
    correctAnswer: 'beg',
    explanation: '"Would rather" is followed by the bare infinitive without "to".',
    points: 1,
    subject: 'English',
    topic: 'Modal Auxiliaries',
    difficulty: 'intermediate'
  },
  {
    questionText: 'You had better _____ a medical doctor immediately.',
    type: 'multiple-choice',
    options: ['consult', 'to consult', 'consulting', 'consulted'],
    correctAnswer: 'consult',
    explanation: '"Had better" behaves as a modal idiom and is followed by the bare infinitive.',
    points: 1,
    subject: 'English',
    topic: 'Modal Auxiliaries',
    difficulty: 'beginner'
  },
  {
    questionText: 'The patient had died before the doctor _____.',
    type: 'multiple-choice',
    options: ['came', 'had come', 'comes', 'was coming'],
    correctAnswer: 'came',
    explanation: 'In past perfect sequential events: Past Perfect before + Past Simple (came).',
    points: 1,
    subject: 'English',
    topic: 'Tense Sequence',
    difficulty: 'beginner'
  },

  // Appropriate Prepositions
  {
    questionText: 'He refrained _____ making any derogatory comments.',
    type: 'multiple-choice',
    options: ['from', 'to', 'with', 'at'],
    correctAnswer: 'from',
    explanation: '"Refrain from", "abstain from", and "prevent from" always take the preposition "from".',
    points: 1,
    subject: 'English',
    topic: 'Appropriate Prepositions',
    difficulty: 'beginner'
  },
  {
    questionText: 'She is confident _____ her imminent victory.',
    type: 'multiple-choice',
    options: ['of', 'about', 'with', 'in'],
    correctAnswer: 'of',
    explanation: '"Confident of" success; "Confidence in" someone.',
    points: 1,
    subject: 'English',
    topic: 'Appropriate Prepositions',
    difficulty: 'beginner'
  },
  {
    questionText: 'The accused was acquitted _____ all corruption charges.',
    type: 'multiple-choice',
    options: ['of', 'from', 'with', 'by'],
    correctAnswer: 'of',
    explanation: '"Acquit of" means legally declare not guilty of a charge.',
    points: 1,
    subject: 'English',
    topic: 'Appropriate Prepositions',
    difficulty: 'intermediate'
  },
  {
    questionText: 'Smoking is injurious _____ human health.',
    type: 'multiple-choice',
    options: ['to', 'for', 'with', 'at'],
    correctAnswer: 'to',
    explanation: '"Injurious to", "detrimental to", and "harmful to" take the preposition "to".',
    points: 1,
    subject: 'English',
    topic: 'Appropriate Prepositions',
    difficulty: 'beginner'
  },
  {
    questionText: 'He presided _____ the annual shareholders meeting.',
    type: 'multiple-choice',
    options: ['over', 'at', 'in', 'upon'],
    correctAnswer: 'over',
    explanation: '"Preside over" means lead or be in the position of authority at a meeting.',
    points: 1,
    subject: 'English',
    topic: 'Appropriate Prepositions',
    difficulty: 'intermediate'
  },
  {
    questionText: 'He is blind _____ his son’s blatant faults.',
    type: 'multiple-choice',
    options: ['to', 'of', 'with', 'in'],
    correctAnswer: 'to',
    explanation: 'Physically blind "in" an eye; figuratively blind "to" faults or mistakes.',
    points: 1,
    subject: 'English',
    topic: 'Appropriate Prepositions',
    difficulty: 'intermediate'
  },
  {
    questionText: 'She complies _____ all organizational policies diligently.',
    type: 'multiple-choice',
    options: ['with', 'to', 'for', 'in'],
    correctAnswer: 'with',
    explanation: '"Comply with" means conform or submit to rules/orders.',
    points: 1,
    subject: 'English',
    topic: 'Appropriate Prepositions',
    difficulty: 'beginner'
  },
  {
    questionText: 'The land is devoid _____ natural vegetation.',
    type: 'multiple-choice',
    options: ['of', 'from', 'with', 'by'],
    correctAnswer: 'of',
    explanation: '"Devoid of" means completely lacking or empty of something.',
    points: 1,
    subject: 'English',
    topic: 'Appropriate Prepositions',
    difficulty: 'beginner'
  },

  // Vocabulary: Synonyms & Antonyms
  {
    questionText: 'What is the synonym of "PRAGMATIC"?',
    type: 'multiple-choice',
    options: ['Practical and realistic', 'Theoretical', 'Romantic', 'Idealistic'],
    correctAnswer: 'Practical and realistic',
    explanation: '"Pragmatic" refers to dealing with things sensibly and realistically based on practical considerations.',
    points: 1,
    subject: 'English',
    topic: 'Synonyms',
    difficulty: 'intermediate'
  },
  {
    questionText: 'What is the antonym of "PRAGMATIC"?',
    type: 'multiple-choice',
    options: ['Idealistic / Theoretical', 'Sensible', 'Functional', 'Realistic'],
    correctAnswer: 'Idealistic / Theoretical',
    explanation: 'The opposite of being pragmatic (practical) is idealistic, visionary, or impractical.',
    points: 1,
    subject: 'English',
    topic: 'Antonyms',
    difficulty: 'intermediate'
  },
  {
    questionText: 'What is the synonym of "TACITURN"?',
    type: 'multiple-choice',
    options: ['Reserved / Habitually silent', 'Loquacious', 'Noisy', 'Eloquent'],
    correctAnswer: 'Reserved / Habitually silent',
    explanation: '"Taciturn" describes a person who says very little and is reticent.',
    points: 1,
    subject: 'English',
    topic: 'Synonyms',
    difficulty: 'advanced'
  },
  {
    questionText: 'What is the antonym of "TACITURN"?',
    type: 'multiple-choice',
    options: ['Loquacious / Talkative', 'Mute', 'Reticent', 'Quiet'],
    correctAnswer: 'Loquacious / Talkative',
    explanation: '"Loquacious" or "garrulous" means talking a great deal; the exact opposite of taciturn.',
    points: 1,
    subject: 'English',
    topic: 'Antonyms',
    difficulty: 'advanced'
  },
  {
    questionText: 'What is the synonym of "FASTIDIOUS"?',
    type: 'multiple-choice',
    options: ['Meticulous / Hard to please', 'Careless', 'Indifferent', 'Lazy'],
    correctAnswer: 'Meticulous / Hard to please',
    explanation: '"Fastidious" means very attentive to and concerned about accuracy and detail; choosy.',
    points: 1,
    subject: 'English',
    topic: 'Synonyms',
    difficulty: 'advanced'
  },
  {
    questionText: 'What is the antonym of "OBSOLETE"?',
    type: 'multiple-choice',
    options: ['Contemporary / Current', 'Archaic', 'Outdated', 'Ancient'],
    correctAnswer: 'Contemporary / Current',
    explanation: '"Obsolete" means no longer produced or used; opposite is contemporary, fashionable, or modern.',
    points: 1,
    subject: 'English',
    topic: 'Antonyms',
    difficulty: 'intermediate'
  },
  {
    questionText: 'What is the synonym of "LUCID"?',
    type: 'multiple-choice',
    options: ['Clear and easy to understand', 'Murky', 'Ambiguous', 'Confusing'],
    correctAnswer: 'Clear and easy to understand',
    explanation: '"Lucid" means expressed clearly and easy to comprehend.',
    points: 1,
    subject: 'English',
    topic: 'Synonyms',
    difficulty: 'beginner'
  },
  {
    questionText: 'What is the antonym of "AFFLUENT"?',
    type: 'multiple-choice',
    options: ['Impoverished / Destitute', 'Opulent', 'Wealthy', 'Prosperous'],
    correctAnswer: 'Impoverished / Destitute',
    explanation: '"Affluent" means wealthy or rich; opposite is destitute, penniless, or impoverished.',
    points: 1,
    subject: 'English',
    topic: 'Antonyms',
    difficulty: 'intermediate'
  },

  // Idioms & Phrases
  {
    questionText: 'The idiom "A bolt from the blue" denotes:',
    type: 'multiple-choice',
    options: ['A complete and sudden surprise', 'Thunderstorm', 'Electric shock', 'An expected arrival'],
    correctAnswer: 'A complete and sudden surprise',
    explanation: '"A bolt from the blue" signifies a sudden, unexpected and shocking occurrence.',
    points: 1,
    subject: 'English',
    topic: 'Idioms & Phrases',
    difficulty: 'beginner'
  },
  {
    questionText: 'The phrase "At sixes and sevens" means:',
    type: 'multiple-choice',
    options: ['In utter confusion and disorder', 'In perfect harmony', 'Playing dice', 'Very punctual'],
    correctAnswer: 'In utter confusion and disorder',
    explanation: 'Refers to a state of total chaos, disorganization, or disagreement.',
    points: 1,
    subject: 'English',
    topic: 'Idioms & Phrases',
    difficulty: 'intermediate'
  },
  {
    questionText: 'What is the meaning of "To spill the beans"?',
    type: 'multiple-choice',
    options: ['To disclose a secret prematurely', 'To drop vegetables', 'To cook breakfast', 'To waste money'],
    correctAnswer: 'To disclose a secret prematurely',
    explanation: '"Spill the beans" is an informal idiom meaning to reveal confidential information.',
    points: 1,
    subject: 'English',
    topic: 'Idioms & Phrases',
    difficulty: 'beginner'
  },
  {
    questionText: 'The idiom "Burn the midnight oil" means:',
    type: 'multiple-choice',
    options: ['To study or work late into the night', 'To waste kerosene', 'To ignite lamps', 'To cause arson'],
    correctAnswer: 'To study or work late into the night',
    explanation: 'Working or reading hard till late hours of the night.',
    points: 1,
    subject: 'English',
    topic: 'Idioms & Phrases',
    difficulty: 'beginner'
  },
  {
    questionText: 'The expression "Face the music" means:',
    type: 'multiple-choice',
    options: ['To accept unpleasant consequences', 'To enjoy a concert', 'To dance merrily', 'To play instruments'],
    correctAnswer: 'To accept unpleasant consequences',
    explanation: '"Face the music" signifies confronting the unpleasant reality or punishment for one\'s actions.',
    points: 1,
    subject: 'English',
    topic: 'Idioms & Phrases',
    difficulty: 'intermediate'
  },
  {
    questionText: 'The phrase "Achilles\' heel" symbolizes:',
    type: 'multiple-choice',
    options: ['A vulnerable or weak spot', 'Strong armor', 'Fast runner', 'A military hero'],
    correctAnswer: 'A vulnerable or weak spot',
    explanation: 'Originating from Greek myth, an Achilles\' heel represents a fatal weakness despite overall strength.',
    points: 1,
    subject: 'English',
    topic: 'Idioms & Phrases',
    difficulty: 'intermediate'
  },

  // One Word Substitution
  {
    questionText: 'A person who loves and donates generously to help mankind is a/an:',
    type: 'multiple-choice',
    options: ['Philanthropist', 'Misanthrope', 'Misogynist', 'Egotist'],
    correctAnswer: 'Philanthropist',
    explanation: 'Philanthropist = lover of humanity; Misanthrope = hater of mankind.',
    points: 1,
    subject: 'English',
    topic: 'One Word Substitution',
    difficulty: 'beginner'
  },
  {
    questionText: 'One who knows and speaks many languages is called a:',
    type: 'multiple-choice',
    options: ['Polyglot', 'Linguist', 'Novice', 'Pedant'],
    correctAnswer: 'Polyglot',
    explanation: 'A polyglot is someone who has mastery over several different languages.',
    points: 1,
    subject: 'English',
    topic: 'One Word Substitution',
    difficulty: 'beginner'
  },
  {
    questionText: 'A person who cannot be corrected or reformed is:',
    type: 'multiple-choice',
    options: ['Incorrigible', 'Invulnerable', 'Infallible', 'Indelible'],
    correctAnswer: 'Incorrigible',
    explanation: '"Incorrigible" describes habits, behaviors, or individuals that resist reform.',
    points: 1,
    subject: 'English',
    topic: 'One Word Substitution',
    difficulty: 'intermediate'
  },
  {
    questionText: 'A child born after the death of its father, or a book published after the author\'s death is:',
    type: 'multiple-choice',
    options: ['Posthumous', 'Premature', 'Anonymous', 'Contemporary'],
    correctAnswer: 'Posthumous',
    explanation: '"Posthumous" refers to occurrences after a person\'s biological demise.',
    points: 1,
    subject: 'English',
    topic: 'One Word Substitution',
    difficulty: 'intermediate'
  },
  {
    questionText: 'One who is present everywhere at the same time is:',
    type: 'multiple-choice',
    options: ['Omnipresent', 'Omnipotent', 'Omniscient', 'Eternal'],
    correctAnswer: 'Omnipresent',
    explanation: 'Omnipresent = present everywhere; Omnipotent = all-powerful; Omniscient = all-knowing.',
    points: 1,
    subject: 'English',
    topic: 'One Word Substitution',
    difficulty: 'beginner'
  },

  // English Literature (BCS & High-tier Competitive Exams)
  {
    questionText: 'Who is widely regarded as the "Father of English Poetry"?',
    type: 'multiple-choice',
    options: ['Geoffrey Chaucer', 'William Shakespeare', 'John Milton', 'Edmund Spenser'],
    correctAnswer: 'Geoffrey Chaucer',
    explanation: 'Geoffrey Chaucer (author of The Canterbury Tales) is recognized as the father of English literature and poetry.',
    points: 1,
    subject: 'English',
    topic: 'English Literature',
    difficulty: 'beginner'
  },
  {
    questionText: 'Who wrote the epic poem "Paradise Lost"?',
    type: 'multiple-choice',
    options: ['John Milton', 'John Dryden', 'William Blake', 'Alexander Pope'],
    correctAnswer: 'John Milton',
    explanation: 'Published in 1667 in blank verse, "Paradise Lost" chronicles the fall of Satan and humankind.',
    points: 1,
    subject: 'English',
    topic: 'English Literature',
    difficulty: 'beginner'
  },
  {
    questionText: 'Which of Shakespeare’s tragedies features the character "Iago"?',
    type: 'multiple-choice',
    options: ['Othello', 'Hamlet', 'Macbeth', 'King Lear'],
    correctAnswer: 'Othello',
    explanation: 'Iago is the Machiavellian villain who deceitfully manipulates Othello\'s jealousy regarding Desdemona.',
    points: 1,
    subject: 'English',
    topic: 'Shakespearean Drama',
    difficulty: 'intermediate'
  },
  {
    questionText: '"To be, or not to be, that is the question"—is a soliloquy from:',
    type: 'multiple-choice',
    options: ['Hamlet', 'Macbeth', 'Julius Caesar', 'The Tempest'],
    correctAnswer: 'Hamlet',
    explanation: 'Prince Hamlet contemplates life, death, suffering, and existential action in Act III, Scene 1.',
    points: 1,
    subject: 'English',
    topic: 'Shakespearean Drama',
    difficulty: 'beginner'
  },
  {
    questionText: 'Who wrote the gothic masterpiece "Frankenstein"?',
    type: 'multiple-choice',
    options: ['Mary Shelley', 'Jane Austen', 'Virginia Woolf', 'Emily Brontë'],
    correctAnswer: 'Mary Shelley',
    explanation: 'Mary Wollstonecraft Shelley published Frankenstein (The Modern Prometheus) in 1818.',
    points: 1,
    subject: 'English',
    topic: 'English Literature',
    difficulty: 'intermediate'
  },
  {
    questionText: 'Who wrote "A Tale of Two Cities"?',
    type: 'multiple-choice',
    options: ['Charles Dickens', 'Thomas Hardy', 'William Thackeray', 'Walter Scott'],
    correctAnswer: 'Charles Dickens',
    explanation: 'Set against London and Paris during the French Revolution; famously opens with "It was the best of times, it was the worst of times".',
    points: 1,
    subject: 'English',
    topic: 'Victorian Literature',
    difficulty: 'beginner'
  },
  {
    questionText: 'Who wrote the dystopian political satire "Animal Farm"?',
    type: 'multiple-choice',
    options: ['George Orwell', 'Aldous Huxley', 'H.G. Wells', 'Arthur Conan Doyle'],
    correctAnswer: 'George Orwell',
    explanation: 'George Orwell (Eric Arthur Blair) published "Animal Farm" in 1945 allegorizing totalitarian Stalinism.',
    points: 1,
    subject: 'English',
    topic: 'Modern Literature',
    difficulty: 'beginner'
  },
  {
    questionText: '"The Waste Land" (1922) was written by which modernist poet?',
    type: 'multiple-choice',
    options: ['T.S. Eliot', 'W.B. Yeats', 'Ezra Pound', 'W.H. Auden'],
    correctAnswer: 'T.S. Eliot',
    explanation: 'T.S. Eliot received the Nobel Prize in Literature in 1948; "The Waste Land" begins with "April is the cruellest month".',
    points: 1,
    subject: 'English',
    topic: 'Modern Literature',
    difficulty: 'intermediate'
  }
];
