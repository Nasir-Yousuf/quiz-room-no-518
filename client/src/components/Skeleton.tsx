import React from 'react';

export const Skeleton: React.FC<{ className?: string }> = ({ className = 'h-4 w-full' }) => {
  return (
    <div
      className={`animate-pulse bg-slate-200 rounded-lg ${className}`}
      aria-hidden="true"
    />
  );
};

export const QuizCardSkeleton: React.FC = () => {
  return (
    <div className="bg-white rounded-2xl p-6 border border-slate-200 space-y-4">
      <div className="flex gap-2">
        <Skeleton className="h-5 w-16 rounded-full" />
        <Skeleton className="h-5 w-20 rounded-full" />
      </div>
      <Skeleton className="h-6 w-3/4" />
      <Skeleton className="h-12 w-full" />
      <div className="flex justify-between items-center pt-3 border-t border-slate-100">
        <Skeleton className="h-4 w-24" />
        <Skeleton className="h-9 w-28 rounded-xl" />
      </div>
    </div>
  );
};
