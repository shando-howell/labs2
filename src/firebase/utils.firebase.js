import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDAJVxhyfK-vcbOKjE-gv3LIk7Vgn_s1m8",
  authDomain: "labs-2ad37.firebaseapp.com",
  projectId: "labs-2ad37",
  storageBucket: "labs-2ad37.appspot.com",
  messagingSenderId: "238331637405",
  appId: "1:238331637405:web:f625314b0d2ee33820ae74"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);