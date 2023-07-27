
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: "AIzaSyAZIpoveZDCHC1zpiPqv4fwPhWyEINUfPs",
  authDomain: "peerxp-d1b2d.firebaseapp.com",
  projectId: "peerxp-d1b2d",
  storageBucket: "peerxp-d1b2d.appspot.com",
  messagingSenderId: "1078663554783",
  appId: "1:1078663554783:web:1d9d773f79e8119e4d6b6a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider();
export {auth,provider};