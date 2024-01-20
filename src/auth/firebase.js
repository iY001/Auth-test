// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import env from "react-dotenv";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const apiKey = env.FIREBASE_API_KEY
const authDomain = env.FIREBASE_AUTH_DOMAIN
const projectId = env.FIREBASE_PROJECT_ID
const storageBucket = env.FIREBASE_STORAGE_BUCKET
const messagingSenderId = env.FIREBASE_MESSAGING_SENDER_ID
const appId = env.FIREBASE_APP_ID
const measurementId = env.FIREBASE_MEASUREMENT_ID

const firebaseConfig = {
  apiKey,
  authDomain,
  projectId,
  storageBucket,
  messagingSenderId,
  appId,
  measurementId,
  // apiKey: "AIzaSyCy1Mbqy5wnpJNcNYvBWMqBUOUrHz5AUsg",
  // authDomain: "test-66374.firebaseapp.com",
  // projectId: "test-66374",
  // storageBucket: "test-66374.appspot.com",
  // messagingSenderId: "52546085140",
  // appId: "1:52546085140:web:bf21abfdec4873a6276201",
  // measurementId: "G-K0XEH2TNBY"
};

console.log(apiKey)
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default app;
