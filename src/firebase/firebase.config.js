// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBYi4bkYYcDKimw0yf4WCVtkpopd-YLp_s",
  authDomain: "master-academy-168b2.firebaseapp.com",
  projectId: "master-academy-168b2",
  storageBucket: "master-academy-168b2.appspot.com",
  messagingSenderId: "605651097061",
  appId: "1:605651097061:web:c881d78baa4133ed2acb0c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;

// apiKey: process.env.REACT_APP_apiKey,
//     authDomain: process.env.REACT_APP_authDomain,
//     projectId: process.env.REACT_APP_projectId,
//     storageBucket: process.env.REACT_APP_storageBucket,
//     messagingSenderId: process.env.REACT_APP_messagingSenderId,
//     appId: process.env.REACT_APP_appId,
