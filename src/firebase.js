// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAqJrSHfMP0oPitg4nmqHmaeBJj_KW-6bk",
  authDomain: "clone-a3403.firebaseapp.com",
  projectId: "clone-a3403",
  storageBucket: "clone-a3403.appspot.com",
  messagingSenderId: "405233879994",
  appId: "1:405233879994:web:3dacbad64132c1ae8fab83",
  measurementId: "G-TXNLG9548P"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};