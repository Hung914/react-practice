import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBzHakTMoE9mnUqwERFWJOx1yToXW9_z8M",
    authDomain: "fbook-8ac98.firebaseapp.com",
    projectId: "fbook-8ac98",
    storageBucket: "fbook-8ac98.appspot.com",
    messagingSenderId: "649530373214",
    appId: "1:649530373214:web:f6ff08cf34c1a8d49070cf"
  };

  //connect front end to back end
  const firebaseApp = firebase.initializeApp(firebaseConfig);
   //connect to db
  const db = firebaseApp.firestore();
  //authentication
  const auth = firebase.auth();

  const provider = new firebase.auth.GoogleAuthProvider();


  export {auth, provider};
  export default db;