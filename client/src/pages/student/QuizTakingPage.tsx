import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { useParams, useNavigate, useSearchParams } from 'react-router-dom';
import { api } from '../../api/client.js';
import { IQuiz, IQuestion } from '../../types/index.js';
import { useNotification } from '../../context/NotificationContext.js';
import { useLanguage } from '../../context/LanguageContext.js';
import { Modal } from '../../components/Modal.js';
import {
  Clock,
  AlertTriangle,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Minimize2,
  CheckCircle2,
  Flag,
  HelpCircle,
} from 'lucide-react';

export const QuizTakingPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [searchParams] = useSearchParams();
  const limitParam = searchParams.get('limit') || searchParams.get('count') || '';
  const assignmentId = searchParams.get('assignmentId') || '';

  const navigate = useNavigate();
  const { showToast } = useNotification();
  const { t, translateQuiz, language } = useLanguage();

  // Stable refs for callbacks that should never cause effect re-runs
  const showToastRef = useRef(showToast);
  showToastRef.current = showToast;

  const navigateRef = useRef(navigate);
  navigateRef.current = navigate;

  const [quiz, setQuiz] = useState<IQuiz | null>(null);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [flagged, setFlagged] = useState<Record<number, boolean>>({});
  const [secondsRemaining, setSecondsRemaining] = useState<number | null>(null);
  const [tabSwitches, setTabSwitches] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [confirmModalOpen, setConfirmModalOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  // Synchronized refs to avoid re-triggering effects during interactions
  const answersRef = useRef(answers);
  answersRef.current = answers;

  const tabSwitchesRef = useRef(tabSwitches);
  tabSwitchesRef.current = tabSwitches;

  const startTimeRef = useRef<number>(Date.now());
  const submittingRef = useRef(false);
  const submitQuizRef = useRef<() => void>(() => {});

  // Fetch sanitized quiz once per id/limitParam
  useEffect(() => {
    let isCancelled = false;

    const fetchQuiz = async () => {
      try {
        setLoading(true);
        const url = `/api/quizzes/${id}/take` + (limitParam ? `?limit=${limitParam}` : '');
        const res = await api.get(url);

        if (!isCancelled && res.success && res.quiz) {
          setQuiz(res.quiz);
          startTimeRef.current = Date.now();
          if (res.quiz.timeLimit > 0) {
            setSecondsRemaining(res.quiz.timeLimit * 60);
          }
        }
      } catch (err: any) {
        if (!isCancelled) {
          showToastRef.current('Error', err.message || 'Failed to load quiz', 'error');
          navigateRef.current('/student/quizzes');
        }
      } finally {
        if (!isCancelled) {
          setLoading(false);
        }
      }
    };

    fetchQuiz();

    return () => {
      isCancelled = true;
    };
  }, [id, limitParam]);

  // Submit quiz function
  const submitQuiz = useCallback(async () => {
    if (!quiz || submittingRef.current) return;
    try {
      submittingRef.current = true;
      setSubmitting(true);
      const timeSpent = Math.round((Date.now() - startTimeRef.current) / 1000);

      const formattedAnswers = quiz.questions.map((q, idx) => ({
        questionId: q._id,
        questionIndex: idx,
        selectedAnswer: answersRef.current[idx] || '',
      }));

      const res = await api.post(`/api/attempts/quizzes/${quiz._id}/submit`, {
        answers: formattedAnswers,
        timeSpentSeconds: timeSpent,
        tabSwitchesCount: tabSwitchesRef.current,
        assignmentId: assignmentId || undefined,
      });

      if (res.success && res.attempt) {
        showToastRef.current('Quiz Submitted!', 'Grading complete. Reviewing results...', 'success');
        navigateRef.current(`/student/attempts/${res.attempt._id}/result`, { replace: true });
      }
    } catch (err: any) {
      showToastRef.current('Submission Failed', err.message || 'Error submitting quiz', 'error');
      submittingRef.current = false;
      setSubmitting(false);
    }
  }, [quiz, assignmentId]);

  submitQuizRef.current = submitQuiz;

  // Single countdown timer instance - NEVER tears down every second!
  useEffect(() => {
    if (!quiz || !quiz.timeLimit || quiz.timeLimit <= 0) return;

    const timer = setInterval(() => {
      setSecondsRemaining((prev) => {
        if (prev === null) return null;
        if (prev <= 1) {
          clearInterval(timer);
          showToastRef.current('Time Expired!', 'Auto-submitting your quiz responses...', 'warning');
          submitQuizRef.current();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [quiz?._id, quiz?.timeLimit]);

  // Anti-cheating: detect tab switching / blur (attached once)
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        setTabSwitches((prev) => {
          const next = prev + 1;
          showToastRef.current(
            'Proctor Alert',
            `Tab switch detected (${next}). Please remain on the quiz screen.`,
            'warning'
          );
          return next;
        });
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
  }, []);

  // Keyboard navigation (1-4 or A-D for options)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!quiz) return;
      const currentQ = quiz.questions[currentIndex];
      if (!currentQ) return;

      const key = e.key.toUpperCase();
      let selectedOpt = '';

      if (key === 'A' && currentQ.options[0]) selectedOpt = currentQ.options[0];
      if (key === 'B' && currentQ.options[1]) selectedOpt = currentQ.options[1];
      if (key === 'C' && currentQ.options[2]) selectedOpt = currentQ.options[2];
      if (key === 'D' && currentQ.options[3]) selectedOpt = currentQ.options[3];

      if (selectedOpt) {
        setAnswers((prev) => ({ ...prev, [currentIndex]: selectedOpt }));
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [quiz, currentIndex]);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
      setIsFullscreen(true);
    } else {
      document.exitFullscreen().catch(() => {});
      setIsFullscreen(false);
    }
  };

  const localizedQuiz = useMemo(() => {
    return quiz ? translateQuiz(quiz) : null;
  }, [quiz, translateQuiz]);

  if (loading || !quiz) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center">
        <div className="flex flex-col items-center gap-3">
          <div className="w-10 h-10 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin" />
          <p className="text-xs font-semibold text-slate-500">
            {t('taking.preparing', 'Preparing Quiz Environment...')}
          </p>
        </div>
      </div>
    );
  }

  const originalQuestion: IQuestion = quiz.questions[currentIndex];
  const currentQuestion: IQuestion = localizedQuiz ? localizedQuiz.questions[currentIndex] : originalQuestion;
  const totalQuestions = quiz.questions.length;
  const answeredCount = Object.keys(answers).filter((k) => answers[Number(k)]).length;
  const unansweredCount = totalQuestions - answeredCount;

  const formatTimer = (secs: number) => {
    const mins = Math.floor(secs / 60);
    const remainder = secs % 60;
    return `${mins}:${remainder < 10 ? '0' : ''}${remainder}`;
  };

  return (
    <div className="max-w-5xl mx-auto px-3 sm:px-6 py-4 sm:py-6 space-y-4 sm:space-y-6">
      {/* Top Session Bar */}
      <div className="bg-white rounded-2xl border border-slate-200 p-3.5 sm:p-4 shadow-xs space-y-2">
        <div className="flex items-center justify-between gap-3">
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-1.5 flex-wrap">
              <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded border border-indigo-100">
                {quiz.subject}
              </span>
              <span className="text-[10px] sm:text-[11px] font-bold text-slate-600 bg-slate-100 px-2 py-0.5 rounded border border-slate-200">
                {quiz.questions?.length} {t('taking.questions', 'Questions')}
              </span>
            </div>
            <h2 className="text-sm sm:text-base font-bold text-slate-900 mt-1 truncate">
              {localizedQuiz?.title || quiz.title}
            </h2>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            {/* Live Timer if configured */}
            {secondsRemaining !== null && (
              <div
                className={`flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-xl border font-mono font-bold text-xs sm:text-sm ${
                  secondsRemaining < 120
                    ? 'bg-rose-50 border-rose-200 text-rose-600 animate-pulse'
                    : 'bg-slate-50 border-slate-200 text-slate-700'
                }`}
              >
                <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-indigo-600" />
                <span>{formatTimer(secondsRemaining)}</span>
              </div>
            )}

            {/* Fullscreen Button */}
            <button
              onClick={toggleFullscreen}
              className="p-1.5 sm:p-2 rounded-xl border border-slate-200 text-slate-600 hover:bg-slate-50 transition"
              title="Toggle Fullscreen"
              aria-label="Toggle Fullscreen"
            >
              {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Tab switches indicator banner if any occurred */}
        {tabSwitches > 0 && (
          <div className="pt-1 border-t border-slate-100 flex items-center justify-between text-[11px]">
            <span className="inline-flex items-center gap-1 font-semibold text-amber-700">
              <AlertTriangle className="w-3.5 h-3.5" />
              {tabSwitches} {language === 'bn' ? 'বার ট্যাব সুইচ শনাক্ত' : `Tab Switch${tabSwitches > 1 ? 'es' : ''} Logged`}
            </span>
            <span className="text-slate-400 text-[10px]">Anti-Cheat Active</span>
          </div>
        )}
      </div>

      {/* Progress Bar & Counter */}
      <div className="space-y-1.5">
        <div className="flex items-center justify-between text-xs text-slate-500 font-semibold px-0.5">
          <span>
            {t('taking.question', 'Question')} {currentIndex + 1} {t('taking.of', 'of')} {totalQuestions}
          </span>
          <span>{Math.round(((currentIndex + 1) / totalQuestions) * 100)}% {t('taking.completed', 'Completed')}</span>
        </div>
        <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-indigo-600 transition-all duration-300 rounded-full"
            style={{ width: `${((currentIndex + 1) / totalQuestions) * 100}%` }}
          />
        </div>
      </div>

      {/* Question Card */}
      <div className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200/80 p-4 sm:p-8 sm:p-10 shadow-sm space-y-5 sm:space-y-6">
        <div className="flex items-start justify-between gap-3">
          <div className="space-y-1.5">
            <span className="text-[10px] sm:text-[11px] font-bold text-slate-400 uppercase tracking-wider">
              {currentQuestion.type === 'true-false'
                ? (language === 'bn' ? 'সত্য / মিথ্যা প্রশ্ন' : 'True / False Question')
                : (language === 'bn' ? 'বহুনির্বাচনী প্রশ্ন' : 'Multiple Choice')}
            </span>
            <h3 className="text-base sm:text-xl font-extrabold text-slate-900 leading-snug">
              {currentQuestion.questionText}
            </h3>
          </div>
          <button
            onClick={() =>
              setFlagged((prev) => ({ ...prev, [currentIndex]: !prev[currentIndex] }))
            }
            className={`p-2 sm:px-3 sm:py-2 rounded-xl border text-xs font-semibold transition flex items-center gap-1.5 shrink-0 ${
              flagged[currentIndex]
                ? 'bg-amber-50 border-amber-300 text-amber-700'
                : 'border-slate-200 text-slate-500 hover:bg-slate-50'
            }`}
            title="Flag question for review"
            aria-label="Flag question"
          >
            <Flag className="w-4 h-4" />
            <span className="hidden sm:inline">
              {flagged[currentIndex] ? t('taking.flagged', 'Flagged') : t('taking.flag', 'Flag')}
            </span>
          </button>
        </div>

        {/* Code Snippet Box (if provided) */}
        {currentQuestion.codeSnippet && (
          <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-slate-900 text-slate-100 font-mono text-xs overflow-x-auto border border-slate-800 shadow-inner max-h-60">
            <pre className="leading-relaxed whitespace-pre">{currentQuestion.codeSnippet}</pre>
          </div>
        )}

        {/* Answer Options */}
        <div className="space-y-2.5 sm:space-y-3 pt-1">
          {currentQuestion.options.map((option, optIdx) => {
            const letter = String.fromCharCode(65 + optIdx);
            const originalOption = originalQuestion.options[optIdx] ?? option;
            const isSelected = answers[currentIndex] === originalOption;

            return (
              <button
                key={optIdx}
                type="button"
                onClick={() =>
                  setAnswers((prev) => ({ ...prev, [currentIndex]: originalOption }))
                }
                className={`w-full min-h-[52px] p-3.5 sm:p-4 rounded-xl sm:rounded-2xl border text-left transition-all flex items-center gap-3 sm:gap-3.5 group active:scale-[0.99] ${
                  isSelected
                    ? 'border-indigo-600 bg-indigo-50/70 ring-2 ring-indigo-600/20 text-indigo-950 font-bold shadow-xs'
                    : 'border-slate-200 hover:border-slate-300 bg-slate-50/50 text-slate-700 hover:bg-slate-50'
                }`}
              >
                <span
                  className={`w-7 h-7 sm:w-8 sm:h-8 rounded-xl flex items-center justify-center text-xs font-bold shrink-0 transition-colors ${
                    isSelected
                      ? 'bg-indigo-600 text-white shadow-xs'
                      : 'bg-white border border-slate-200 text-slate-600 group-hover:border-slate-300'
                  }`}
                >
                  {letter}
                </span>
                <span className="text-xs sm:text-sm font-medium leading-relaxed flex-1">{option}</span>
                {isSelected && <CheckCircle2 className="w-5 h-5 text-indigo-600 shrink-0" />}
              </button>
            );
          })}
        </div>

        {/* Navigation & Submit Buttons */}
        <div className="flex items-center justify-between gap-3 pt-4 sm:pt-6 border-t border-slate-100">
          <button
            onClick={() => setCurrentIndex((prev) => Math.max(0, prev - 1))}
            disabled={currentIndex === 0}
            className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-4 sm:px-5 py-3 rounded-xl border border-slate-200 text-slate-700 text-xs sm:text-sm font-bold hover:bg-slate-50 transition disabled:opacity-30 disabled:pointer-events-none active:scale-[0.98]"
          >
            <ChevronLeft className="w-4 h-4" /> {t('taking.previous', 'Previous')}
          </button>

          {currentIndex === totalQuestions - 1 ? (
            <button
              onClick={() => setConfirmModalOpen(true)}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 sm:px-7 py-3 rounded-xl bg-emerald-600 text-white text-xs sm:text-sm font-bold hover:bg-emerald-700 shadow-md shadow-emerald-600/20 transition active:scale-[0.98]"
            >
              <CheckCircle2 className="w-4 h-4" /> {t('taking.submitQuiz', 'Submit Quiz')}
            </button>
          ) : (
            <button
              onClick={() => setCurrentIndex((prev) => Math.min(totalQuestions - 1, prev + 1))}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-5 sm:px-6 py-3 rounded-xl bg-indigo-600 text-white text-xs sm:text-sm font-bold hover:bg-indigo-700 shadow-md shadow-indigo-600/20 transition active:scale-[0.98]"
            >
              {t('taking.next', 'Next')} <ChevronRight className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      {/* Question Navigation Drawer / Grid */}
      <div className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-5 space-y-3 shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <span className="text-xs font-bold text-slate-800">
            {t('taking.navigation', 'Question Navigation')}
          </span>
          <div className="flex items-center gap-3 text-[11px] text-slate-500">
            <span className="flex items-center gap-1">
              <span className="w-2.5 h-2.5 rounded-full bg-indigo-600" /> {t('taking.answered', 'Answered')} ({answeredCount})
            </span>
            <span className="flex items-center gap-1">
              <span className="w-2.5 h-2.5 rounded-full bg-slate-200" /> {t('taking.unanswered', 'Unanswered')} ({unansweredCount})
            </span>
          </div>
        </div>

        <div className="flex flex-wrap gap-1.5 sm:gap-2 max-h-48 overflow-y-auto pr-1">
          {quiz.questions.map((_, idx) => {
            const isAnswered = !!answers[idx];
            const isCurrent = currentIndex === idx;
            const isFlagged = !!flagged[idx];

            let btnStyle = 'bg-slate-100 text-slate-600 border-slate-200';
            if (isAnswered) btnStyle = 'bg-indigo-600 text-white border-indigo-600 shadow-xs';
            if (isCurrent) btnStyle += ' ring-2 ring-indigo-400 ring-offset-2';

            return (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`relative w-8 h-8 sm:w-9 sm:h-9 rounded-xl text-xs font-bold border transition shrink-0 ${btnStyle}`}
              >
                {idx + 1}
                {isFlagged && (
                  <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-amber-500" />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Unanswered warning confirmation dialog */}
      <Modal
        isOpen={confirmModalOpen}
        onClose={() => setConfirmModalOpen(false)}
        title={t('taking.modalTitle', 'Ready to Submit Quiz?')}
        maxWidth="md"
      >
        <div className="space-y-4">
          {unansweredCount > 0 ? (
            <div className="p-3.5 rounded-xl bg-amber-50 border border-amber-200 text-amber-800 text-xs font-medium flex items-start gap-2.5">
              <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
              <div>
                <p className="font-bold">
                  {language === 'bn'
                    ? `আপনার ${unansweredCount}টি উত্তর না দেওয়া প্রশ্ন রয়েছে!`
                    : `You have ${unansweredCount} unanswered question(s)!`}
                </p>
                <p className="text-[11px] text-amber-700 mt-0.5">
                  {t('taking.modalWarningSub', 'Unanswered questions will be scored as 0 points.')}
                </p>
              </div>
            </div>
          ) : (
            <p className="text-xs text-slate-600">
              {t('taking.modalSuccess', `Great work! You have answered all ${totalQuestions} questions. Ready to submit for instant grading?`)}
            </p>
          )}

          <div className="flex justify-end gap-2 pt-2">
            <button
              onClick={() => setConfirmModalOpen(false)}
              className="px-4 py-2 rounded-xl border border-slate-200 text-xs font-semibold text-slate-700 hover:bg-slate-50 transition"
            >
              {t('taking.continue', 'Continue Quiz')}
            </button>
            <button
              onClick={() => {
                setConfirmModalOpen(false);
                submitQuiz();
              }}
              disabled={submitting}
              className="px-5 py-2 rounded-xl bg-emerald-600 text-white text-xs font-bold hover:bg-emerald-700 shadow-sm transition disabled:opacity-50"
            >
              {submitting
                ? (language === 'bn' ? 'জমা দেওয়া হচ্ছে...' : 'Submitting...')
                : t('taking.confirmSubmit', 'Confirm Submission')}
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};
