const firebaseConfig = {
      apiKey: "AIzaSyBAhGJtNk6wtfePjM7sS-B0HXOiwTdd-JA",
      authDomain: "aula95-f2db8.firebaseapp.com",
      databaseURL: "https://aula95-f2db8-default-rtdb.firebaseio.com",
      projectId: "aula95-f2db8",
      storageBucket: "aula95-f2db8.appspot.com",
      messagingSenderId: "76941004720",
      appId: "1:76941004720:web:7ee4d15870e8bce2bc5075",
      measurementId: "G-151HJTMZY1"
    };
    firebase.initializeApp(firebaseConfig);
    user_name=localStorage.getItem("userName");
    room_name=localStorage.getItem("roomName");
    function send(){
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value="";
    }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebaseMessageId = childKey;
         messageData = childData;
//Início do código
name=messageData["name"];
message=messageData["message"];
like=messageData["like"];
name_with_tag = "<h4> "+ name +"<img class='user_tick' src='tick.png'>";
 message_with_tag = "<h4 class='message_h4'> " + message + "</h4>";
 button ="<button class= 'btn btn-warning' id="+firebaseMessageId+" value="+like+"onclick= 'updateLike(this.id)'>";
 span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+ like +"</span></button><hr>";
 row = name_with_tag + message_with_tag + button + span_with_tag; document.getElementById("output").innerHTML += row;

 //Fim do código
      } });  }); }
getData();
function logout() {
      localStorage.removeItem("userName");
      localStorage.removeItem("roomName");
          window.location = "index.html";
}
function updateLike(messageId) {
      console.log("buttonclik")
      button_id=message_id;
      likes=document.getElementById(button_id).value;
      update_likes=Number(likes)+1;
      firebase.database().ref(room_name).child(message_id).update({
       like:update_likes     
      });
}