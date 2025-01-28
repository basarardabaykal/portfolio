import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDE99vsdfnyBaVFVmq6Lr6oFT3m3yG2L5Y",
  authDomain: "portfolio-8b6dc.firebaseapp.com",
  projectId: "portfolio-8b6dc",
  storageBucket: "portfolio-8b6dc.firebasestorage.app",
  messagingSenderId: "179484568729",
  appId: "1:179484568729:web:dbea51dce8446946cadc08"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db};