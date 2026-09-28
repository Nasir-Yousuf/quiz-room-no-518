import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { api } from '../api/client.js';
import { useAuth } from '../context/AuthContext.js';
import { IQuiz } from '../types/index.js';
import { SubjectBadge, DifficultyBadge } from '../components/Badge.js';
import {
  GraduationCap,
  BookOpen,
  Clock,
  HelpCircle,
  RotateCcw,
  Sparkles,
  ArrowRight,
  ShieldCheck,
} from 'lucide-react';

export const PublicQuizPage: React.FC = () => {
  const { shareCode } = useParams<{ shareCode: string }>();
  const { user } = useAuth();
  const navigate = useNavigate();

  const [quiz, setQuiz] = useState<IQuiz | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchSharedQuiz = async () => {
      try {
        setLoading(true);
        const res = await api.get(`/api/quizzes/share/${shareCode}`);
        if (res.success && res.quiz) {
          setQuiz(res.quiz);
        } else {
          setError('Quiz not found or not currently published.');
        }
      } catch (err: any) {
        setError(err.message || 'Unable to load shared quiz');
      } finally {
        setLoading(false);
      }
    };

    if (shareCode) {
      fetchSharedQuiz();
    }
  }, [shareCode]);

  const handleStartQuiz = () => {
    if (!quiz) return;
    if (user) {
      navigate(`/student/quizzes/${quiz._id}/take`);
    } else {
      navigate('/login', { state: { from: { pathname: `/student/quizzes/${quiz._id}/take` } } });
    }
  };

  if (loading) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center">
        <div className="flex flex-col items-center gap-3">
          <div className="w-10 h-10 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin" />
          <p className="text-xs font-semibold text-slate-500">Locating Quiz Link...</p>
        </div>
      </div>
    );
  }

  if (error || !quiz) {
    return (
      <div className="max-w-md mx-auto my-20 p-8 bg-white rounded-3xl border border-slate-200 text-center space-y-4 shadow-sm">
        <BookOpen className="w-12 h-12 text-slate-300 mx-auto" />
        <h2 className="text-xl font-bold text-slate-900">Quiz Unavailable</h2>
        <p className="text-xs text-slate-500">{error || 'This quiz link is invalid or expired.'}</p>
        <Link
          to="/"
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-indigo-600 text-white text-xs font-bold hover:bg-indigo-700 transition"
        >
          Return to Home
        </Link>
      </div>
    );
  }

  const teacherName =
    typeof quiz.teacher === 'object' && quiz.teacher?.name
      ? quiz.teacher.name
      : 'Instructor';
  const teacherAvatar =
    typeof quiz.teacher === 'object' && quiz.teacher?.avatar
      ? quiz.teacher.avatar
      : `https://api.dicebear.com/7.x/bottts/svg?seed=${teacherName}`;

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
      <div className="bg-white rounded-3xl border border-slate-200/80 p-8 sm:p-12 shadow-xl shadow-slate-200/50 space-y-8">
        <div className="flex items-center justify-between gap-3 pb-6 border-b border-slate-100">
          <div className="flex items-center gap-2">
            <SubjectBadge subject={quiz.subject} />
            <DifficultyBadge difficulty={quiz.difficulty} />
          </div>
          <span className="text-[11px] font-mono text-slate-400">Code: {quiz.shareCode}</span>
        </div>

        <div className="space-y-3">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
            {quiz.title}
          </h1>
          <p className="text-sm text-slate-600 leading-relaxed">
            {quiz.description || 'Welcome to this interactive assessment. Test your knowledge and get immediate results.'}
          </p>
        </div>

        {/* Assessment Specs Grid */}
        <div className="grid grid-cols-3 gap-3">
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 text-center">
            <HelpCircle className="w-5 h-5 text-indigo-500 mx-auto mb-1" />
            <span className="text-xs font-bold text-slate-400 uppercase block">Questions</span>
            <span className="text-base font-extrabold text-slate-900 mt-0.5 block">
              {quiz.questions?.length || 0} Items
            </span>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 text-center">
            <Clock className="w-5 h-5 text-indigo-500 mx-auto mb-1" />
            <span className="text-xs font-bold text-slate-400 uppercase block">Time Limit</span>
            <span className="text-base font-extrabold text-slate-900 mt-0.5 block">
              {quiz.timeLimit > 0 ? `${quiz.timeLimit} Mins` : 'Untimed'}
            </span>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 text-center">
            <RotateCcw className="w-5 h-5 text-indigo-500 mx-auto mb-1" />
            <span className="text-xs font-bold text-slate-400 uppercase block">Max Attempts</span>
            <span className="text-base font-extrabold text-slate-900 mt-0.5 block">
              {quiz.maxAttempts > 0 ? `${quiz.maxAttempts} Tries` : 'Unlimited'}
            </span>
          </div>
        </div>

        {/* Instructor Info */}
        <div className="flex items-center gap-3 p-4 rounded-2xl bg-indigo-50/60 border border-indigo-100">
          <img
            src={teacherAvatar}
            alt={teacherName}
            className="w-10 h-10 rounded-xl bg-white border border-indigo-200 shrink-0"
          />
          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-700">
              Authored by
            </span>
            <h4 className="font-bold text-slate-900 text-sm">{teacherName}</h4>
          </div>
        </div>

        {/* Start Button */}
        <div className="pt-2 text-center space-y-3">
          <button
            onClick={handleStartQuiz}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-10 py-3.5 rounded-2xl bg-indigo-600 text-white font-bold text-sm hover:bg-indigo-700 shadow-lg shadow-indigo-600/25 transition-all hover:scale-105"
          >
            {user ? 'Start Assessment Now' : 'Sign In to Start Quiz'}
            <ArrowRight className="w-4 h-4" />
          </button>
          {!user && (
            <p className="text-xs text-slate-400">
              New to QuizRoom? You can create a free account in 30 seconds.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
