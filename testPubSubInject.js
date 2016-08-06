/*jshint esversion: 6 */
const util = require('util');
const ps = require('./pubsub.js');

const Items = require('./Models/items.js');
const Players = require('./Models/players.js');
const Rooms = require('./Models/rooms.js');
let rooms = new Rooms();
let players = new Players();
rooms.loadRooms();
//Listen for user input, publish input
process.stdin.resume();
process.stdin.setEncoding('utf8');
process.stdin.on('data', function(data) {
	let text = data.trim();
	let arr = text.split(" ");
	let command = arr.shift();
	// console.log('text after shift:', arr);
    if (data === 'quit\n') {
        console.log('Bye!');
        process.exit();
        return;
    }
    ps.publish(command, arr);
});

const sheckla = players.newPlayer(772, 'Sheckla');
const dave = players.newPlayer(1, 'Dave');
// console.log(player1);



ps.subscribe('player/move', function(data){
	console.log('player be movin!');
});

ps.subscribe('player/addToInv', function(){
	console.log('heard player inv add!');
});


/**
 *  The goal is to allow any model to emit events that can be listened to by any other model or controller
 *
 * So now that I have an events object firing and listening, how do I add listeners for my models?
 *
 * I can require the same pubsub module without calling new, and as long as it is storing every listener that is called by .subscribe to an array within itself, then I'll still have a running list that can be updated from other modules!!! woooo!!
 */
