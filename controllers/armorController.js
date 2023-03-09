const Armor = require("../models/armor");
const Category = require("../models/category");

const { body, validationResult } = require("express-validator");

const async = require("async");
const { isObjectIdOrHexString } = require("mongoose");

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
  async.parallel(
    {
      categories(callback) {
        Category.find(callback);
      },
    },
    (err, results) => {
      if (err) {
        return next(err);
      }
      res.render("armor_add", {
        title: "Add a piece of armor",
        slots: ["Head", "Chest", "Legs", "Hands"],
        categories: results.categories,
      });
    }
  );
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
  body("category", "Select a category"),

  (req, res, next) => {
    const errors = validationResult(req);
    const armorPiece = new Armor({
      name: req.body.name,
      price: req.body.price,
      stock: req.body.stock,
      description: req.body.description,
      defense: req.body.defense,
      slot: req.body.slot,
    });

    if (!errors.isEmpty()) {
      async.parallel(
        {
          categories(callback) {
            Category.find(callback);
          },
        },
        (err, results) => {
          if (err) {
            console.log("LOLLLL");
            return next(err);
          }
          res.render("armor_add", {
            title: "Add a piece of armor",
            slots: ["Head", "Chest", "Legs", "Hands"],
            categories: results.categories,
            errors: errors.array(),
          });
        }
      );
      return;
    }
    armorPiece.save((err) => {
      if (err) {
        return next(err);
      }
      res.redirect(armorPiece.link);
    });
  },
];
// delete Armor
exports.armor_delete_get = (req, res, next) => {
  async.parallel(
    {
      armor(callback) {
        Armor.findById(req.params.id).exec(callback);
      },
    },
    (err, result) => {
      if (err) {
        return next(err);
      }
      res.render("armor_delete", {
        title: "Deleting armor",
        piece: result.armor,
      });
    }
  );
};
exports.armor_delete_post = (req, res, next) => {
  // emulates buying a wep (removes from shop)
  res.send("Delete Armor from shop on database");
};
