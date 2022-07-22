import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, onValue } from "firebase/database";
import { useEffect, useState } from "react";
import { Navbar } from "./Navbar";
import { Button } from "./Button";

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
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

function writeUserData(userId, name, email, imageUrl) {
  set(ref(db, "users/" + userId), {
    username: name,
    email: email,
    profile_picture: imageUrl,
  });
}

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const db = getDatabase();
    const usersRef = ref(db, "users/");
    onValue(usersRef, (snapshot) => {
      const data = snapshot.val();
      setUsers(Object.values(data));
    });
  }, []);

  return (
    <div className="App">
      <Navbar />
      <p>Dorothy, Saki and Jack! Can you see this?</p>

      {users.map((user) => {
        return <div key={user.username}>{user.username}</div>;
      })}

      <Button
        onClick={() => {
          writeUserData(
            Math.floor(Math.random() * 100),
            Math.floor(Math.random() * 100),
            "borama@borama.bor",
            null
          );
        }}
      >
        Click me
      </Button>
      <Button type="primary">Primary button</Button>
      <Button type="secondary">Secondary button</Button>
      <Button type="transparent">Transparent button</Button>
    </div>
  );
}

export default App;
