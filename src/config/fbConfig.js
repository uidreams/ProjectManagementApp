 import firebae from 'firebase/app'
 import 'firebase/firestore'
 import 'firebase/auth'
 
 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyAMIFggiccLtLt1AR3ia7lliTqUDLWdzUI",
    authDomain: "projectmanagementapp-9150c.firebaseapp.com",
    databaseURL: "https://projectmanagementapp-9150c.firebaseio.com",
    projectId: "projectmanagementapp-9150c",
    storageBucket: "projectmanagementapp-9150c.appspot.com",
    messagingSenderId: "739683200080",
    appId: "1:739683200080:web:272f9a742a4c7073037555",
    measurementId: "G-KR50H868ZG"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  firebase.firestore().settings({ timestampsInSnapshots: true })

  export default firebase