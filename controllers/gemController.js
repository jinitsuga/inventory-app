const Gem = require("../models/gem");
const Category = require("../models/category");

const async = require("async");

// Show all gems

exports.gems_list = (req, res, next) => {
  res.send("yet to implement list of gems");
};
// Show details of a gem
exports.gem_details = (req, res, next) => {
  res.send("gem details");
};
// Show gems per type
exports.type = (req, res, next) => {
  res.send("show gems per type");
};
// add gem

exports.gem_add = (req, res, next) => {
  // simulates selling a gem to shop
  res.send("adds a gem to the shop");
};
// delete gem
exports.gem_delete = (req, res, next) => {
  // emulates buying a wep (removes from shop)
  res.send("deleteing gem from shop");
};
