import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyC9uQ2W5ekxg_Bcm9GhvKrhHSBmisYT7O4",
  authDomain: "originsupps-5707a.firebaseapp.com",
  projectId: "originsupps-5707a",
  storageBucket: "originsupps-5707a.appspot.com",
  messagingSenderId: "803485409421",
  appId: "1:803485409421:web:bd50030a6c929b7bc782c4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
