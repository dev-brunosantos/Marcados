import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCYqzyiFPCTSH4A-JNl4-eVrXmFoKe391k",
  authDomain: "marcados-app-b0141.firebaseapp.com",
  projectId: "marcados-app-b0141",
  storageBucket: "marcados-app-b0141.firebasestorage.app",
  messagingSenderId: "924356829074",
  appId: "1:924356829074:web:e2a1243d24710529622b4b"
};

export const firebaseApp = initializeApp(firebaseConfig);
export const auth = getAuth(firebaseApp);
export const db = getFirestore(firebaseApp);