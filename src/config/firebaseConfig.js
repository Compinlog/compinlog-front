// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAD-xdj95x3ZFUyIz2_zZ49sMPfJKK81PY",
  authDomain: "compinlog.firebaseapp.com",
  projectId: "compinlog",
  storageBucket: "compinlog.appspot.com",
  messagingSenderId: "960610460139",
  appId: "1:960610460139:web:b40f67d8fec8f7c749f9ae"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth }