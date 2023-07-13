import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBUBbp6sJmrMjfnJNdK8f0UqYYp8Dn7VQA",
  authDomain: "movies-7ff84.firebaseapp.com",
  projectId: "movies-7ff84",
  storageBucket: "movies-7ff84.appspot.com",
  messagingSenderId: "617048376533",
  appId: "1:617048376533:web:5439d355183da9e377ce5c",
  measurementId: "G-5KG8VL0BTQ"
};
firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
export default storage;
