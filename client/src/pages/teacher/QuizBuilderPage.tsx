import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { api } from '../../api/client.js';
import { IQuestion, QuestionType, DifficultyLevel } from '../../types/index.js';
import { useNotification } from '../../context/NotificationContext.js';
import { Modal } from '../../components/Modal.js';
import {
  Plus,
  Trash2,
  Copy,
  ChevronUp,
  ChevronDown,
  Save,
  CheckCircle2,
  Code,
  Layers,
  Sparkles,
  ArrowLeft,
  HelpCircle,
} from 'lucide-react';

export const QuizBuilderPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const isEditing = Boolean(id);
  const navigate = useNavigate();
  const { showToast } = useNotification();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [subject, setSubject] = useState('HTML');
  const [difficulty, setDifficulty] = useState<DifficultyLevel>('beginner');
  const [timeLimit, setTimeLimit] = useState(15);
  const [passingPercentage, setPassingPercentage] = useState(70);
  const [maxAttempts, setMaxAttempts] = useState(0);
  const [randomizeQuestions, setRandomizeQuestions] = useState(false);
  const [randomizeAnswers, setRandomizeAnswers] = useState(false);
  const [showCorrectAnswers, setShowCorrectAnswers] = useState(true);
  const [status, setStatus] = useState<'draft' | 'published'>('published');

  const [questions, setQuestions] = useState<IQuestion[]>([
    {
      questionText: '',
      type: 'multiple-choice',
      options: ['', '', '', ''],
      correctAnswer: '',
      explanation: '',
      codeSnippet: '',
      points: 1,
    },
  ]);

  const [bankModalOpen, setBankModalOpen] = useState(false);
  const [bankQuestions, setBankQuestions] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);

  // If editing, load existing quiz
  useEffect(() => {
    if (isEditing) {
      const loadQuiz = async () => {
        try {
          setLoading(true);
          const res = await api.get(`/api/quizzes/${id}/editor`);
          if (res.success && res.quiz) {
            const q = res.quiz;
            setTitle(q.title);
            setDescription(q.description || '');
            setSubject(q.subject);
            setDifficulty(q.difficulty);
            setTimeLimit(q.timeLimit || 0);
            setPassingPercentage(q.passingPercentage || 70);
            setMaxAttempts(q.maxAttempts || 0);
            setRandomizeQuestions(Boolean(q.randomizeQuestions));
            setRandomizeAnswers(Boolean(q.randomizeAnswers));
            setShowCorrectAnswers(q.showCorrectAnswers ?? true);
            setStatus(q.status === 'published' ? 'published' : 'draft');
            setQuestions(q.questions || []);
          }
        } catch (err: any) {
          showToast('Error', err.message || 'Failed to load quiz details', 'error');
          navigate('/teacher/quizzes');
        } finally {
          setLoading(false);
        }
      };
      loadQuiz();
    }
  }, [id, isEditing, navigate, showToast]);

  const addQuestion = (type: QuestionType = 'multiple-choice') => {
    const newQ: IQuestion = {
      questionText: '',
      type,
      options: type === 'true-false' ? ['True', 'False'] : ['', '', '', ''],
      correctAnswer: type === 'true-false' ? 'True' : '',
      explanation: '',
      codeSnippet: '',
      points: 1,
    };
    setQuestions((prev) => [...prev, newQ]);
  };

  const removeQuestion = (idx: number) => {
    if (questions.length <= 1) {
      showToast('Notice', 'A quiz must contain at least one question.', 'warning');
      return;
    }
    setQuestions((prev) => prev.filter((_, i) => i !== idx));
  };

  const duplicateQuestion = (idx: number) => {
    const target = questions[idx];
    const clone: IQuestion = {
      ...target,
      options: [...target.options],
    };
    const updated = [...questions];
    updated.splice(idx + 1, 0, clone);
    setQuestions(updated);
  };

  const moveQuestion = (idx: number, direction: 'up' | 'down') => {
    const targetIdx = direction === 'up' ? idx - 1 : idx + 1;
    if (targetIdx < 0 || targetIdx >= questions.length) return;
    const updated = [...questions];
    const temp = updated[idx];
    updated[idx] = updated[targetIdx];
    updated[targetIdx] = temp;
    setQuestions(updated);
  };

  const updateQuestionField = (idx: number, field: keyof IQuestion, value: any) => {
    setQuestions((prev) => {
      const copy = [...prev];
      copy[idx] = { ...copy[idx], [field]: value };
      return copy;
    });
  };

  const updateOptionText = (qIdx: number, optIdx: number, text: string) => {
    setQuestions((prev) => {
      const copy = [...prev];
      const opts = [...copy[qIdx].options];
      const oldVal = opts[optIdx];
      opts[optIdx] = text;
      // If this option was selected as correct answer, keep correct answer in sync
      if (copy[qIdx].correctAnswer === oldVal) {
        copy[qIdx].correctAnswer = text;
      }
      copy[qIdx].options = opts;
      return copy;
    });
  };

  // Open Bank modal & fetch questions
  const openBankModal = async () => {
    try {
      const res = await api.get(`/api/question-bank?subject=${subject}`);
      if (res.success) {
        setBankQuestions(res.questions || []);
      }
      setBankModalOpen(true);
    } catch (err) {
      showToast('Error', 'Failed to load question bank', 'error');
    }
  };

  const importFromBank = (bankQ: any) => {
    const imported: IQuestion = {
      questionText: bankQ.questionText,
      type: bankQ.type,
      options: [...bankQ.options],
      correctAnswer: bankQ.correctAnswer,
      explanation: bankQ.explanation || '',
      codeSnippet: bankQ.codeSnippet || '',
      points: bankQ.points || 1,
    };
    setQuestions((prev) => [...prev, imported]);
    showToast('Imported', 'Question added to quiz', 'success');
  };

  const handleSave = async (publishNow = false) => {
    if (!title.trim()) {
      showToast('Validation Error', 'Quiz title is required.', 'error');
      return;
    }

    // Validate questions
    for (let i = 0; i < questions.length; i++) {
      const q = questions[i];
      if (!q.questionText.trim()) {
        showToast('Validation Error', `Question #${i + 1} has empty text.`, 'error');
        return;
      }
      if (!q.correctAnswer || !q.correctAnswer.trim()) {
        showToast('Validation Error', `Question #${i + 1} does not have a correct answer marked.`, 'error');
        return;
      }
    }

    try {
      setSaving(true);
      const payload = {
        title,
        description,
        subject,
        difficulty,
        timeLimit: Number(timeLimit) || 0,
        passingPercentage: Number(passingPercentage) || 70,
        maxAttempts: Number(maxAttempts) || 0,
        randomizeQuestions,
        randomizeAnswers,
        showCorrectAnswers,
        status: publishNow ? 'published' : status,
        questions,
      };

      if (isEditing) {
        await api.patch(`/api/quizzes/${id}`, payload);
        showToast('Success', 'Quiz updated successfully.', 'success');
      } else {
        await api.post('/api/quizzes', payload);
        showToast('Success', 'Quiz created successfully.', 'success');
      }
      navigate('/teacher/quizzes');
    } catch (err: any) {
      showToast('Error', err.message || 'Failed to save quiz', 'error');
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 space-y-8">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <button
            onClick={() => navigate('/teacher/quizzes')}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-slate-800 transition py-1"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Back to Quizzes
          </button>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            {isEditing ? 'Edit Quiz Assessment' : 'Author New Quiz'}
          </h1>
        </div>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 w-full sm:w-auto">
          <button
            type="button"
            onClick={openBankModal}
            className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-50 text-xs font-bold transition"
          >
            <Layers className="w-4 h-4 text-indigo-600" /> Import from Bank
          </button>
          <button
            type="button"
            disabled={saving}
            onClick={() => handleSave(false)}
            className="inline-flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-xl bg-indigo-600 text-white text-xs font-bold hover:bg-indigo-700 shadow-md shadow-indigo-600/20 transition disabled:opacity-50"
          >
            <Save className="w-4 h-4" /> {saving ? 'Saving...' : 'Save Quiz'}
          </button>
        </div>
      </div>

      {/* Quiz Information Card */}
      <div className="bg-white rounded-3xl border border-slate-200/80 p-6 sm:p-8 space-y-6 shadow-xs">
        <h3 className="text-base font-bold text-slate-900">Quiz Settings & Metadata</h3>

        <div className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Quiz Title *
            </label>
            <input
              type="text"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="e.g. JavaScript Closures & Scope Deep Dive"
              className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Description
            </label>
            <textarea
              rows={2}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Brief summary of concepts evaluated in this assessment..."
              className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                Subject
              </label>
              <select
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs font-semibold text-slate-700 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
              >
                <option value="HTML">HTML</option>
                <option value="CSS">CSS</option>
                <option value="JavaScript">JavaScript</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                Difficulty Level
              </label>
              <select
                value={difficulty}
                onChange={(e) => setDifficulty(e.target.value as DifficultyLevel)}
                className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs font-semibold text-slate-700 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20 capitalize"
              >
                <option value="beginner">Beginner</option>
                <option value="intermediate">Intermediate</option>
                <option value="advanced">Advanced</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                Status
              </label>
              <select
                value={status}
                onChange={(e) => setStatus(e.target.value as any)}
                className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs font-semibold text-slate-700 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
              >
                <option value="published">Published</option>
                <option value="draft">Draft (Private)</option>
              </select>
            </div>
          </div>

          {/* Time & Attempt Limits */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                Time Limit (Minutes)
              </label>
              <input
                type="number"
                min={0}
                value={timeLimit}
                onChange={(e) => setTimeLimit(Number(e.target.value))}
                placeholder="0 = unlimited"
                className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
              />
              <span className="text-[10px] text-slate-400">0 for untimed test</span>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                Passing Percentage (%)
              </label>
              <input
                type="number"
                min={1}
                max={100}
                value={passingPercentage}
                onChange={(e) => setPassingPercentage(Number(e.target.value))}
                className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
              />
              <span className="text-[10px] text-slate-400">Typically 70%</span>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                Max Attempts Allowed
              </label>
              <input
                type="number"
                min={0}
                value={maxAttempts}
                onChange={(e) => setMaxAttempts(Number(e.target.value))}
                placeholder="0 = unlimited"
                className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
              />
              <span className="text-[10px] text-slate-400">0 for unlimited attempts</span>
            </div>
          </div>

          {/* Toggles */}
          <div className="flex flex-wrap items-center gap-6 pt-3 text-xs text-slate-700 font-semibold border-t border-slate-100">
            <label className="inline-flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={randomizeQuestions}
                onChange={(e) => setRandomizeQuestions(e.target.checked)}
                className="rounded text-indigo-600 focus:ring-indigo-500"
              />
              Randomize Question Order
            </label>

            <label className="inline-flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={showCorrectAnswers}
                onChange={(e) => setShowCorrectAnswers(e.target.checked)}
                className="rounded text-indigo-600 focus:ring-indigo-500"
              />
              Show Explanations & Review After Submit
            </label>
          </div>
        </div>
      </div>

      {/* Questions Section */}
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <h2 className="text-xl font-extrabold text-slate-900 tracking-tight">
              Questions ({questions.length})
            </h2>
            <p className="text-xs text-slate-500">
              Build your assessment items. Click the letter button next to an option to designate it as the correct answer.
            </p>
          </div>

          <div className="flex items-center gap-2 flex-wrap">
            <button
              type="button"
              onClick={() => addQuestion('multiple-choice')}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-indigo-50 text-indigo-700 border border-indigo-200 text-xs font-bold hover:bg-indigo-100 transition shadow-xs"
            >
              <Plus className="w-3.5 h-3.5" /> Multiple Choice
            </button>
            <button
              type="button"
              onClick={() => addQuestion('true-false')}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-100 text-slate-700 text-xs font-bold hover:bg-slate-200 transition"
            >
              <Plus className="w-3.5 h-3.5" /> True / False
            </button>
          </div>
        </div>

        {/* Dynamic Questions List */}
        <div className="space-y-6">
          {questions.map((q, qIdx) => (
            <div
              key={qIdx}
              className="bg-white rounded-3xl border border-slate-200/80 p-5 sm:p-8 space-y-5 shadow-xs"
            >
              {/* Question Header & Order Buttons */}
              <div className="flex items-center justify-between gap-4 pb-3 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <span className="w-7 h-7 rounded-xl bg-indigo-600 text-white font-bold text-xs flex items-center justify-center shrink-0">
                    {qIdx + 1}
                  </span>
                  <span className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                    {q.type === 'true-false' ? 'True / False' : 'Multiple Choice'}
                  </span>
                </div>

                <div className="flex items-center gap-1">
                  <button
                    type="button"
                    onClick={() => moveQuestion(qIdx, 'up')}
                    disabled={qIdx === 0}
                    className="p-1.5 rounded-lg hover:bg-slate-100 text-slate-500 disabled:opacity-30"
                    title="Move Up"
                  >
                    <ChevronUp className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    onClick={() => moveQuestion(qIdx, 'down')}
                    disabled={qIdx === questions.length - 1}
                    className="p-1.5 rounded-lg hover:bg-slate-100 text-slate-500 disabled:opacity-30"
                    title="Move Down"
                  >
                    <ChevronDown className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    onClick={() => duplicateQuestion(qIdx)}
                    className="p-1.5 rounded-lg hover:bg-slate-100 text-slate-500"
                    title="Duplicate Question"
                  >
                    <Copy className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    onClick={() => removeQuestion(qIdx)}
                    className="p-1.5 rounded-lg hover:bg-rose-50 text-rose-500"
                    title="Delete Question"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Question Text */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Question Text *
                </label>
                <input
                  type="text"
                  required
                  value={q.questionText}
                  onChange={(e) => updateQuestionField(qIdx, 'questionText', e.target.value)}
                  placeholder="e.g. Which CSS unit is relative to the font-size of the root element?"
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
                />
              </div>

              {/* Optional Code Snippet */}
              <div>
                <label className="block text-[11px] font-bold text-slate-600 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                  <Code className="w-3.5 h-3.5 text-slate-400" /> Code Snippet (Optional)
                </label>
                <textarea
                  rows={2}
                  value={q.codeSnippet || ''}
                  onChange={(e) => updateQuestionField(qIdx, 'codeSnippet', e.target.value)}
                  placeholder="Paste syntax code or HTML/CSS tags if question evaluates code snippet..."
                  className="w-full px-4 py-2 rounded-xl border border-slate-200 font-mono text-xs focus:outline-none focus:ring-2 focus:ring-indigo-500/20 bg-slate-900 text-slate-100"
                />
              </div>

              {/* Options */}
              <div className="space-y-2.5">
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                  Answer Choices (Select radio button for Correct Answer)
                </label>

                {q.options.map((opt, optIdx) => {
                  const letter = String.fromCharCode(65 + optIdx);
                  const isCorrect = q.correctAnswer === opt && opt !== '';

                  return (
                    <div key={optIdx} className="flex items-center gap-2.5 sm:gap-3">
                      <button
                        type="button"
                        onClick={() => updateQuestionField(qIdx, 'correctAnswer', opt)}
                        className={`w-8 h-8 rounded-xl flex items-center justify-center text-xs font-bold border transition shrink-0 ${
                          isCorrect
                            ? 'bg-emerald-600 text-white border-emerald-600 shadow-xs'
                            : 'bg-white border-slate-200 text-slate-500 hover:border-slate-300'
                        }`}
                        title="Mark as correct answer"
                      >
                        {letter}
                      </button>

                      <input
                        type="text"
                        value={opt}
                        onChange={(e) => updateOptionText(qIdx, optIdx, e.target.value)}
                        placeholder={`Choice ${letter}...`}
                        className={`flex-1 px-3.5 sm:px-4 py-2 rounded-xl border text-sm transition focus:outline-none ${
                          isCorrect
                            ? 'border-emerald-500 bg-emerald-50/30 text-emerald-950 font-bold ring-1 ring-emerald-500'
                            : 'border-slate-200 bg-white'
                        }`}
                      />
                    </div>
                  );
                })}
              </div>

              {/* Explanation & Points */}
              <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 pt-2">
                <div className="sm:col-span-3">
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-indigo-600" /> Explanation for Review (Helps students learn)
                  </label>
                  <input
                    type="text"
                    value={q.explanation || ''}
                    onChange={(e) => updateQuestionField(qIdx, 'explanation', e.target.value)}
                    placeholder="e.g. rem refers to root em, which adapts to html tag base font-size."
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Points
                  </label>
                  <input
                    type="number"
                    min={1}
                    value={q.points || 1}
                    onChange={(e) =>
                      updateQuestionField(qIdx, 'points', Math.max(1, Number(e.target.value)))
                    }
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs font-bold focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom add buttons */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 py-4">
          <button
            type="button"
            onClick={() => addQuestion('multiple-choice')}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-2xl bg-white border border-slate-200 text-slate-800 text-xs font-bold hover:bg-slate-50 transition shadow-xs"
          >
            <Plus className="w-4 h-4 text-indigo-600" /> Add Another Multiple Choice
          </button>
          <button
            type="button"
            onClick={() => addQuestion('true-false')}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-2xl bg-white border border-slate-200 text-slate-800 text-xs font-bold hover:bg-slate-50 transition shadow-xs"
          >
            <Plus className="w-4 h-4 text-slate-500" /> Add True / False Question
          </button>
        </div>
      </div>

      {/* Import from Question Bank Modal */}
      <Modal
        isOpen={bankModalOpen}
        onClose={() => setBankModalOpen(false)}
        title="Import from Question Bank"
        maxWidth="xl"
      >
        <div className="space-y-4 max-h-96 overflow-y-auto pr-1">
          {bankQuestions.length > 0 ? (
            bankQuestions.map((bq) => (
              <div
                key={bq._id}
                className="p-4 rounded-2xl border border-slate-200 bg-slate-50 flex items-start justify-between gap-4"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-bold text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded">
                      {bq.topic || 'General'}
                    </span>
                    <span className="text-[10px] uppercase font-semibold text-slate-400">
                      {bq.difficulty}
                    </span>
                  </div>
                  <h4 className="font-bold text-slate-900 text-xs">{bq.questionText}</h4>
                  <p className="text-[11px] text-slate-500">Correct: {bq.correctAnswer}</p>
                </div>

                <button
                  type="button"
                  onClick={() => importFromBank(bq)}
                  className="px-3 py-1.5 rounded-xl bg-indigo-600 text-white text-xs font-bold hover:bg-indigo-700 transition shrink-0"
                >
                  Import
                </button>
              </div>
            ))
          ) : (
            <div className="text-center py-8 text-xs text-slate-400">
              No saved questions found in your bank for {subject}.
            </div>
          )}
        </div>
      </Modal>
    </div>
  );
};
