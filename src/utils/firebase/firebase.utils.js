import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB3Q62mJCRTBMhchxuLfHrP1Mh5xZ95P0c",
  authDomain: "crwn-clothing-db-98405.firebaseapp.com",
  projectId: "crwn-clothing-db-98405",
  storageBucket: "crwn-clothing-db-98405.appspot.com",
  messagingSenderId: "28735090868",
  appId: "1:28735090868:web:ca9374e615eea0403567e1",
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
