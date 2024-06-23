// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDhB9fXWfpREyxF0_8IhM0QzeOn0MJepM0",
  authDomain: "seekit-49b31.firebaseapp.com",
  projectId: "seekit-49b31",
  storageBucket: "seekit-49b31.appspot.com",
  messagingSenderId: "1031866475025",
  appId: "1:1031866475025:web:e668956e22cf8c622847b0",
  measurementId: "G-DJREVS0VHR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const auth = getAuth(app);

export {app,storage,auth};