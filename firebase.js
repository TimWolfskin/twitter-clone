import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyAOiY6ddmVkVJeUu_hd_HBT-bhLLunQB7Y",
    authDomain: "twitter-clone-db37b.firebaseapp.com",
    projectId: "twitter-clone-db37b",
    storageBucket: "twitter-clone-db37b.appspot.com",
    messagingSenderId: "531660079332",
    appId: "1:531660079332:web:9691046016bc80ce3b2cf1"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };