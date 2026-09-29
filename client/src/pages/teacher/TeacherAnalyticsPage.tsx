import React, { useState, useEffect } from 'react';
import { api } from '../../api/client.js';
import { StatsCard } from '../../components/StatsCard.js';
import {
  BarChart3,
  TrendingUp,
  Trophy,
  Users,
  AlertTriangle,
  CheckCircle2,
  HelpCircle,
  Clock,
} from 'lucide-react';

export const TeacherAnalyticsPage: React.FC = () => {
  const [stats, setStats] = useState<any>(null);
  const [quizzes, setQuizzes] = useState<any[]>([]);
  const [selectedQuizId, setSelectedQuizId] = useState('');
  const [quizAnalytics, setQuizAnalytics] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGlobalAnalytics = async () => {
      try {
        setLoading(true);
        const [dashRes, quizRes] = await Promise.all([
          api.get('/api/analytics/teacher'),
          api.get('/api/quizzes/teacher/mine'),
        ]);

        if (dashRes.success) setStats(dashRes.stats);
        if (quizRes.success) {
          setQuizzes(quizRes.quizzes || []);
          if (quizRes.quizzes?.length > 0) {
            setSelectedQuizId(quizRes.quizzes[0]._id);
          }
        }
      } catch (err) {
        console.error('Failed to load teacher analytics:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchGlobalAnalytics();
  }, []);

  useEffect(() => {
    if (!selectedQuizId) return;

    const fetchQuizDetails = async () => {
      try {
        const res = await api.get(`/api/analytics/quiz/${selectedQuizId}`);
        if (res.success) {
          setQuizAnalytics(res.analytics);
        }
      } catch (err) {
        console.error('Failed to load detailed quiz analytics:', err);
      }
    };

    fetchQuizDetails();
  }, [selectedQuizId]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
          Performance Analytics & Insights
        </h1>
        <p className="text-xs sm:text-sm text-slate-500 mt-1">
          Detailed metrics, question difficulty breakdowns, and student mastery rankings
        </p>
      </div>

      {/* Metric Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        <StatsCard
          label="Total Student Submissions"
          value={stats?.totalAttempts ?? 0}
          icon={<BarChart3 className="w-6 h-6" />}
          colorScheme="indigo"
          subtitle="All authored quizzes"
        />
        <StatsCard
          label="Cohort Average"
          value={`${stats?.avgScore ?? 0}%`}
          icon={<TrendingUp className="w-6 h-6" />}
          colorScheme="emerald"
          subtitle="Cumulative average"
        />
        <StatsCard
          label="Unique Students"
          value={stats?.totalStudents ?? 0}
          icon={<Users className="w-6 h-6" />}
          colorScheme="purple"
          subtitle="Participating learners"
        />
        <StatsCard
          label="Authored Assessments"
          value={stats?.totalQuizzes ?? 0}
          icon={<Trophy className="w-6 h-6" />}
          colorScheme="amber"
          subtitle="Total quizzes created"
        />
      </div>

      {/* Deep-Dive Per-Quiz Analytics (Requirement 18) */}
      <div className="bg-white rounded-3xl border border-slate-200/80 p-5 sm:p-8 space-y-6 shadow-xs">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h3 className="font-bold text-slate-900 text-base sm:text-lg">Quiz Diagnostic Breakdown</h3>
            <p className="text-xs text-slate-500">
              Inspect question-by-question difficulty and frequently missed concepts
            </p>
          </div>

          <div className="w-full sm:w-72">
            <select
              value={selectedQuizId}
              onChange={(e) => setSelectedQuizId(e.target.value)}
              className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs font-semibold text-slate-800 bg-white"
            >
              {quizzes.map((q) => (
                <option key={q._id} value={q._id}>
                  {q.title}
                </option>
              ))}
            </select>
          </div>
        </div>

        {quizAnalytics ? (
          <div className="space-y-6">
            {/* Quick Metrics for selected quiz */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5 sm:gap-3">
              <div className="p-3 sm:p-3.5 rounded-2xl bg-slate-50 border border-slate-100 text-center">
                <span className="text-[10px] font-bold text-slate-400 uppercase">Submissions</span>
                <span className="text-base sm:text-lg font-black text-slate-900 block mt-0.5">
                  {quizAnalytics.totalAttempts}
                </span>
              </div>
              <div className="p-3 sm:p-3.5 rounded-2xl bg-slate-50 border border-slate-100 text-center">
                <span className="text-[10px] font-bold text-slate-400 uppercase">Average Score</span>
                <span className="text-base sm:text-lg font-black text-indigo-600 block mt-0.5">
                  {quizAnalytics.avgScore}%
                </span>
              </div>
              <div className="p-3 sm:p-3.5 rounded-2xl bg-slate-50 border border-slate-100 text-center">
                <span className="text-[10px] font-bold text-slate-400 uppercase">Pass Rate</span>
                <span className="text-base sm:text-lg font-black text-emerald-600 block mt-0.5">
                  {quizAnalytics.passRate}%
                </span>
              </div>
              <div className="p-3 sm:p-3.5 rounded-2xl bg-slate-50 border border-slate-100 text-center">
                <span className="text-[10px] font-bold text-slate-400 uppercase">Highest Score</span>
                <span className="text-base sm:text-lg font-black text-slate-800 block mt-0.5">
                  {quizAnalytics.highestScore}%
                </span>
              </div>
              <div className="p-3 sm:p-3.5 rounded-2xl bg-slate-50 border border-slate-100 text-center col-span-2 sm:col-span-1">
                <span className="text-[10px] font-bold text-slate-400 uppercase">Avg Time</span>
                <span className="text-base sm:text-lg font-black text-slate-800 block mt-0.5">
                  {quizAnalytics.avgTimeMinutes}m
                </span>
              </div>
            </div>

            {/* Question by question difficulty breakdown */}
            <div className="space-y-3 pt-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Question Accuracy & Difficulty (% Correct)
              </h4>

              <div className="space-y-3">
                {quizAnalytics.questionStats && quizAnalytics.questionStats.length > 0 ? (
                  quizAnalytics.questionStats.map((qs: any) => (
                    <div
                      key={qs.questionIndex}
                      className={`p-4 rounded-2xl border transition ${
                        qs.isHardest
                          ? 'bg-rose-50/40 border-rose-200'
                          : 'bg-white border-slate-200/80'
                      }`}
                    >
                      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
                        <div className="flex items-center gap-2">
                          <span
                            className={`w-6 h-6 rounded-lg text-xs font-bold flex items-center justify-center shrink-0 ${
                              qs.isHardest
                                ? 'bg-rose-600 text-white'
                                : 'bg-slate-100 text-slate-700'
                            }`}
                          >
                            Q{qs.questionIndex}
                          </span>
                          <span className="font-semibold text-xs text-slate-800">
                            {qs.questionText}
                          </span>
                        </div>

                        <div className="flex items-center gap-3 shrink-0">
                          {qs.isHardest && (
                            <span className="inline-flex items-center gap-1 text-[11px] font-bold text-rose-700 bg-rose-100/70 px-2.5 py-0.5 rounded-full">
                              <AlertTriangle className="w-3 h-3" /> Hardest Concept
                            </span>
                          )}
                          <span className="font-extrabold text-xs text-slate-900">
                            {qs.accuracyPercentage}% Accuracy
                          </span>
                        </div>
                      </div>

                      {/* Accuracy bar */}
                      <div className="w-full h-2 bg-slate-100 rounded-full mt-3 overflow-hidden">
                        <div
                          className={`h-full rounded-full transition-all duration-500 ${
                            qs.accuracyPercentage >= 70
                              ? 'bg-emerald-500'
                              : qs.accuracyPercentage >= 50
                              ? 'bg-blue-500'
                              : 'bg-rose-500'
                          }`}
                          style={{ width: `${Math.max(5, qs.accuracyPercentage)}%` }}
                        />
                      </div>
                    </div>
                  ))
                ) : (
                  <p className="text-xs text-slate-400">
                    No submissions recorded yet for this quiz.
                  </p>
                )}
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center py-8 text-xs text-slate-400">
            Select a quiz above to view detailed diagnostic metrics.
          </div>
        )}
      </div>

      {/* Student Performance Ranking Table */}
      <div className="bg-white rounded-3xl border border-slate-200/80 p-5 sm:p-8 space-y-4 shadow-xs">
        <h3 className="font-bold text-slate-900 text-base sm:text-lg">Student Leaderboard & Ranking</h3>
        <p className="text-xs text-slate-500">
          Ranked by highest cumulative assessment average
        </p>

        {stats?.studentPerformance && stats.studentPerformance.length > 0 ? (
          <div className="overflow-x-auto -mx-5 sm:mx-0 px-5 sm:px-0">
            <table className="w-full text-left text-xs min-w-[500px]">
              <thead className="text-[11px] font-bold uppercase text-slate-400 border-b border-slate-100">
                <tr>
                  <th className="pb-3 w-16">Rank</th>
                  <th className="pb-3">Student Name</th>
                  <th className="pb-3">Assessments</th>
                  <th className="pb-3">Average %</th>
                  <th className="pb-3">Highest Score</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {stats.studentPerformance.map((item: any, idx: number) => (
                  <tr key={idx} className="hover:bg-slate-50/70 transition">
                    <td className="py-3.5">
                      <span
                        className={`w-6 h-6 rounded-lg text-xs font-black flex items-center justify-center ${
                          idx === 0
                            ? 'bg-amber-100 text-amber-800'
                            : idx === 1
                            ? 'bg-slate-200 text-slate-700'
                            : idx === 2
                            ? 'bg-orange-100 text-orange-800'
                            : 'text-slate-400'
                        }`}
                      >
                        #{idx + 1}
                      </span>
                    </td>
                    <td className="py-3.5 flex items-center gap-2.5">
                      <img
                        src={item.student?.avatar || `https://api.dicebear.com/7.x/bottts/svg?seed=${item.student?.name}`}
                        alt={item.student?.name}
                        className="w-7 h-7 rounded-lg bg-indigo-50 border border-slate-200"
                      />
                      <span className="font-bold text-slate-900">{item.student?.name}</span>
                    </td>
                    <td className="py-3.5 font-medium text-slate-700">{item.quizzesTaken}</td>
                    <td className="py-3.5 font-black text-slate-900 text-sm">
                      {item.averageScore}%
                    </td>
                    <td className="py-3.5 font-black text-emerald-600 text-sm">
                      {item.bestScore}%
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="text-center py-8 text-xs text-slate-400">
            Awaiting student submissions to generate cohort rankings.
          </div>
        )}
      </div>
    </div>
  );
};
