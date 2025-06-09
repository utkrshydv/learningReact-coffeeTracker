# ☕ Coffee Tracker App

> Built while following the **[Smoljames React Tutorial](https://www.youtube.com/@Smoljames)**. This is my personal spin on the project as I learned key React concepts, Firebase integration, and application structuring.

---

## 🚀 Overview

The **Coffee Tracker App** is a web application designed to help users manage and track their coffee preferences. It provides a secure and personalized experience, allowing users to:

* Sign up or log in securely.
* Select and track their favorite coffee types.
* View personal data fetched from Firebase.
* Reset their password if needed.
* Stay signed in between sessions using Firebase Auth persistence.

---

## 🧠 What I Learned

This project was instrumental in deepening my understanding of several core web development concepts:

* **React Fundamentals:** Mastered React state management (`useState`, `useEffect`) and global state with the Context API (`createContext`).
* **Firebase Integration:** Gained hands-on experience with Firebase Authentication for user management (signup, login, logout, password reset) and Firestore for storing and fetching user-specific data.
* **Application Design:** Developed skills in component-based design, modular styling, and handling various UI states like loading and conditional rendering.

---

## 📁 Code Structure

```
/src
├── components           # Reusable UI components
├── context
│   └── AuthContext.js   # Global authentication context (login, signup, fetch user data)
├── firebase.js          # Firebase configuration and initialization
├── pages                # Pages like Home, Login, Dashboard
└── styles
    └── theme.css        # Full app styling (typography, colors, layout)
```

---

## 🔧 Core Features

### 🔐 Authentication

* **Sign Up & Sign In:** Users can securely create accounts and log in using their email and password, powered by Firebase Authentication.
* **Persistent Login:** Sessions persist across browser sessions thanks to Firebase's `onAuthStateChanged` listener, ensuring a seamless user experience.
* **Reset Password:** Users can easily request password reset links via email directly from the application.
* **Logout:** A straightforward logout mechanism clears all user-related data and signs out of Firebase.

### 📦 Data Management

* **User Data:** Each user's unique data is securely stored in Firestore under a dedicated `users/{uid}` document, allowing for personalized content retrieval.
* **Global Context:** The `AuthContext` provides global access to the logged-in user's information and data across all components, simplifying data flow.

---

## 🔥 Firebase Integration

This application leverages Firebase for both authentication and data storage:

* **Firebase Auth** is used for:
    * Account creation (`createUserWithEmailAndPassword`)
    * User login (`signInWithEmailAndPassword`)
    * Password reset (`sendPasswordResetEmail`)
    * User logout (`signOut`)
    * Real-time authentication state tracking (`onAuthStateChanged`)

* **Firestore** is used to:
    * Store user-specific data under `users/{uid}`.
    * Retrieve and utilize this personalized data once the user logs in.

### Setup (in `firebase.js`):

```js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "...",
  authDomain: "...",
  projectId: "...",
  storageBucket: "...",
  messagingSenderId: "...",
  appId: "..."
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
```

---

## 🧠 Reflections

This project provided a robust learning experience and gave me a solid foundation in:

* Creating reusable and efficient React components.
* Managing global application state effectively with the Context API.
* Working with real-time backend services offered by Firebase.
* Building modern and aesthetically pleasing user interfaces using clean CSS themes.

---
