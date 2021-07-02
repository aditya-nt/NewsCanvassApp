import firebase from "firebase/app"
import "firebase/auth"
import "firebase/firestore"
import "firebase/storage"
import "firebase/database"



const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBETL7WygoQOSVm3hChGFJTGmXbkoqPiEQ",
    authDomain: "newscanvassapp.firebaseapp.com",
    databaseURL: "https://newscanvassapp-default-rtdb.firebaseio.com",
    projectId: "newscanvassapp",
    storageBucket: "newscanvassapp.appspot.com",
    messagingSenderId: "7301069810",
    appId: "1:7301069810:web:32cee49db16fa61e42496b"
})







const db = firebaseApp.firestore()
const rdb = firebaseApp.database()
const auth = firebaseApp.auth()
const storage = firebaseApp.storage()

export { db, rdb , auth, storage ,firebase }