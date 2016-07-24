const util = require('util');
const EventEmitter = require('events').EventEmitter;
const Rooms = function() {
    this.roomList = []
};
Rooms.prototype.getRoomList = function() {
    return this.roomList; }
Rooms.prototype.loadRooms = function() {
    var rooms_data = require('..Rooms/teal.json');
    var rooms = [];
    for (i = 0; i < rooms_data.length; i += 1) {
        var config = rooms_data[i];
        if (!config.id || !config.name || !config.description || !config.exits) {
        	console.log('ERROR - Missing attributes in room:', config);
            return;
        } else {
            var room = new Room(config.id, config.name, config.description, config.exits, config.items, config.isQuitRoom);
            // console.log(config);
            this.roomList.push(room);
        }
    }
    console.log('The rooms were just loaded!');
};
}

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
    })
};
Room.prototype.getID = function() {
    return this.id; }
Room.prototype.getName = function() {
    return this.name; }
Room.prototype.getDescription = function() {
    return this.description; }
Room.prototype.getDescription = function() {
    return this.exits; }
Room.prototype.getItems = function() {
    return this.items; }
Room.prototype.removeItem = function(item) { delete this.items[item]; }
Room.prototype.addItem = function(item) { this.items.push(item); }

util.inherits(Room, EventEmitter);
module.exports = Room;
