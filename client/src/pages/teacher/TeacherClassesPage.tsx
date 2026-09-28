import React, { useState, useEffect } from 'react';
import { api } from '../../api/client.js';
import { IClassGroup, IQuiz } from '../../types/index.js';
import { Modal } from '../../components/Modal.js';
import { useNotification } from '../../context/NotificationContext.js';
import {
  Users,
  Plus,
  Copy,
  Calendar,
  Clock,
  BookOpen,
  CheckCircle2,
  Send,
  UserCheck,
} from 'lucide-react';

export const TeacherClassesPage: React.FC = () => {
  const [classes, setClasses] = useState<IClassGroup[]>([]);
  const [quizzes, setQuizzes] = useState<IQuiz[]>([]);
  const [loading, setLoading] = useState(true);

  // Create class state
  const [createModalOpen, setCreateModalOpen] = useState(false);
  const [className, setClassName] = useState('');
  const [classDescription, setClassDescription] = useState('');
  const [classSubject, setClassSubject] = useState('Full-Stack Web Development');
  const [creating, setCreating] = useState(false);

  // Assign quiz state
  const [assignModalOpen, setAssignModalOpen] = useState(false);
  const [targetClass, setTargetClass] = useState<IClassGroup | null>(null);
  const [selectedQuizId, setSelectedQuizId] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [attemptLimit, setAttemptLimit] = useState(1);
  const [timeLimit, setTimeLimit] = useState(15);
  const [assigning, setAssigning] = useState(false);

  const { showToast } = useNotification();

  const loadData = async () => {
    try {
      setLoading(true);
      const [classRes, quizRes] = await Promise.all([
        api.get('/api/classes/teacher'),
        api.get('/api/quizzes/teacher/mine'),
      ]);

      if (classRes.success) setClasses(classRes.classes || []);
      if (quizRes.success) {
        setQuizzes(quizRes.quizzes || []);
        if (quizRes.quizzes?.length > 0) {
          setSelectedQuizId(quizRes.quizzes[0]._id);
        }
      }
    } catch (err) {
      console.error('Failed to load classes:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
    // Default due date = 7 days from now
    const d = new Date();
    d.setDate(d.getDate() + 7);
    setDueDate(d.toISOString().slice(0, 10));
  }, []);

  const handleCreateClass = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!className.trim()) return;

    try {
      setCreating(true);
      const res = await api.post('/api/classes', {
        name: className,
        description: classDescription,
        subject: classSubject,
      });

      if (res.success) {
        showToast('Class Created!', `Invite code generated: ${res.classGroup.inviteCode}`, 'success');
        setCreateModalOpen(false);
        setClassName('');
        setClassDescription('');
        loadData();
      }
    } catch (err: any) {
      showToast('Error', err.message || 'Failed to create class', 'error');
    } finally {
      setCreating(false);
    }
  };

  const handleAssignQuiz = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!targetClass || !selectedQuizId) return;

    try {
      setAssigning(true);
      const res = await api.post('/api/classes/assignments', {
        classGroupId: targetClass._id,
        quizId: selectedQuizId,
        dueDate,
        attemptLimit,
        timeLimit,
      });

      if (res.success) {
        showToast(
          'Quiz Assigned!',
          `Quiz assigned to ${targetClass.name} and notifications sent.`,
          'success'
        );
        setAssignModalOpen(false);
      }
    } catch (err: any) {
      showToast('Error', err.message || 'Failed to assign quiz', 'error');
    } finally {
      setAssigning(false);
    }
  };

  const copyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    showToast('Copied!', `Class invite code ${code} copied to clipboard.`, 'success');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            Class Management & Cohorts
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Organize student cohorts, distribute invite codes, and assign scheduled assessments
          </p>
        </div>

        <button
          onClick={() => setCreateModalOpen(true)}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-600 text-white text-xs font-bold hover:bg-indigo-700 shadow-md shadow-indigo-600/20 transition hover:scale-105"
        >
          <Plus className="w-4 h-4" /> Create New Class
        </button>
      </div>

      {/* Classes Grid */}
      {loading ? (
        <div className="text-center py-16">
          <div className="w-8 h-8 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin mx-auto mb-2" />
          <p className="text-xs text-slate-400">Loading student cohorts...</p>
        </div>
      ) : classes.length > 0 ? (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {classes.map((cls) => (
            <div
              key={cls._id}
              className="bg-white rounded-3xl border border-slate-200/80 p-6 sm:p-7 shadow-sm hover:shadow-md transition space-y-5 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[10px] font-bold uppercase text-indigo-700 bg-indigo-50 px-2.5 py-0.5 rounded-full border border-indigo-100">
                    {cls.subject}
                  </span>

                  {/* Invite Code Badge with Copy button */}
                  <div className="flex items-center gap-1.5 bg-slate-50 border border-slate-200 px-3 py-1 rounded-xl">
                    <span className="text-xs font-mono font-bold text-slate-800">
                      {cls.inviteCode}
                    </span>
                    <button
                      onClick={() => copyCode(cls.inviteCode)}
                      className="text-slate-400 hover:text-indigo-600 transition"
                      title="Copy Invite Code"
                    >
                      <Copy className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                <h3 className="font-bold text-slate-900 text-lg leading-snug">{cls.name}</h3>

                <p className="text-xs text-slate-500 leading-relaxed">
                  {cls.description || 'No description provided.'}
                </p>

                {/* Enrolled Students Counter & Avatars Preview */}
                <div className="pt-2">
                  <div className="flex items-center justify-between text-xs text-slate-600 mb-2">
                    <span className="font-bold flex items-center gap-1.5">
                      <Users className="w-3.5 h-3.5 text-slate-400" /> Enrolled Students (
                      {cls.students?.length || 0})
                    </span>
                  </div>

                  <div className="flex flex-wrap items-center gap-1.5 max-h-24 overflow-y-auto">
                    {cls.students && cls.students.length > 0 ? (
                      cls.students.map((student: any) => (
                        <div
                          key={student._id}
                          className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-50 border border-slate-100 text-[11px] font-medium text-slate-700"
                        >
                          <img
                            src={
                              student.avatar ||
                              `https://api.dicebear.com/7.x/bottts/svg?seed=${student.name}`
                            }
                            alt={student.name}
                            className="w-4 h-4 rounded-full bg-indigo-50"
                          />
                          <span>{student.name}</span>
                        </div>
                      ))
                    ) : (
                      <span className="text-xs text-slate-400">
                        No students enrolled yet. Share invite code <strong>{cls.inviteCode}</strong>.
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                <button
                  onClick={() => copyCode(cls.inviteCode)}
                  className="text-xs font-semibold text-slate-600 hover:text-indigo-600 flex items-center gap-1.5"
                >
                  <Copy className="w-3.5 h-3.5" /> Share Invite Code
                </button>

                <button
                  onClick={() => {
                    setTargetClass(cls);
                    setAssignModalOpen(true);
                  }}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-indigo-600 text-white text-xs font-bold hover:bg-indigo-700 shadow-sm transition"
                >
                  <Send className="w-3.5 h-3.5" /> Assign Quiz
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="bg-white rounded-3xl border border-slate-200 p-12 text-center space-y-3">
          <Users className="w-10 h-10 text-slate-300 mx-auto" />
          <h3 className="font-bold text-slate-800 text-base">No classes created yet</h3>
          <p className="text-xs text-slate-500 max-w-sm mx-auto">
            Create a class batch (e.g. Web Development Batch 2026) to generate an invite code and schedule assignments.
          </p>
          <button
            onClick={() => setCreateModalOpen(true)}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-indigo-600 text-white text-xs font-bold hover:bg-indigo-700 transition"
          >
            Create Your First Class
          </button>
        </div>
      )}

      {/* Create Class Modal */}
      <Modal
        isOpen={createModalOpen}
        onClose={() => setCreateModalOpen(false)}
        title="Create a New Class Cohort"
        maxWidth="md"
      >
        <form onSubmit={handleCreateClass} className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
              Class / Batch Name *
            </label>
            <input
              type="text"
              required
              value={className}
              onChange={(e) => setClassName(e.target.value)}
              placeholder="e.g. Web Development Batch 2026"
              className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm font-semibold"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
              Subject Area
            </label>
            <input
              type="text"
              required
              value={classSubject}
              onChange={(e) => setClassSubject(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
              Description (Optional)
            </label>
            <textarea
              rows={2}
              value={classDescription}
              onChange={(e) => setClassDescription(e.target.value)}
              placeholder="Class syllabus, cohort focus, or term objectives..."
              className="w-full px-4 py-2 rounded-xl border border-slate-200 text-xs"
            />
          </div>

          <div className="pt-2 flex justify-end gap-2">
            <button
              type="button"
              onClick={() => setCreateModalOpen(false)}
              className="px-4 py-2 rounded-xl border border-slate-200 text-xs font-semibold text-slate-700 hover:bg-slate-50 transition"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={creating}
              className="px-5 py-2 rounded-xl bg-indigo-600 text-white text-xs font-bold hover:bg-indigo-700 transition disabled:opacity-50"
            >
              {creating ? 'Creating...' : 'Create Class & Code'}
            </button>
          </div>
        </form>
      </Modal>

      {/* Assign Quiz Modal */}
      <Modal
        isOpen={assignModalOpen}
        onClose={() => setAssignModalOpen(false)}
        title={`Assign Quiz to ${targetClass?.name}`}
        maxWidth="md"
      >
        <form onSubmit={handleAssignQuiz} className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
              Select Quiz *
            </label>
            <select
              value={selectedQuizId}
              onChange={(e) => setSelectedQuizId(e.target.value)}
              className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-xs font-semibold text-slate-800 bg-white"
            >
              {quizzes.map((q) => (
                <option key={q._id} value={q._id}>
                  {q.title} ({q.subject})
                </option>
              ))}
            </select>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                Due Date *
              </label>
              <input
                type="date"
                required
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
                className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs font-semibold"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                Attempt Limit
              </label>
              <input
                type="number"
                min={1}
                value={attemptLimit}
                onChange={(e) => setAttemptLimit(Number(e.target.value))}
                className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs font-semibold"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
              Time Limit (Minutes)
            </label>
            <input
              type="number"
              min={0}
              value={timeLimit}
              onChange={(e) => setTimeLimit(Number(e.target.value))}
              className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs font-semibold"
            />
            <span className="text-[10px] text-slate-400">0 for unlimited minutes</span>
          </div>

          <div className="pt-2 flex justify-end gap-2">
            <button
              type="button"
              onClick={() => setAssignModalOpen(false)}
              className="px-4 py-2 rounded-xl border border-slate-200 text-xs font-semibold text-slate-700 hover:bg-slate-50 transition"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={assigning}
              className="px-5 py-2 rounded-xl bg-indigo-600 text-white text-xs font-bold hover:bg-indigo-700 transition disabled:opacity-50"
            >
              {assigning ? 'Assigning...' : 'Dispatch Assignment'}
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
};
