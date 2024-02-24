// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD0Vhpi3xbvwfw3pRi-7cPCXLpx7fmBzyk",
  authDomain: "funes-snickers.firebaseapp.com",
  projectId: "funes-snickers",
  storageBucket: "funes-snickers.appspot.com",
  messagingSenderId: "1056666371860",
  appId: "1:1056666371860:web:4c5dfccc44545f3b3be401"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)