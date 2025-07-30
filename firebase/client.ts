// src/firebase.js or src/firebase.ts

import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// ✅ Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyBU3trytC9VKNvAZnkLfxzvTCxAceKNg4s",
  authDomain: "prepwise-f993e.firebaseapp.com",
  projectId: "prepwise-f993e",
  storageBucket: "prepwise-f993e.appspot.com",
  messagingSenderId: "788120595518",
  appId: "1:788120595518:web:a7ab718cd3a689c107b56f",
  measurementId: "G-TKFLWS74D2"
};

// ✅ Initialize Firebase App
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

// ✅ Export Auth and Firestore
export const auth = getAuth(app);
export const db = getFirestore(app);
