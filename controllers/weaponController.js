const Weapon = require("../models/weapon");
const Category = require("../models/category");

const async = require("async");

// Show all weapons

exports.weapons_list = (req, res, next) => {
  Weapon.find({}, "name")
    .sort({ type: "ascending" })
    .exec(function (err, wep_list) {
      if (err) {
        return next(err);
      }
      res.render("weapon_list", {
        title: "List of all available weapons",
        weapons: wep_list,
      });
    });
};
// Show details of a weapon
exports.weapon_details = (req, res, next) => {
  Weapon.findById(req.params.id).exec(function (err, details) {
    if (err) {
      return next(err);
    }
    res.render("weapon_details", {
      title: details.name,
      weapon: details,
    });
  });
};

// Show weapons per type
exports.weapons_type = (req, res, next) => {};
// add weapon

exports.weapon_add_get = (req, res, next) => {
  // simulates selling a weapon to shop
  res.send("send form to add a weapon to the shop");
};
exports.weapon_add_post = (req, res, next) => {
  // simulates selling a weapon to shop
  res.send("adds a weapon to the shop's database");
};
// delete weapon
exports.weapon_delete_get = (req, res, next) => {
  // emulates buying a wep (removes from shop)
  res.send("send form to delete weapon from shop");
};
exports.weapon_delete_post = (req, res, next) => {
  // emulates buying a wep (removes from shop)
  res.send("deleting weapon from shop' database");
};

exports.weapon_update_get = (req, res, next) => {
  res.send("send form to update weapon");
};

exports.weapon_update_post = (req, res, next) => {
  res.send("update weapon on shop's database");
};
