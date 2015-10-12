var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var morgan = require('morgan');
var handlebars = require('express-handlebars')
  .create({ defaultLayout:'main' });

app.use(express.static(__dirname + '/public'));
app.use(morgan('dev'));

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.get('/', function(req, res){
  res.render('chat');
});

// socket.io
var users = [];
var pokemon = ['Professor_Oak', 'Bulbasaur', 'Ivysaur', 'Venusaur', 'Charmander', 'Charmeleon', 'Charizard', 'Squirtle', 'Wartortle', 'Blastoise', 'Caterpie', 'Metapod', 'Butterfree', 'Weedle', 'Kakuna', 'Beedrill', 'Pidgey', 'Pidgeotto', 'Pidgeot', 'Rattata', 'Raticate', 'Spearow', 'Fearow', 'Ekans', 'Arbok', 'Pikachu'];
//var bot = {pokemon:'Professor_Oak'};

io.on('connection', function(socket){
  user = {
    id: socket.id,
    pokemon: pokemon[Math.floor((Math.random() * 25) + 1)]
  };
  users.push(user);
  console.log('Online Users: ' + users.length);

  //user picture id
  socket.emit('new_user', user);

  //new user event
  io.emit('bot message', user.pokemon + ' entrou');

  io.emit('users_count', users.length);
  io.emit('room_users', users);

  socket.on('chat message', function(msg, user){
    io.emit('chat message', msg, user);
  });

  socket.on('disconnect', function(){
    users = users.filter(function( obj ) {
      return obj.id !== socket.id;
    });

    io.emit('bot message', user.pokemon + ' saiu');
    io.emit('room_users', users);
    console.log('Online Users: ' + users.length);
  });
});

http.listen(8080, function(){
  console.log('listening on :8080');
});
