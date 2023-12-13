// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-46f2e.firebaseapp.com",
  projectId: "mern-estate-46f2e",
  storageBucket: "mern-estate-46f2e.appspot.com",
  messagingSenderId: "417048255741",
  appId: "1:417048255741:web:34ec142d85c54616933294"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);