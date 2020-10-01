import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAAiMDiNEz5P1f-_IV5eCLZWuFKMEjqW-c",
  authDomain: "crown-db-e3078.firebaseapp.com",
  databaseURL: "https://crown-db-e3078.firebaseio.com",
  projectId: "crown-db-e3078",
  storageBucket: "crown-db-e3078.appspot.com",
  messagingSenderId: "452546557119",
  appId: "1:452546557119:web:8491cd85a4fdded59c420a"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
