// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBEqz2sETnumGJhKueNecU55b6WKH1g72E",
  authDomain: "cac23643-2f2f2.firebaseapp.com",
  projectId: "cac23643-2f2f2",
  storageBucket: "cac23643-2f2f2.appspot.com",
  messagingSenderId: "107603073321",
  appId: "1:107603073321:web:ae92669fcc1d5c12253f38"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app)