import firebase from "firebase"

const firebaseApp = firebse.initializeApp({

});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db,auth}