import { IJobQuestionItem, banglaQuestions } from './banglaQuestions.js';
import { englishQuestions } from './englishQuestions.js';
import { mathQuestions } from './mathQuestions.js';
import { gkBangladeshQuestions } from './gkBangladeshQuestions.js';
import { gkInternationalQuestions } from './gkInternationalQuestions.js';
import { scienceIctQuestions } from './scienceIctQuestions.js';
import { bankJobQuestions } from './bankJobQuestions.js';
import { teacherJobQuestions } from './teacherJobQuestions.js';

// Supplementary high-yield question banks across all 8 essential job sections
import { supplementaryBangla } from './supplementaryBangla.js';
import { supplementaryEnglish } from './supplementaryEnglish.js';
import { supplementaryMath } from './supplementaryMath.js';
import { supplementaryGkBangladesh } from './supplementaryGkBangladesh.js';
import { supplementaryGkInternational } from './supplementaryGkInternational.js';
import { supplementaryScienceIct } from './supplementaryScienceIct.js';
import { supplementaryBank } from './supplementaryBank.js';
import { supplementaryTeacher } from './supplementaryTeacher.js';

// Extra authentic question banks
import { extraMathQuestions } from './extraMathQuestions.js';
import { extraEnglishQuestions } from './extraEnglishQuestions.js';
import { extraGkBangladeshQuestions } from './extraGkBangladeshQuestions.js';
import { extraGkInternationalQuestions } from './extraGkInternationalQuestions.js';
import { extraScienceIctQuestions } from './extraScienceIctQuestions.js';
import { extraBankQuestions } from './extraBankQuestions.js';
import { extraTeacherQuestions } from './extraTeacherQuestions.js';
// Special job examination question banks
import { specialJobQuestions1 } from './specialJobQuestions1.js';
import { specialJobQuestions2 } from './specialJobQuestions2.js';
import { specialJobQuestions3 } from './specialJobQuestions3.js';
import { specialJobQuestions4 } from './specialJobQuestions4.js';
import { specialJobQuestions5 } from './specialJobQuestions5.js';
import { specialJobQuestions6 } from './specialJobQuestions6.js';
import { specialJobQuestions7 } from './specialJobQuestions7.js';

export const getAllJobQuestions = (): IJobQuestionItem[] => {
  const all: IJobQuestionItem[] = [
    ...banglaQuestions,
    ...supplementaryBangla,
    ...englishQuestions,
    ...supplementaryEnglish,
    ...extraEnglishQuestions,
    ...mathQuestions,
    ...supplementaryMath,
    ...extraMathQuestions,
    ...gkBangladeshQuestions,
    ...supplementaryGkBangladesh,
    ...extraGkBangladeshQuestions,
    ...gkInternationalQuestions,
    ...supplementaryGkInternational,
    ...extraGkInternationalQuestions,
    ...scienceIctQuestions,
    ...supplementaryScienceIct,
    ...extraScienceIctQuestions,
    ...bankJobQuestions,
    ...supplementaryBank,
    ...extraBankQuestions,
    ...teacherJobQuestions,
    ...supplementaryTeacher,
    ...extraTeacherQuestions,
    ...specialJobQuestions1,
    ...specialJobQuestions2,
    ...specialJobQuestions3,
    ...specialJobQuestions4,
    ...specialJobQuestions5,
    ...specialJobQuestions6,
    ...specialJobQuestions7,
  ];

  return all;
};
