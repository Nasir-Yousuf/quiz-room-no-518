import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { api } from '../../api/client.js';
import { StatsCard } from '../../components/StatsCard.js';
import { SubjectBadge } from '../../components/Badge.js';
import {
  Trophy,
  CheckCircle2,
  TrendingUp,
  BookOpen,
  Calendar,
  Clock,
  ArrowRight,
  Filter,
} from 'lucide-react';

export const StudentProgressPage: React.FC = () => {
  const [stats, setStats] = useState<any>(null);
  const [attempts, setAttempts] = useState<any[]>([]);
  const [selectedSubject, setSelectedSubject] = useState('All');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProgressData = async () => {
      try {
        setLoading(true);
        const [statsRes, attemptsRes] = await Promise.all([
          api.get('/api/analytics/student'),
          api.get(`/api/attempts/mine?subject=${selectedSubject}`),
        ]);

        if (statsRes.success) setStats(statsRes.stats);
        if (attemptsRes.success) setAttempts(attemptsRes.attempts || []);
      } catch (err) {
        console.error('Failed to load progress data:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchProgressData();
  }, [selectedSubject]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
          My Learning Progress
        </h1>
        <p className="text-xs sm:text-sm text-slate-500 mt-1">
          Track your historical quiz submissions, progress over time, and subject mastery
        </p>
      </div>

      {/* Top Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
        <StatsCard
          label="Total Quizzes Taken"
          value={stats?.totalQuizzes ?? 0}
          icon={<BookOpen className="w-6 h-6" />}
          colorScheme="indigo"
          subtitle="Lifetime submissions"
        />
        <StatsCard
          label="Average Mastery"
          value={`${stats?.avgScore ?? 0}%`}
          icon={<TrendingUp className="w-6 h-6" />}
          colorScheme="emerald"
          subtitle="Across all attempts"
        />
        <StatsCard
          label="Best Score"
          value={`${stats?.highestScore ?? 0}%`}
          icon={<Trophy className="w-6 h-6" />}
          colorScheme="amber"
          subtitle="Top assessment mark"
        />
      </div>

      {/* Progress Over Time Visual Chart (Requirement 10) */}
      <div className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200/80 p-4 sm:p-8 space-y-5 sm:space-y-6 shadow-xs">
        <div>
          <h3 className="font-bold text-slate-900 text-base sm:text-lg">Performance Over Time</h3>
          <p className="text-xs text-slate-500">
            Chronological progression of scores across recent quiz attempts
          </p>
        </div>

        {stats?.progressOverTime && stats.progressOverTime.length > 0 ? (
          <div className="space-y-4">
            {/* Custom Interactive SVG / Bar Trend Visualization */}
            <div className="h-44 sm:h-56 flex items-end gap-3 sm:gap-6 pt-6 pb-2 border-b border-slate-100 overflow-x-auto no-scrollbar">
              {stats.progressOverTime.map((item: any, idx: number) => {
                const heightPercent = Math.max(15, Math.min(100, item.score));
                const isPassed = item.score >= 70;

                return (
                  <div key={idx} className="flex-1 min-w-[50px] flex flex-col items-center gap-2 group">
                    <span className="text-[11px] font-extrabold text-slate-700 opacity-0 group-hover:opacity-100 transition-opacity">
                      {item.score}%
                    </span>
                    <div className="w-full bg-slate-100 h-32 sm:h-36 rounded-xl flex items-end p-1 overflow-hidden">
                      <div
                        className={`w-full rounded-lg transition-all duration-700 ${
                          isPassed
                            ? 'bg-gradient-to-t from-emerald-600 to-emerald-400 group-hover:brightness-110'
                            : 'bg-gradient-to-t from-amber-600 to-amber-400 group-hover:brightness-110'
                        }`}
                        style={{ height: `${heightPercent}%` }}
                      />
                    </div>
                    <span className="text-[10px] font-semibold text-slate-500 truncate w-full text-center">
                      {item.date}
                    </span>
                  </div>
                );
              })}
            </div>

            <div className="flex items-center justify-between text-xs text-slate-500 pt-2">
              <span className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" /> Passed (≥ 70%)
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500" /> In Progress (&lt; 70%)
              </span>
            </div>
          </div>
        ) : (
          <div className="text-center py-10 text-xs text-slate-400">
            Take at least one quiz to plot your performance timeline!
          </div>
        )}
      </div>

      {/* Attempt History List with Subject Filter */}
      <div className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200/80 p-4 sm:p-8 space-y-5 sm:space-y-6 shadow-xs">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4">
          <div>
            <h3 className="font-bold text-slate-900 text-base sm:text-lg">Assessment History</h3>
            <p className="text-xs text-slate-500">Full log of completed quiz attempts and scores</p>
          </div>

          {/* Filter tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1.5 no-scrollbar max-w-full">
            <Filter className="w-4 h-4 text-slate-400 shrink-0" />
            {[
              'All',
              'HTML',
              'CSS',
              'JavaScript',
              'TypeScript',
              'React',
              'Next.js',
              'Python',
              'Node.js',
            ].map((sub) => (
              <button
                key={sub}
                onClick={() => setSelectedSubject(sub)}
                className={`px-3 py-1 rounded-xl text-xs font-semibold transition shrink-0 ${
                  selectedSubject === sub
                    ? 'bg-indigo-600 text-white shadow-xs'
                    : 'text-slate-600 hover:bg-slate-100'
                }`}
              >
                {sub}
              </button>
            ))}
          </div>
        </div>

        {attempts.length > 0 ? (
          <div className="overflow-x-auto -mx-4 sm:mx-0 px-4 sm:px-0">
            <table className="w-full text-left text-xs min-w-[560px]">
              <thead className="text-[11px] font-bold uppercase text-slate-400 border-b border-slate-100">
                <tr>
                  <th className="pb-3">Quiz Title</th>
                  <th className="pb-3">Subject</th>
                  <th className="pb-3">Score</th>
                  <th className="pb-3">Time Spent</th>
                  <th className="pb-3">Date Completed</th>
                  <th className="pb-3 text-right">Review Key</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {attempts.map((att) => {
                  const mins = Math.floor(att.timeSpentSeconds / 60);
                  const secs = att.timeSpentSeconds % 60;

                  return (
                    <tr key={att._id} className="hover:bg-slate-50/70 transition">
                      <td className="py-4 font-bold text-slate-900 max-w-xs truncate">
                        {att.quizTitle}
                      </td>
                      <td className="py-4">
                        <SubjectBadge subject={att.subject} />
                      </td>
                      <td className="py-4">
                        <span className="font-extrabold text-sm text-slate-900">
                          {att.percentage}%
                        </span>
                        <span className="text-[10px] text-slate-400 block">
                          ({att.score}/{att.maxScore} pts)
                        </span>
                      </td>
                      <td className="py-4 text-slate-600 font-mono">
                        {mins}m {secs}s
                      </td>
                      <td className="py-4 text-slate-500">
                        {new Date(att.completedAt).toLocaleDateString()}
                      </td>
                      <td className="py-4 text-right">
                        <Link
                          to={`/student/attempts/${att._id}/result`}
                          className="inline-flex items-center gap-1 font-bold text-indigo-600 hover:text-indigo-800"
                        >
                          Review <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="text-center py-12 text-xs text-slate-400">
            No quiz attempts found for subject "{selectedSubject}".
          </div>
        )}
      </div>
    </div>
  );
};
