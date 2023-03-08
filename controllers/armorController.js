const Armor = require("../models/armor");
const Category = require("../models/category");

const { body, validationResult } = require("express-validator");

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

exports.armor_add_get = (req, res, next) => {
  res.render("armor_add", {
    title: "Add a piece of armor to the shop",
    slots: ["Head", "Chest", "Legs", "Hands"],
  });
};
exports.armor_add_post = [
  body("name", "Must include item's name").trim().isLength({ min: 1 }).escape(),
  body("price", "Must specifiy price").trim().isLength({ min: 1 }).escape(),
  body("stock", "Must specify stock amount")
    .trim()
    .isLength({ min: 0 })
    .escape(),
  body("description", "Must include a description")
    .trim()
    .isLength({ min: 1 })
    .escape(),
  body("defense", "Must specify defense").trim().isLength({ min: 0 }).escape(),
];
// delete Armor
exports.armor_delete_get = (req, res, next) => {
  // emulates buying a wep (removes from shop)
  res.send("send form for deleting Armor from shop");
};
exports.armor_delete_post = (req, res, next) => {
  // emulates buying a wep (removes from shop)
  res.send("Delete Armor from shop on database");
};
