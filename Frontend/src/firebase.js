// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "authentication-6416c.firebaseapp.com",
  projectId: "authentication-6416c",
  storageBucket: "authentication-6416c.appspot.com",
  messagingSenderId: "70928925759",
  appId: "1:70928925759:web:6044689244483766c5648a"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);