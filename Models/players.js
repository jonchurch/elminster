/*jshint esversion: 6 */
const util = require('util');
const EventEmitter = require('events').EventEmitter;
const ps = require('../pubsub.js');

let Players = function() {

    this.playerList = [];
};
Players.prototype.getPlayerList = function() {
    return this.playerList;
};
Players.prototype.loadPlayers = function() {};
Players.prototype.newPlayer = function(id, name, inv, loc) {
    return new Player(id, name, inv, loc);
};

/**
 * Player Constructor
 * @param {int} id   Player UID
 * @param {string} name Player's chosen name
 * @param {array} inv  List of items in inventory
 * @param {int} loc  ID of Player's current Room
 */

let Player = function(id, name, inv, loc) {
    // EventEmitter.call(this);
    // 

    ps.subscribe('hi', function(data) {
        if (data) {
        }
        console.log(self.name + ': \"Oh hello there\"');
    });


    ps.subscribe('take', function(data){
        if (data == self.id) {
            console.log('that is me!', self.name);
            // self.addToInventory(data)
        }
        else return;
    });

    var self = this; 

    self.id = id;
    self.name = name;

    self.inventory = inv || [];
    self.location = loc || 0;

    /*
        this.on('MOVE', function(loc){
            this.updateLocation(loc);
        });
    this.on('1', function(){
        console.log('YAY!');
    });*/

};
// util.inherits(Player ,EventEmitter);

Player.prototype.getId = function() {
    return this.id;
};
Player.prototype.getName = function() {
    return this.name;
};
Player.prototype.getInventory = function() {
    return this.inventory;
};
Player.prototype.getLocation = function() {
    return this.location;
};
Player.prototype.updateLocation = function(loc) {
    this.location = loc;
    ps.publish('player/changed_location');
};
Player.prototype.addToInventory = function(item) {
    this.inventory.push(item);
    ps.publish('player/addToInventory');
};

module.exports = Players;
