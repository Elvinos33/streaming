// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

import { getAuth, setPersistence, browserLocalPersistence, onAuthStateChanged } from "firebase/auth";

import { getFirestore} from "firebase/firestore";

import { getStorage, ref } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

    apiKey: "AIzaSyAZpRs3YZC8GtBKTel4FNz1k_sBUITsvj4",

    authDomain: "videoyff.firebaseapp.com",

    projectId: "videoyff",

    storageBucket: "gs://videoyff.appspot.com",

    messagingSenderId: "839653256540",

    appId: "1:839653256540:web:85c22780b9522dcadc6599"

};



// Initialize Firebase

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const db = getFirestore(app);

export const storage = getStorage(app);



setPersistence(auth, browserLocalPersistence);

onAuthStateChanged(auth, (user) => {
    if (user) {
        console.log(`User ${user.displayName} is signed in`);
    } else {
        console.log("User is signed out");
    }
})