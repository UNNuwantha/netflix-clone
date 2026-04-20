# 🎬 Netflix Clone

<div align="center">

[![React](https://img.shields.io/badge/React-v19.2.4-61DAFB?style=flat-square&logo=react)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-v8.0.4-646CFF?style=flat-square&logo=vite)](https://vitejs.dev/)
[![Firebase](https://img.shields.io/badge/Firebase-v12.12.0-FFCA28?style=flat-square&logo=firebase)](https://firebase.google.com/)
[![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)](LICENSE)
[![Node.js](https://img.shields.io/badge/Node.js-18.x-339933?style=flat-square&logo=node.js)](https://nodejs.org/)
[![Status](https://img.shields.io/badge/Status-Active-brightgreen?style=flat-square)](https://github.com/UNNuwantha/netflix-clone)

A modern, responsive Netflix clone built with React and Vite, featuring Firebase authentication, dynamic content rendering, and a sleek user interface.

[🚀 Live Demo](#live-demo) • [📸 Screenshots](#screenshots) • [🛠️ Tech Stack](#tech-stack) • [📖 Installation](#installation)

</div>

---

## ✨ Features

- 🎥 **Dynamic Movie/Show Display** - Browse and view detailed information about movies and TV shows
- 🔐 **Firebase Authentication** - Secure user signup and login with email verification
- 🎨 **Responsive Design** - Fully responsive UI that works seamlessly on desktop, tablet, and mobile
- 🔍 **Search Functionality** - Quick search feature to find your favorite content
- ⭐ **User Profiles** - Personalized user experience with profile management
- 📱 **Adaptive UI** - Mobile-first approach with smooth animations and transitions
- 🎯 **Content Navigation** - Easy navigation with category-based browsing
- 🔔 **Notifications** - Toast notifications for user feedback (using React Toastify)
- 📌 **Smooth Scrolling** - Enhanced user experience with smooth page scrolling
- 🌐 **SPA Navigation** - Client-side routing with React Router for fast navigation

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| **Frontend Framework** | [React 19.2.4](https://reactjs.org/) |
| **Build Tool** | [Vite 8.0.4](https://vitejs.dev/) |
| **Backend/Auth** | [Firebase 12.12.0](https://firebase.google.com/) |
| **Routing** | [React Router DOM 7.14.1](https://reactrouter.com/) |
| **Notifications** | [React Toastify 11.1.0](https://fkhadra.github.io/react-toastify) |
| **Authentication Hooks** | [React Firebase Hooks 5.1.1](https://github.com/CSFrequency/react-firebase-hooks) |
| **Linting** | [ESLint 9.39.4](https://eslint.org/) |
| **Node Version** | 18.x |

---

## 📸 Screenshots

> 🎬 Showcase of the Netflix Clone interface

```
┌─────────────────────────────────────────┐
│  Home Page    TV Shows   Movies   More  │
│                               👤        │
├─────────────────────────────────────────┤
│                                         │
│   Featured Content & Movie Rows         │
│                                         │
│   Popular Movies  →  →  →  →           │
│   Trending Now    →  →  →  →           │
│   Top Rated       →  →  →  →           │
│                                         │
└─────────────────────────────────────────┘
```

---

## 🚀 Installation

### Prerequisites
- Node.js 18.x or higher
- npm 7.0.0 or higher
- Firebase account

### Setup Instructions

**1. Clone the Repository**
```bash
git clone https://github.com/UNNuwantha/netflix-clone.git
cd netflix-clone
```

**2. Install Dependencies**
```bash
npm install
```

**3. Configure Firebase**
Create a `src/firebase.js` file with your Firebase credentials:
```javascript
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
```

**4. Start Development Server**
```bash
npm run dev
```

**5. Build for Production**
```bash
npm run build
```

---

## 📁 Project Structure

```
netflix-clone/
├── src/
│   ├── components/
│   │   ├── Footer/           # Footer component
│   │   ├── Navbar/           # Navigation bar with profile
│   │   └── TitleCards/       # Movie/show cards display
│   ├── pages/
│   │   ├── Home/             # Main home page
│   │   ├── Login/            # Authentication page
│   │   └── Player/           # Video player page
│   ├── assets/
│   │   ├── cards/            # Movie/show data
│   │   └── images/           # Images and icons
│   ├── firebase.js           # Firebase configuration
│   ├── App.jsx               # Main App component
│   ├── index.css             # Global styles
│   └── main.jsx              # Entry point
├── public/                   # Static assets
├── package.json              # Dependencies
├── vite.config.js            # Vite configuration
└── README.md                 # This file
```

---

## 🎮 Usage

### Development
```bash
npm run dev        # Start dev server (http://localhost:5173)
npm run build      # Build for production
npm run preview    # Preview production build
npm run lint       # Run ESLint
```

### Authentication Flow
1. **Signup** - Create a new account with email and password
2. **Login** - Sign in with your credentials
3. **Browse** - Explore movies and TV shows
4. **Logout** - Sign out from your profile menu

### Navigation
- **Home** - Discover featured and trending content
- **TV Shows** - Browse TV series
- **Movies** - Browse movies
- **My List** - View your saved content
- **Browse by Languages** - Filter by language preference

---

## 🌐 Deployment

### Deploy to Vercel

1. **Push to GitHub**
```bash
git add .
git commit -m "Update: Enhanced README with badges"
git push origin master
```

2. **Connect to Vercel**
   - Visit [Vercel Dashboard](https://vercel.com/dashboard)
   - Import your GitHub repository
   - Configure environment variables (Firebase config)
   - Click Deploy

3. **Environment Variables**
   - Add your Firebase configuration as environment variables in Vercel

---

## 📚 Available Scripts

| Script | Purpose |
|--------|---------|
| `npm run dev` | Start development server with HMR |
| `npm run build` | Create optimized production build |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint and check code quality |

---

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

## 👤 Author

**Nipuna Wantha**
- GitHub: [@UNNuwantha](https://github.com/UNNuwantha)

---

## 🙏 Acknowledgments

- Netflix for design inspiration
- React and Vite communities for excellent tools
- Firebase for authentication services
- All contributors and supporters

---

<div align="center">

**Made with ❤️ by Nipuna Wantha**

[Back to Top](#-netflix-clone)

</div>
