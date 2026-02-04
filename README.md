# 🚀 HabitFlow - Modern Habit Tracker App

HabitFlow is a modern, responsive, and fully functional habit tracking application built with **React** and **Tailwind CSS**. It allows users to manage their daily goals with a clean dashboard, visualize their progress with analytics, and persist data using local storage.

This project was developed as a final assignment for the Web Development training program, demonstrating proficiency in modern frontend technologies and CRUD operations.

## 🌟 Features

* **Dashboard Overview:** View active habits and daily progress at a glance.
* **CRUD Operations:**
    * **Create:** Add new habits with specific categories (Personal, Work, Health, etc.).
    * **Read:** List all active habits dynamically.
    * **Update:** Toggle habit completion status instantly.
    * **Delete:** Remove habits with a confirmation dialog.
* **Analytics Page:** Visual statistics showing success rates per category.
* **Persistent Data:** Uses `localStorage` to save user data even after page refreshes.
* **Routing:** Multi-page navigation (Dashboard, Analytics, Settings) using React Router.
* **Responsive Design:** Fully optimized for desktop and mobile devices via Tailwind CSS.

## 🛠️ Tech Stack & Architecture

* **Framework:** ReactJS (Vite)
* **Styling:** Tailwind CSS
* **Routing:** React Router DOM
* **State Management:** Context API
* **Icons:** Heroicons

### Project Structure
The project follows a modular architecture as required by the assignment guidelines:

src/
├── Components/      # Reusable UI components (HabitForm, HabitItem, Sidebar)
├── Pages/           # Main application views (Dashboard, Analytics, Settings)
├── Interfaces/      # Data models and constants (habitTypes.js)
├── Context/         # Global state management (HabitContext)
└── App.jsx          # Main application entry point

🚀 Getting Started
Follow these steps to run the project locally:

1.Clone the repository:

git clone [https://github.com/your-username/habit-tracker.git](https://github.com/your-username/habit-tracker.git)
cd habit-tracker

2.Install dependencies

npm install

3.Run the development server

npm run dev

4.Build for production

npm run build
