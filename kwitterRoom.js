
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

  userName = localStorage.getItem("userName");

document.getElementById("userName").innerHTML = "Bem-vindo(a) " + userName + "!";

function addRoom()
{
  roomName = document.getElementById("roomName").value;

  firebase.database().ref("/").child(roomName).update({
    purpose : "adicionar nome de sala"
  });

    localStorage.setItem("roomName", roomName);
    
    window.location = "kwitterPage.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       roomNames = childKey;
       console.log("Nome da Sala - " + roomNames);
      row = "<div class='roomName' id="+roomNames+" onclick='redirectToRoomName(this.id)' >#"+ roomNames +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("roomName", name);
    window.location = "kwitterPage.html";
}

function logout() {
localStorage.removeItem("userName");
localStorage.removeItem("roomName");
    window.location = "index.html";
}
