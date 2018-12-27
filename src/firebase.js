import * as firebase from 'firebase';
import firestore from 'firebase/firestore'

const settings = {timestampsInSnapshots: true};




  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAzjrprX5m_OWAijA37kj0B4tQ11HsomkM",
    authDomain: "fundoonotes-d5fd8.firebaseapp.com",
    databaseURL: "https://fundoonotes-d5fd8.firebaseio.com",
    projectId: "fundoonotes-d5fd8",
    storageBucket: "fundoonotes-d5fd8.appspot.com",
    messagingSenderId: "1091557684794"
  };
  firebase.initializeApp(config);
firebase.firestore().settings(settings);

export default firebase;