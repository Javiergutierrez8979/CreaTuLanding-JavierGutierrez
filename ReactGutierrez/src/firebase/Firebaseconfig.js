// src/firebase/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Tu configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCrlcCnRkfliVrXIMxQRIwxxeenX2Qq9sI",
  authDomain: "flex-react-gutierrez.firebaseapp.com",
  projectId: "flex-react-gutierrez",
  storageBucket: "flex-react-gutierrez.appspot.com",
  messagingSenderId: "263213262140",
  appId: "1:263213262140:web:699bd43c03a213be47ea39",
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Obtener la instancia de Firestore
const db = getFirestore(app);

export { db };
