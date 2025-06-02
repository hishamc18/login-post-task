# 📝 Post Adding Tool with Login

A full-stack application for user login and post creation with toggle-based post detail viewing.

---

## 🔧 Tech Stack

### ✅ Backend (Node.js + Express)
- **Authentication**: JWT (stored in HTTP-only cookies)
- **ORM**: Prisma
- **Database**: PostgreSQL
- **Validation**: Manual validation with proper error handling
- **Architecture**:
  - **Controller**: Handles request logic
  - **Service**: Business logic abstraction
  - **Routes**: Clean route definitions
  - **Middlewares**:
    - Global error handler
    - Custom error class
    - Auth middleware for protected routes

### ✅ Frontend (React + Tailwind CSS)
- **State Management**: Redux Toolkit
- **API Calls**: Axios instance
- **UI**: Tailwind CSS (Black & White aesthetic theme, responsive design)
- **Protected Routes**: Based on auth state in Redux
- **Security**: Cookies are **not accessed in frontend**; handled fully on backend

---


---

## 🚀 Features

### 👤 Authentication
- Login with username & password
- JWT token issued and stored in secure cookie
- Authentication status checked on app load
- Logout functionality

### 📝 Post Management
- Add post with title and content
- View list of posts created by the user
- Toggle to expand/collapse post content
- Created date displayed
- Protected routes: only accessible after login

---
