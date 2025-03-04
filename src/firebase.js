import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs, deleteDoc, doc } from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAQgWe34nInChUl8ZbOF9YiVJCjBzvo2cY",
  authDomain: "chronoapp-53363.firebaseapp.com",
  projectId: "chronoapp-53363",
  storageBucket: "chronoapp-53363.firebasestorage.app",
  messagingSenderId: "902735662769",
  appId: "1:902735662769:web:1aac26ba94a78b6c455c90"
};

// Inizializza Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth, collection, addDoc, getDocs, deleteDoc, doc, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut };
