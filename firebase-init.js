// Shared Firebase setup — imported by index.html and admin.html
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyC-35vss7nR5-98se3OfK5YSU85pIeAGCU",
  authDomain: "bioseed-store.firebaseapp.com",
  projectId: "bioseed-store",
  storageBucket: "bioseed-store.firebasestorage.app",
  messagingSenderId: "599351078825",
  appId: "1:599351078825:web:28eff3e7844edacbe21eb8",
  measurementId: "G-KFX9VDK7X9"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

// ⚠️ Replace with your real email(s) — this list controls who can open admin.html
// It must match the list inside firestore.rules exactly, or the dashboard will load
// the page but Firestore will refuse to hand over the orders.
export const ADMIN_EMAILS = ["lahmar.mohamed.302@gmail.com"];
