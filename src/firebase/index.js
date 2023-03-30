// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getDatabase } from "firebase/database";

export const firebaseApp = initializeApp({
  apiKey: "AIzaSyDpKbznfBvNLh2sbFhpnqQHDGVyYTTHMVI",
  authDomain: "boss-monster-56acd.firebaseapp.com",
  databaseURL: "https://boss-monster-56acd-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "boss-monster-56acd",
  storageBucket: "boss-monster-56acd.appspot.com",
  messagingSenderId: "77905797345",
  appId: "1:77905797345:web:6ab4849757a714d43997a0"
});

// const app = initializeApp(firebaseConfig);
const db = getDatabase(firebaseApp);

export {
  db
}