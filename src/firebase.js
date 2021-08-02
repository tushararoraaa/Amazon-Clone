import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCfDssyMKFOn2ZeuCCfEDpmVOwhN6nT_sA",
  authDomain: "clone-2-a518f.firebaseapp.com",
  databaseURL: "https://clone-2-a518f-default-rtdb.firebaseio.com",
  projectId: "clone-2-a518f",
  storageBucket: "clone-2-a518f.appspot.com",
  messagingSenderId: "661990490776",
  appId: "1:661990490776:web:6ac37673a070406d5286ed",
  measurementId: "G-NW0DXX06MJ",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db , auth };
