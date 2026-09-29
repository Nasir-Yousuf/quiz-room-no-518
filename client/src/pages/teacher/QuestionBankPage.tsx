import React, { useState, useEffect } from 'react';
import { api } from '../../api/client.js';
import { IQuestionBankItem, DifficultyLevel, QuestionType } from '../../types/index.js';
import { SubjectBadge, DifficultyBadge } from '../../components/Badge.js';
import { Modal } from '../../components/Modal.js';
import { useNotification } from '../../context/NotificationContext.js';
import {
  Layers,
  Plus,
  Trash2,
  Search,
  CheckCircle2,
  Code,
  Sparkles,
} from 'lucide-react';

export const QuestionBankPage: React.FC = () => {
  const [questions, setQuestions] = useState<IQuestionBankItem[]>([]);
  const [topics, setTopics] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedSubject, setSelectedSubject] = useState('All');
  const [selectedTopic, setSelectedTopic] = useState('All');
  const [selectedDifficulty, setSelectedDifficulty] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const [addModalOpen, setAddModalOpen] = useState(false);
  const [newSubject, setNewSubject] = useState('HTML');
  const [newTopic, setNewTopic] = useState('Semantics');
  const [newDifficulty, setNewDifficulty] = useState<DifficultyLevel>('beginner');
  const [newType, setNewType] = useState<QuestionType>('multiple-choice');
  const [newQuestionText, setNewQuestionText] = useState('');
  const [newOptions, setNewOptions] = useState(['', '', '', '']);
  const [newCorrectAnswer, setNewCorrectAnswer] = useState('');
  const [newExplanation, setNewExplanation] = useState('');
  const [newCodeSnippet, setNewCodeSnippet] = useState('');
  const [newPoints, setNewPoints] = useState(1);
  const [saving, setSaving] = useState(false);

  const { showToast } = useNotification();

  const fetchBank = async () => {
    try {
      setLoading(true);
      const params = new URLSearchParams();
      if (selectedSubject !== 'All') params.append('subject', selectedSubject);
      if (selectedTopic !== 'All') params.append('topic', selectedTopic);
      if (selectedDifficulty !== 'All') params.append('difficulty', selectedDifficulty);
      if (searchTerm.trim()) params.append('search', searchTerm.trim());

      const res = await api.get(`/api/question-bank?${params.toString()}`);
      if (res.success) {
        setQuestions(res.questions || []);
        setTopics(res.topics || []);
      }
    } catch (err) {
      console.error('Failed to load question bank:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBank();
  }, [selectedSubject, selectedTopic, selectedDifficulty, searchTerm]);

  const handleDelete = async (id: string) => {
    if (!window.confirm('Remove this question from the Question Bank?')) return;
    try {
      const res = await api.delete(`/api/question-bank/${id}`);
      if (res.success) {
        showToast('Removed', 'Question removed from bank', 'info');
        setQuestions((prev) => prev.filter((q) => q._id !== id));
      }
    } catch (err: any) {
      showToast('Error', err.message || 'Failed to delete question', 'error');
    }
  };

  const handleCreateQuestion = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newQuestionText.trim() || !newCorrectAnswer.trim()) {
      showToast('Validation Error', 'Question text and correct answer are required.', 'error');
      return;
    }

    try {
      setSaving(true);
      const res = await api.post('/api/question-bank', {
        subject: newSubject,
        topic: newTopic,
        difficulty: newDifficulty,
        type: newType,
        questionText: newQuestionText,
        options: newType === 'true-false' ? ['True', 'False'] : newOptions,
        correctAnswer: newCorrectAnswer,
        explanation: newExplanation,
        codeSnippet: newCodeSnippet,
        points: newPoints,
      });

      if (res.success) {
        showToast('Success', 'Question added to Question Bank', 'success');
        setAddModalOpen(false);
        setNewQuestionText('');
        setNewOptions(['', '', '', '']);
        setNewCorrectAnswer('');
        setNewExplanation('');
        setNewCodeSnippet('');
        fetchBank();
      }
    } catch (err: any) {
      showToast('Error', err.message || 'Failed to save question', 'error');
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Reusable Question Bank
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Store and organize high-yield assessment items to reuse across multiple quizzes
          </p>
        </div>

        <button
          onClick={() => setAddModalOpen(true)}
          className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-600 text-white text-xs font-bold hover:bg-indigo-700 shadow-md shadow-indigo-600/20 transition w-full sm:w-auto"
        >
          <Plus className="w-4 h-4" /> Add Question to Bank
        </button>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-white rounded-2xl border border-slate-200/80 p-3.5 sm:p-4 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="flex flex-wrap items-center gap-2">
          {/* Subject Filter */}
          <select
            value={selectedSubject}
            onChange={(e) => setSelectedSubject(e.target.value)}
            className="flex-1 sm:flex-initial px-3 py-2 rounded-xl border border-slate-200 text-xs font-semibold text-slate-700 bg-white focus:outline-none"
          >
            <option value="All">All Subjects</option>
            <option value="HTML">HTML</option>
            <option value="CSS">CSS</option>
            <option value="JavaScript">JavaScript</option>
          </select>

          {/* Difficulty Filter */}
          <select
            value={selectedDifficulty}
            onChange={(e) => setSelectedDifficulty(e.target.value)}
            className="flex-1 sm:flex-initial px-3 py-2 rounded-xl border border-slate-200 text-xs font-semibold text-slate-700 bg-white focus:outline-none capitalize"
          >
            <option value="All">All Difficulties</option>
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="advanced">Advanced</option>
          </select>

          {/* Topic Filter */}
          {topics.length > 0 && (
            <select
              value={selectedTopic}
              onChange={(e) => setSelectedTopic(e.target.value)}
              className="flex-1 sm:flex-initial px-3 py-2 rounded-xl border border-slate-200 text-xs font-semibold text-slate-700 bg-white focus:outline-none"
            >
              <option value="All">All Topics</option>
              {topics.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
          )}
        </div>

        <div className="relative w-full sm:w-64">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search questions..."
            className="w-full pl-9 pr-3 py-2 text-xs rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
          />
        </div>
      </div>

      {/* Questions Grid */}
      {loading ? (
        <div className="text-center py-16">
          <div className="w-8 h-8 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin mx-auto mb-2" />
          <p className="text-xs text-slate-400">Loading Question Bank...</p>
        </div>
      ) : questions.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {questions.map((q) => (
            <div
              key={q._id}
              className="bg-white rounded-3xl border border-slate-200/80 p-5 sm:p-6 shadow-sm hover:shadow-md transition space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <SubjectBadge subject={q.subject} />
                    <span className="text-[10px] font-bold text-slate-600 bg-slate-100 px-2 py-0.5 rounded">
                      {q.topic}
                    </span>
                    <DifficultyBadge difficulty={q.difficulty} />
                  </div>
                  <button
                    onClick={() => handleDelete(q._id)}
                    className="p-1 rounded-lg text-slate-400 hover:text-rose-600 hover:bg-rose-50 transition"
                    title="Remove question"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>

                <h3 className="font-bold text-slate-900 text-sm leading-snug">{q.questionText}</h3>

                {q.codeSnippet && (
                  <div className="p-3 rounded-xl bg-slate-900 text-slate-100 font-mono text-xs overflow-x-auto">
                    <pre>{q.codeSnippet}</pre>
                  </div>
                )}

                <div className="space-y-1.5 pt-1">
                  {q.options.map((opt, i) => {
                    const isCorrect = opt === q.correctAnswer;
                    return (
                      <div
                        key={i}
                        className={`text-xs px-3 py-1.5 rounded-xl border flex items-center justify-between ${
                          isCorrect
                            ? 'bg-emerald-50/70 border-emerald-300 text-emerald-950 font-bold'
                            : 'bg-slate-50 border-slate-200 text-slate-600'
                        }`}
                      >
                        <span>{opt}</span>
                        {isCorrect && (
                          <span className="text-[10px] text-emerald-700 font-bold uppercase">
                            Correct
                          </span>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              {q.explanation && (
                <div className="pt-3 border-t border-slate-100 text-[11px] text-slate-500 leading-relaxed">
                  <span className="font-bold text-slate-700">Explanation:</span> {q.explanation}
                </div>
              )}
            </div>
          ))}
        </div>
      ) : (
        <div className="bg-white rounded-3xl border border-slate-200 p-12 text-center space-y-3">
          <Layers className="w-10 h-10 text-slate-300 mx-auto" />
          <h3 className="font-bold text-slate-800 text-base">No questions in bank</h3>
          <p className="text-xs text-slate-500 max-w-sm mx-auto">
            Add reusable questions to your bank so you can quickly import them when creating quizzes.
          </p>
          <button
            onClick={() => setAddModalOpen(true)}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-indigo-600 text-white text-xs font-bold hover:bg-indigo-700 transition"
          >
            Add First Question
          </button>
        </div>
      )}

      {/* Add Question to Bank Modal */}
      <Modal
        isOpen={addModalOpen}
        onClose={() => setAddModalOpen(false)}
        title="Add Question to Question Bank"
        maxWidth="lg"
      >
        <form onSubmit={handleCreateQuestion} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Subject</label>
              <select
                value={newSubject}
                onChange={(e) => setNewSubject(e.target.value)}
                className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs font-semibold text-slate-700 bg-white"
              >
                <option value="HTML">HTML</option>
                <option value="CSS">CSS</option>
                <option value="JavaScript">JavaScript</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Topic</label>
              <input
                type="text"
                required
                value={newTopic}
                onChange={(e) => setNewTopic(e.target.value)}
                placeholder="e.g. Flexbox"
                className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs font-semibold"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Difficulty</label>
              <select
                value={newDifficulty}
                onChange={(e) => setNewDifficulty(e.target.value as any)}
                className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs font-semibold text-slate-700 bg-white capitalize"
              >
                <option value="beginner">Beginner</option>
                <option value="intermediate">Intermediate</option>
                <option value="advanced">Advanced</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Question Text</label>
            <input
              type="text"
              required
              value={newQuestionText}
              onChange={(e) => setNewQuestionText(e.target.value)}
              placeholder="Question prompt..."
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm font-semibold"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
              Code Snippet (Optional)
            </label>
            <textarea
              rows={2}
              value={newCodeSnippet}
              onChange={(e) => setNewCodeSnippet(e.target.value)}
              placeholder="Code example or snippet..."
              className="w-full px-3 py-2 rounded-xl border border-slate-200 font-mono text-xs bg-slate-900 text-slate-100"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-xs font-bold text-slate-700 uppercase">
              Answer Choices (Fill choices & select correct answer)
            </label>
            {newOptions.map((opt, i) => (
              <div key={i} className="flex items-center gap-2">
                <input
                  type="radio"
                  name="correctBankAnswer"
                  checked={newCorrectAnswer === opt && opt !== ''}
                  onChange={() => setNewCorrectAnswer(opt)}
                  className="text-indigo-600 focus:ring-indigo-500"
                />
                <input
                  type="text"
                  required
                  value={opt}
                  onChange={(e) => {
                    const updated = [...newOptions];
                    const old = updated[i];
                    updated[i] = e.target.value;
                    if (newCorrectAnswer === old) setNewCorrectAnswer(e.target.value);
                    setNewOptions(updated);
                  }}
                  placeholder={`Choice ${String.fromCharCode(65 + i)}`}
                  className="flex-1 px-3 py-1.5 rounded-xl border border-slate-200 text-xs"
                />
              </div>
            ))}
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
              Explanation for Review
            </label>
            <input
              type="text"
              value={newExplanation}
              onChange={(e) => setNewExplanation(e.target.value)}
              placeholder="Why this answer is correct..."
              className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs"
            />
          </div>

          <div className="pt-2 flex justify-end gap-2">
            <button
              type="button"
              onClick={() => setAddModalOpen(false)}
              className="px-4 py-2 rounded-xl border border-slate-200 text-xs font-semibold text-slate-700 hover:bg-slate-50 transition"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={saving}
              className="px-5 py-2 rounded-xl bg-indigo-600 text-white text-xs font-bold hover:bg-indigo-700 transition disabled:opacity-50"
            >
              {saving ? 'Saving...' : 'Add to Bank'}
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
};
