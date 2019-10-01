import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAnDcl1HQEt127rEXewPty4e8G5rKuyOGQ",
  authDomain: "clothgram-db.firebaseapp.com",
  databaseURL: "https://clothgram-db.firebaseio.com",
  projectId: "clothgram-db",
  storageBucket: "",
  messagingSenderId: "432622379422",
  appId: "1:432622379422:web:44f40f42ae91236209768f",
  measurementId: "G-SZ0RNL5FQL"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
