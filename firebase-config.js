import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

export const firebaseConfig = {
  apiKey: "AIzaSyC761L4rctmqR9o6T0OOgv_voKfGBXtHHI",
  authDomain: "fcts-android.firebaseapp.com",
  projectId: "fcts-android",
  storageBucket: "fcts-android.appspot.com",
  messagingSenderId: "30144397712",
  appId: "1:30144397712:android:e28838bba3b0a2bd0d7315"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
