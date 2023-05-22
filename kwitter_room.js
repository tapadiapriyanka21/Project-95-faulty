const firebaseConfig = {
  apiKey: "AIzaSyDjGJ219LeTDeeCy8utDTdFEC-QTRrHpWY",
  authDomain: "let-s-chat-web-app-56c9c.firebaseapp.com",
  projectId: "let-s-chat-web-app-56c9c",
  storageBucket: "let-s-chat-web-app-56c9c.appspot.com",
  messagingSenderId: "1054292686664",
  appId: "1:1054292686664:web:620fe479c613b2ba95a57d"
};
firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
function addRoom() {
  room_name = document.getElementById("room_name").value;

  firebaseConfig.database().ref("/").child(room_name).update({
    purpose: "Adding Room Name"
  });
  localStorage.setItem("room_name", room_name);
  window.location = "kwitter_page.html";
}
function getData() {
  firebase.database().ref("/").on('value',
    function (snapshot) {
      document.getElementById("output").innerHTML = "";
      snapshot.forEach(function (childSnapshot) {
        childKey = childSnapshot.key;
        Room_names = childKey;
        //Start code
        console.log("Room Name" + Room_names);
        row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)'>#" + Room_names + "</div><hr>";
        document.getElementById("output").innerHTML += row;
        //End code
      });
    });
}
getData();
function redirectToRoomName(name) {
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location = "kwitter_page.html";

}