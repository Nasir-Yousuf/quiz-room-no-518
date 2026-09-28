import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { api } from '../../api/client.js';
import { ArrowLeft, CheckCircle2, XCircle, Clock, AlertTriangle, ArrowRight } from 'lucide-react';

export const QuizResultsDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [quizTitle, setQuizTitle] = useState('');
  const [attempts, setAttempts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchResults = async () => {
      try {
        setLoading(true);
        const res = await api.get(`/api/attempts/quizzes/${id}/teacher`);
        if (res.success) {
          setQuizTitle(res.quizTitle);
          setAttempts(res.attempts || []);
        }
      } catch (err) {
        console.error('Failed to load quiz results:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchResults();
  }, [id]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Header */}
      <div className="space-y-1">
        <Link
          to="/teacher/quizzes"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-slate-800 transition"
        >
          <ArrowLeft className="w-3.5 h-3.5" /> Back to Quizzes
        </Link>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
          Submissions for "{quizTitle || 'Quiz'}"
        </h1>
        <p className="text-xs sm:text-sm text-slate-500">
          Individual student results, scores, time taken, and proctor events
        </p>
      </div>

      {/* Submissions Table */}
      <div className="bg-white rounded-3xl border border-slate-200/80 p-6 sm:p-8 space-y-4 shadow-xs">
        <div className="flex items-center justify-between">
          <h3 className="font-bold text-slate-900 text-base">
            All Student Attempts ({attempts.length})
          </h3>
        </div>

        {loading ? (
          <div className="text-center py-12">
            <div className="w-8 h-8 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin mx-auto mb-2" />
            <p className="text-xs text-slate-400">Loading student attempts...</p>
          </div>
        ) : attempts.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="text-[11px] font-bold uppercase text-slate-400 border-b border-slate-100">
                <tr>
                  <th className="pb-3">Student</th>
                  <th className="pb-3">Score</th>
                  <th className="pb-3">Percentage</th>
                  <th className="pb-3">Time Spent</th>
                  <th className="pb-3">Tab Blur Warnings</th>
                  <th className="pb-3">Date Submitted</th>
                  <th className="pb-3 text-right">Detailed Review</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {attempts.map((att) => {
                  const mins = Math.floor(att.timeSpentSeconds / 60);
                  const secs = att.timeSpentSeconds % 60;

                  return (
                    <tr key={att._id} className="hover:bg-slate-50/70 transition">
                      <td className="py-4 flex items-center gap-2.5">
                        <img
                          src={
                            att.student?.avatar ||
                            `https://api.dicebear.com/7.x/bottts/svg?seed=${att.student?.name}`
                          }
                          alt={att.student?.name}
                          className="w-7 h-7 rounded-lg bg-indigo-50 border border-slate-200"
                        />
                        <div>
                          <span className="font-bold text-slate-900 block">{att.student?.name}</span>
                          <span className="text-[10px] text-slate-400">{att.student?.email}</span>
                        </div>
                      </td>
                      <td className="py-4 font-bold text-slate-800">
                        {att.score} / {att.maxScore}
                      </td>
                      <td className="py-4">
                        <span
                          className={`font-black text-sm ${
                            att.passed ? 'text-emerald-600' : 'text-rose-500'
                          }`}
                        >
                          {att.percentage}%
                        </span>
                      </td>
                      <td className="py-4 text-slate-600 font-mono">
                        {mins}m {secs}s
                      </td>
                      <td className="py-4">
                        {att.tabSwitchesCount > 0 ? (
                          <span className="inline-flex items-center gap-1 text-[11px] font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded-full border border-amber-200">
                            <AlertTriangle className="w-3 h-3" /> {att.tabSwitchesCount} Event(s)
                          </span>
                        ) : (
                          <span className="text-slate-400">None (0)</span>
                        )}
                      </td>
                      <td className="py-4 text-slate-500">
                        {new Date(att.completedAt).toLocaleDateString()}
                      </td>
                      <td className="py-4 text-right">
                        <Link
                          to={`/student/attempts/${att._id}/result`}
                          className="inline-flex items-center gap-1 font-bold text-indigo-600 hover:text-indigo-800"
                        >
                          Inspect <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="text-center py-10 text-xs text-slate-400">
            No students have taken this quiz yet. Share the quiz link or assign it to a class!
          </div>
        )}
      </div>
    </div>
  );
};
