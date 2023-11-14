// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
import firebase from "firebase/compat/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAydYxkBrg_KZiQVBj7Ph12azSxvF6Dn7U",
  authDomain: "summarist-6e7d5.firebaseapp.com",
  projectId: "summarist-6e7d5",
  storageBucket: "summarist-6e7d5.appspot.com",
  messagingSenderId: "317948998700",
  appId: "1:317948998700:web:9a55055247ab1bec630d89"
};

// Initialize Firebase

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const auth = getAuth(app) 


export default app