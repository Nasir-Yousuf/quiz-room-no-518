import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext.js';
import { useLanguage } from '../../context/LanguageContext.js';
import { api } from '../../api/client.js';
import { StatsCard } from '../../components/StatsCard.js';
import { SubjectBadge } from '../../components/Badge.js';
import {
  Trophy,
  CheckCircle2,
  Clock,
  BookOpen,
  ArrowRight,
  TrendingUp,
  AlertCircle,
  Sparkles,
  Calendar,
} from 'lucide-react';

export const StudentDashboard: React.FC = () => {
  const { user } = useAuth();
  const { t, language } = useLanguage();
  const [stats, setStats] = useState<any>(null);
  const [assignments, setAssignments] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadDashboardData = async () => {
      try {
        setLoading(true);
        const [statsRes, assignRes] = await Promise.all([
          api.get('/api/analytics/student'),
          api.get('/api/classes/assignments'),
        ]);

        if (statsRes.success) {
          setStats(statsRes.stats);
        }
        if (assignRes.success) {
          setAssignments(assignRes.assignments || []);
        }
      } catch (err) {
        console.error('Failed to load student dashboard:', err);
      } finally {
        setLoading(false);
      }
    };

    loadDashboardData();
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Welcome Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-gradient-to-r from-indigo-900 via-indigo-800 to-indigo-900 rounded-3xl p-6 sm:p-8 text-white shadow-xl shadow-indigo-900/10">
        <div className="space-y-1.5">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-indigo-200 text-xs font-semibold backdrop-blur-xs">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span>{t('dashboard.badge', 'Student Learning Hub')}</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            {t('dashboard.welcome', 'Welcome back')}, {user?.name}! 👋
          </h1>
          <p className="text-xs sm:text-sm text-indigo-200 max-w-xl">
            {t('dashboard.subtitle', 'Self-paced practice mode active. Test yourself freely across React, Next.js, TypeScript, Python, HTML, CSS, JavaScript, and Node.js.')}
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <Link
            to="/student/quizzes"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white text-indigo-900 text-xs font-bold hover:bg-indigo-50 shadow-md transition hover:scale-105"
          >
            <BookOpen className="w-4 h-4 text-indigo-600" />
            {t('dashboard.browseBtn', 'Explore All Quizzes')}
          </Link>
          <Link
            to="/student/classes"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/10 text-white text-xs font-bold hover:bg-white/20 transition border border-white/20"
          >
            {t('dashboard.joinClassBtn', 'Join a Class')}
          </Link>
        </div>
      </div>

      {/* Quick Self-Study Practice Topic Bar */}
      <div className="bg-white rounded-2xl border border-slate-200/90 p-4 shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
          <div className="flex items-center gap-2">
            <span className="w-6 h-6 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center font-bold text-xs">
              ⚡
            </span>
            <h3 className="text-xs font-extrabold uppercase tracking-wider text-slate-800">
              {t('dashboard.quickSprintsTitle', 'Quick 15-Question Practice Sprints (No Teacher Needed)')}
            </h3>
          </div>
          <Link
            to="/student/quizzes"
            className="text-xs font-bold text-indigo-600 hover:text-indigo-700 flex items-center gap-1"
          >
            {t('dashboard.customizeCountLink', 'Customize Question Count (15, 30, 50, 100 Qs)')} <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="flex items-center gap-2 overflow-x-auto pb-1">
          {[
            { name: 'React', color: 'hover:border-cyan-400 hover:bg-cyan-50/50' },
            { name: 'Next.js', color: 'hover:border-slate-400 hover:bg-slate-50' },
            { name: 'TypeScript', color: 'hover:border-blue-400 hover:bg-blue-50/50' },
            { name: 'Python', color: 'hover:border-emerald-400 hover:bg-emerald-50/50' },
            { name: 'JavaScript', color: 'hover:border-amber-400 hover:bg-amber-50/50' },
            { name: 'HTML', color: 'hover:border-orange-400 hover:bg-orange-50/50' },
            { name: 'CSS', color: 'hover:border-sky-400 hover:bg-sky-50/50' },
            { name: 'Node.js', color: 'hover:border-green-400 hover:bg-green-50/50' },
          ].map((topic) => (
            <Link
              key={topic.name}
              to={`/student/quizzes?subject=${topic.name}`}
              className={`px-3 py-1.5 rounded-xl border border-slate-200 text-xs font-bold text-slate-700 transition shrink-0 ${topic.color}`}
            >
              {topic.name} {language === 'bn' ? 'স্প্রিন্ট »' : 'Sprint »'}
            </Link>
          ))}
        </div>
      </div>

      {/* Metric Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatsCard
          label={t('dashboard.totalQuizzes', 'Total Quizzes Taken')}
          value={stats?.totalQuizzes ?? 0}
          icon={<BookOpen className="w-6 h-6" />}
          colorScheme="indigo"
          subtitle={language === 'bn' ? 'সম্পন্ন মূল্যায়ন' : 'Assessments completed'}
        />
        <StatsCard
          label={t('dashboard.avgScore', 'Average Score')}
          value={`${stats?.avgScore ?? 0}%`}
          icon={<TrendingUp className="w-6 h-6" />}
          colorScheme="emerald"
          subtitle={language === 'bn' ? 'সামগ্রিক ফলাফল' : 'Overall performance'}
        />
        <StatsCard
          label={t('dashboard.highestScore', 'Highest Score')}
          value={`${stats?.highestScore ?? 0}%`}
          icon={<Trophy className="w-6 h-6" />}
          colorScheme="amber"
          subtitle={language === 'bn' ? 'ব্যক্তিগত সেরা' : 'Personal best'}
        />
        <StatsCard
          label={t('dashboard.pendingAssignments', 'Pending Assignments')}
          value={assignments.length}
          icon={<Clock className="w-6 h-6" />}
          colorScheme="purple"
          subtitle={language === 'bn' ? 'ক্লাস টেস্ট বাকি' : 'Class quizzes due'}
        />
      </div>

      {/* Active Assignments Alert Box */}
      {assignments.length > 0 && (
        <div className="bg-amber-50/80 rounded-2xl border border-amber-200 p-5 space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold text-amber-900 flex items-center gap-2">
              <AlertCircle className="w-4 h-4 text-amber-600" />
              Assigned Class Quizzes ({assignments.length})
            </h3>
            <span className="text-xs text-amber-700 font-medium">Due soon</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {assignments.map((asg) => (
              <div
                key={asg._id}
                className="bg-white rounded-xl p-4 border border-amber-200/80 shadow-xs flex flex-col justify-between space-y-3"
              >
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[10px] font-bold text-amber-800 bg-amber-100/60 px-2 py-0.5 rounded">
                      {asg.classGroup?.name || 'Class Assignment'}
                    </span>
                    <span className="text-[11px] font-medium text-slate-500 flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-slate-400" />
                      {new Date(asg.dueDate).toLocaleDateString()}
                    </span>
                  </div>
                  <h4 className="text-sm font-bold text-slate-900">{asg.title}</h4>
                  <p className="text-xs text-slate-500 mt-1">
                    {asg.timeLimit > 0 ? `${asg.timeLimit} Mins Limit` : 'No Time Limit'} • Max {asg.attemptLimit} Attempt(s)
                  </p>
                </div>
                <Link
                  to={`/student/quizzes/${asg.quiz?._id}/take?assignmentId=${asg._id}`}
                  className="w-full py-2 px-3 rounded-lg bg-indigo-600 text-white text-xs font-bold text-center hover:bg-indigo-700 transition"
                >
                  Start Assignment
                </Link>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Main Grid: Subject Breakdown & Learning Insights */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Subject Performance Breakdown (2 Cols) */}
        <div className="lg:col-span-2 bg-white rounded-3xl border border-slate-200 p-6 space-y-6 shadow-xs">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-bold text-slate-900 text-base">Subject Mastery</h3>
              <p className="text-xs text-slate-500">Your average score across web technologies</p>
            </div>
            <Link
              to="/student/progress"
              className="text-xs font-bold text-indigo-600 hover:text-indigo-700 flex items-center gap-1"
            >
              Full Progress Report <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="space-y-4">
            {stats?.subjectBreakdown && stats.subjectBreakdown.length > 0 ? (
              stats.subjectBreakdown.map((item: any) => {
                let barColor = 'bg-indigo-600';
                const sub = item.subject.toLowerCase();
                if (sub === 'html') barColor = 'bg-orange-500';
                else if (sub === 'css') barColor = 'bg-sky-500';
                else if (sub === 'javascript') barColor = 'bg-amber-500';
                else if (sub === 'typescript') barColor = 'bg-blue-600';
                else if (sub === 'react') barColor = 'bg-cyan-500';
                else if (sub === 'next.js') barColor = 'bg-slate-900';
                else if (sub === 'python') barColor = 'bg-emerald-600';
                else if (sub === 'node.js') barColor = 'bg-green-600';

                return (
                  <div key={item.subject} className="space-y-1.5">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-bold text-slate-800">{item.subject}</span>
                      <span className="font-extrabold text-slate-900">{item.average}%</span>
                    </div>
                    <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full transition-all duration-700 ${barColor}`}
                        style={{ width: `${Math.min(100, item.average)}%` }}
                      />
                    </div>
                    <span className="text-[11px] text-slate-400">
                      Based on {item.attemptsCount} completed assessment(s)
                    </span>
                  </div>
                );
              })
            ) : (
              <div className="text-center py-8 text-xs text-slate-400">
                No quiz attempts yet. Start taking quizzes to see your mastery metrics!
              </div>
            )}
          </div>
        </div>

        {/* Rule-Based Learning Insights (Requirement 19) */}
        <div className="bg-white rounded-3xl border border-slate-200 p-6 space-y-4 shadow-xs">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center border border-purple-100">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 text-sm">Learning Insights</h3>
              <p className="text-[11px] text-slate-500">Automated focus topics</p>
            </div>
          </div>

          <p className="text-xs text-slate-600 leading-relaxed">
            Based on your quiz performance, we recommend spending extra practice on:
          </p>

          <div className="space-y-2">
            {stats?.suggestedFocus && stats.suggestedFocus.length > 0 ? (
              stats.suggestedFocus.map((focus: string, idx: number) => (
                <div
                  key={idx}
                  className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 text-xs font-semibold text-slate-800 flex items-center gap-2.5"
                >
                  <span className="w-5 h-5 rounded-md bg-indigo-100 text-indigo-700 text-[10px] font-bold flex items-center justify-center">
                    {idx + 1}
                  </span>
                  <span>{focus}</span>
                </div>
              ))
            ) : (
              <div className="p-4 text-center text-xs text-slate-400">
                Take a quiz to unlock tailored focus recommendations.
              </div>
            )}
          </div>

          <div className="pt-2">
            <Link
              to="/student/quizzes"
              className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-xl bg-slate-900 text-white text-xs font-bold hover:bg-slate-800 transition"
            >
              Practice Recommended Quizzes
            </Link>
          </div>
        </div>
      </div>

      {/* Recent Quiz Activity Table */}
      <div className="bg-white rounded-3xl border border-slate-200 p-6 space-y-4 shadow-xs">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-bold text-slate-900 text-base">Recent Attempts</h3>
            <p className="text-xs text-slate-500">Review your past submissions and answer keys</p>
          </div>
          <Link
            to="/student/progress"
            className="text-xs font-bold text-indigo-600 hover:text-indigo-700"
          >
            View All Attempts
          </Link>
        </div>

        {stats?.recentActivity && stats.recentActivity.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="text-[11px] font-bold uppercase text-slate-400 border-b border-slate-100">
                <tr>
                  <th className="pb-3">Quiz Title</th>
                  <th className="pb-3">Subject</th>
                  <th className="pb-3">Date</th>
                  <th className="pb-3">Score</th>
                  <th className="pb-3">Status</th>
                  <th className="pb-3 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {stats.recentActivity.map((activity: any) => (
                  <tr key={activity.id} className="hover:bg-slate-50/70 transition">
                    <td className="py-3.5 font-bold text-slate-900 max-w-xs truncate">
                      {activity.quizTitle}
                    </td>
                    <td className="py-3.5">
                      <SubjectBadge subject={activity.subject} />
                    </td>
                    <td className="py-3.5 text-slate-500">
                      {new Date(activity.date).toLocaleDateString()}
                    </td>
                    <td className="py-3.5 font-extrabold text-slate-900">
                      {activity.percentage}%
                    </td>
                    <td className="py-3.5">
                      <span
                        className={`inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold ${
                          activity.passed
                            ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                            : 'bg-rose-50 text-rose-700 border border-rose-200'
                        }`}
                      >
                        {activity.passed ? 'Passed' : 'Needs Practice'}
                      </span>
                    </td>
                    <td className="py-3.5 text-right">
                      <Link
                        to={`/student/attempts/${activity.id}/result`}
                        className="inline-flex items-center gap-1 font-bold text-indigo-600 hover:text-indigo-800"
                      >
                        Review
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="text-center py-10 space-y-2">
            <p className="text-xs text-slate-400">You haven't completed any quizzes yet.</p>
            <Link
              to="/student/quizzes"
              className="inline-flex items-center gap-1 text-xs font-bold text-indigo-600 hover:text-indigo-700"
            >
              Browse available quizzes now <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};
