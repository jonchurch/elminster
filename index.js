/*jshint esversion: 6 */
const util = require('util');
const eventEmitter = require('events').EventEmitter;

const pubsub = require('pubsub-js');

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
    var text = data.trim();

    if (data === 'quit\n') {
        console.log('Bye!');
        process.exit();
        return;
    }
    pubsub.publish('player/' + text, 2);
});

//Create new player, register subscriptions
player1 = players.newPlayer();

pubsub.subscribe('PLAYER_UPDATED_LOC', function(){
    console.log('CTRL: \"There you go movin again!\"');
});
