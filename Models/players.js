const util  = require('util');
const EventEmitter = require('events').EventEmitter;

let Players = function() {

	this.playerList = [];
};
Players.prototype.getPlayers = function() { return this.playerList; };

/**
 * Player Constructor
 * @param {int} id   Player UID
 * @param {string} name Player's chosen name
 * @param {array} inv  List of items in inventory
 * @param {int} loc  ID of Player's current Room
 */
let Player = function(id, name, inv, loc){
	this.id = id;
	this.name = name;

	this.inventory = inv || [];
	this.location = location;
};

Player.prototype.getId = function() { return this.id; };
Player.prototype.getName = function() { return this.name; };
Player.prototype.getInventory = function() { return this.inventory; };
Player.prototype.getLocation = function() { return this.location; };
Player.prototype.updateLocation = function(loc) {  this.location = loc;
	this.emit('PLAYER_UPDATED_LOC');
	};
Player.prototype.addToInventory = function(item) {this.inventory.push(item);
	this.emit('PLAYER_ADDED_ITEM');
	};

util.inherits(Player, EventEmitter);
// module.exports = Players;

