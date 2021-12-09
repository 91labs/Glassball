// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBsl65rI0Cv-1bZEod2kKzRf6mGu_6fDq0",
  authDomain: "glassball-app.firebaseapp.com",
  projectId: "glassball-app",
  storageBucket: "glassball-app.appspot.com",
  messagingSenderId: "535890112586",
  appId: "1:535890112586:web:c6597ea0d1ca65a0ceb6b3",
  measurementId: "${config.measurementId}",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
