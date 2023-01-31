import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore, Timestamp as timestamp } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCBNoBRHyY2TCsrgUBlEQrHw7V4DHPT0vc",
  authDomain: "finance-tracker-f4d17.firebaseapp.com",
  projectId: "finance-tracker-f4d17",
  storageBucket: "finance-tracker-f4d17.appspot.com",
  messagingSenderId: "807803473456",
  appId: "1:807803473456:web:a4bd705779ca5d808c67f5",
};

initializeApp(firebaseConfig);

const projectFirestore = getFirestore();

const projectAuth = getAuth();

export const onAuthStateChangedListener = (callback) =>
  onAuthStateChanged(projectAuth, callback);

export { projectFirestore, projectAuth, timestamp };
