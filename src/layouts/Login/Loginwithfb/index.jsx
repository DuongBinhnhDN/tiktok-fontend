import { initializeApp } from "firebase/app";
import { FacebookAuthProvider, getAuth, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCk1yOXH9SpvO0Aafky8WJRe4WmX2EP0-Q",
  authDomain: "login-6d6c7.firebaseapp.com",
  projectId: "login-6d6c7",
  storageBucket: "login-6d6c7.appspot.com",
  messagingSenderId: "523075927369",
  appId: "1:523075927369:web:f5f88d841cb9fcd3bb6e98",
  measurementId: "G-20TDXHFC3G",
};
const app = initializeApp(firebaseConfig);

export function LoginFacebook() {
  const provider = new FacebookAuthProvider();
  signInWithPopup(getAuth(app), provider)
    .then((re) => {
      console.log(re);
    })
    .catch((err) => {
      console.log(err.message);
    });
}
