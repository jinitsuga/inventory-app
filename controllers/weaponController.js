const Weapon = require("../models/weapon");
const Category = require("../models/category");

const { body, validationResult } = require("express-validator");

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
// exports.weapons_type = (req, res, next) => {};
// // add weapon

exports.weapon_add_get = (req, res, next) => {
  async.parallel(
    {
      categories(callback) {
        Category.find({ callback });
      },
    },
    (err, results) => {
      if (err) {
        return next(err);
      }
      res.render("weapon_add", {
        title: "Add a weapon to our inventory",
        types: ["Swords", "Axes", "Spears", "Daggers", "Bows"],
        categories: results.categories,
      });
    }
  );
};
exports.weapon_add_post = [
  body("name", "Must include a name").trim().isLength({ min: 1 }).escape(),
  body("price", "Please specify a price").trim().isLength({ min: 1 }).escape(),
  body("stock", "Specify stock amount").trim().isLength({ min: 0 }).escape(),
  body("description", "Please include item's description")
    .trim()
    .isLength({ min: 1 })
    .escape(),
  body("damage", "Specify weapon's damage")
    .trim()
    .isLength({ min: 1 })
    .escape(),
  body("type", "Select a type").trim().isLength({ min: 1 }).escape(),

  (req, res, next) => {
    const weaponTypes = ["Swords", "Axes", "Spears", "Daggers", "Bows"];
    const weapType = req.body.type;

    const weapon = new Weapon({
      name: req.body.name,
      price: req.body.price,
      stock: req.body.stock,
      description: req.body.description,
      damage: req.body.damage,
      type: req.body.type,
    });

    if (!weaponTypes.includes(weapType)) {
      res.render("weapon_add", {
        title: "Add a weapon to our inventory",
        types: ["Swords", "Axes", "Spears", "Daggers", "Bows"],
        categories: results.categories,
        typeError: "Weapon type not found",
      });
      return;
    }
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      res.render("weapon_add", {
        title: "Add a weapon to our inventory",
        types: ["Swords", "Axes", "Spears", "Daggers", "Bows"],
        categories: results.categories,
        errors: errors.array(),
      });
      return;
    }
    weapon.save((err) => {
      if (err) {
        return next(err);
      }
      res.redirect(weapon.link);
    });
  },
];
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
