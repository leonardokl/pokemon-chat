var express = require('express')
  , app = express()
  , http = require('http').Server(app)
  , io = require('socket.io')(http)
  , morgan = require('morgan')
  , handlebars = require('express-handlebars').create({ defaultLayout:'main' })
  , bodyParser = require('body-parser')
  , Pokemons = require('./models/pokemons').pokemons
  ;

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.get('/', function(req, res) {
  res.render('chat');
});

app.put('/api/message', function(req, res) {
  io.emit('bot message', req.body.message);
  res.status(200).json({
    success: true,
    info: 'message sent',
    message: req.body.message
  });
});

// socket.io
var users = [];
var sockets = [];
io.on('connection', function(socket) {
  user = {
    id: socket.id,
    pokemon: Pokemons[Math.floor((Math.random() * 150))]
  };
  users.push(user);
  sockets.push(socket);
  socket.emit('new_user', user);

  //new user event
  io.emit('bot message', user.pokemon.name + ' entrou');
  io.emit('room_users', users);

  socket.on('chat message', function(msg, user) {
    io.emit('chat message', msg, user);
  });

  socket.on('personal message', function(msg, from, to) {
    sockets.filter(function(obj) {
      if(obj.id == to) {
        obj.emit('personal message', msg, from, to);
      }
    });
  });

  socket.on('disconnect', function() {
    users = users.filter(function( obj ) {
      if(obj.id == socket.id) {
        io.emit('bot message', obj.pokemon.name + ' saiu');
      }
      return obj.id !== socket.id;
    });

    io.emit('room_users', users);
  });
});

http.listen(8080, function() {
  console.log('listening on :8080');
});
