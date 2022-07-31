import {initializeApp} from 'firebase/app'
import {getStorage} from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyDdd80HNMSkeT8HexmQIOmFqeHSyL7mAOw",
  authDomain: "netflix-4885b.firebaseapp.com",
  projectId: "netflix-4885b",
  storageBucket: "netflix-4885b.appspot.com",
  messagingSenderId: "12380985715",
  appId: "1:12380985715:web:b9f316c73315290b5a4d06",
  measurementId: "G-WN0NBL0VXM",
};


export const app = initializeApp(firebaseConfig)

export const storage = getStorage(app)
export default storage;

