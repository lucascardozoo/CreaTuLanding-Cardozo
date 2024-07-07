// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyChhjyBXnz1uV8NgUcWIYBoavEw2NM8Y_s",
  authDomain: "tienda-react-655a1.firebaseapp.com",
  projectId: "tienda-react-655a1",
  storageBucket: "tienda-react-655a1.appspot.com",
  messagingSenderId: "189697456418",
  appId: "1:189697456418:web:971eb8a2b91016bc504d7b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)

// PARA EXPORTAR LOS PRODUCTOS DE asyncMock A FIRESTORE
// productos.forEach( (prod) => {
//     addDoc(collection(db, 'productos'), prod)
//         .then( (el) => console.log(`Se agrego el producto id ${el.id}`) )
//         .catch( (err) => console.log(err) )
// })