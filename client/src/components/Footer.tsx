import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, Sparkles, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-slate-200/80 pt-12 pb-8 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-10 border-b border-slate-100">
          {/* Brand Info */}
          <div className="md:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center text-white shadow-sm">
                <GraduationCap className="w-5 h-5" />
              </div>
              <span className="font-extrabold text-lg text-slate-900 tracking-tight">QuizRoom</span>
            </Link>
            <p className="text-slate-600 text-sm max-w-sm leading-relaxed">
              A modern, full-stack educational assessment platform empowering teachers to design interactive quizzes and helping students test knowledge and track skill mastery.
            </p>
            <div className="flex items-center gap-2 text-xs text-slate-500">
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-emerald-50 text-emerald-700 font-medium border border-emerald-200">
                <Sparkles className="w-3 h-3" /> Production-Grade Architecture
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-4">
              Explore
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-600">
              <li>
                <Link to="/student/quizzes" className="hover:text-indigo-600 transition">
                  Browse Quizzes
                </Link>
              </li>
              <li>
                <Link to="/login" className="hover:text-indigo-600 transition">
                  Student Portal
                </Link>
              </li>
              <li>
                <Link to="/login" className="hover:text-indigo-600 transition">
                  Teacher Portal
                </Link>
              </li>
            </ul>
          </div>

          {/* Subjects */}
          <div>
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-4">
              Subjects
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-600">
              <li>
                <span className="text-slate-700 font-medium">HTML5 & Web Semantics</span>
              </li>
              <li>
                <span className="text-slate-700 font-medium">Modern CSS & Grid</span>
              </li>
              <li>
                <span className="text-slate-700 font-medium">JavaScript ES6+ & Async</span>
              </li>
              <li>
                <span className="text-slate-400 text-xs">TypeScript (Coming Soon)</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} QuizRoom No. 518. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Engineered with <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" /> for educators and students
          </p>
        </div>
      </div>
    </footer>
  );
};
