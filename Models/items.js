/*jshint esversion: 6 */
const util = require('util');

const Items = function(){
	this.itemList = [];
};
Items.prototype.getItemList = function(){ return this.itemlist; };
Items.prototype.loadItems = function(){};


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
};
Item.prototype.getName = function(){ return this.name; };
Item.prototype.getDescription = function(){ return this.descritpion; };
Item.prototype.getStatic = function(){ return this.static; };
Item.prototype.getUUID = function(){ return this.id; };

module.exports = Items;
