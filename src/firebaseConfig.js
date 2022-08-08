import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCvsHFaFu3lrBMJ6J8HMJJCTMjDrrS6cgg",
  authDomain: "join-now-23dbb.firebaseapp.com",
  projectId: "join-now-23dbb",
  storageBucket: "join-now-23dbb.appspot.com",
  messagingSenderId: "1040799720179",
  appId: "1:1040799720179:web:9d1f3cbf96861fc4f34d86",
};

const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);
export const dp = getFirestore(app);
