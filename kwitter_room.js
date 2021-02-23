
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyDv7dH-CRD1iJjzEwAiNxwbLWHR0fpgdto",
      authDomain: "edchemy-jr.firebaseapp.com",
      databaseURL: "https://edchemy-jr-default-rtdb.firebaseio.com",
      projectId: "edchemy-jr",
      storageBucket: "edchemy-jr.appspot.com",
      messagingSenderId: "62250456771",
      appId: "1:62250456771:web:79047284ceb205af4e7476",
      measurementId: "G-PDLS29ZFTV"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    user_name=localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="Welcome " + user_name + "!" ;

    function addRoom()
      {
      Room_names=document.getElementById("room_name").value;
      firebase.database().ref("/").child(Room_names).update({
            purpose : "Adding Room Name"
      });      
localStorage.setItem("room_name",Room_names);
window.location="kwitter_page.html"
      }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code//

      console.log("Room names" + Room_names);
      row="<div class='room_name' id=" + Room_names + "onclick='redirectToRoomName(this.id)'>#" + Room_names + "</div> <hr>";
      document.getElementById("output").innerHTML += row;

      //End code//
      });});}
function redirectToRoomName(name)
{
console.log(name);
localStorage.setItem("room_name",name);
window.location="kwitter_page.html";
}

      function logout1()
      {
localStorage.removeItem("user_name");
localStorage.removeItem("password");

            window.location="kwitter.html";
      }
getData();
