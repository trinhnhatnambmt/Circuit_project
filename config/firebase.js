// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAdWaF-LGmoIyf2BJ87ObkdoHNSndNE15w",
    authDomain: "circuit-project-8bdd7.firebaseapp.com",
    projectId: "circuit-project-8bdd7",
    storageBucket: "circuit-project-8bdd7.appspot.com",
    messagingSenderId: "286739935790",
    appId: "1:286739935790:web:6b5687f9eda2f556c4a5bf",
    measurementId: "G-R51H23Q62N",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export { storage };
