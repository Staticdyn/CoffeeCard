import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBcG5luQDnhREf63oejgxXiGrDQALlBRyU",
  authDomain: "coffeecard-df90b.firebaseapp.com",
  projectId: "coffeecard-df90b",
  storageBucket: "coffeecard-df90b.appspot.com",
  messagingSenderId: "1079432884635",
  appId: "1:1079432884635:web:38d1f8300fe1098df8313e",
  measurementId: "G-P3JY3BV0VM",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore();
const auth = getAuth();
const storage = getStorage();

export { db, auth, storage, analytics };
