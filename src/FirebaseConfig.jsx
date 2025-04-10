// firebase.js

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDJIUvBy6O7QIIpDAudYL6o_sQQK15CYek",
  authDomain: "motoguide-7b8eb.firebaseapp.com",
  projectId: "motoguide-7b8eb",
  storageBucket: "motoguide-7b8eb.appspot.com", // Fixed: was ".app" — should be .appspot.com
  messagingSenderId: "327100148574",
  appId: "1:327100148574:web:9d507ebb6e686d54ca3dcf",
  measurementId: "G-5KQHHJS16M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

// Export for use in your app
export { app, analytics, auth, db, storage };
export default app;
