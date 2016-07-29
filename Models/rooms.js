/*jshint esversion: 6 */
const util = require('util');
const EventEmitter = require('events').EventEmitter;
const Rooms = function() {
    this.roomList = [];
};
Rooms.prototype.getRoomList = function() {
    return this.roomList;
};
Rooms.prototype.loadRooms = function() {
    var json = require('../data/teal.json');
    for (var key in json) {
        if (json.hasOwnProperty(key)) {
            let item = json[key];
            //Validating broke when I switched from a for loop through a JS array to a for (key in) on a json object
            /*if (!item.id || !item.name || !item.description || !item.exits) {
                console.log('ERROR - Missing attributes in room:', item);
                return;*/
            var room = new Room(item.id, item.name, item.description, item.exits, item.items, item.isQuitRoom);
            this.roomList.push(room);

        }
    }

    console.log('The rooms were just loaded!');
};


/**
 * Room Constructor
 * @param {int}  id         Room ID
 * @param {string}  name       Player visible room name
 * @param {string}  description       Room description
 * @param {array}  exits      Objects containing direction and room id
 * @param {array}  items      List of items in room
 * @param {boolean} isQuitRoom Exit game upon entry
 */
const Room = function(id, name, desc, exits, items, isQuitRoom) {
    this.id = id;
    this.name = name;
    this.description = desc;
    this.exits = exits || [];
    this.items = items || [];
    this.isQuitRoom = isQuitRoom || false;
    this.on('PLAYER_ENTER', function(roomID, player) {
        if (roomID === this.id) {
            if ('player state') { console.log('do something within the room'); }
        }
    });
};
Room.prototype.getID = function() {
    return this.id;
};
Room.prototype.getName = function() {
    return this.name;
};
Room.prototype.getDescription = function() {
    return this.description;
};
Room.prototype.getDescription = function() {
    return this.exits;
};
Room.prototype.getItems = function() {
    return this.items;
};
Room.prototype.removeItem = function(item) { delete this.items[item]; };
Room.prototype.addItem = function(item) { this.items.push(item); };

util.inherits(Room, EventEmitter);
module.exports = Rooms;
