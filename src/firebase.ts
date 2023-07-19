import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyC4hFnrN1VZksLmRN2RgcHPCkXcw60daAY",
    authDomain: import.meta.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    databaseURL: import.meta.env.REACT_APP_FIREBASE_DATABASE_URL,
    projectId: "sante-7674a",
    storageBucket: import.meta.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: "AIzaSyC4hFnrN1VZksLmRN2RgcHPCkXcw60daAY",
    measurementId: import.meta.env.REACT_APP_FIREBASE_MEASUREMENT_ID
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);

// Initialize Realtime Database and get a reference to the service
export const database = getDatabase(app);

export default app