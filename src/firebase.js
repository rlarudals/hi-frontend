import firebase from "firebase";
import dotenv from "dotenv";
dotenv.config();

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
};

firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();
const storageRef = storage.ref();

export default storageRef;
