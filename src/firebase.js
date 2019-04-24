import firebase from "firebase/app";
import "firebase/app";
import "firebase/database";

const config = {
  apiKey: "AIzaSyDgmHsbNKNVUW3PokhinE_44II0xTKiPoc",
  authDomain: "handywatch-01.firebaseapp.com",
  databaseURL: "https://handywatch-01.firebaseio.com",
  projectId: "handywatch-01",
  storageBucket: "handywatch-01.appspot.com",
  messagingSenderId: "728116597546"
};

firebase.initializeApp(config);

const firebaseDB = firebase.database();

const firebaseClockfaces = firebaseDB.ref("clockfaces");
export { firebaseDB, firebaseClockfaces};
