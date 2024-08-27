// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBJQmjJpJf1zPJofGxBqgss6odm74TGvDk",
  authDomain: "netflixgpt-431e5.firebaseapp.com",
  projectId: "netflixgpt-431e5",
  storageBucket: "netflixgpt-431e5.appspot.com",
  messagingSenderId: "189817979802",
  appId: "1:189817979802:web:638dd2ade7b73f08bab023",
  measurementId: "G-G558N4FWDK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
