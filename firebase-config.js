import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

export const firebaseConfig = {
  apiKey: "AIzaSyAzVgUia8L2djpqHSyADEVi66h-joLqvw0",
  authDomain: "fcts-80d66.firebaseapp.com",
  projectId: "fcts-80d66",
  storageBucket: "fcts-80d66.appspot.com",
  messagingSenderId: "934677860410",
  appId: "1:934677860410:web:85e4f8f9123b9335a5a503",
  measurementId: "G-X18SQX3ZDD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
