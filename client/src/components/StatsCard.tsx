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
    <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
      <div className="flex items-start sm:items-center justify-between gap-2">
        <div className="min-w-0 flex-1">
          <p className="text-[10px] sm:text-xs font-semibold text-slate-500 uppercase tracking-wider truncate">{label}</p>
          <p className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-slate-900 mt-0.5 sm:mt-1 tracking-tight truncate">
            {value}
          </p>
          {subtitle && (
            <p className="text-[10px] sm:text-xs text-slate-500 mt-1 sm:mt-1.5 truncate">
              {subtitle}
            </p>
          )}
          {trend && (
            <span className="inline-flex items-center text-[10px] sm:text-xs font-medium text-emerald-600 mt-1">
              {trend}
            </span>
          )}
        </div>
        <div
          className={`w-9 h-9 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center border shrink-0 transition-transform group-hover:scale-105 [&>svg]:w-4 [&>svg]:h-4 sm:[&>svg]:w-6 sm:[&>svg]:h-6 ${iconBgs[colorScheme]}`}
        >
          {icon}
        </div>
      </div>
    </div>
  );
};
