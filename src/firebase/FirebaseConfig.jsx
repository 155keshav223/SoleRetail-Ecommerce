import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD5GbJfkVk_59SLls3w0KgppZ2tjPlRksA",
  authDomain: "soleretail.firebaseapp.com",
  projectId: "soleretail",
  storageBucket: "soleretail.appspot.com",
  messagingSenderId: "63722521740",
  appId: "1:63722521740:web:da8f07096a032f2fb0a7a9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app)
export {fireDB,auth } ;