import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import confetti from 'canvas-confetti';
import { api } from '../../api/client.js';
import { IQuizAttempt } from '../../types/index.js';
import { SubjectBadge } from '../../components/Badge.js';
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
          <p className="text-xs font-semibold text-slate-500">Grading and Analyzing Responses...</p>
        </div>
      </div>
    );
  }

  const correctCount = attempt.answers.filter((a) => a.isCorrect).length;
  const incorrectCount = attempt.answers.length - correctCount;
  const mins = Math.floor(attempt.timeSpentSeconds / 60);
  const secs = attempt.timeSpentSeconds % 60;

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 space-y-8">
      {/* Result Hero Card */}
      <div className="bg-white rounded-3xl border border-slate-200/80 p-6 sm:p-10 shadow-sm text-center space-y-6">
        <div className="inline-flex items-center gap-2">
          <SubjectBadge subject={attempt.subject} />
          <span className="text-xs text-slate-400">•</span>
          <span className="text-xs font-semibold text-slate-500">Attempt #{attempt.attemptNumber}</span>
        </div>

        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
          {attempt.quizTitle}
        </h1>

        {/* Circular / Score Highlight */}
        <div className="max-w-xs mx-auto p-6 rounded-2xl bg-gradient-to-tr from-indigo-50/70 via-slate-50 to-indigo-50/40 border border-indigo-100/80 shadow-xs space-y-1">
          <p className="text-5xl font-black text-indigo-950 tracking-tight">{attempt.percentage}%</p>
          <p className="text-xs font-bold text-slate-500">
            {attempt.score} out of {attempt.maxScore} points
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
              {attempt.passed ? 'Assessment Passed' : 'Did Not Pass'}
            </span>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
          <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100 text-center">
            <span className="block text-[11px] font-bold text-slate-400 uppercase">Correct</span>
            <span className="text-lg font-extrabold text-emerald-600">{correctCount}</span>
          </div>
          <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100 text-center">
            <span className="block text-[11px] font-bold text-slate-400 uppercase">Incorrect</span>
            <span className="text-lg font-extrabold text-rose-500">{incorrectCount}</span>
          </div>
          <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100 text-center">
            <span className="block text-[11px] font-bold text-slate-400 uppercase">Time Taken</span>
            <span className="text-lg font-extrabold text-slate-800">
              {mins}m {secs}s
            </span>
          </div>
          <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100 text-center">
            <span className="block text-[11px] font-bold text-slate-400 uppercase">Tab Switches</span>
            <span className="text-lg font-extrabold text-slate-800">{attempt.tabSwitchesCount}</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4 border-t border-slate-100">
          <Link
            to="/student/quizzes"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-6 py-2.5 rounded-xl border border-slate-200 text-slate-700 text-xs font-bold hover:bg-slate-50 transition"
          >
            <BookOpen className="w-4 h-4" /> Explore Other Quizzes
          </Link>
          <Link
            to="/student/progress"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-6 py-2.5 rounded-xl bg-indigo-600 text-white text-xs font-bold hover:bg-indigo-700 shadow-md shadow-indigo-600/20 transition"
          >
            View Progress History <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Detailed Question Review List */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-extrabold text-slate-900 tracking-tight">
              Detailed Question Review
            </h2>
            <p className="text-xs text-slate-500">
              Review correct answers, explanations, and key takeaways
            </p>
          </div>
          <span className="text-xs font-bold text-slate-400">
            {attempt.answers.length} Questions
          </span>
        </div>

        <div className="space-y-4">
          {attempt.answers.map((ans, idx) => (
            <div
              key={idx}
              className={`bg-white rounded-3xl border p-6 sm:p-7 shadow-xs space-y-4 transition ${
                ans.isCorrect ? 'border-emerald-200/80' : 'border-rose-200/80'
              }`}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-2">
                  <span
                    className={`w-6 h-6 rounded-lg text-xs font-bold flex items-center justify-center ${
                      ans.isCorrect ? 'bg-emerald-100 text-emerald-800' : 'bg-rose-100 text-rose-800'
                    }`}
                  >
                    {idx + 1}
                  </span>
                  <span className="text-xs font-semibold text-slate-400">
                    {ans.isCorrect ? 'Correct (+1 pt)' : 'Incorrect (0 pts)'}
                  </span>
                </div>
                {ans.isCorrect ? (
                  <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Correct
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1 text-xs font-bold text-rose-600 bg-rose-50 px-2.5 py-1 rounded-full border border-rose-200">
                    <XCircle className="w-3.5 h-3.5" /> Incorrect
                  </span>
                )}
              </div>

              <h3 className="font-bold text-slate-900 text-base leading-snug">
                {ans.questionText}
              </h3>

              {ans.codeSnippet && (
                <div className="p-3.5 rounded-xl bg-slate-900 text-slate-100 font-mono text-xs overflow-x-auto">
                  <pre>{ans.codeSnippet}</pre>
                </div>
              )}

              {/* Answers Comparison */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div
                  className={`p-3 rounded-xl border ${
                    ans.isCorrect
                      ? 'bg-emerald-50/50 border-emerald-200 text-emerald-900'
                      : 'bg-rose-50/50 border-rose-200 text-rose-900'
                  }`}
                >
                  <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1">
                    Your Answer
                  </span>
                  <span className="font-bold">{ans.selectedAnswer || '(Unanswered)'}</span>
                </div>

                <div className="p-3 rounded-xl border bg-slate-50 border-slate-200 text-slate-800">
                  <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1">
                    Correct Answer
                  </span>
                  <span className="font-bold text-emerald-700">{ans.correctAnswer}</span>
                </div>
              </div>

              {/* Learning Explanation */}
              {ans.explanation && (
                <div className="p-3.5 rounded-2xl bg-indigo-50/70 border border-indigo-100 text-xs text-indigo-950 space-y-1">
                  <span className="font-bold text-indigo-900 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
                    Explanation:
                  </span>
                  <p className="leading-relaxed">{ans.explanation}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
