const Armor = require("../models/armor");
const Category = require("../models/category");

const async = require("async");

// Show all Armors

exports.armors_list = (req, res, next) => {
  res.send("yet to implement list of Armor");
};
// Show details of a Armor
exports.armor_details = (req, res, next) => {
  res.send("Armor details");
};
// Show armor per type
exports.armor_type = (req, res, next) => {
  res.send("show Armors per type");
};
// add Armor

exports.armor_add = (req, res, next) => {
  // simulates selling a Armor to shop
  res.send("adds a Armor to the shop");
};
// delete Armor
exports.armor_delete = (req, res, next) => {
  // emulates buying a wep (removes from shop)
  res.send("deleteing Armor from shop");
};
