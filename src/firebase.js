import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyBB17ZPL9xIN1QIwJS7vigeB5KLej_1eqk",
    authDomain: "jobcase-aa4de.firebaseapp.com",
    projectId: "jobcase-aa4de",
    storageBucket: "jobcase-aa4de.appspot.com",
    messagingSenderId: "616142190274",
    appId: "1:616142190274:web:64892b2c51fbbfd75c2d5b",
    measurementId: "G-L15CZMGFXR"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);   
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth};