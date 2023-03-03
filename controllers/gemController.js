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
exports.gem_type = (req, res, next) => {
  res.send("show gems per type");
};
// add gem

exports.gem_add_get = (req, res, next) => {
  // simulates selling a gem to shop
  res.send("sends form for adding a gem to the shop");
};

exports.gem_add_post = (req, res, next) => {
  // simulates selling a gem to shop
  res.send("adds a gem to the shop DB");
};
// delete gem
exports.gem_delete_get = (req, res, next) => {
  res.send("sends form for deleteing gem from shop");
};

exports.gem_delete_post = (req, res, next) => {
  res.send("Delete gem from shop db");
};

exports.gem_update_get = (req, res, next) => {
  res.send("sending form to update gem info");
};

exports.gem_update_post = (req, res, next) => {
  res.send("updates gem info on database");
};
