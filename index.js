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
    // let command = arr.shift();
    // console.log('text after shift:', arr);
    if (data === 'quit\n') {
        console.log('Bye!');
        process.exit();
        return;
    }
    if (arr[0] == 'look') {
        ps.publish('user/1/look', arr[1]);
        return;
    }
    if (arr[0] == 'move') {
        rick.updateLocation(arr[1]);
        return;
    }
    let cmd = arr.shift();
    ps.publish(cmd, arr);
    console.log('ARRAY:', arr);
});

ps.subscribe('user/1/look', function() {
    console.log('Heard it!');
});
//Create new player, register subscriptions
var rick = players.newPlayer(1, "Ricklord", ['pizza']);
