import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDI-gkv-MF-oWN5cnuDsu_re3IiQoi2QLE",
  authDomain: "unipam-carlos-eduardo.firebaseapp.com",
  projectId: "unipam-carlos-eduardo",
  storageBucket: "unipam-carlos-eduardo.firebasestorage.app",
  messagingSenderId: "837773671276",
  appId: "1:837773671276:web:de7fa30eb37dae862b9149"
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const db = getFirestore(app);