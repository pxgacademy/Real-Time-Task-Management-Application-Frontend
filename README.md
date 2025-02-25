# Real-Time Task Management Application

A **powerful** and **intuitive** task management application that enables users to create projects, add unlimited tasks, and dynamically manage them in real time. This application ensures **seamless collaboration** and **efficient workflow** management.

> **Live Demo**: [Task Management App](https://task-management-app-d6f4c.web.app)  
> **Frontend Repository**: [GitHub](https://github.com/pxgacademy/Real-Time-Task-Management-Application-Frontend)  
> **Backend Repository**: [GitHub](https://github.com/pxgacademy/Real-Time-Task-Management-Application-Backend)

---

## ✨ Key Features

✅ **User Authentication**: Secure authentication with Firebase.  
✅ **Project Management**: Users can create multiple projects.  
✅ **Unlimited Tasks**: Each project can contain an unlimited number of tasks.  
✅ **Task Attributes**: Tasks have a title, start date, due date, status, and priority.  
✅ **Dynamic Updates**: Users can update task details instantly.  
✅ **Modern UI/UX**: Built with Tailwind CSS for a sleek and responsive design.  
✅ **API-Driven**: Fully powered by a robust backend with Express.js and MongoDB.

> 🛠 **Upcoming Features**:  
> 🔹 **Drag & Drop** Task Sorting (Using `@dnd-kit`)  
> 🔹 **Real-Time Collaboration** (Using `Socket.io`)  
> 🔹 **Task Assignments** & Team Collaboration  
> 🔹 **Notifications** for Task Updates

---

## 🛠 Tech Stack

### Frontend:

- **React.js 19** - Modern UI framework
- **Tailwind CSS** - Rapid UI styling
- **React Router DOM** - Client-side routing
- **TanStack Query** - Data fetching & state management
- **Axios** - HTTP requests
- **SweetAlert2** - Elegant alerts & modals

### Backend:

- **Node.js & Express.js** - Scalable REST API
- **MongoDB & Mongoose** - NoSQL Database
- **Firebase Authentication** - Secure login system
- **Socket.io** (Planned) - Real-time updates

---

## 🚀 Installation & Setup

### Prerequisites

Ensure you have the following installed:

- **Node.js** (LTS recommended)
- **MongoDB** (Local or Atlas)
- **Git** (for cloning the repository)

### 🔧 Backend Setup

1️⃣ Clone the backend repository:

```sh
git clone https://github.com/pxgacademy/Real-Time-Task-Management-Application-Backend.git
cd Real-Time-Task-Management-Application-Backend
```

2️⃣ Install dependencies:

```sh
npm install
```

3️⃣ Create a `.env` file in the root directory and configure the environment variables:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
FIREBASE_API_KEY=your_firebase_api_key
```

4️⃣ Start the server:

```sh
npm run dev
```

---

### 🎨 Frontend Setup

1️⃣ Clone the frontend repository:

```sh
git clone https://github.com/pxgacademy/Real-Time-Task-Management-Application-Frontend.git
cd Real-Time-Task-Management-Application-Frontend
```

2️⃣ Install dependencies:

```sh
npm install
```

3️⃣ Create a `.env` file and configure the API URL:

```env
VITE_API_URL=http://localhost:5000
VITE_FIREBASE_API_KEY=your_firebase_api_key
```

4️⃣ Run the application:

```sh
npm run dev
```

---

## 🧑‍💻 Usage Guide

1. **Sign in** using Firebase authentication.
2. **Create a new project** from the dashboard.
3. **Add unlimited tasks** under a project.
4. **Update task details** dynamically.
5. **Manage priorities** and due dates efficiently.
6. **Stay tuned** for real-time features in future updates!

---

## 📌 Future Enhancements

🚀 **Real-Time Features**

- **Live task updates** via WebSockets (`Socket.io`)
- **Drag & Drop** task management (`@dnd-kit`)

📅 **Advanced Task Features**

- Assign tasks to team members
- Task dependencies & milestones
- Calendar view for task scheduling

📊 **Analytics & Insights**

- Task progress tracking
- Productivity reports

---

## 🛡 Security & Best Practices

✅ **JWT Authentication** for secure API access  
✅ **Input Validation** to prevent malicious data  
✅ **CORS & Helmet** for API security  
✅ **Optimized Database Queries** for performance

---

## 🏆 Contributing

Contributions are **welcome**! 🎉 If you'd like to improve this project, follow these steps:

1. **Fork** the repository
2. **Create** a feature branch (`feature-xyz`)
3. **Commit** changes (`git commit -m "Added new feature"`)
4. **Push** to GitHub (`git push origin feature-xyz`)
5. **Create a Pull Request** 🚀

---

## 📩 Contact

Have questions or feedback? Reach out!  
📧 **Email**: [your-email@example.com](mailto:your-email@example.com)  
🔗 **GitHub**: [pxgacademy](https://github.com/pxgacademy)

---

## ⭐ Show Your Support

If you like this project, **please give it a star ⭐** on GitHub! Your support keeps this project alive and growing. 🚀

```

```
