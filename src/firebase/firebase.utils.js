import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyChpYE8K5SlqjFP0uSJj957buNQvw_fBsM",
  authDomain: "crwn-db-c26a4.firebaseapp.com",
  databaseURL: "https://crwn-db-c26a4.firebaseio.com",
  projectId: "crwn-db-c26a4",
  storageBucket: "crwn-db-c26a4.appspot.com",
  messagingSenderId: "348758427956",
  appId: "1:348758427956:web:dbc1fa52e53874d060fd61",
  measurementId: "G-H2KTKP3WV3"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
