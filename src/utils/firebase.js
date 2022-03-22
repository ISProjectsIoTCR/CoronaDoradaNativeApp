import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAagiePJRFc6Sb6LzqGBhMHmoGtQzpW3-c",
  authDomain: "cdapp-461c7.firebaseapp.com",
  projectId: "cdapp-461c7",
  storageBucket: "cdapp-461c7.appspot.com",
  messagingSenderId: "1004616100084",
  appId: "1:1004616100084:web:78f43fbe511c3bbcc1d6a1"
};
export const initFirebase = initializeApp(firebaseConfig);
export const db = getFirestore(initFirebase);
