import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyChrWL5CBbm5NoEDeOq5MVMUhS0pioY1Ko",
  authDomain: "spoonacular-77024.firebaseapp.com",
  projectId: "spoonacular-77024",
  storageBucket: "spoonacular-77024.firebasestorage.app",
  messagingSenderId: "544106194290",
  appId: "1:544106194290:web:7acc405bcdf2e28a7529eb",
  measurementId: "G-C0RN8906WD",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const googleProvider = new GoogleAuthProvider();
