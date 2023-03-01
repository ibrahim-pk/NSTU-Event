// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDpWqSGPwKECzU2LXDsUNE_DPdALjgn9bs",
  authDomain: "versity-event.firebaseapp.com",
  projectId: "versity-event",
  storageBucket: "versity-event.appspot.com",
  messagingSenderId: "631240898309",
  appId: "1:631240898309:web:a1666b519a70327557e96c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;