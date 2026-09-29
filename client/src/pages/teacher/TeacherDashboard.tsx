import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext.js';
import { api } from '../../api/client.js';
import { StatsCard } from '../../components/StatsCard.js';
import { SubjectBadge, StatusBadge } from '../../components/Badge.js';
import {
  BookOpen,
  Users,
  Trophy,
  TrendingUp,
  Plus,
  ArrowRight,
  Sparkles,
  BarChart3,
  Calendar,
} from 'lucide-react';

export const TeacherDashboard: React.FC = () => {
  const { user } = useAuth();
  const [stats, setStats] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTeacherStats = async () => {
      try {
        setLoading(true);
        const res = await api.get('/api/analytics/teacher');
        if (res.success) {
          setStats(res.stats);
        }
      } catch (err) {
        console.error('Failed to load teacher stats:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchTeacherStats();
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Welcome Banner */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 rounded-3xl p-6 sm:p-8 text-white shadow-xl shadow-slate-900/10">
        <div className="space-y-1.5">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-indigo-300 text-xs font-semibold backdrop-blur-xs">
            <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
            <span>Instructor Portal</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            Welcome, {user?.name}! 🎓
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
            Manage your quizzes, review student cohort performance, and author interactive questions.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 w-full sm:w-auto">
          <Link
            to="/teacher/quizzes/new"
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-600 text-white text-xs font-bold hover:bg-indigo-700 shadow-md shadow-indigo-600/30 transition"
          >
            <Plus className="w-4 h-4" /> Create New Quiz
          </Link>
          <Link
            to="/teacher/classes"
            className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white/10 text-white text-xs font-bold hover:bg-white/20 transition border border-white/20"
          >
            Manage Classes
          </Link>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        <StatsCard
          label="Total Quizzes"
          value={stats?.totalQuizzes ?? 0}
          icon={<BookOpen className="w-6 h-6" />}
          colorScheme="indigo"
          subtitle="Authored assessments"
        />
        <StatsCard
          label="Total Students"
          value={stats?.totalStudents ?? 0}
          icon={<Users className="w-6 h-6" />}
          colorScheme="purple"
          subtitle="Enrolled & active"
        />
        <StatsCard
          label="Total Submissions"
          value={stats?.totalAttempts ?? 0}
          icon={<TrendingUp className="w-6 h-6" />}
          colorScheme="emerald"
          subtitle="Graded attempts"
        />
        <StatsCard
          label="Class Average"
          value={`${stats?.avgScore ?? 0}%`}
          icon={<Trophy className="w-6 h-6" />}
          colorScheme="amber"
          subtitle="Overall student mastery"
        />
      </div>

      {/* Main Grid: Popular Quizzes & Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Popular Quizzes (2 Cols) */}
        <div className="lg:col-span-2 bg-white rounded-3xl border border-slate-200/80 p-5 sm:p-8 space-y-6 shadow-xs">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-bold text-slate-900 text-base sm:text-lg">Top Performing Quizzes</h3>
              <p className="text-xs text-slate-500">Quizzes with highest student engagement</p>
            </div>
            <Link
              to="/teacher/quizzes"
              className="text-xs font-bold text-indigo-600 hover:text-indigo-700 flex items-center gap-1"
            >
              All Quizzes <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {stats?.popularQuizzes && stats.popularQuizzes.length > 0 ? (
            <div className="divide-y divide-slate-100">
              {stats.popularQuizzes.map((quiz: any) => (
                <div
                  key={quiz.id}
                  className="py-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:bg-slate-50/60 p-2.5 rounded-xl transition"
                >
                  <div className="space-y-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <SubjectBadge subject={quiz.subject} />
                      <StatusBadge status={quiz.status} />
                    </div>
                    <h4 className="font-bold text-slate-900 text-sm truncate">{quiz.title}</h4>
                    <span className="text-xs text-slate-500 font-medium block">
                      {quiz.attemptsCount} student attempt(s)
                    </span>
                  </div>

                  <Link
                    to={`/teacher/quizzes/${quiz.id}/results`}
                    className="inline-flex items-center justify-center gap-1 px-3.5 py-2 sm:py-1.5 rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-50 text-xs font-bold transition shrink-0"
                  >
                    View Results
                  </Link>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8 text-xs text-slate-400">
              No quizzes created yet.{' '}
              <Link to="/teacher/quizzes/new" className="text-indigo-600 font-bold">
                Create your first quiz!
              </Link>
            </div>
          )}
        </div>

        {/* Recent Submissions Feed */}
        <div className="bg-white rounded-3xl border border-slate-200/80 p-6 space-y-4 shadow-xs">
          <h3 className="font-bold text-slate-900 text-base">Recent Submissions</h3>
          <p className="text-xs text-slate-500">Live feed of student completions</p>

          <div className="space-y-3">
            {stats?.recentActivity && stats.recentActivity.length > 0 ? (
              stats.recentActivity.map((item: any) => (
                <div
                  key={item.id}
                  className="p-3 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-between gap-3 text-xs"
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <img
                      src={item.studentAvatar || `https://api.dicebear.com/7.x/bottts/svg?seed=${item.studentName}`}
                      alt={item.studentName}
                      className="w-7 h-7 rounded-lg bg-indigo-50 border border-slate-200 shrink-0"
                    />
                    <div className="min-w-0">
                      <p className="font-bold text-slate-800 truncate">{item.studentName}</p>
                      <p className="text-[11px] text-slate-500 truncate">{item.quizTitle}</p>
                    </div>
                  </div>
                  <span
                    className={`font-black text-xs shrink-0 ${
                      item.passed ? 'text-emerald-600' : 'text-rose-500'
                    }`}
                  >
                    {item.percentage}%
                  </span>
                </div>
              ))
            ) : (
              <div className="text-center py-6 text-xs text-slate-400">
                Awaiting student submissions
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Student Performance Table (Requirement 11) */}
      <div className="bg-white rounded-3xl border border-slate-200/80 p-6 sm:p-8 space-y-4 shadow-xs">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-bold text-slate-900 text-lg">Student Performance Overview</h3>
            <p className="text-xs text-slate-500">
              Aggregated assessment statistics across your student cohorts
            </p>
          </div>
          <Link
            to="/teacher/analytics"
            className="text-xs font-bold text-indigo-600 hover:text-indigo-700 flex items-center gap-1"
          >
            Detailed Analytics <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {stats?.studentPerformance && stats.studentPerformance.length > 0 ? (
          <div className="overflow-x-auto -mx-5 sm:mx-0 px-5 sm:px-0">
            <table className="w-full text-left text-xs min-w-[540px]">
              <thead className="text-[11px] font-bold uppercase text-slate-400 border-b border-slate-100">
                <tr>
                  <th className="pb-3">Student</th>
                  <th className="pb-3">Quizzes Completed</th>
                  <th className="pb-3">Average Score</th>
                  <th className="pb-3">Best Score</th>
                  <th className="pb-3">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {stats.studentPerformance.map((item: any, idx: number) => (
                  <tr key={idx} className="hover:bg-slate-50/70 transition">
                    <td className="py-3.5 flex items-center gap-2.5">
                      <img
                        src={item.student?.avatar || `https://api.dicebear.com/7.x/bottts/svg?seed=${item.student?.name}`}
                        alt={item.student?.name}
                        className="w-7 h-7 rounded-lg bg-indigo-50 border border-slate-200"
                      />
                      <div>
                        <span className="font-bold text-slate-900 block">{item.student?.name}</span>
                        <span className="text-[10px] text-slate-400">{item.student?.email}</span>
                      </div>
                    </td>
                    <td className="py-3.5 font-semibold text-slate-700">
                      {item.quizzesTaken}
                    </td>
                    <td className="py-3.5 font-extrabold text-slate-900">
                      {item.averageScore}%
                    </td>
                    <td className="py-3.5 font-extrabold text-emerald-600">
                      {item.bestScore}%
                    </td>
                    <td className="py-3.5">
                      <span
                        className={`inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold ${
                          item.averageScore >= 80
                            ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                            : item.averageScore >= 70
                            ? 'bg-blue-50 text-blue-700 border border-blue-200'
                            : 'bg-amber-50 text-amber-700 border border-amber-200'
                        }`}
                      >
                        {item.averageScore >= 80 ? 'Mastery' : item.averageScore >= 70 ? 'Proficient' : 'Developing'}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="text-center py-10 text-xs text-slate-400">
            No student activity recorded yet.
          </div>
        )}
      </div>
    </div>
  );
};
