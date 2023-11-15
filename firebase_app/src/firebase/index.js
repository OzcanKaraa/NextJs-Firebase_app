// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCEjgEcOTR42tST4O9qt30rMbkXLi0Cr_A",
  authDomain: "fir-app-d33af.firebaseapp.com",
  projectId: "fir-app-d33af",
  storageBucket: "fir-app-d33af.appspot.com",
  messagingSenderId: "900031742998",
  appId: "1:900031742998:web:8d8a95d8d9804b90a9a137",
  measurementId: "G-LJZ1Z338V8",
};
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
