/*jshint esversion: 6 */
const util = require('util');
const eventEmitter = require('events').EventEmitter;

const ctrl = new eventEmitter();

process.stdin.resume();
process.stdin.setEncoding('utf8');


process.stdin.on('data', function(data) {
    var text = data.trim();

    if (data === 'quit\n') {
        console.log('Bye!');
		process.exit();
        return;
    }
    ctrl.emit(text, 2);
});
const Items = require('./Models/items.js');
const Players = require('./Models/players.js');
const Rooms = require('./Models/rooms.js');
let rooms = new Rooms();
let players = new Players();
rooms.loadRooms();
player1 = players.newPlayer();
player1.on('MOVE', function(loc){
		this.updateLocation(loc);
	});
ctrl.on('PLAYER_UPDATED_LOC', function(){
	console.log('There you go movin again!');
});
