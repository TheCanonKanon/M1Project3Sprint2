// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCkHy8NVV_unbttE-KEKyp4OaezeQU3OKw",
  authDomain: "swdatabase-codeacademy.firebaseapp.com",
  projectId: "swdatabase-codeacademy",
  storageBucket: "swdatabase-codeacademy.appspot.com",
  messagingSenderId: "995312855366",
  appId: "1:995312855366:web:c6da4d49e144b7c93c9d47"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
export const db = getFirestore(app);