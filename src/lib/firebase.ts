// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDT4zV_Gz6zfRlBxd8hwOy4P-EVp8uocY8",
  authDomain: "koskiedotca.firebaseapp.com",
  projectId: "koskiedotca",
  storageBucket: "koskiedotca.appspot.com",
  messagingSenderId: "976595665671",
  appId: "1:976595665671:web:183b726e8ce0a4c798fba2",
  measurementId: "G-XW6M0YJEWF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);