import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAnMxwJD8hqsBShYGWsKZInqo_mxAOZ08A",
    authDomain: "react-c53bd.firebaseapp.com",
    projectId: "react-c53bd",
    storageBucket: "react-c53bd.appspot.com",
    messagingSenderId: "1017991104330",
    appId: "1:1017991104330:web:a707b38d9f7f8709efe3b3"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };