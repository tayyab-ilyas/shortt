import firebase from "firebase/compat/app";

const firebaseConfig = {
    apiKey: "AIzaSyCOhzETBBNLyScrJN558yQVmzimjpIui0c",
    authDomain: "url-shortner-46c00.firebaseapp.com",
    projectId: "url-shortner-46c00",
    storageBucket: "url-shortner-46c00.appspot.com",
    messagingSenderId: "871807191092",
    appId: "1:871807191092:web:d52d24225b5c2ab0a42261",
    measurementId: "G-0G4W52BYLD"
  };

  const app = firebase.initializeApp(firebaseConfig)
  const db = app.firestore();

  export default db