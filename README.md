# QuizRoom (Room No. 518) - Full-Stack Educational Quiz & Assessment Platform

[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

A modern, production-grade full-stack web application for students and educators to author, share, take, and analyze interactive technical quizzes.

---

## 🚀 Key Features

### 🎓 Student Experience
- **Dedicated Student Dashboard**: Track overall quiz attempts, average mastery percentage, personal bests, and subject progress.
- **Interactive Quiz-Taking**:
  - Live countdown timer with auto-submit
  - Multiple Choice & True/False questions
  - Syntax code snippet previews
  - Keyboard navigation (A, B, C, D shortcuts)
  - Question grid navigation with answered vs unanswered indicators
  - Warning modal before submission if unanswered questions remain
- **Anti-Cheating Safeguards**:
  - Tab-switching / blur detection with event logs & warning toasts
  - Optional Fullscreen focus mode
- **Immediate Results & In-Depth Review**:
  - Automatic grading with percentage & pass/fail status
  - Confetti celebration upon passing
  - Immutable question-by-question review with detailed educational explanations
- **My Progress & Performance Timeline**:
  - Chronological score progression chart
  - Subject-by-subject mastery bars (HTML, CSS, JavaScript)
  - Rule-based learning insights & recommended focus topics
- **Class Enrollment**: Join cohorts using teacher invite codes (e.g. `WEB-2026`).

---

### 👩‍🏫 Teacher Experience
- **Teacher Analytics & KPIs**:
  - Global student average, total authored quizzes, total submissions, unique students reached
  - Student performance leaderboard (rank, quizzes taken, average, personal best)
  - Diagnostic breakdown per quiz: question-by-question accuracy % and most frequently missed questions alert
- **Quiz Management ('My Quizzes')**:
  - Create, edit, duplicate (clone as draft), archive, publish, and delete quizzes
  - Direct sharing modal with generated QR code and one-click copyable share links
- **Dynamic Quiz Builder**:
  - Add Multiple Choice & True/False questions
  - Drag / reorder questions up and down
  - Duplicate questions
  - Attach code snippets, points, and review explanations
  - Import questions directly from the reusable **Question Bank**
- **Question Bank**:
  - Centralized repository of reusable assessment items
  - Filter by Subject (HTML, CSS, JS), Topic, and Difficulty
- **Classes & Cohorts**:
  - Create batches with auto-generated unique invite codes
  - View enrolled student rosters
  - Assign quizzes with target deadlines and attempt limits

---

## 🛠️ Technology Stack

| Layer | Technologies |
|---|---|
| **Frontend** | React 18, TypeScript, Vite, React Router DOM v6, Tailwind CSS, Lucide Icons, Canvas Confetti, QRCode |
| **Backend** | Node.js, Express, TypeScript, Mongoose, JWT (jsonwebtoken), bcryptjs, CORS, Express Rate Limit |
| **Database** | MongoDB (Local or MongoDB Atlas) |

---

## 🔑 Demo Credentials

The database seeder includes pre-configured demo accounts:

| Role | Email | Password | Details |
|---|---|---|---|
| **Teacher** | `teacher@example.com` | `password123` | Prof. Sarah Connor |
| **Teacher 2** | `alex.teacher@example.com` | `password123` | Alex Rivera |
| **Student** | `student@example.com` | `password123` | David Miller (Pre-seeded with progress history & charts) |
| **Student 2** | `emma.student@example.com` | `password123` | Emma Watson |
| **Class Invite Code** | `WEB-2026` | - | Web Engineering Cohort 2026 |

---

## 📦 Getting Started

### 1. Prerequisites
- **Node.js** v18+ (tested on Node v24)
- **MongoDB**: Either a local MongoDB instance or a free [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) cluster connection string.

### 2. Environment Configuration
The backend configuration file is located at `server/.env`.

Create or edit `server/.env`:
```env
PORT=5000
MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/quiz_room_db?retryWrites=true&w=majority
JWT_SECRET=dev_jwt_secret_quiz_room_518_education_platform_secure_token
NODE_ENV=development
CLIENT_ORIGIN=http://localhost:5173
```

> **Note on MongoDB Atlas**:
> 1. Create a free M0 cluster at [mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas).
> 2. Create a database user and allow your IP in Network Access (or `0.0.0.0/0`).
> 3. Click **Connect -> Drivers** and copy your connection string into `server/.env`.

### 3. Seed Database
Once your MongoDB connection is configured in `server/.env`, populate demo data:
```bash
npm run seed
```

### 4. Running the Application Locally
Run both client and server concurrently:
```bash
npm run dev
```

Or run them individually:
- **Backend API**: `npm run dev:server` (running on `http://localhost:5000`)
- **Frontend App**: `npm run dev:client` (running on `http://localhost:5173`)

---

## 📡 API Endpoints

### Authentication (`/api/auth`)
- `POST /api/auth/register` - Register as Student or Teacher
- `POST /api/auth/login` - Login with email & password
- `GET /api/auth/me` - Get current session
- `PATCH /api/auth/profile` - Update profile / change password

### Quizzes (`/api/quizzes`)
- `GET /api/quizzes` - Public & student quiz catalog (filterable)
- `GET /api/quizzes/share/:shareCode` - Shared quiz landing details
- `GET /api/quizzes/:id/take` - Sanitized questions for taking
- `GET /api/quizzes/teacher/mine` - Quizzes created by the logged-in teacher
- `GET /api/quizzes/:id/editor` - Full quiz questions & answers for editing
- `POST /api/quizzes` - Create new quiz
- `PATCH /api/quizzes/:id` - Edit quiz
- `DELETE /api/quizzes/:id` - Delete quiz
- `POST /api/quizzes/:id/duplicate` - Duplicate quiz as a draft

### Submissions & Attempts (`/api/attempts`)
- `POST /api/attempts/quizzes/:quizId/submit` - Submit answers and automatically grade
- `GET /api/attempts/mine` - Student's attempt history & stats
- `GET /api/attempts/:id` - Detailed result and explanation review
- `GET /api/attempts/quizzes/:quizId/teacher` - All student attempts for teacher review

### Question Bank (`/api/question-bank`)
- `GET /api/question-bank` - Filterable repository of reusable questions
- `POST /api/question-bank` - Add question to bank
- `DELETE /api/question-bank/:id` - Delete question from bank

### Classes & Cohorts (`/api/classes`)
- `POST /api/classes` - Create class & generate invite code
- `GET /api/classes/teacher` - Teacher's classes
- `GET /api/classes/student` - Student's enrolled classes
- `POST /api/classes/join` - Join class via invite code
- `POST /api/classes/assignments` - Assign quiz to class with deadline
- `GET /api/classes/assignments` - Student's active class assignments

### Analytics (`/api/analytics`)
- `GET /api/analytics/student` - Subject mastery, scores timeline & focus topics
- `GET /api/analytics/teacher` - Cohort KPIs & student leaderboard
- `GET /api/analytics/quiz/:quizId` - Question accuracy % & hardest concepts
