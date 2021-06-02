import firebase from 'firebase'
import 'firebase/storage'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyABLgYIPxSE69zB96oWGt62E7RCtgMojKc",
    authDomain: "facebook-bhubesh.firebaseapp.com",
    projectId: "facebook-bhubesh",
    storageBucket: "facebook-bhubesh.appspot.com",
    messagingSenderId: "47049935843",
    appId: "1:47049935843:web:f9ac3fb01d5ddccea0aed6",
    measurementId: "G-F4RPBBL3R8"
  };


const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

const db = app.firestore();

const storage = firebase.storage();
export {  db , storage }

