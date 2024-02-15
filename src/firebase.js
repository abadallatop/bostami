// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCrJyMH12ptqrhd7u0Ys3EjVvtJIg16qTs",
  authDomain: "portfolio-5383e.firebaseapp.com",
  projectId: "portfolio-5383e",
  storageBucket: "portfolio-5383e.appspot.com",
  messagingSenderId: "436507851562",
  appId: "1:436507851562:web:c1f03ec930b4a49f00fc53",
  measurementId: "G-0SX5QFTQVP",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
