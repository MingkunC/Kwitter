
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
      apiKey: "AIzaSyCNSBuYOg9TB0Qm6Xft63yVu7zv3CghXDg",
      authDomain: "classtest-23f7a.firebaseapp.com",
      projectId: "classtest-23f7a",
      storageBucket: "classtest-23f7a.appspot.com",
      messagingSenderId: "1083228684380",
      appId: "1:1083228684380:web:dee574fc1391a26e616699",
      measurementId: "G-KJ9R0S6GKR"
    };
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
