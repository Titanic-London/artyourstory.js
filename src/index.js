import React from 'react';
import ReactDOM from 'react-dom/client';
import { initializeApp } from "firebase/app";

import App from './App';

import './index.css';


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

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
