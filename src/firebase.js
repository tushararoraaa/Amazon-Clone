// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyB_lI-2vXFfRmvHq5N4ctW5x9g0g-sAgK4",
  authDomain: "clone-12fb0.firebaseapp.com",
  projectId: "clone-12fb0",
  storageBucket: "clone-12fb0.appspot.com",
  messagingSenderId: "499718131592",
  appId: "1:499718131592:web:9240b842c2ee1b2abb343d",
  measurementId: "G-HNRFRX1J98",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
