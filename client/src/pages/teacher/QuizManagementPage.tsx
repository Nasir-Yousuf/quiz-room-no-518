import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { api } from '../../api/client.js';
import { IQuiz } from '../../types/index.js';
import { SubjectBadge, DifficultyBadge, StatusBadge } from '../../components/Badge.js';
import { ShareQuizModal } from '../../components/ShareQuizModal.js';
import { useNotification } from '../../context/NotificationContext.js';
import {
  Plus,
  Share2,
  Edit3,
  Copy,
  Trash2,
  Eye,
  CheckCircle,
  Archive,
  BookOpen,
  HelpCircle,
  Clock,
  MoreVertical,
} from 'lucide-react';

export const QuizManagementPage: React.FC = () => {
  const [quizzes, setQuizzes] = useState<IQuiz[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedStatus, setSelectedStatus] = useState('All');
  const [activeShareQuiz, setActiveShareQuiz] = useState<IQuiz | null>(null);

  const { showToast } = useNotification();

  const fetchTeacherQuizzes = async () => {
    try {
      setLoading(true);
      const res = await api.get('/api/quizzes/teacher/mine');
      if (res.success) {
        setQuizzes(res.quizzes || []);
      }
    } catch (err) {
      console.error('Failed to load teacher quizzes:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTeacherQuizzes();
  }, []);

  const handleDuplicate = async (quizId: string) => {
    try {
      const res = await api.post(`/api/quizzes/${quizId}/duplicate`);
      if (res.success) {
        showToast('Duplicated!', 'Quiz duplicated as a draft copy.', 'success');
        fetchTeacherQuizzes();
      }
    } catch (err: any) {
      showToast('Error', err.message || 'Failed to duplicate quiz', 'error');
    }
  };

  const handleDelete = async (quizId: string) => {
    if (!window.confirm('Are you sure you want to delete this quiz? This action cannot be undone.')) {
      return;
    }
    try {
      const res = await api.delete(`/api/quizzes/${quizId}`);
      if (res.success) {
        showToast('Deleted', 'Quiz removed successfully.', 'info');
        setQuizzes((prev) => prev.filter((q) => q._id !== quizId));
      }
    } catch (err: any) {
      showToast('Error', err.message || 'Failed to delete quiz', 'error');
    }
  };

  const handleStatusToggle = async (quiz: IQuiz) => {
    const newStatus = quiz.status === 'published' ? 'draft' : 'published';
    try {
      const res = await api.patch(`/api/quizzes/${quiz._id}`, { status: newStatus });
      if (res.success) {
        showToast(
          'Status Updated',
          `Quiz is now ${newStatus === 'published' ? 'Published' : 'Saved as Draft'}.`,
          'success'
        );
        fetchTeacherQuizzes();
      }
    } catch (err: any) {
      showToast('Error', err.message || 'Failed to update status', 'error');
    }
  };

  const filteredQuizzes = quizzes.filter((q) => {
    if (selectedStatus === 'All') return true;
    return q.status === selectedStatus;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            My Quizzes
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Author, edit, publish, duplicate, and share your interactive assessments
          </p>
        </div>

        <Link
          to="/teacher/quizzes/new"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-600 text-white text-xs font-bold hover:bg-indigo-700 shadow-md shadow-indigo-600/20 transition hover:scale-105"
        >
          <Plus className="w-4 h-4" /> Create New Quiz
        </Link>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center gap-2 border-b border-slate-200 pb-2">
        {['All', 'published', 'draft', 'archived'].map((status) => (
          <button
            key={status}
            onClick={() => setSelectedStatus(status)}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold capitalize transition ${
              selectedStatus === status
                ? 'bg-indigo-600 text-white shadow-xs'
                : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            {status}
          </button>
        ))}
      </div>

      {/* Quizzes List */}
      {loading ? (
        <div className="text-center py-16">
          <div className="w-8 h-8 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin mx-auto mb-2" />
          <p className="text-xs text-slate-400">Loading your quizzes...</p>
        </div>
      ) : filteredQuizzes.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredQuizzes.map((quiz) => (
            <div
              key={quiz._id}
              className="bg-white rounded-3xl border border-slate-200/80 p-6 shadow-sm hover:shadow-md transition flex flex-col justify-between space-y-5"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <SubjectBadge subject={quiz.subject} />
                    <DifficultyBadge difficulty={quiz.difficulty} />
                  </div>
                  <StatusBadge status={quiz.status} />
                </div>

                <h3 className="font-bold text-slate-900 text-lg leading-snug line-clamp-2">
                  {quiz.title}
                </h3>

                <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                  {quiz.description || 'No description provided.'}
                </p>

                <div className="flex items-center gap-4 text-xs text-slate-500 pt-1">
                  <span className="flex items-center gap-1">
                    <HelpCircle className="w-3.5 h-3.5 text-slate-400" />
                    {quiz.questions?.length || 0} Questions
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-slate-400" />
                    {quiz.timeLimit > 0 ? `${quiz.timeLimit}m` : 'Untimed'}
                  </span>
                  <span className="flex items-center gap-1 font-semibold text-indigo-600">
                    {quiz.attemptsCount} Takers
                  </span>
                </div>
              </div>

              {/* Action Toolbar */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-1 text-slate-600">
                <div className="flex items-center gap-1">
                  <Link
                    to={`/teacher/quizzes/${quiz._id}/edit`}
                    className="p-2 rounded-xl hover:bg-slate-100 text-slate-700 hover:text-indigo-600 transition"
                    title="Edit Quiz"
                  >
                    <Edit3 className="w-4 h-4" />
                  </Link>

                  <button
                    onClick={() => setActiveShareQuiz(quiz)}
                    className="p-2 rounded-xl hover:bg-slate-100 text-slate-700 hover:text-indigo-600 transition"
                    title="Share Link & QR Code"
                  >
                    <Share2 className="w-4 h-4" />
                  </button>

                  <button
                    onClick={() => handleDuplicate(quiz._id)}
                    className="p-2 rounded-xl hover:bg-slate-100 text-slate-700 hover:text-indigo-600 transition"
                    title="Duplicate Quiz"
                  >
                    <Copy className="w-4 h-4" />
                  </button>

                  <button
                    onClick={() => handleStatusToggle(quiz)}
                    className={`p-2 rounded-xl hover:bg-slate-100 transition ${
                      quiz.status === 'published' ? 'text-amber-600' : 'text-emerald-600'
                    }`}
                    title={quiz.status === 'published' ? 'Unpublish to Draft' : 'Publish Quiz'}
                  >
                    {quiz.status === 'published' ? <Archive className="w-4 h-4" /> : <CheckCircle className="w-4 h-4" />}
                  </button>

                  <button
                    onClick={() => handleDelete(quiz._id)}
                    className="p-2 rounded-xl hover:bg-rose-50 text-slate-400 hover:text-rose-600 transition"
                    title="Delete Quiz"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>

                <Link
                  to={`/teacher/quizzes/${quiz._id}/results`}
                  className="inline-flex items-center gap-1 text-xs font-bold text-indigo-600 hover:text-indigo-800"
                >
                  <Eye className="w-3.5 h-3.5" /> Results
                </Link>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="bg-white rounded-3xl border border-slate-200 p-12 text-center space-y-3">
          <BookOpen className="w-10 h-10 text-slate-300 mx-auto" />
          <h3 className="font-bold text-slate-800 text-base">No quizzes found</h3>
          <p className="text-xs text-slate-500 max-w-sm mx-auto">
            Get started by authoring your first interactive quiz or importing questions from your Question Bank.
          </p>
          <Link
            to="/teacher/quizzes/new"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-indigo-600 text-white text-xs font-bold hover:bg-indigo-700 transition"
          >
            Create Your First Quiz
          </Link>
        </div>
      )}

      {/* Share Quiz Modal */}
      {activeShareQuiz && (
        <ShareQuizModal
          isOpen={!!activeShareQuiz}
          onClose={() => setActiveShareQuiz(null)}
          quizTitle={activeShareQuiz.title}
          shareCode={activeShareQuiz.shareCode}
        />
      )}
    </div>
  );
};
