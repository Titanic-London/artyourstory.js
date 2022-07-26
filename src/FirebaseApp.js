import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBYUFVWPb182Rgp8o9JNZhv1ZwMd5zAkWE",
  authDomain: "artyourstory.firebaseapp.com",
  projectId: "artyourstory",
  storageBucket: "artyourstory.appspot.com",
  messagingSenderId: "47869260600",
  appId: "1:47869260600:web:4ba7575d708bc7cfa487cd",
  databaseURL:
    "https://artyourstory-default-rtdb.europe-west1.firebasedatabase.app/",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
