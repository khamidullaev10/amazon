import * as firebase from "firebase"
import "firebase/auth"
import "firebase/firestore"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBTfODlinJhrTCfra7V0RoeCrKPmBz51xs",
    authDomain: "fir-e33d8.firebaseapp.com",
    projectId: "fir-e33d8",
    storageBucket: "fir-e33d8.appspot.com",
    messagingSenderId: "1177659855",
    appId: "1:1177659855:web:1ab25006e455d0e90a4aba",
    measurementId: "G-484JJ2BRMP"
};

const app = firebase.initializeApp(firebaseConfig)
const firestore = app.firestore()
const auth = app.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export { firestore, auth, provider, firebase}