import React from 'react';
import { DifficultyLevel, QuizStatus } from '../types/index.js';

export const SubjectBadge: React.FC<{ subject: string; className?: string }> = ({
  subject,
  className = '',
}) => {
  let color = 'bg-indigo-50 text-indigo-700 border-indigo-200';

  if (subject === 'HTML') {
    color = 'bg-orange-50 text-orange-700 border-orange-200';
  } else if (subject === 'CSS') {
    color = 'bg-sky-50 text-sky-700 border-sky-200';
  } else if (subject === 'JavaScript') {
    color = 'bg-amber-50 text-amber-800 border-amber-200';
  }

  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold border ${color} ${className}`}
    >
      {subject}
    </span>
  );
};

export const DifficultyBadge: React.FC<{ difficulty: DifficultyLevel; className?: string }> = ({
  difficulty,
  className = '',
}) => {
  let color = 'bg-emerald-50 text-emerald-700 border-emerald-200';

  if (difficulty === 'intermediate') {
    color = 'bg-blue-50 text-blue-700 border-blue-200';
  } else if (difficulty === 'advanced') {
    color = 'bg-purple-50 text-purple-700 border-purple-200';
  }

  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border capitalize ${color} ${className}`}
    >
      {difficulty}
    </span>
  );
};

export const StatusBadge: React.FC<{ status: QuizStatus; className?: string }> = ({
  status,
  className = '',
}) => {
  let color = 'bg-slate-100 text-slate-700 border-slate-200';

  if (status === 'published') {
    color = 'bg-emerald-50 text-emerald-700 border-emerald-200';
  } else if (status === 'archived') {
    color = 'bg-rose-50 text-rose-700 border-rose-200';
  }

  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold border capitalize ${color} ${className}`}
    >
      {status}
    </span>
  );
};
