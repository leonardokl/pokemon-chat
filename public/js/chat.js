var login;
var checked = false;
var color;
var socket = io();
var stadium = [];
var onlineUsers = [];
var roomDest = 'Stadium';

$('form').submit(function() {
  var msg = $('#icon_prefix').val();

  if(roomDest != 'Stadium') {
    var message = "<li class='collection-item avatar'><img src='img/pokemons/" + login.pokemon._id + ".png' alt='' class='circle'><span class='title'><b>" + login.pokemon.name + "</b></span><p>" + msg + "</p></li>";
    socket.emit('personal message', $('#icon_prefix').val(), login, roomDest);
    $('#messages').append(message);
    document.getElementById( 'last-message' ).scrollIntoView();
    addUserMsg(message, roomDest.id);
  } else {
    socket.emit('chat message', $('#icon_prefix').val(), login, roomDest);
  }
  $('#icon_prefix').val('');
  return false;
});

//quando entrar no chat
socket.on('new_user', function(user) {
  login = user;
  $('#userImage').html("<li><img id='profile' src='img/pokemons/" + user.pokemon._id + ".png' alt='' class='responsive-img'></li>");
  $('#userName').html("<li><a onCLick='getRoomMsg()'><i class='tiny material-icons' style='color:green'>info</i> " + user.pokemon.name + "</a></li>");
  getDominantColor();
});

socket.on('chat message', function(msg, user) {
  var message = "<li class='collection-item avatar'><img src='img/pokemons/" + user.pokemon._id + ".png' alt='' class='circle'><span class='title'><b>" + user.pokemon.name + "</b></span><p>" + msg + "</p></li>";
  stadium.push(message);
  if(roomDest == 'Stadium') {
    $('#messages').append(message);
    document.getElementById( 'last-message' ).scrollIntoView();
  }
});

socket.on('personal message', function(msg, from, to) {
  var message = "<li class='collection-item avatar'><img src='img/pokemons/" + from.pokemon._id + ".png' alt='' class='circle'><span class='title'><b>" + from.pokemon.name + "</b></span><p>" + msg + "</p></li>";
  addUserMsg(message, from.id);

  if(roomDest.id == from.id) {
    $('#messages').append(message);
    document.getElementById( 'last-message' ).scrollIntoView();
  } else {
    Materialize.toast(from.pokemon.name + ' enviou uma mensagem', 4000);
  }
});

socket.on('bot message', function(msg, user, type) {
  if(type == 'enter' && checked == true) {
    user.messages = [];
    onlineUsers.push(user);
  } else if(type == 'exit' && checked == true) {
    onlineUsers = onlineUsers.filter(function( obj ) {
      return obj.id !== user.id;
    });
  }
  var message = "<li class='collection-item avatar'><img src='img/Oak.png' alt='' class='circle'><span class='title'><b style='color:#4DB6AC'>Professor Oak</b></span><p>" + msg + "</p>";
  $('#messages').append(message);
  stadium.push(message)
  document.getElementById( 'last-message' ).scrollIntoView();
});

socket.on('room_users', function(users) {
  usersLi = [];
  $.each(users, function( key, val ) {
    if(checked == false) {
      users[key].messages = [];
      onlineUsers.push(users[key]);
    }
    usersLi.push("<li><a id='" + users[key].id + "' >" + users[key].pokemon.name + "</a></li>")
  });
  checked = true;
  $("#roomUsers").html(usersLi);
  $("#nUsers").html(users.length);
  $("#roomUsers a").click(function() {
    if(this.id != login.id) {
      sendPersonalMsg('; )', login.pokemon.name, this.id);
    }
  });
});

function sendPersonalMsg(msg, from, to) {
  var target = findOnlineUsersById(to);
  $('#messages').empty();
  $('#roomName').html(target.pokemon.name);
  roomDest = target;
  getUserMsg();
}

function getRoomMsg() {
  roomDest = 'Stadium';
  $('#roomName').html(roomDest);
  $('#messages').empty();
  $('#messages').append(stadium);
  document.getElementById( 'last-message' ).scrollIntoView();
}

function findOnlineUsersById(to) {
  $.each(onlineUsers, function( key, val ) {
    if(String(onlineUsers[key].id) == String(to)) {
      target = onlineUsers[key];
    }
  });
  return target;
}

function addUserMsg(msg, from) {
  $.each(onlineUsers, function( key, val ) {
    if(String(onlineUsers[key].id) == String(from)) {
      onlineUsers[key].messages.push(msg);
    }
  });
}

function getUserMsg() {
  $.each(onlineUsers, function( key, val ) {
    if(String(onlineUsers[key].id) == String(roomDest.id)) {
      $('#messages').append(onlineUsers[key].messages);
    }
  });

}
