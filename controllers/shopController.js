const async = require("async");

const Armor = require("../models/armor");
const Gem = require("../models/gem");
const Weapon = require("../models/weapon");

// Show home page

exports.index = (req, res, next) => {
  async.parallel(
    {
      armor_count(cb) {
        Armor.countDocuments({}, cb);
      },
      gem_count(cb) {
        Gem.countDocuments({}, cb);
      },
      weapon_count(cb) {
        Weapon.countDocuments({}, cb);
      },
    },
    (err, results) => {
      if (err) {
        return next(err);
      }
      res.render("index", {
        title: "Irina of Carim (merchant)",
        error: err,
        data: results,
      });
    }
  );
};
