import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { api } from '../../api/client.js';
import { IClassGroup } from '../../types/index.js';
import { useNotification } from '../../context/NotificationContext.js';
import { Modal } from '../../components/Modal.js';
import {
  Users,
  Plus,
  BookOpen,
  School,
  CheckCircle2,
  Calendar,
  Clock,
  ArrowRight,
} from 'lucide-react';

export const StudentClassesPage: React.FC = () => {
  const [classes, setClasses] = useState<IClassGroup[]>([]);
  const [assignments, setAssignments] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [joinModalOpen, setJoinModalOpen] = useState(false);
  const [inviteCode, setInviteCode] = useState('');
  const [joining, setJoining] = useState(false);

  const { showToast } = useNotification();

  const loadClassesData = async () => {
    try {
      setLoading(true);
      const [classRes, assignRes] = await Promise.all([
        api.get('/api/classes/student'),
        api.get('/api/classes/assignments'),
      ]);

      if (classRes.success) setClasses(classRes.classes || []);
      if (assignRes.success) setAssignments(assignRes.assignments || []);
    } catch (err) {
      console.error('Failed to load student classes:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadClassesData();
  }, []);

  const handleJoinClass = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inviteCode.trim()) return;

    try {
      setJoining(true);
      const res = await api.post('/api/classes/join', { inviteCode: inviteCode.trim() });
      if (res.success) {
        showToast('Enrolled Successfully!', res.message, 'success');
        setInviteCode('');
        setJoinModalOpen(false);
        loadClassesData();
      }
    } catch (err: any) {
      showToast('Enrollment Failed', err.message || 'Invalid code or already joined', 'error');
    } finally {
      setJoining(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            My Enrolled Classes
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Access your course cohorts, assigned assessments, and instructor materials
          </p>
        </div>

        <button
          onClick={() => setJoinModalOpen(true)}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-600 text-white text-xs font-bold hover:bg-indigo-700 shadow-md shadow-indigo-600/20 transition hover:scale-105"
        >
          <Plus className="w-4 h-4" /> Join a Class
        </button>
      </div>

      {/* Classes Grid */}
      <div className="space-y-4">
        <h2 className="text-base font-bold text-slate-900">Enrolled Batches ({classes.length})</h2>

        {classes.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {classes.map((cls) => {
              const teacherName = cls.teacher?.name || 'Instructor';
              const teacherAvatar =
                cls.teacher?.avatar ||
                `https://api.dicebear.com/7.x/bottts/svg?seed=${teacherName}`;

              return (
                <div
                  key={cls._id}
                  className="bg-white rounded-3xl border border-slate-200/80 p-6 shadow-sm hover:shadow-md transition space-y-4 flex flex-col justify-between"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold uppercase text-indigo-700 bg-indigo-50 px-2.5 py-0.5 rounded-full border border-indigo-100">
                        {cls.subject}
                      </span>
                      <span className="text-[11px] font-mono text-slate-400">
                        Code: {cls.inviteCode}
                      </span>
                    </div>

                    <h3 className="font-bold text-slate-900 text-lg leading-snug">{cls.name}</h3>

                    <p className="text-xs text-slate-500 leading-relaxed line-clamp-2">
                      {cls.description || 'No description provided.'}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-600">
                    <div className="flex items-center gap-2">
                      <img
                        src={teacherAvatar}
                        alt={teacherName}
                        className="w-6 h-6 rounded-lg bg-indigo-50 border border-slate-200"
                      />
                      <span className="font-semibold text-slate-700">{teacherName}</span>
                    </div>

                    <span className="font-medium text-slate-400">Enrolled</span>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="bg-white rounded-3xl border border-slate-200 p-10 text-center space-y-3">
            <School className="w-10 h-10 text-slate-300 mx-auto" />
            <h3 className="font-bold text-slate-800 text-base">Not enrolled in any classes yet</h3>
            <p className="text-xs text-slate-500 max-w-sm mx-auto">
              Ask your teacher for their class invite code (e.g. WEB-2026) to enroll in your cohort.
            </p>
            <button
              onClick={() => setJoinModalOpen(true)}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-indigo-600 text-white text-xs font-bold hover:bg-indigo-700 transition"
            >
              Enter Invite Code
            </button>
          </div>
        )}
      </div>

      {/* Class Assigned Quizzes */}
      <div className="bg-white rounded-3xl border border-slate-200/80 p-6 sm:p-8 space-y-6 shadow-xs">
        <div>
          <h3 className="font-bold text-slate-900 text-lg">Class Quizzes & Deadlines</h3>
          <p className="text-xs text-slate-500">
            Quizzes specifically assigned by your instructors with target due dates
          </p>
        </div>

        {assignments.length > 0 ? (
          <div className="divide-y divide-slate-100">
            {assignments.map((asg) => (
              <div
                key={asg._id}
                className="py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 hover:bg-slate-50/60 p-2 rounded-2xl transition"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-bold text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded">
                      {asg.classGroup?.name}
                    </span>
                    <span className="text-xs text-slate-500">by {asg.teacher?.name}</span>
                  </div>
                  <h4 className="font-bold text-slate-900 text-sm">{asg.title}</h4>
                  <div className="flex items-center gap-4 text-xs text-slate-500">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-slate-400" /> Due:{' '}
                      {new Date(asg.dueDate).toLocaleDateString()}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-slate-400" />
                      {asg.timeLimit > 0 ? `${asg.timeLimit} mins` : 'No limit'}
                    </span>
                  </div>
                </div>

                <Link
                  to={`/student/quizzes/${asg.quiz?._id}/take?assignmentId=${asg._id}`}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-indigo-600 text-white text-xs font-bold hover:bg-indigo-700 shadow-sm transition"
                >
                  Start Assessment <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-8 text-xs text-slate-400">
            No active class assignments at this moment. You are up to date!
          </div>
        )}
      </div>

      {/* Join Class Modal */}
      <Modal
        isOpen={joinModalOpen}
        onClose={() => setJoinModalOpen(false)}
        title="Join a Class Cohort"
        maxWidth="sm"
      >
        <form onSubmit={handleJoinClass} className="space-y-4">
          <p className="text-xs text-slate-500">
            Enter the unique 6-8 character invitation code provided by your instructor.
          </p>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Class Invite Code
            </label>
            <input
              type="text"
              required
              value={inviteCode}
              onChange={(e) => setInviteCode(e.target.value.toUpperCase())}
              placeholder="e.g. WEB-2026"
              className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm font-mono uppercase tracking-widest focus:outline-none focus:ring-2 focus:ring-indigo-500/20 text-center font-bold"
            />
          </div>

          <div className="pt-2 flex justify-end gap-2">
            <button
              type="button"
              onClick={() => setJoinModalOpen(false)}
              className="px-4 py-2 rounded-xl border border-slate-200 text-xs font-semibold text-slate-700 hover:bg-slate-50 transition"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={joining}
              className="px-5 py-2 rounded-xl bg-indigo-600 text-white text-xs font-bold hover:bg-indigo-700 shadow-sm transition disabled:opacity-50"
            >
              {joining ? 'Enrolling...' : 'Join Class'}
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
};
