import { initializeApp } from 'firebase/app';

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateEmail,
  sendEmailVerification,
  updatePassword,
} from 'firebase/auth';

import {
  getFirestore,
  doc,
  addDoc,
  setDoc,
  getDoc,
  collection,
  getDocs,
  query,
  where,
  onSnapshot,
  orderBy,
  updateDoc,
  deleteField,
  increment,
} from 'firebase/firestore';

import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';

const firebaseApp = initializeApp({
  apiKey: "AIzaSyBK4nNr6Cv-3lcNdl1rCJVhXniJwBX6twc",
  authDomain: "khana-sub-kai-liyai.firebaseapp.com",
  projectId: "khana-sub-kai-liyai",
  storageBucket: "khana-sub-kai-liyai.appspot.com",
  messagingSenderId: "204908460108",
  appId: "1:204908460108:web:20ffd50c30d79fa2511ce9",
  measurementId: "G-N9K56TZGB0"
});

const auth = getAuth();
const db = getFirestore();
const storage = getStorage();

export {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateEmail,
  sendEmailVerification,
  updatePassword,
  db,
  doc,
  setDoc,
  getDoc,
  addDoc,
  collection,
  getDocs,
  query,
  where,
  onSnapshot,
  orderBy,
  updateDoc,
  deleteField,
  increment,
  storage,
  ref,
  uploadBytes,
  getDownloadURL,
};
