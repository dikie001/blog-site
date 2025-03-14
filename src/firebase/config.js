// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD8sBp0MhAbXJYbxIrvedZU80ZioYsgg4k",
  authDomain: "blog-site-a5ee3.firebaseapp.com",
  projectId: "blog-site-a5ee3",
  storageBucket: "blog-site-a5ee3.firebasestorage.app",
  messagingSenderId: "1037978912206",
  appId: "1:1037978912206:web:fbfc2cc840ff887a0b179f",
  measurementId: "G-VBLXZWDHXD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider()