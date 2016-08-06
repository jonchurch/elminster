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
    let player = new Player(id, name, inv, loc);
    this.playerList.push(player);
    return player;
};

/**
 * Player Constructor
 * @param {int} id   Player UID
 * @param {string} name Player's chosen name
 * @param {array} inv  List of items in inventory
 * @param {int} loc  ID of Player's current Room
 */

let Player = function(id, name, inv, loc) {
    const self = this; 
    self.id = id;
    self.name = name;
    self.inventory = inv || [];
    self.location = loc || 0;

    const userString = 'user/' + self.id; 

    ps.subscribe('hi', function(data) {
        console.log(self.name + ': \"Oh hello there\"');
    });


    ps.subscribe('take', function(data){
        if (data == self.id) {
            console.log('that is me!', self.name);
            // self.addToInventory(data)
        }
        else return;
    });

    ps.subscribe(userString + '/look', function(data){
            let roomString = 'room/' + self.getLocation();
            console.log(data);
            if (self.inventory.includes(data) ) {
                console.log('You pull a badly squished slice of pizza out of your pocket');
                return;
            }
ps.publish(roomString + '/getDescription', self.id);
            

    });

    
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
    ps.publish('room/' + loc + '/getDescription');
};
Player.prototype.addToInventory = function(item) {
    this.inventory.push(item);
    ps.publish('player/addToInventory');
};

module.exports = Players;
