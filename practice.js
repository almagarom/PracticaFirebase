
// AÑADE LOS ENLACES FIREBASE

//despues de agregar una aplicación
//copiar todos los datos de const config
//tambien inicializa Firebase

// Import the functions you need from the SDKs you need
/*
//import { initializeApp } from "firebase/app";
import { } from 'https://www.gstatic.com/firebasejs/9.8.1/firebase-firestore.js'
import { initializeApp } from '/firebase/app';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC8SSn971aICQQvmV6bb-0AWP168w9UNtM",
  authDomain: "kwitter-ee2c1.firebaseapp.com",
  databaseURL: 'https://kwitter-ee2c1-default-rtdb.firebaseio.com'  ,
  projectId: "kwitter-ee2c1",
  storageBucket: "kwitter-ee2c1.appspot.com",
  messagingSenderId: "266981161543",
  appId: "1:266981161543:web:fbd68126f35e0f2bbccf62"
};




// Initialize Firebase
const app = initializeApp(firebaseConfig);
*/

var firebaseConfig = {
  apiKey: "AIzaSyBYRLt1Ka7PXm4AF1P4fEOU36i2FwkwDmE",
  authDomain: "vyhjbn.firebaseapp.com",
  databaseURL: "https://vyhjbn-default-rtdb.firebaseio.com/",
  projectId: "vyhjbn",
  storageBucket: "vyhjbn.appspot.com",
  messagingSenderId: "1017494382565",
  appId: "1:1017494382565:web:765324f6e2a4f02e85f10c"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function addUser()
{
  user_name = document.getElementById("user_name").value;
  firebase.database().ref("/").child(user_name).update({
    purpose : "adding user"
  });
}
/*
var firebaseConfig = {
  apiKey: "AIzaSyBCsbVncdVflv7b22vasQBlqXa2LQICHPs",
  authDomain: "kwitter123-68b8d.firebaseapp.com",
  databaseURL: "https://kwitter123-68b8d-default-rtdb.firebaseio.com",
  projectId: "kwitter123-68b8d",
  storageBucket: "kwitter123-68b8d.appspot.com",
  messagingSenderId: "964059203346",
  appId: "1:964059203346:web:eae3114c7c8d68e9b0d5cb"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

*/
