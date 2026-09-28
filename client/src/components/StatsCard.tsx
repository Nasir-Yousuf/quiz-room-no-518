import React from 'react';

interface StatsCardProps {
  label: string;
  value: string | number;
  icon: React.ReactNode;
  subtitle?: string;
  trend?: string;
  colorScheme?: 'indigo' | 'emerald' | 'amber' | 'purple' | 'blue';
}

export const StatsCard: React.FC<StatsCardProps> = ({
  label,
  value,
  icon,
  subtitle,
  trend,
  colorScheme = 'indigo',
}) => {
  const iconBgs = {
    indigo: 'bg-indigo-50 text-indigo-600 border-indigo-100',
    emerald: 'bg-emerald-50 text-emerald-600 border-emerald-100',
    amber: 'bg-amber-50 text-amber-600 border-amber-100',
    purple: 'bg-purple-50 text-purple-600 border-purple-100',
    blue: 'bg-blue-50 text-blue-600 border-blue-100',
  };

  return (
    <div className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">{label}</p>
          <p className="text-2xl lg:text-3xl font-extrabold text-slate-900 mt-1 tracking-tight">
            {value}
          </p>
          {subtitle && (
            <p className="text-xs text-slate-500 mt-1.5 flex items-center gap-1">
              {subtitle}
            </p>
          )}
          {trend && (
            <span className="inline-flex items-center text-xs font-medium text-emerald-600 mt-1.5">
              {trend}
            </span>
          )}
        </div>
        <div
          className={`w-12 h-12 rounded-xl flex items-center justify-center border shrink-0 transition-transform group-hover:scale-105 ${iconBgs[colorScheme]}`}
        >
          {icon}
        </div>
      </div>
    </div>
  );
};
