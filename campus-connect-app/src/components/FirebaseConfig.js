// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
// if here firebase module error show ->> npm install firebase

const firebaseConfig = { // campus connect dabase related
  apiKey: "AIzaSyDlULBPcQ4zb_Ufyyf35w7ObsNJWavsh9Y",
  authDomain: "campusconnect-3a629.firebaseapp.com",
  projectId: "campusconnect-3a629",
  storageBucket: "campusconnect-3a629.appspot.com",
  messagingSenderId: "278412334654",
  appId: "1:278412334654:web:950de3b80ef34c3bf9236f",
  measurementId: "G-0L8B5PN92C"
};

const app = initializeApp(firebaseConfig);// main object is made in app
const auth = getAuth(app); //database related information
const provider = new GoogleAuthProvider();

export {auth, provider}