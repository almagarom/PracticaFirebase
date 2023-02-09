
function usuario()
{
  user_name = document.getElementById("user_name").value;
  firebase.database().ref("/").child(user_name).update({
    purpose : "adding user"
  });
}
// AÑADE LOS ENLACES FIREBASE

//despues de agregar una aplicación
//copiar todos los datos de const config
//tambien inicializa Firebase

// Import the functions you need from the SDKs you need

//import { initializeApp } from "firebase/app";
//import { } from 'https://www.gstatic.com/firebasejs/9.8.1/firebase-firebase-firestore.js'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
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





