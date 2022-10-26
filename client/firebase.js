import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyCI-rO2EM_G1AWU-1bdpZX5SS-2QCvJiCY',
  authDomain: 'codersonly-44cee.firebaseapp.com',
  projectId: 'codersonly-44cee',
  storageBucket: 'codersonly-44cee.appspot.com',
  messagingSenderId: '698672518280',
  appId: '1:698672518280:web:0c005d2d87b84d98d7bb3d',
  measurementId: 'G-4C72GXJ8LG',
});

const db = firebaseApp.firestore();

export default db;
