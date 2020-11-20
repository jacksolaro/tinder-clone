import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCMs-ojdx83UBSk_uF8DFGZnSC1aaj8pYc",
  authDomain: "tinder-clone-f5df0.firebaseapp.com",
  databaseURL: "https://tinder-clone-f5df0.firebaseio.com",
  projectId: "tinder-clone-f5df0",
  storageBucket: "tinder-clone-f5df0.appspot.com",
  messagingSenderId: "135402692554",
  appId: "1:135402692554:web:a807b0f3459f981c767933",
  measurementId: "G-1TC87QQ1YH",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const database = firebaseApp.firestore();

export default database;
