import firebase from 'firebase/app';
import 'firebase/database';

  const firebaseConfig = {
    apiKey: "AIzaSyDWDeV3QVYZQDg-Qy_0AsWMOoSOAu9E37I",
    authDomain: "paula-poirier-project3.firebaseapp.com",
    databaseURL: "https://paula-poirier-project3-default-rtdb.firebaseio.com/",
    projectId: "paula-poirier-project3",
    storageBucket: "paula-poirier-project3.appspot.com",
    messagingSenderId: "977111895090",
    appId: "1:977111895090:web:9e329106a0bea60350002b"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);



  export default firebase;
