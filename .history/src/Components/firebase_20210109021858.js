import firebase from "firebase"

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAdY3A-95s3zs4s1g-kfEOdsgazNom-1xM",
    authDomain: "clone-4bd52.firebaseapp.com",
    projectId: "clone-4bd52",
    storageBucket: "clone-4bd52.appspot.com",
    messagingSenderId: "444015892168",
    appId: "1:444015892168:web:968a7e0451fd1051ae77fd",
    measurementId: "G-QRQNR0RQNN",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db,auth}