"use strict"

require("dotenv").load();
const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const debug = require('debug')('server');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const Pokemons = require('./models/pokemons').pokemons;
const port = process.env.PORT || 8080;
let users = [];
let sockets = [];

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/dist/'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/dist/index.html'));
});

app.put('/api/message', (req, res) => {
	io.emit('bot message', req.body.message);

	res.status(200).json({
		success: true,
		info: 'message sent',
		message: req.body.message
	});
});

// socket.io
io.on('connection', (socket) => {
	let user = {
		id: socket.id,
		pokemon: Pokemons[Math.floor((Math.random() * 150))]
	};
	users.push(user);
	sockets.push(socket);
	socket.emit('new_user', user);

	//new user event
	io.emit('bot message', user.pokemon.name + ' entrou', user, 'enter');
	io.emit('room_users', users);

	socket.on('chat message', (msg, from, to) => {
		if(to == 'Stadium') {
			io.emit('chat message', msg, from, to);
		}
	});

	socket.on('personal message', (msg, from, to) => {
		sockets.filter((obj) => {
			if(obj.id == to.id) {
				obj.emit('personal message', msg, from, to.id);
			}
		});
	});

	socket.on('disconnect', () => {
		users = users.filter(( obj ) => {
			if(obj.id == socket.id) {
				io.emit('bot message', obj.pokemon.name + ' saiu', obj, 'exit');
			}
			return obj.id !== socket.id;
		});

		io.emit('room_users', users);
	});
});

http.listen(port, () => {
	debug(`Listening on ${port}!`);
});
