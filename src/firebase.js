import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDM4bGoipKXaQUQaLvrEPOKASBP1Yknh9M",
  authDomain: "facebook-messenger-clone-57b1f.firebaseapp.com",
  databaseURL: "https://facebook-messenger-clone-57b1f.firebaseio.com",
  projectId: "facebook-messenger-clone-57b1f",
  storageBucket: "facebook-messenger-clone-57b1f.appspot.com",
  messagingSenderId: "604809850173",
  appId: "1:604809850173:web:02ee35f9c7792cc62e2954",
  measurementId: "G-JS5VJJSGSB",
});

const db = firebaseApp.firestore();

export default db;
