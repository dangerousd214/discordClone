import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCPcCDqkTK_czTacgmpyAKKzcqn7pobOLo",
    authDomain: "discord-clone-d654c.firebaseapp.com",
    projectId: "discord-clone-d654c",
    storageBucket: "discord-clone-d654c.appspot.com",
    messagingSenderId: "941398250195",
    appId: "1:941398250195:web:1204c8e3e2a06e871eba26",
    measurementId: "G-TBFFYYW9Y7"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;