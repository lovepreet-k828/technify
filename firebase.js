// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCWfWVvW9EMDemDqxv7WpPbBWuLNKzHguM",
  authDomain: "technify-33217.firebaseapp.com",
  projectId: "technify-33217",
  storageBucket: "technify-33217.appspot.com",
  messagingSenderId: "603761166597",
  appId: "1:603761166597:web:36d78dfa30478e11c14f6c",
  measurementId: "G-E7RJEJY60J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
//export const db = getFirestore(app);

// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";

// const firebaseConfig = {
//   apiKey: "AIzaSyAXFme_oTPlrFmWIm707ac6Z2qawoTvf2k",
//   authDomain: "authentication-tutorial-ec556.firebaseapp.com",
//   projectId: "authentication-tutorial-ec556",
//   storageBucket: "authentication-tutorial-ec556.appspot.com",
//   messagingSenderId: "945663559539",
//   appId: "1:945663559539:web:51b9786fd75d399bf86706",
//   measurementId: "G-22FP5PHT1F",
// };

// const app = initializeApp(firebaseConfig);

// export const auth = getAuth(app);
