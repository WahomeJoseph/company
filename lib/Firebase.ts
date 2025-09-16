// firebaseConfig.ts or firebase.ts

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBheY2WfI904vR5OMYgennNFtyKuenKG1I",
  authDomain: "company-86bc8.firebaseapp.com",
  projectId: "company-86bc8",
  storageBucket: "company-86bc8.firebasestorage.app",
  messagingSenderId: "122683958227",
  appId: "1:122683958227:web:244aed13720a452a3f4526",
  measurementId: "G-1DWR8L7D4G",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Optional: only if you're using analytics
const analytics = getAnalytics(app);

// Firestore instance
const db = getFirestore(app);

export { db };
