// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBcfS_JMfqbgQqwK1u-0RNDevDgp2Of0Y0",
  authDomain: "mi-proyecto-react-a7e99.firebaseapp.com",
  projectId: "mi-proyecto-react-a7e99",
  storageBucket: "mi-proyecto-react-a7e99.firebasestorage.app",
  messagingSenderId: "306430305566",
  appId: "1:306430305566:web:fff199cc42240ad0f5950f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const auth = getAuth(app);

export { db, auth };