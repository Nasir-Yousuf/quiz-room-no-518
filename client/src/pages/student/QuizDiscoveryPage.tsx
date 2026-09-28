import React, { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { api } from '../../api/client.js';
import { IQuiz } from '../../types/index.js';
import { SubjectBadge, DifficultyBadge } from '../../components/Badge.js';
import { QuizCardSkeleton } from '../../components/Skeleton.js';
import {
  Search,
  BookOpen,
  Clock,
  HelpCircle,
  RotateCcw,
  Sparkles,
} from 'lucide-react';

export const QuizDiscoveryPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [quizzes, setQuizzes] = useState<IQuiz[]>([]);
  const [loading, setLoading] = useState(true);

  const initialSubject = searchParams.get('subject') || 'All';
  const [selectedSubject, setSelectedSubject] = useState(initialSubject);
  const [selectedDifficulty, setSelectedDifficulty] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const subjects = ['All', 'HTML', 'CSS', 'JavaScript'];
  const difficulties = ['All', 'beginner', 'intermediate', 'advanced'];

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

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
          Explore Quizzes
        </h1>
        <p className="text-sm text-slate-500 mt-1">
          Browse verified interactive quizzes across web technologies and test your knowledge
        </p>
      </div>

      {/* Filter & Search Bar */}
      <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between bg-white p-4 rounded-2xl border border-slate-200/80 shadow-xs">
        {/* Subject Filter Tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0">
          {subjects.map((sub) => (
            <button
              key={sub}
              onClick={() => handleSubjectChange(sub)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition shrink-0 ${
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
                    {quiz.description || 'No description provided.'}
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
                        {quiz.questions?.length || 0} Qs
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

                  {/* Teacher & Start Button */}
                  <div className="flex items-center justify-between gap-3 pt-2">
                    <div className="flex items-center gap-2 min-w-0">
                      <img
                        src={teacherAvatar}
                        alt={teacherName}
                        className="w-7 h-7 rounded-lg bg-indigo-50 border border-slate-200 shrink-0"
                      />
                      <span className="text-xs font-semibold text-slate-700 truncate">
                        {teacherName}
                      </span>
                    </div>

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
    </div>
  );
};
