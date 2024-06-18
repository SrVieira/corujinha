import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyA8LvmltSfCOtGICTyroBBl61cYw_8Ax9I",
  authDomain: "corujinha-f5756.firebaseapp.com",
  projectId: "corujinha-f5756",
  storageBucket: "corujinha-f5756.appspot.com",
  messagingSenderId: "639928186356",
  appId: "1:639928186356:web:67c3484032f69ed0b635a1",
  measurementId: "G-91C6BJVC37"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);