import {getApp, getApps, initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAzqwAns4JF1wdsjJUnNoZNiHWvFvi4g2s",
  authDomain: "chatgpt-messenger-nextjs-20700.firebaseapp.com",
  projectId: "chatgpt-messenger-nextjs-20700",
  storageBucket: "chatgpt-messenger-nextjs-20700.appspot.com",
  messagingSenderId: "658349374834",
  appId: "1:658349374834:web:d4ff777d5746cfcb9131eb"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db};