// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCy1Mbqy5wnpJNcNYvBWMqBUOUrHz5AUsg",
  authDomain: "test-66374.firebaseapp.com",
  projectId: "test-66374",
  storageBucket: "test-66374.appspot.com",
  messagingSenderId: "52546085140",
  appId: "1:52546085140:web:bf21abfdec4873a6276201",
  measurementId: "G-K0XEH2TNBY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default app;
