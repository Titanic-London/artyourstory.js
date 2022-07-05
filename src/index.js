import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBYUFVWPb182Rgp8o9JNZhv1ZwMd5zAkWE",
  authDomain: "artyourstory.firebaseapp.com",
  projectId: "artyourstory",
  storageBucket: "artyourstory.appspot.com",
  messagingSenderId: "47869260600",
  appId: "1:47869260600:web:4ba7575d708bc7cfa487cd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

console.log(app)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
