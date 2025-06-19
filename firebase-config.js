import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

  const firebaseConfig = {
    apiKey: "AIzaSyCBm7kbBZSuBiKCzJb21ggwQ19EfXoHiKA",
    authDomain: "fire-base-c18da.firebaseapp.com",
    projectId: "fire-base-c18da",
    storageBucket: "fire-base-c18da.firebasestorage.app",
    messagingSenderId: "455838398886",
    appId: "1:455838398886:web:9ac4fa21453b8ba277f767",
    measurementId: "G-3Y78Y6QG2C"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
