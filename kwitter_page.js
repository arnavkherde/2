var firebaseConfig = {
      apiKey: "AIzaSyCflwoJ-h-STLq5TcS1w9WyxHxYFD7W5ZM",
      authDomain: "kwitter-f8931.firebaseapp.com",
      databaseURL: "https://kwitter-f8931-default-rtdb.firebaseio.com",
      projectId: "kwitter-f8931",
      storageBucket: "kwitter-f8931.appspot.com",
      messagingSenderId: "468590103374",
      appId: "1:468590103374:web:b64d2eca9a6896c580ec1f"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    user_name = localStorage.getItem("user_name");
    room_name = localStorage.getItem("room_name");
function send()
{
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:msg,
            like:0
      });

      document.getElementById("msg").value = "";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data); 
name = message_data['name'];
message = message_data['message'];
like = message_data['like'];
name_with_tag = "<h4> "+ name +"<img clas='user_tick' src='tick.png'></h4>";
message_with_tag = "<h4 class='message_h4'>" + message +"</h4>";
like_button ="<span class='btn btn_warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+ like +"</span></button><hr";

row = name_with_tag + message_with_tag +like_button + span_with_tag;
document.getElementById("output").innerHTML += row;

//End code
      } });  }); }
getData();
