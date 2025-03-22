// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBx2F0Vqe2-jw8R8qwGS7iKDdBvqBIBCo8",
  authDomain: "skilledin-chat.firebaseapp.com",
  projectId: "skilledin-chat",
  storageBucket: "skilledin-chat.appspot.com",
  messagingSenderId: "1007603200135",
  appId: "1:1007603200135:web:7f01846cf0fbb3d03e0822"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };