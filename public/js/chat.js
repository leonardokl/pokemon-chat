var id;
var socket = io();

$('form').submit(function(){
  socket.emit('chat message', $('#icon_prefix').val(), id);
  $('#icon_prefix').val('');
  return false;
});

//quando entrar no chat
socket.on('new_user', function(user){id = user;
  //img
  $('#slide-out').prepend("<li><img id='profile' src='img/" + user.pokemon + ".png' alt='' class='responsive-img'></li>");
  //name
  $('#slide-out').prepend("<li><a href='#'><i class='tiny material-icons' style='color:green'>info</i> " + user.pokemon + "</a></li>");
});

socket.on('chat message', function(msg, user){
  $('#messages').append($('<li class="collection-item avatar">').html("<img src='img/" + user.pokemon + ".png' alt='' class='circle'><span class='title'><b>" + user.pokemon + "</b></span><p>" + msg + "</p>"));document.getElementById( 'last-message' ).scrollIntoView();
});

socket.on('bot message', function(msg){
  $('#messages').append($('<li class="collection-item avatar">').html("<img src='img/Oak.png' alt='' class='circle'><span class='title'><b>Professor Oak</b></span><p>" + msg + "</p>"));document.getElementById( 'last-message' ).scrollIntoView();
});
socket.on('room_users', function(users){
  usersLi = [];
  $.each(users, function( key, val ) {
    usersLi.push("<li><a>" + users[key].pokemon + "</a></li>")
  });
  $("#roomUsers").html(usersLi);
  $("#nUsers").html(users.length);
});
