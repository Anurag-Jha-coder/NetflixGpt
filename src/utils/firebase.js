// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  browserSessionPersistence,
  getAuth,
  setPersistence,
} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDhCGVQmmdQ0V9r2cysTXbyprmWdqG_3TU",
  authDomain: "netflixgpt-26eaa.firebaseapp.com",
  projectId: "netflixgpt-26eaa",
  storageBucket: "netflixgpt-26eaa.appspot.com",
  messagingSenderId: "767468871154",
  appId: "1:767468871154:web:2fbfa1a67f84438a4bdf6b",
  measurementId: "G-1DV2B919J9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();

const analytics = getAnalytics(app);
