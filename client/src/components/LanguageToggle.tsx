import React from 'react';
import { useLanguage } from '../context/LanguageContext.js';
import { Globe } from 'lucide-react';

interface LanguageToggleProps {
  variant?: 'compact' | 'prominent';
  className?: string;
}

export const LanguageToggle: React.FC<LanguageToggleProps> = ({
  variant = 'compact',
  className = '',
}) => {
  const { language, setLanguage } = useLanguage();

  if (variant === 'prominent') {
    return (
      <div
        className={`inline-flex items-center gap-1.5 p-1 rounded-2xl bg-white/90 backdrop-blur-md border border-slate-200 shadow-md ${className}`}
      >
        <div className="flex items-center gap-1 px-2.5 py-1 text-xs font-bold text-slate-500">
          <Globe className="w-3.5 h-3.5 text-indigo-600" />
          <span>Language / ভাষা</span>
        </div>
        <div className="flex items-center gap-1 bg-slate-100/90 p-0.5 rounded-xl">
          <button
            type="button"
            onClick={() => setLanguage('en')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
              language === 'en'
                ? 'bg-indigo-600 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
            }`}
          >
            🇬🇧 English
          </button>
          <button
            type="button"
            onClick={() => setLanguage('bn')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
              language === 'bn'
                ? 'bg-indigo-600 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
            }`}
          >
            🇧🇩 বাংলা
          </button>
        </div>
      </div>
    );
  }

  // Compact variant for Navbar and headers
  return (
    <div
      className={`inline-flex items-center bg-slate-100 p-0.5 rounded-xl border border-slate-200/80 ${className}`}
      title={language === 'en' ? 'বাংলা সংস্করণে পরিবর্তন করুন' : 'Switch to English'}
    >
      <button
        type="button"
        onClick={() => setLanguage('en')}
        className={`px-2.5 py-1 rounded-lg text-[11px] font-bold transition-all ${
          language === 'en'
            ? 'bg-white text-indigo-600 shadow-xs'
            : 'text-slate-500 hover:text-slate-900'
        }`}
      >
        EN
      </button>
      <button
        type="button"
        onClick={() => setLanguage('bn')}
        className={`px-2.5 py-1 rounded-lg text-[11px] font-bold transition-all ${
          language === 'bn'
            ? 'bg-white text-indigo-600 shadow-xs'
            : 'text-slate-500 hover:text-slate-900'
        }`}
      >
        বাংলা
      </button>
    </div>
  );
};
