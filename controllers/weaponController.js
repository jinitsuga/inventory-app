const Weapon = require("../models/weapon");
const Category = require("../models/category");

const async = require("async");

// Show all weapons

exports.weapons_list = (req, res, next) => {
  res.send("yet to implement list of weapons");
};
// Show details of a weapon
exports.weapon_details = (req, res, next) => {
  res.send("weapon details");
};
// Show weapons per type
exports.weapons_type = (req, res, next) => {
  res.send("show weapons per type");
};
// add weapon

exports.weapon_add = (req, res, next) => {
  // simulates selling a weapon to shop
  res.send("adds a weapon to the shop");
};
// delete weapon
exports.weapon_delete = (req, res, next) => {
  // emulates buying a wep (removes from shop)
  res.send("deleteing weapon from shop");
};
