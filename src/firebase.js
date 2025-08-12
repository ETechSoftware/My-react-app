// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAdtwRBPs_cuSi_N1K37ClYBxO_yojnxM0",
  authDomain: "my-firebase-project-86e8d.firebaseapp.com",
  projectId: "my-firebase-project-86e8d",
  storageBucket: "my-firebase-project-86e8d.firebasestorage.app",
  messagingSenderId: "816705546993",
  appId: "1:816705546993:web:11cb4eb7bb6b8bdabf9750"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);