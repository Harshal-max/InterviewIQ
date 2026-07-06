
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  // authDomain: "interviewiq-ba6ba.firebaseapp.com",
  // projectId: "interviewiq-ba6ba",
  // storageBucket: "interviewiq-ba6ba.firebasestorage.app",
  // messagingSenderId: "862159592601",
  // appId: "1:862159592601:web:7308d702cd708076ddec08"
  authDomain: "interview-56ddf.firebaseapp.com",
  projectId: "interview-56ddf",
  storageBucket: "interview-56ddf.firebasestorage.app",
  messagingSenderId: "856856370013",
  appId: "1:856856370013:web:3e28ebaa2235b1cda366b4"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider()

export {auth , provider}