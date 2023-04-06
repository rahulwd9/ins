import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/storage"

firebase.initializeApp({

  apiKey: "AIzaSyDSnW6TXPQpga5XVfkJcHETghjNsfZjofU",
  authDomain: "instaclone-23-3dc29.firebaseapp.com",
  projectId: "instaclone-23-3dc29",
  storageBucket: "instaclone-23-3dc29.appspot.com",
  messagingSenderId: "1063570369612",
  appId: "1:1063570369612:web:69142ab83e4c04316ad8e9"
});

const auth=firebase.auth();
const storage=firebase.storage();
export{storage,auth};