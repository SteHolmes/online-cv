import { initializeApp } from "firebase/app"
import { getAnalytics } from "firebase/analytics"
import { getStorage } from 'firebase/storage'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDdKdZcSaVtdo9Ad6x4yT1ogUi7kecf19I",
  authDomain: "online-cv-61be8.firebaseapp.com",
  databaseURL: "https://online-cv-61be8-default-rtdb.firebaseio.com",
  projectId: "online-cv-61be8",
  storageBucket: "online-cv-61be8.firebasestorage.app",
  messagingSenderId: "93165912419",
  appId: "1:93165912419:web:96443f15d89ad792641356",
  measurementId: "G-HS9V2G0LG5"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app)
const storage = getStorage(app)

export {
  analytics,
  storage,
  db
}