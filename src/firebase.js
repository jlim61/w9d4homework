// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDTBc87Tvv0fPPayk4-yKPJFziGOfzTKz0",
  authDomain: "test-db-3fa32.firebaseapp.com",
  projectId: "test-db-3fa32",
  storageBucket: "test-db-3fa32.appspot.com",
  messagingSenderId: "716366999953",
  appId: "1:716366999953:web:ca29a7898b8ceeae726a30"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export const db = getFirestore(app)
export default app