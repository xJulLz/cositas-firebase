// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAuOJdl9r6rEz3XxPByIfbC04CV9JfSPXQ",
  authDomain: "cositas-28a2e.firebaseapp.com",
  projectId: "cositas-28a2e",
  storageBucket: "cositas-28a2e.firebasestorage.app",
  messagingSenderId: "773991312848",
  appId: "1:773991312848:web:93ad81e18f4ad8c828ddd5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const db = getFirestore(app);
export { auth, db };