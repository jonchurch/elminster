const util = require('util');
const EventEmitter = require('events').EventEmitter;

const Items = function(){
	itemList = [];
}
Items.prototype.getItemList = function(){ return this.itemlist; }


/**
 * Item Constructor
 * @param {string} name   Player facing item name
 * @param {string} desc   Short description
 * @param {boolean} static Is the item lootable?
 * @param {int} uuid     Unique ID
 */
const Item = function(name, desc, static, uuid){
	this.name = name;
	this.description = desc;
	this.static = static;
	this.uuid = uuid;
}
Item.prototype.getName = function(){ return this.name; }
Item.prototype.getDescription = function(){ return this.descritpion; }
Item.prototype.getStatic = function(){ return this.static; }
Item.prototype.getUUID = function(){ return this.id; }

util.inherits(Item, EventEmitter);
