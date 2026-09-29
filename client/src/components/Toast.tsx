import React from 'react';
import { useNotification } from '../context/NotificationContext.js';
import { CheckCircle2, AlertCircle, Info, AlertTriangle, X } from 'lucide-react';

export const ToastContainer: React.FC = () => {
  const { toasts, removeToast } = useNotification();

  if (toasts.length === 0) return null;

  return (
    <div className="fixed bottom-4 sm:bottom-5 right-4 sm:right-5 left-4 sm:left-auto z-50 flex flex-col gap-2.5 max-w-sm sm:w-full pointer-events-none">
      {toasts.map((toast) => {
        let bgStyle = 'bg-white border-slate-200 text-slate-800';
        let icon = <Info className="w-5 h-5 text-indigo-500" />;

        if (toast.type === 'success') {
          bgStyle = 'bg-white border-emerald-200 text-slate-800';
          icon = <CheckCircle2 className="w-5 h-5 text-emerald-500" />;
        } else if (toast.type === 'error') {
          bgStyle = 'bg-white border-rose-200 text-slate-800';
          icon = <AlertCircle className="w-5 h-5 text-rose-500" />;
        } else if (toast.type === 'warning') {
          bgStyle = 'bg-white border-amber-200 text-slate-800';
          icon = <AlertTriangle className="w-5 h-5 text-amber-500" />;
        }

        return (
          <div
            key={toast.id}
            className={`pointer-events-auto flex items-start gap-3 p-4 rounded-xl border shadow-lg shadow-slate-200/50 transition-all transform animate-in slide-in-from-bottom-2 ${bgStyle}`}
          >
            <div className="shrink-0 mt-0.5">{icon}</div>
            <div className="flex-1 min-w-0">
              <h4 className="text-sm font-semibold text-slate-900">{toast.title}</h4>
              <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">{toast.message}</p>
            </div>
            <button
              onClick={() => removeToast(toast.id)}
              className="text-slate-400 hover:text-slate-600 p-0.5 rounded transition"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        );
      })}
    </div>
  );
};
