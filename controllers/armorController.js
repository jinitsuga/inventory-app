const Armor = require("../models/armor");
const Category = require("../models/category");

const async = require("async");

// Show all Armors

exports.armor_list = (req, res, next) => {
  Armor.find({}, "name")
    .sort({ slot: "ascending" })
    .exec(function (err, list_armor) {
      if (err) {
        return next(err);
      }
      res.render("armor_list", {
        title: "All pieces of armor available",
        armor_list: list_armor,
      });
    });
};
// Show details of a Armor
exports.armor_details = (req, res, next) => {
  Armor.findById(req.params.id).exec(function (err, details) {
    if (err) {
      return next(err);
    }
    res.render("armor_details", {
      title: details.name,
      info: details,
    });
  });
};
// Show armor per type
exports.armor_type = (req, res, next) => {
  res.send("show Armors per type");
};
// add Armor

exports.armor_add_get = (req, res, next) => {
  // simulates selling a Armor to shop
  res.send("send form to add an Armor to the shop");
};
exports.armor_add_post = (req, res, next) => {
  // simulates selling a Armor to shop
  res.send("add an Armor to the shop database");
};
// delete Armor
exports.armor_delete_get = (req, res, next) => {
  // emulates buying a wep (removes from shop)
  res.send("send form for deleting Armor from shop");
};
exports.armor_delete_post = (req, res, next) => {
  // emulates buying a wep (removes from shop)
  res.send("Delete Armor from shop on database");
};
