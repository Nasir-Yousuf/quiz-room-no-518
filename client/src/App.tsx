import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext.js';
import { NotificationProvider } from './context/NotificationContext.js';
import { LanguageProvider } from './context/LanguageContext.js';
import { Navbar } from './components/Navbar.js';
import { Footer } from './components/Footer.js';
import { ToastContainer } from './components/Toast.js';
import { ProtectedRoute } from './components/ProtectedRoute.js';

// Public & Auth Pages
import { LandingPage } from './pages/LandingPage.js';
import { LoginPage } from './pages/LoginPage.js';
import { RegisterPage } from './pages/RegisterPage.js';
import { ProfilePage } from './pages/ProfilePage.js';
import { PublicQuizPage } from './pages/PublicQuizPage.js';
import { NotFoundPage } from './pages/NotFoundPage.js';

// Student Pages
import { StudentDashboard } from './pages/student/StudentDashboard.js';
import { QuizDiscoveryPage } from './pages/student/QuizDiscoveryPage.js';
import { QuizTakingPage } from './pages/student/QuizTakingPage.js';
import { QuizResultPage } from './pages/student/QuizResultPage.js';
import { StudentProgressPage } from './pages/student/StudentProgressPage.js';
import { StudentClassesPage } from './pages/student/StudentClassesPage.js';

// Teacher Pages
import { TeacherDashboard } from './pages/teacher/TeacherDashboard.js';
import { QuizManagementPage } from './pages/teacher/QuizManagementPage.js';
import { QuizBuilderPage } from './pages/teacher/QuizBuilderPage.js';
import { QuestionBankPage } from './pages/teacher/QuestionBankPage.js';
import { TeacherClassesPage } from './pages/teacher/TeacherClassesPage.js';
import { TeacherAnalyticsPage } from './pages/teacher/TeacherAnalyticsPage.js';
import { QuizResultsDetailPage } from './pages/teacher/QuizResultsDetailPage.js';

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <NotificationProvider>
          <LanguageProvider>
            <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900">
              <Navbar />
              <main className="flex-1">
              <Routes>
                {/* Public & General Routes */}
                <Route path="/" element={<LandingPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route
                  path="/profile"
                  element={
                    <ProtectedRoute>
                      <ProfilePage />
                    </ProtectedRoute>
                  }
                />
                <Route path="/quiz/:shareCode" element={<PublicQuizPage />} />

                {/* Student Routes */}
                <Route
                  path="/student/dashboard"
                  element={
                    <ProtectedRoute allowedRoles={['student', 'admin']}>
                      <StudentDashboard />
                    </ProtectedRoute>
                  }
                />
                <Route path="/student/quizzes" element={<QuizDiscoveryPage />} />
                <Route
                  path="/student/quizzes/:id/take"
                  element={
                    <ProtectedRoute allowedRoles={['student', 'admin']}>
                      <QuizTakingPage />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/student/attempts/:id/result"
                  element={
                    <ProtectedRoute>
                      <QuizResultPage />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/student/progress"
                  element={
                    <ProtectedRoute allowedRoles={['student', 'admin']}>
                      <StudentProgressPage />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/student/classes"
                  element={
                    <ProtectedRoute allowedRoles={['student', 'admin']}>
                      <StudentClassesPage />
                    </ProtectedRoute>
                  }
                />

                {/* Teacher Routes */}
                <Route
                  path="/teacher/dashboard"
                  element={
                    <ProtectedRoute allowedRoles={['teacher', 'admin']}>
                      <TeacherDashboard />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/teacher/quizzes"
                  element={
                    <ProtectedRoute allowedRoles={['teacher', 'admin']}>
                      <QuizManagementPage />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/teacher/quizzes/new"
                  element={
                    <ProtectedRoute allowedRoles={['teacher', 'admin']}>
                      <QuizBuilderPage />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/teacher/quizzes/:id/edit"
                  element={
                    <ProtectedRoute allowedRoles={['teacher', 'admin']}>
                      <QuizBuilderPage />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/teacher/quizzes/:id/results"
                  element={
                    <ProtectedRoute allowedRoles={['teacher', 'admin']}>
                      <QuizResultsDetailPage />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/teacher/question-bank"
                  element={
                    <ProtectedRoute allowedRoles={['teacher', 'admin']}>
                      <QuestionBankPage />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/teacher/classes"
                  element={
                    <ProtectedRoute allowedRoles={['teacher', 'admin']}>
                      <TeacherClassesPage />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/teacher/analytics"
                  element={
                    <ProtectedRoute allowedRoles={['teacher', 'admin']}>
                      <TeacherAnalyticsPage />
                    </ProtectedRoute>
                  }
                />

                {/* Catch-All 404 */}
                <Route path="*" element={<NotFoundPage />} />
              </Routes>
            </main>
            <Footer />
            <ToastContainer />
          </div>
        </LanguageProvider>
      </NotificationProvider>
    </AuthProvider>
  </BrowserRouter>
  );
};

export default App;
