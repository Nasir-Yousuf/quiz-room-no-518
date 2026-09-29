import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import confetti from 'canvas-confetti';
import { api } from '../../api/client.js';
import { IQuizAttempt } from '../../types/index.js';
import { SubjectBadge } from '../../components/Badge.js';
import { useLanguage } from '../../context/LanguageContext.js';
import {
  Trophy,
  CheckCircle2,
  XCircle,
  Clock,
  ArrowRight,
  BookOpen,
  RotateCcw,
  Sparkles,
  HelpCircle,
  AlertTriangle,
} from 'lucide-react';

export const QuizResultPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [attempt, setAttempt] = useState<IQuizAttempt | null>(null);
  const [loading, setLoading] = useState(true);
  const { t, translateQuestion, language } = useLanguage();

  useEffect(() => {
    const fetchResult = async () => {
      try {
        setLoading(true);
        const res = await api.get(`/api/attempts/${id}`);
        if (res.success && res.attempt) {
          setAttempt(res.attempt);
          // If passed, trigger celebratory confetti!
          if (res.attempt.passed) {
            confetti({
              particleCount: 80,
              spread: 60,
              origin: { y: 0.6 },
            });
          }
        }
      } catch (err) {
        console.error('Failed to load result:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchResult();
  }, [id]);

  if (loading || !attempt) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center">
        <div className="flex flex-col items-center gap-3">
          <div className="w-10 h-10 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin" />
          <p className="text-xs font-semibold text-slate-500">
            {language === 'bn' ? 'উত্তরপত্র মূল্যায়ন করা হচ্ছে...' : 'Grading and Analyzing Responses...'}
          </p>
        </div>
      </div>
    );
  }

  const correctCount = attempt.answers.filter((a) => a.isCorrect).length;
  const incorrectCount = attempt.answers.length - correctCount;
  const mins = Math.floor(attempt.timeSpentSeconds / 60);
  const secs = attempt.timeSpentSeconds % 60;

  return (
    <div className="max-w-4xl mx-auto px-3 sm:px-6 py-6 sm:py-8 space-y-6 sm:space-y-8">
      {/* Result Hero Card */}
      <div className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200/80 p-5 sm:p-10 shadow-sm text-center space-y-5 sm:space-y-6">
        <div className="inline-flex items-center gap-2">
          <SubjectBadge subject={attempt.subject} />
          <span className="text-xs text-slate-400">•</span>
          <span className="text-xs font-semibold text-slate-500">
            {language === 'bn' ? `প্রচেষ্টা #${attempt.attemptNumber}` : `Attempt #${attempt.attemptNumber}`}
          </span>
        </div>

        <h1 className="text-xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
          {attempt.quizTitle}
        </h1>

        {/* Circular / Score Highlight */}
        <div className="max-w-xs mx-auto p-5 sm:p-6 rounded-2xl bg-gradient-to-tr from-indigo-50/70 via-slate-50 to-indigo-50/40 border border-indigo-100/80 shadow-xs space-y-1">
          <p className="text-4xl sm:text-5xl font-black text-indigo-950 tracking-tight">{attempt.percentage}%</p>
          <p className="text-xs font-bold text-slate-500">
            {attempt.score} {language === 'bn' ? 'পয়েন্ট (সর্বমোট' : 'out of'} {attempt.maxScore} {language === 'bn' ? 'পয়েন্ট)' : 'points'}
          </p>
          <div className="pt-2">
            <span
              className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold ${
                attempt.passed
                  ? 'bg-emerald-100 text-emerald-800 border border-emerald-200'
                  : 'bg-rose-100 text-rose-800 border border-rose-200'
              }`}
            >
              {attempt.passed ? <CheckCircle2 className="w-3.5 h-3.5" /> : <XCircle className="w-3.5 h-3.5" />}
              {attempt.passed
                ? t('result.statusPassed', 'Assessment Passed')
                : t('result.statusFailed', 'Did Not Pass')}
            </span>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 pt-2">
          <div className="p-3 sm:p-3.5 rounded-2xl bg-slate-50 border border-slate-100 text-center">
            <span className="block text-[10px] sm:text-[11px] font-bold text-slate-400 uppercase">
              {language === 'bn' ? 'সঠিক' : 'Correct'}
            </span>
            <span className="text-base sm:text-lg font-extrabold text-emerald-600">{correctCount}</span>
          </div>
          <div className="p-3 sm:p-3.5 rounded-2xl bg-slate-50 border border-slate-100 text-center">
            <span className="block text-[10px] sm:text-[11px] font-bold text-slate-400 uppercase">
              {language === 'bn' ? 'ভুল' : 'Incorrect'}
            </span>
            <span className="text-base sm:text-lg font-extrabold text-rose-500">{incorrectCount}</span>
          </div>
          <div className="p-3 sm:p-3.5 rounded-2xl bg-slate-50 border border-slate-100 text-center">
            <span className="block text-[10px] sm:text-[11px] font-bold text-slate-400 uppercase">
              {t('result.timeSpent', 'Time Taken')}
            </span>
            <span className="text-base sm:text-lg font-extrabold text-slate-800">
              {mins}{language === 'bn' ? ' মি. ' : 'm '}{secs}{language === 'bn' ? ' সে.' : 's'}
            </span>
          </div>
          <div className="p-3 sm:p-3.5 rounded-2xl bg-slate-50 border border-slate-100 text-center">
            <span className="block text-[10px] sm:text-[11px] font-bold text-slate-400 uppercase">
              {t('result.switches', 'Tab Switches')}
            </span>
            <span className="text-base sm:text-lg font-extrabold text-slate-800">{attempt.tabSwitchesCount}</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2.5 sm:gap-3 pt-4 border-t border-slate-100">
          <Link
            to="/student/quizzes"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-6 py-3 rounded-xl border border-slate-200 text-slate-700 text-xs sm:text-sm font-bold hover:bg-slate-50 transition"
          >
            <BookOpen className="w-4 h-4" /> {language === 'bn' ? 'অন্যান্য কুইজ দেখুন' : 'Explore Other Quizzes'}
          </Link>
          <Link
            to="/student/progress"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-6 py-3 rounded-xl bg-indigo-600 text-white text-xs sm:text-sm font-bold hover:bg-indigo-700 shadow-md shadow-indigo-600/20 transition"
          >
            {language === 'bn' ? 'অগ্রগতির ইতিহাস দেখুন' : 'View Progress History'} <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Detailed Question Review List */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg sm:text-xl font-extrabold text-slate-900 tracking-tight">
              {t('result.reviewTitle', 'Detailed Question Review')}
            </h2>
            <p className="text-xs text-slate-500">
              {language === 'bn'
                ? 'সঠিক উত্তর, সমাধান ও গুরুত্বপূর্ণ শিক্ষামূলক ব্যাখ্যা পর্যালোচনা করুন'
                : 'Review correct answers, explanations, and key takeaways'}
            </p>
          </div>
          <span className="text-xs font-bold text-slate-400 shrink-0">
            {attempt.answers.length} {language === 'bn' ? 'টি প্রশ্ন' : 'Questions'}
          </span>
        </div>

        <div className="space-y-4">
          {attempt.answers.map((ans, idx) => {
            const localizedQ = translateQuestion({
              questionText: ans.questionText,
              type: 'multiple-choice',
              options: [],
              correctAnswer: ans.correctAnswer,
              explanation: ans.explanation,
            });

            return (
              <div
                key={idx}
                className={`bg-white rounded-2xl sm:rounded-3xl border p-4 sm:p-7 shadow-xs space-y-3.5 sm:space-y-4 transition ${
                  ans.isCorrect ? 'border-emerald-200/80' : 'border-rose-200/80'
                }`}
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <span
                      className={`w-6 h-6 rounded-lg text-xs font-bold flex items-center justify-center shrink-0 ${
                        ans.isCorrect ? 'bg-emerald-100 text-emerald-800' : 'bg-rose-100 text-rose-800'
                      }`}
                    >
                      {idx + 1}
                    </span>
                    <span className="text-xs font-semibold text-slate-400">
                      {ans.isCorrect
                        ? (language === 'bn' ? 'সঠিক (+১ পয়েন্ট)' : 'Correct (+1 pt)')
                        : (language === 'bn' ? 'ভুল (০ পয়েন্ট)' : 'Incorrect (0 pts)')}
                    </span>
                  </div>
                  {ans.isCorrect ? (
                    <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200 shrink-0">
                      <CheckCircle2 className="w-3.5 h-3.5" /> {language === 'bn' ? 'সঠিক' : 'Correct'}
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 text-xs font-bold text-rose-600 bg-rose-50 px-2.5 py-1 rounded-full border border-rose-200 shrink-0">
                      <XCircle className="w-3.5 h-3.5" /> {language === 'bn' ? 'ভুল' : 'Incorrect'}
                    </span>
                  )}
                </div>

                <h3 className="font-bold text-slate-900 text-sm sm:text-base leading-snug">
                  {localizedQ.questionText}
                </h3>

                {ans.codeSnippet && (
                  <div className="p-3 sm:p-3.5 rounded-xl bg-slate-900 text-slate-100 font-mono text-xs overflow-x-auto max-h-56">
                    <pre className="whitespace-pre">{ans.codeSnippet}</pre>
                  </div>
                )}

                {/* Answers Comparison */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 text-xs">
                  <div
                    className={`p-3 rounded-xl border ${
                      ans.isCorrect
                        ? 'bg-emerald-50/50 border-emerald-200 text-emerald-900'
                        : 'bg-rose-50/50 border-rose-200 text-rose-900'
                    }`}
                  >
                    <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1">
                      {t('result.yourAnswer', 'Your Answer')}
                    </span>
                    <span className="font-bold">{ans.selectedAnswer || (language === 'bn' ? '(উত্তর দেওয়া হয়নি)' : '(Unanswered)')}</span>
                  </div>

                  <div className="p-3 rounded-xl border bg-slate-50 border-slate-200 text-slate-800">
                    <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1">
                      {t('result.correctAnswer', 'Correct Answer')}
                    </span>
                    <span className="font-bold text-emerald-700">{ans.correctAnswer}</span>
                  </div>
                </div>

                {/* Learning Explanation */}
                {localizedQ.explanation && (
                  <div className="p-3.5 rounded-2xl bg-indigo-50/70 border border-indigo-100 text-xs text-indigo-950 space-y-1">
                    <span className="font-bold text-indigo-900 flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
                      {t('result.explanation', 'Explanation:')}
                    </span>
                    <p className="leading-relaxed">{localizedQ.explanation}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
