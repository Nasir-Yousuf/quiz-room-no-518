import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext.js';
import { useLanguage } from '../context/LanguageContext.js';
import { LanguageToggle } from '../components/LanguageToggle.js';
import {
  Sparkles,
  ArrowRight,
  BookOpen,
  Share2,
  Trophy,
  CheckCircle2,
  Code2,
  Palette,
  FileCode,
  ShieldCheck,
  Zap,
  BarChart2,
  Users,
} from 'lucide-react';

export const LandingPage: React.FC = () => {
  const { user, demoLogin } = useAuth();
  const { t, language } = useLanguage();
  const navigate = useNavigate();

  const handleDemoAccess = async (role: 'teacher' | 'student') => {
    try {
      await demoLogin(role);
      navigate(role === 'teacher' ? '/teacher/dashboard' : '/student/dashboard');
    } catch (err) {
      navigate('/login');
    }
  };

  return (
    <div className="space-y-24 pb-20 overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-8 lg:pt-16">
        {/* Glow backgrounds */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-indigo-300/30 to-violet-400/20 rounded-full blur-3xl pointer-events-none -z-10" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          {/* Prominent Language Switcher at Hero top */}
          <div className="flex justify-center">
            <LanguageToggle variant="prominent" />
          </div>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-200/80 text-indigo-700 text-xs font-semibold shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-indigo-600 animate-spin" />
            <span>{t('landing.badge', 'Interactive Educational Assessment Platform')}</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-slate-900 tracking-tight leading-[1.1]">
            {t('landing.heroTitle1', 'Learn. Test.')} <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-indigo-500 to-purple-600">
              {t('landing.heroTitle2', 'Improve.')}
            </span>
          </h1>

          {/* Subtitle */}
          <p className="max-w-2xl mx-auto text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            {t('landing.heroSubtitle', 'A modern, full-stack quiz platform empowering students to test real-world skills across HTML, CSS, JavaScript, TypeScript, React, Next.js, Python, and Node.js with instant grading and analytics.')}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            {user ? (
              <Link
                to={user.role === 'teacher' ? '/teacher/dashboard' : '/student/dashboard'}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-indigo-600 text-white font-bold text-sm hover:bg-indigo-700 shadow-lg shadow-indigo-500/25 transition-all hover:scale-105"
              >
                {t('landing.ctaDashboard', 'Go to Dashboard')}
                <ArrowRight className="w-4 h-4" />
              </Link>
            ) : (
              <>
                <Link
                  to="/register"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-indigo-600 text-white font-bold text-sm hover:bg-indigo-700 shadow-lg shadow-indigo-500/25 transition-all hover:scale-105"
                >
                  {t('landing.ctaPrimary', 'Get Started Free')}
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/student/quizzes"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-white border border-slate-200 text-slate-800 font-semibold text-sm hover:bg-slate-50 transition"
                >
                  <BookOpen className="w-4 h-4 text-indigo-600" />
                  {t('landing.ctaSecondary', 'Explore Quizzes')}
                </Link>
              </>
            )}
          </div>

          {/* Quick Demo Access Bar */}
          {!user && (
            <div className="pt-4">
              <p className="text-xs text-slate-500 font-medium mb-3">
                {t('landing.demoNotice', 'Try the platform immediately with one-click demo credentials:')}
              </p>
              <div className="flex flex-wrap items-center justify-center gap-3">
                <button
                  onClick={() => handleDemoAccess('teacher')}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-indigo-50 text-indigo-700 border border-indigo-200 text-xs font-semibold hover:bg-indigo-100 transition shadow-xs"
                >
                  <Zap className="w-3.5 h-3.5 text-indigo-600" />
                  {t('landing.demoTeacher', 'Teacher Demo')} (Prof. Connor)
                </button>
                <button
                  onClick={() => handleDemoAccess('student')}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-semibold hover:bg-emerald-100 transition shadow-xs"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  {t('landing.demoStudent', 'Student Demo')} (David Miller)
                </button>
              </div>
            </div>
          )}

          {/* Hero Feature Showcase Card */}
          <div className="pt-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl border border-slate-200/80 shadow-xl shadow-slate-200/50 p-6 sm:p-8 text-left">
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div className="flex items-center gap-2.5">
                  <div className="w-3 h-3 rounded-full bg-rose-400" />
                  <div className="w-3 h-3 rounded-full bg-amber-400" />
                  <div className="w-3 h-3 rounded-full bg-emerald-400" />
                  <span className="text-xs font-mono text-slate-400 ml-2">quiz_session.tsx</span>
                </div>
                <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                  {language === 'bn' ? 'লাইভ পরীক্ষা মোড' : 'Live Assessment Mode'}
                </span>
              </div>
              <div className="mt-6 space-y-4">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-bold text-slate-900 text-base sm:text-lg">
                    {language === 'bn'
                      ? 'প্রশ্ন নং ২ / ৬: কোন HTML5 উপাদানটি সাধারণত শিরোনামসহ কোনো বিষয়ের বিষয়ভিত্তিক গ্রুপিং বোঝায়?'
                      : 'Question 2 of 6: Which HTML5 element represents thematic grouping of content with a heading?'}
                  </h3>
                  <span className="text-xs font-bold text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded-lg">
                    {language === 'bn' ? '১ পয়েন্ট' : '1 Point'}
                  </span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div className="p-3.5 rounded-xl border border-slate-200 bg-slate-50 text-sm font-medium text-slate-600 flex items-center gap-3">
                    <span className="w-6 h-6 rounded-lg bg-white border border-slate-200 text-xs font-bold flex items-center justify-center">A</span>
                    <code>&lt;div&gt;</code>
                  </div>
                  <div className="p-3.5 rounded-xl border-2 border-indigo-600 bg-indigo-50/70 text-sm font-bold text-indigo-950 flex items-center gap-3 shadow-xs">
                    <span className="w-6 h-6 rounded-lg bg-indigo-600 text-white text-xs font-bold flex items-center justify-center">B</span>
                    <code>&lt;section&gt;</code>
                    <CheckCircle2 className="w-4 h-4 text-indigo-600 ml-auto" />
                  </div>
                  <div className="p-3.5 rounded-xl border border-slate-200 bg-slate-50 text-sm font-medium text-slate-600 flex items-center gap-3">
                    <span className="w-6 h-6 rounded-lg bg-white border border-slate-200 text-xs font-bold flex items-center justify-center">C</span>
                    <code>&lt;span&gt;</code>
                  </div>
                  <div className="p-3.5 rounded-xl border border-slate-200 bg-slate-50 text-sm font-medium text-slate-600 flex items-center gap-3">
                    <span className="w-6 h-6 rounded-lg bg-white border border-slate-200 text-xs font-bold flex items-center justify-center">D</span>
                    <code>&lt;article&gt;</code>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-3 mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-indigo-600">
            {language === 'bn' ? 'সহজ ও কার্যকর কর্মপ্রবাহ' : 'Seamless Workflow'}
          </span>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            {language === 'bn' ? 'কুইজরুম কীভাবে কাজ করে' : 'How QuizRoom Works'}
          </h2>
          <p className="text-slate-600 text-sm max-w-xl mx-auto">
            {language === 'bn'
              ? 'কুইজ তৈরি থেকে শুরু করে স্বয়ংক্রিয় গ্রেডিং ও অ্যানালিটিক্স মাত্র ৩টি সহজ ধাপে।'
              : 'From creation to real-time analytics in three straightforward steps.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm relative group hover:border-indigo-300 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center font-black text-lg mb-5 border border-indigo-100">
              1
            </div>
            <h3 className="font-bold text-slate-900 text-lg mb-2">
              {language === 'bn' ? 'শিক্ষক বা সিস্টেম কুইজ প্রস্তুত করে' : 'Teacher Creates Quiz'}
            </h3>
            <p className="text-slate-600 text-xs leading-relaxed">
              {language === 'bn'
                ? 'এমসিকিউ, সত্য/মিথ্যা, কোড স্নিপেট এবং সময়সীমা দিয়ে কুইজ সাজানো অথবা প্রশ্ন ব্যাংক থেকে সহজে প্রশ্ন নির্বাচন করা যায়।'
                : 'Design quizzes with multiple choice, true/false, code snippets, points, and custom time limits, or pull questions instantly from the Question Bank.'}
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm relative group hover:border-indigo-300 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center font-black text-lg mb-5 border border-purple-100">
              2
            </div>
            <h3 className="font-bold text-slate-900 text-lg mb-2">
              {language === 'bn' ? 'সহজে শেয়ার ও ক্লাস অ্যাসাইনমেন্ট' : 'Teacher Shares Link & Code'}
            </h3>
            <p className="text-slate-600 text-xs leading-relaxed">
              {language === 'bn'
                ? 'অনন্য লিংক ও কিউআর কোড (QR Code) দিয়ে সরাসরি ক্লাসে যুক্ত করা যায় অথবা উন্মুক্ত প্র্যাকটিস রুমে অংশ নেওয়া যায়।'
                : 'Generate a unique shareable URL and scannable QR code, or assign the quiz directly to an organized class cohort with deadlines.'}
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm relative group hover:border-indigo-300 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-black text-lg mb-5 border border-emerald-100">
              3
            </div>
            <h3 className="font-bold text-slate-900 text-lg mb-2">
              {language === 'bn' ? 'পরীক্ষায় অংশগ্রহণ ও দক্ষতা বৃদ্ধি' : 'Student Takes & Improves'}
            </h3>
            <p className="text-slate-600 text-xs leading-relaxed">
              {language === 'bn'
                ? 'অ্যান্টি-চিট সুরক্ষা ব্যবস্থার সাথে পরীক্ষা সম্পন্ন করুন, তাৎক্ষণিক স্কোর ও ব্যাখ্যা দেখুন এবং নিজের দুর্বলতা কাটিয়ে উঠুন।'
                : 'Students take the quiz with anti-cheat protection, receive instant graded results with explanations, and track learning progress over time.'}
            </p>
          </div>
        </div>
      </section>

      {/* Featured Subjects */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-3 mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-indigo-600">
            {language === 'bn' ? 'বিশেষ নির্বাচিত বিষয়সমূহ' : 'Curated Subjects'}
          </span>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            {language === 'bn' ? 'আধুনিক সফটওয়্যার ইঞ্জিনিয়ারিংয়ে দক্ষতা' : 'Master Frontend Engineering'}
          </h2>
          <p className="text-slate-600 text-sm max-w-xl mx-auto">
            {language === 'bn'
              ? 'প্রফেশনাল ডেভেলপারদের তৈরি স্বয়ংক্রিয় কুইজের মাধ্যমে আপনার টেকনিক্যাল জ্ঞান পরখ করুন।'
              : 'Kickstart your knowledge with pre-built assessments crafted by web professionals.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* HTML */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm hover:shadow-md transition space-y-4">
            <div className="w-12 h-12 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center border border-orange-100">
              <FileCode className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[10px] font-bold uppercase text-orange-600 bg-orange-50 px-2 py-0.5 rounded border border-orange-100">
                Markup
              </span>
              <h3 className="font-bold text-slate-900 text-xl mt-2">
                {language === 'bn' ? 'HTML5 সিম্যান্টিকস' : 'HTML5 Semantics'}
              </h3>
              <p className="text-slate-600 text-xs mt-1 leading-relaxed">
                {language === 'bn'
                  ? 'ডকুমেন্ট স্ট্রাকচার, সিম্যান্টিক ল্যান্ডমার্কস, অ্যাক্সেসিবিলিটি স্ট্যান্ডার্ডস ও এসইও মেটাডাটা।'
                  : 'Document structure, semantic landmarks, accessibility standards, and SEO metadata.'}
              </p>
            </div>
            <div className="pt-2">
              <Link
                to="/student/quizzes?subject=HTML"
                className="text-xs font-bold text-orange-600 hover:text-orange-700 flex items-center gap-1"
              >
                {language === 'bn' ? 'HTML কুইজ দেখুন' : 'Browse HTML Quizzes'} <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* CSS */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm hover:shadow-md transition space-y-4">
            <div className="w-12 h-12 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center border border-sky-100">
              <Palette className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[10px] font-bold uppercase text-sky-600 bg-sky-50 px-2 py-0.5 rounded border border-sky-100">
                Styling
              </span>
              <h3 className="font-bold text-slate-900 text-xl mt-2">
                {language === 'bn' ? 'আধুনিক CSS ও গ্রিড' : 'Modern CSS & Grid'}
              </h3>
              <p className="text-slate-600 text-xs mt-1 leading-relaxed">
                {language === 'bn'
                  ? 'ফ্লেক্সবক্স, সিএসএস গ্রিড লেআউট, স্পেসিফিসিটি ক্যাসকেড, রেসপনসিভ একক ও বক্স সাইজিং।'
                  : 'Flexbox, CSS Grid layouts, specificity cascade, responsive units, and box sizing.'}
              </p>
            </div>
            <div className="pt-2">
              <Link
                to="/student/quizzes?subject=CSS"
                className="text-xs font-bold text-sky-600 hover:text-sky-700 flex items-center gap-1"
              >
                {language === 'bn' ? 'CSS কুইজ দেখুন' : 'Browse CSS Quizzes'} <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* JavaScript */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm hover:shadow-md transition space-y-4">
            <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center border border-amber-100">
              <Code2 className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[10px] font-bold uppercase text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-100">
                Programming
              </span>
              <h3 className="font-bold text-slate-900 text-xl mt-2">
                {language === 'bn' ? 'জাভাস্ক্রিপ্ট ES6+' : 'JavaScript ES6+'}
              </h3>
              <p className="text-slate-600 text-xs mt-1 leading-relaxed">
                {language === 'bn'
                  ? 'Async/await, প্রমিসেস, ক্লোজারস, অ্যারে মেথড এবং ইভেন্ট লুপ আর্কিটেকচার।'
                  : 'Async/await, Promises, closures, array transformations, and event loops.'}
              </p>
            </div>
            <div className="pt-2">
              <Link
                to="/student/quizzes?subject=JavaScript"
                className="text-xs font-bold text-amber-700 hover:text-amber-800 flex items-center gap-1"
              >
                {language === 'bn' ? 'JavaScript কুইজ দেখুন' : 'Browse JS Quizzes'} <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Highlights Grid */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 rounded-3xl p-8 sm:p-12 text-white">
          <div className="max-w-2xl mb-12 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-indigo-400">
              {language === 'bn' ? 'সততা ও মানের সাথে শিক্ষা' : 'Engineered for Real Education'}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              {t('landing.featuresTitle', 'Everything you need to run high-impact assessments')}
            </h2>
            <p className="text-xs sm:text-sm text-slate-300">
              {t('landing.featuresSubtitle', 'From custom practice sessions to proctored anti-cheat detection and deep mastery analytics.')}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-2">
              <ShieldCheck className="w-6 h-6 text-indigo-400" />
              <h4 className="font-bold text-white text-base">
                {t('landing.feat2Title', 'Anti-Cheat Safeguards')}
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                {t('landing.feat2Desc', 'Detects tab-switching events, supports optional full screen, randomizes questions, and enforces strict timers.')}
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-2">
              <Share2 className="w-6 h-6 text-indigo-400" />
              <h4 className="font-bold text-white text-base">
                {language === 'bn' ? 'তাৎক্ষণিক কুইজ শেয়ার ও QR কোড' : 'Instant Quiz Sharing & QR'}
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                {language === 'bn'
                  ? 'প্রতিটি কুইজে রয়েছে ইউনিক শেয়ার লিংক এবং কিউআর কোড, যা প্রজেক্টরে বা বন্ধুদের সাথে সহজে শেয়ার করা যায়।'
                  : 'Every quiz receives a unique share link and generated QR code for classroom projection and mobile scanning.'}
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-2">
              <Trophy className="w-6 h-6 text-indigo-400" />
              <h4 className="font-bold text-white text-base">
                {language === 'bn' ? 'বিস্তারিত ব্যাখ্যা ও সমাধান' : 'Explanations & Review'}
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                {language === 'bn'
                  ? 'প্রতিটি প্রশ্নের পেছনে যুক্তি ও বিশদ শিক্ষামূলক ব্যাখ্যা শিক্ষার্থীদের যেকোনো বিভ্রান্তি দূর করে।'
                  : 'Students receive in-depth explanations for every choice, transforming assessments into genuine learning milestones.'}
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-2">
              <BarChart2 className="w-6 h-6 text-indigo-400" />
              <h4 className="font-bold text-white text-base">
                {t('landing.feat3Title', 'Cohort & Class Analytics')}
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                {t('landing.feat3Desc', 'Track historical progression charts, subject mastery breakdowns, and concept diagnostic reports.')}
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-2">
              <Users className="w-6 h-6 text-indigo-400" />
              <h4 className="font-bold text-white text-base">
                {language === 'bn' ? 'ক্লাস ও ব্যাচ ম্যানেজমেন্ট' : 'Classes & Cohorts'}
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                {language === 'bn'
                  ? 'সহজ ইনভাইট কোডের মাধ্যমে ক্লাসরুম তৈরি করুন এবং সময়সীমা নির্ধারণ করে কুইজ অ্যাসাইন করুন।'
                  : 'Organize students into batches with unique invitation codes (e.g. WEB-2026) and scheduled quiz assignments.'}
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-2">
              <Zap className="w-6 h-6 text-indigo-400" />
              <h4 className="font-bold text-white text-base">
                {t('landing.feat1Title', 'Instant Self-Study Mode')}
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                {t('landing.feat1Desc', 'Take quizzes freely with 15, 30, 50, or 100 questions. No teacher or class codes required.')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="max-w-4xl mx-auto px-4 text-center space-y-6">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          {language === 'bn' ? 'আপনার শেখার ও পড়ানোর অভিজ্ঞতা উন্নত করতে প্রস্তুত?' : 'Ready to elevate your learning and teaching?'}
        </h2>
        <p className="text-slate-600 text-sm max-w-lg mx-auto">
          {language === 'bn'
            ? 'আজই কুইজরুম-এ যোগ দিন। শিক্ষক হিসেবে কার্যকর পরীক্ষা নিন অথবা শিক্ষার্থী হিসেবে প্রোগ্রামিংয়ে দক্ষতা অর্জন করুন।'
            : 'Join QuizRoom today. Create engaging tests as an educator, or test your frontend mastery as a student.'}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            to="/register"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-indigo-600 text-white font-bold text-sm hover:bg-indigo-700 shadow-lg shadow-indigo-500/25 transition-all hover:scale-105"
          >
            {t('landing.ctaPrimary', 'Create Your Free Account')}
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            to="/login"
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl border border-slate-200 text-slate-800 font-semibold text-sm hover:bg-slate-50 transition"
          >
            {t('nav.signIn', 'Log In')}
          </Link>
        </div>
      </section>
    </div>
  );
};
