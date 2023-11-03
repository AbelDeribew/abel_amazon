import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBqDVHFtTP4Yg8TNMMGonouHUd0aKuaJ88",
  authDomain: "abel-a0609.firebaseapp.com",
  projectId: "abel-a0609",
  storageBucket: "abel-a0609.appspot.com",
  messagingSenderId: "7041827633",
  appId: "1:7041827633:web:b7b0f04508591f7babe610",
  measurementId: "G-QN21RQMRWQ"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = app.firestore();

export { db, auth };
