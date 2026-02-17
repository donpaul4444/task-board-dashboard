# Task Management Dashboard

A mini Trello-like Task Board built using React, Vite, Tailwind CSS, and Zustand.

---

## 🚀 Tech Stack

- React (Hooks)
- Vite
- Tailwind CSS
- Zustand (with persist middleware)
- Axios (API calls)

---

## 📦 Setup Instructions

1. Clone the repository:

   git clone <your-repo-link>

2. Navigate to project folder:

   cd task-board

3. Install dependencies:

   npm install

4. Run development server:

   npm run dev

5. Open browser:

   http://localhost:5173

---

## 🔐 Features Implemented

- Mock authentication with persisted login
- Protected dashboard route
- Fetch tasks from API
- Display tasks in 3 columns:
  - Todo
  - In Progress
  - Completed
- Add Task
- Edit Task
- Delete Task
- Toggle task status
- Search by title
- Filter by status
- Loading state
- Error handling
- Responsive layout (mobile + desktop)

---

## 🏗 Architecture Explanation

### State Management
Zustand is used for:
- Managing global state (user + tasks)
- Persisting state using middleware
- Centralizing task CRUD logic



### API Layer
API logic separated into `services/taskService.js`
to keep data fetching logic outside UI components.

---

## ⚖️ Tradeoffs Made

- No backend persistence (used mock API)
- No drag-and-drop functionality (due to time constraints)
- Minimal styling focus — prioritized functionality and clean structure

---

## 🔮 Improvements If More Time

- Drag and drop between columns
- Unit testing with React Testing Library
- Optimistic UI updates
- Better UI animations
- Pagination or lazy loading
- Dark mode support

---




