// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage';
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD-VFYffgXcRwEHviCWleXZLhYyu_32vsI",
  authDomain: "image-uploader-a5ca7.firebaseapp.com",
  projectId: "image-uploader-a5ca7",
  storageBucket: "image-uploader-a5ca7.appspot.com",
  messagingSenderId: "344736125956",
  appId: "1:344736125956:web:5cb04a3ac185eef77d5151",
  measurementId: "G-DCHJM7BSK3"
};

// Initialize Firebase
export  const app = initializeApp(firebaseConfig);
export  const storage = getStorage();
//const analytics = getAnalytics(app);

