import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAos4m_phO9v6Ifn349iaYNEynqWr26wbI",
  authDomain: "learnlingo-c95b3.firebaseapp.com",
  databaseURL: "https://learnlingo-c95b3-default-rtdb.firebaseio.com",
  projectId: "learnlingo-c95b3",
  storageBucket: "learnlingo-c95b3.firebasestorage.app",
  messagingSenderId: "750403127028",
  appId: "1:750403127028:web:c938eb8bba10f8b02e40a1",
  measurementId: "G-VE6KMKKDH4"
};

const app = getApps().length
  ? getApp()
  : initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(app);

export { auth, db }