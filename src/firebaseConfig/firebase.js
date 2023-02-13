// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//Como yo me quiero conectar a firestore tengo que 
import { getFirestore} from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBdSA1xgZ4zhL4k-YxoRoCcDBT1ngqZthg",
  authDomain: "moonlight-9b4f7.firebaseapp.com",
  projectId: "moonlight-9b4f7",
  storageBucket: "moonlight-9b4f7.appspot.com",
  messagingSenderId: "822038315946",
  appId: "1:822038315946:web:86c9ef1a97d6883c0561d3",
  measurementId: "G-LDHZKKZ9XH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
