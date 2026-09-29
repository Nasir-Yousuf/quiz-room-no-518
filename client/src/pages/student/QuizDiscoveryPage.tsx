import React, { useState, useEffect } from 'react';
import { Link, useSearchParams, useNavigate } from 'react-router-dom';
import { api } from '../../api/client.js';
import { IQuiz } from '../../types/index.js';
import { SubjectBadge, DifficultyBadge } from '../../components/Badge.js';
import { QuizCardSkeleton } from '../../components/Skeleton.js';
import { Modal } from '../../components/Modal.js';
import { useNotification } from '../../context/NotificationContext.js';
import {
  Search,
  BookOpen,
  Clock,
  HelpCircle,
  RotateCcw,
  Sparkles,
  Zap,
  Sliders,
  Play,
  CheckCircle,
  Flame,
} from 'lucide-react';

export const QuizDiscoveryPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const { showToast } = useNotification();

  const [quizzes, setQuizzes] = useState<IQuiz[]>([]);
  const [loading, setLoading] = useState(true);

  const initialSubject = searchParams.get('subject') || 'All';
  const [selectedSubject, setSelectedSubject] = useState(initialSubject);
  const [selectedDifficulty, setSelectedDifficulty] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  // Custom Practice Session Generator State
  const [practiceTopic, setPracticeTopic] = useState('React');
  const [practiceQuestionCount, setPracticeQuestionCount] = useState<number>(15);
  const [practiceDifficulty, setPracticeDifficulty] = useState('All');
  const [generatingPractice, setGeneratingPractice] = useState(false);

  // Modal for Customizing Question Count on standard quizzes
  const [selectedQuizForConfig, setSelectedQuizForConfig] = useState<IQuiz | null>(null);
  const [customCountChoice, setCustomCountChoice] = useState<number>(15);

  const subjects = [
    'All',
    'HTML',
    'CSS',
    'JavaScript',
    'TypeScript',
    'React',
    'Next.js',
    'Python',
    'Node.js',
  ];
  const difficulties = ['All', 'beginner', 'intermediate', 'advanced'];
  const countOptions = [10, 15, 25, 30, 50, 100];

  useEffect(() => {
    const fetchQuizzes = async () => {
      try {
        setLoading(true);
        const params = new URLSearchParams();
        if (selectedSubject !== 'All') params.append('subject', selectedSubject);
        if (selectedDifficulty !== 'All') params.append('difficulty', selectedDifficulty);
        if (searchTerm.trim()) params.append('search', searchTerm.trim());

        const res = await api.get(`/api/quizzes?${params.toString()}`);
        if (res.success) {
          setQuizzes(res.quizzes || []);
        }
      } catch (err) {
        console.error('Failed to fetch quizzes:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchQuizzes();
  }, [selectedSubject, selectedDifficulty, searchTerm]);

  const handleSubjectChange = (sub: string) => {
    setSelectedSubject(sub);
    setSearchParams(sub === 'All' ? {} : { subject: sub });
  };

  // Launch Instant Self-Study Practice Mode
  const handleLaunchPractice = async () => {
    try {
      setGeneratingPractice(true);
      const res = await api.post('/api/quizzes/practice', {
        subject: practiceTopic === 'All Topics' ? 'All' : practiceTopic,
        count: practiceQuestionCount,
        difficulty: practiceDifficulty,
      });

      if (res.success && res.quiz) {
        showToast(
          'Practice Session Ready!',
          `Generated ${practiceTopic} quiz with ${res.quiz.questions?.length} questions. Starting now!`,
          'success'
        );
        navigate(`/student/quizzes/${res.quiz._id}/take`);
      }
    } catch (err: any) {
      showToast('Practice Setup Failed', err.message || 'Unable to generate practice quiz', 'error');
    } finally {
      setGeneratingPractice(false);
    }
  };

  // Start with chosen question limit
  const handleStartWithConfig = () => {
    if (!selectedQuizForConfig) return;
    const count = customCountChoice;
    const quizId = selectedQuizForConfig._id;
    setSelectedQuizForConfig(null);
    navigate(`/student/quizzes/${quizId}/take?limit=${count}`);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Header */}
      <div>
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-semibold mb-2">
          <Sparkles className="w-3.5 h-3.5 text-indigo-500" />
          <span>Independent Learning & Self-Study Mode</span>
        </div>
        <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
          Explore Quizzes & Self-Assessment
        </h1>
        <p className="text-sm text-slate-500 mt-1">
          Take any quiz freely without waiting for a teacher or class enrollment. Choose your preferred topics and question length.
        </p>
      </div>

      {/* ⚡ Instant Self-Study Practice Room Generator (No Teacher Required) */}
      <div className="bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 rounded-3xl p-6 sm:p-8 text-white shadow-xl shadow-indigo-950/20 border border-indigo-800/40 space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-indigo-800/40 pb-5">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="w-8 h-8 rounded-xl bg-amber-400 text-slate-950 font-black flex items-center justify-center shadow-md shadow-amber-400/20">
                <Zap className="w-5 h-5 fill-current" />
              </span>
              <h2 className="text-xl font-extrabold tracking-tight">
                Instant Self-Study Practice Room
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-indigo-200 max-w-2xl">
              No teacher or class assignment needed! Select any discipline, pick how many questions you want to solve (15, 30, 50, 100 Qs), and test yourself right now with auto-grading.
            </p>
          </div>

          <button
            onClick={handleLaunchPractice}
            disabled={generatingPractice}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-2xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-black text-xs sm:text-sm shadow-lg shadow-amber-500/20 hover:scale-105 active:scale-95 transition shrink-0 disabled:opacity-50"
          >
            {generatingPractice ? (
              <>Preparing Session...</>
            ) : (
              <>
                <Play className="w-4 h-4 fill-current" /> Launch Practice Test ({practiceQuestionCount} Qs)
              </>
            )}
          </button>
        </div>

        {/* Practice Configurator Options */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-1">
          {/* 1. Pick Topic */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-indigo-200 uppercase tracking-wider block">
              1. Choose Subject
            </label>
            <div className="flex flex-wrap gap-1.5">
              {[
                'React',
                'Next.js',
                'TypeScript',
                'JavaScript',
                'Python',
                'HTML',
                'CSS',
                'Node.js',
                'All Topics',
              ].map((topic) => (
                <button
                  key={topic}
                  type="button"
                  onClick={() => setPracticeTopic(topic)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition ${
                    practiceTopic === topic
                      ? 'bg-amber-400 text-slate-950 font-bold shadow-sm'
                      : 'bg-white/10 text-indigo-100 hover:bg-white/20'
                  }`}
                >
                  {topic}
                </button>
              ))}
            </div>
          </div>

          {/* 2. Choose Question Count */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-indigo-200 uppercase tracking-wider block">
              2. Questions to Solve
            </label>
            <div className="grid grid-cols-3 gap-2">
              {[15, 30, 50, 100].map((count) => (
                <button
                  key={count}
                  type="button"
                  onClick={() => setPracticeQuestionCount(count)}
                  className={`py-2 px-3 rounded-xl text-xs font-bold border transition text-center ${
                    practiceQuestionCount === count
                      ? 'bg-indigo-600 border-indigo-400 text-white shadow-md'
                      : 'bg-white/5 border-white/10 text-indigo-200 hover:bg-white/10'
                  }`}
                >
                  {count} Qs
                </button>
              ))}
            </div>
            <p className="text-[11px] text-indigo-300">
              Allocates ~1.5 min per question with live countdown timer.
            </p>
          </div>

          {/* 3. Difficulty */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-indigo-200 uppercase tracking-wider block">
              3. Difficulty Level
            </label>
            <div className="grid grid-cols-2 gap-2">
              {['All', 'beginner', 'intermediate', 'advanced'].map((lvl) => (
                <button
                  key={lvl}
                  type="button"
                  onClick={() => setPracticeDifficulty(lvl)}
                  className={`py-2 px-2.5 rounded-xl text-xs font-semibold capitalize border transition text-center ${
                    practiceDifficulty === lvl
                      ? 'bg-indigo-600 border-indigo-400 text-white shadow-md font-bold'
                      : 'bg-white/5 border-white/10 text-indigo-200 hover:bg-white/10'
                  }`}
                >
                  {lvl === 'All' ? 'Mixed Levels' : lvl}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Filter & Search Bar */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold text-slate-900">
            Pre-Built Curriculum Quizzes ({quizzes.length})
          </h2>
          <span className="text-xs text-slate-500">Pick any quiz or customize question count</span>
        </div>

        <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between bg-white p-4 rounded-2xl border border-slate-200/80 shadow-xs">
          {/* Subject Filter Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0">
            {subjects.map((sub) => (
              <button
                key={sub}
                onClick={() => handleSubjectChange(sub)}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition shrink-0 ${
                  selectedSubject === sub
                    ? 'bg-indigo-600 text-white shadow-sm'
                    : 'text-slate-600 hover:bg-slate-100'
                }`}
              >
                {sub}
              </button>
            ))}
          </div>

          {/* Right side: Difficulty dropdown + Search Input */}
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <select
              value={selectedDifficulty}
              onChange={(e) => setSelectedDifficulty(e.target.value)}
              className="w-full sm:w-auto px-3 py-2 rounded-xl border border-slate-200 text-xs font-semibold text-slate-700 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20 capitalize"
            >
              {difficulties.map((diff) => (
                <option key={diff} value={diff}>
                  Difficulty: {diff}
                </option>
              ))}
            </select>

            <div className="relative w-full sm:w-64">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search quiz titles..."
                className="w-full pl-9 pr-3 py-1.5 text-xs rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Quiz Grid */}
      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <QuizCardSkeleton key={i} />
          ))}
        </div>
      ) : quizzes.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {quizzes.map((quiz) => {
            const totalQuestionsCount = quiz.questions?.length || 0;
            const teacherName =
              typeof quiz.teacher === 'object' && quiz.teacher?.name
                ? quiz.teacher.name
                : 'Instructor';
            const teacherAvatar =
              typeof quiz.teacher === 'object' && quiz.teacher?.avatar
                ? quiz.teacher.avatar
                : `https://api.dicebear.com/7.x/bottts/svg?seed=${teacherName}`;

            return (
              <div
                key={quiz._id}
                className="bg-white rounded-3xl border border-slate-200/80 p-6 shadow-sm hover:shadow-md transition flex flex-col justify-between space-y-5 group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between gap-2">
                    <SubjectBadge subject={quiz.subject} />
                    <DifficultyBadge difficulty={quiz.difficulty} />
                  </div>

                  <h3 className="font-bold text-slate-900 text-lg leading-snug group-hover:text-indigo-600 transition-colors">
                    {quiz.title}
                  </h3>

                  <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                    {quiz.description || 'Comprehensive assessment with automatic evaluation and answers review.'}
                  </p>
                </div>

                <div className="space-y-4 pt-3 border-t border-slate-100">
                  {/* Metadata Chips */}
                  <div className="grid grid-cols-3 gap-2 text-center">
                    <div className="p-2 rounded-xl bg-slate-50 border border-slate-100">
                      <div className="flex items-center justify-center text-slate-400 mb-1">
                        <HelpCircle className="w-3.5 h-3.5" />
                      </div>
                      <span className="block text-[11px] font-bold text-slate-800">
                        {totalQuestionsCount} Qs
                      </span>
                    </div>

                    <div className="p-2 rounded-xl bg-slate-50 border border-slate-100">
                      <div className="flex items-center justify-center text-slate-400 mb-1">
                        <Clock className="w-3.5 h-3.5" />
                      </div>
                      <span className="block text-[11px] font-bold text-slate-800">
                        {quiz.timeLimit > 0 ? `${quiz.timeLimit}m` : 'No limit'}
                      </span>
                    </div>

                    <div className="p-2 rounded-xl bg-slate-50 border border-slate-100">
                      <div className="flex items-center justify-center text-slate-400 mb-1">
                        <RotateCcw className="w-3.5 h-3.5" />
                      </div>
                      <span className="block text-[11px] font-bold text-slate-800">
                        {quiz.maxAttempts > 0 ? `${quiz.maxAttempts} tries` : 'Unlimited'}
                      </span>
                    </div>
                  </div>

                  {/* Actions: Start Full vs Customize Count */}
                  <div className="flex items-center justify-between gap-2 pt-2">
                    <button
                      type="button"
                      onClick={() => {
                        setSelectedQuizForConfig(quiz);
                        setCustomCountChoice(Math.min(15, totalQuestionsCount || 15));
                      }}
                      className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition"
                      title="Choose custom question count for this test"
                    >
                      <Sliders className="w-3.5 h-3.5 text-slate-500" />
                      <span>Choose Qs</span>
                    </button>

                    <Link
                      to={`/student/quizzes/${quiz._id}/take`}
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-indigo-600 text-white text-xs font-bold hover:bg-indigo-700 shadow-sm transition shrink-0"
                    >
                      <BookOpen className="w-3.5 h-3.5" /> Start Quiz
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="bg-white rounded-3xl border border-slate-200 p-12 text-center space-y-3">
          <BookOpen className="w-10 h-10 text-slate-300 mx-auto" />
          <h3 className="font-bold text-slate-800 text-base">No quizzes found</h3>
          <p className="text-xs text-slate-500 max-w-sm mx-auto">
            Try adjusting your search criteria or subject filters to find available assessments.
          </p>
          <button
            onClick={() => {
              setSelectedSubject('All');
              setSelectedDifficulty('All');
              setSearchTerm('');
            }}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-indigo-600 hover:text-indigo-700"
          >
            Reset Filters
          </button>
        </div>
      )}

      {/* Modal: Customize Question Count for Quiz */}
      {selectedQuizForConfig && (
        <Modal
          isOpen={!!selectedQuizForConfig}
          onClose={() => setSelectedQuizForConfig(null)}
          title="Configure Quiz Session"
        >
          <div className="space-y-5">
            <div>
              <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider">
                {selectedQuizForConfig.subject} Assessment
              </span>
              <h3 className="text-lg font-bold text-slate-900 mt-1">
                {selectedQuizForConfig.title}
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                This quiz contains {selectedQuizForConfig.questions?.length || 0} questions in total. How many questions would you like to solve?
              </p>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-700 block">
                Select Question Count:
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[10, 15, 25, 30].map((num) => (
                  <button
                    key={num}
                    type="button"
                    onClick={() => setCustomCountChoice(num)}
                    className={`py-2 px-3 rounded-xl text-xs font-bold border transition text-center ${
                      customCountChoice === num
                        ? 'bg-indigo-600 border-indigo-600 text-white shadow-xs'
                        : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    {num} Questions
                  </button>
                ))}
                <button
                  type="button"
                  onClick={() => setCustomCountChoice(selectedQuizForConfig.questions?.length || 15)}
                  className={`py-2 px-3 rounded-xl text-xs font-bold border transition text-center col-span-2 ${
                    customCountChoice === (selectedQuizForConfig.questions?.length || 15)
                      ? 'bg-indigo-600 border-indigo-600 text-white shadow-xs'
                      : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  All Questions ({selectedQuizForConfig.questions?.length || 0})
                </button>
              </div>
            </div>

            <div className="p-3 bg-indigo-50/70 border border-indigo-100 rounded-xl text-xs text-indigo-900 flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
              <span>
                Your score and percentage will be calculated specifically out of the <strong>{customCountChoice}</strong> questions you answer.
              </span>
            </div>

            <div className="flex items-center justify-end gap-3 pt-2">
              <button
                type="button"
                onClick={() => setSelectedQuizForConfig(null)}
                className="px-4 py-2 rounded-xl border border-slate-200 text-slate-600 text-xs font-bold hover:bg-slate-50 transition"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleStartWithConfig}
                className="px-5 py-2 rounded-xl bg-indigo-600 text-white text-xs font-bold hover:bg-indigo-700 shadow-md transition"
              >
                Start Quiz ({customCountChoice} Questions)
              </button>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};
