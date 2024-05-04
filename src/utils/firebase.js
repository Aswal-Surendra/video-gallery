// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAbIa1hvNZBredRr2qCXLkYolx1XVjgDj8",
  authDomain: "aswalvideogellary.firebaseapp.com",
  projectId: "aswalvideogellary",
  storageBucket: "aswalvideogellary.appspot.com",
  messagingSenderId: "1035438560425",
  appId: "1:1035438560425:web:ae4847e21eb867706f45b8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
