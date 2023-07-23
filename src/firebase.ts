import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: 'AIzaSyCezE96DaDcGcuENqpP2rP5zYV-Ye_o5ug',
    authDomain: import.meta.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    databaseURL: import.meta.env.REACT_APP_FIREBASE_DATABASE_URL,
    projectId: 'satori-1c00a',
    storageBucket: import.meta.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: '1:87752094850:web:9a0d7a6e35390e8dc9309b',
    measurementId: import.meta.env.REACT_APP_FIREBASE_MEASUREMENT_ID
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);

// Initialize Realtime Database and get a reference to the service
export const database = getDatabase(app);

export default app