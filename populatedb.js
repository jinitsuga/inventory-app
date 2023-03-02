#! /usr/bin/env node

console.log(
  'This script populates some test books, authors, genres and bookinstances to your database. Specified database as argument - e.g.: node populatedb "mongodb+srv://cooluser:coolpassword@cluster0.lz91hw2.mongodb.net/local_library?retryWrites=true&w=majority"'
);

// Get arguments passed on command line
const userArgs = process.argv.slice(2);

const async = require("async");
const Armor = require("./models/armor");
const Category = require("./models/category");
const Gem = require("./models/gem");
const Weapon = require("./models/weapon");

const mongoose = require("mongoose");
mongoose.set("strictQuery", false); // Prepare for Mongoose 7

const mongoDB = userArgs[0];

main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect(mongoDB);
}

const armor = [];
const categories = [];
const gems = [];
const weapons = [];

function armorCreate(
  name,
  price,
  stock,
  description,
  category,
  defense,
  slot,
  cb
) {
  armorpiecedetail = {
    name: name,
    price: price,
    stock: stock,
    description: description,
    category: category,
    defense: defense,
    slot: slot,
  };

  const armorPiece = new Armor(armorpiecedetail);

  armorPiece.save(function (err) {
    if (err) {
      cb(err, null);
      return;
    }
    console.log("New Armor: " + armorPiece);
    armor.push(armorPiece);
    cb(null, armorPiece);
  });
}

function categoryCreate(name, description, cb) {
  const category = new Category({ name: name, description: description });

  category.save(function (err) {
    if (err) {
      cb(err, null);
      return;
    }
    console.log("New Category: " + category);
    categories.push(category);
    cb(null, category);
  });
}

function gemCreate(name, price, stock, quality, category, cb) {
  gemdetail = {
    name: name,
    price: price,
    stock: stock,
    quality: quality,
    category: category,
  };

  const gem = new Gem(gemdetail);
  gem.save(function (err) {
    if (err) {
      cb(err, null);
      return;
    }
    console.log("New Gem: " + gem);
    gems.push(gem);
    cb(null, gem);
  });
}

function weaponCreate(
  name,
  price,
  stock,
  description,
  category,
  damage,
  type,
  cb
) {
  weapondetail = {
    name: name,
    price: price,
    stock: stock,
    description: description,
    category: category,
    damage: damage,
    type: type,
  };

  const weapon = new Weapon(weapondetail);
  weapon.save(function (err) {
    if (err) {
      console.log("ERROR CREATING weapon: " + weapon);
      cb(err, null);
      return;
    }
    console.log("New Weapon: " + weapon);
    weapons.push(weapon);
    cb(null, weapon);
  });
}

function createCategories(cb) {
  async.series(
    [
      function (callback) {
        categoryCreate(
          "Weapons",
          "A list of all our available weapons.",
          callback
        );
      },
      function (callback) {
        categoryCreate(
          "Armor",
          "A list of all our pieces of armor in stock.",
          callback
        );
      },
      function (callback) {
        categoryCreate("Gems", "All of our available gems here.", callback);
      },
    ],
    cb
  );
}

function createArmor(cb) {
  async.series(
    [
      function (callback) {
        armorCreate(
          "Knight Helm",
          25,
          3,
          "Helm equipment of a lower rank knight. Despite the thin metal used, the grooved texture gives them added protection.",
          categories[1],
          14,
          "Head",
          callback
        );
      },
      function (callback) {
        armorCreate(
          "Shadow Mask",
          28,
          2,
          "Black cloth mask worn by spooks from an Eastern land",
          categories[1],
          8,
          "Head",
          callback
        );
      },
      function (callback) {
        armorCreate(
          "Catarina Helm",
          30,
          1,
          "Distinctively shaped helm worn by the Knights of Catarina.",
          categories[1],
          16,
          "Head",
          callback
        );
      },
      function (callback) {
        armorCreate(
          "Black Leather Armor",
          36,
          2,
          "This armor is made of smooth black leather is extremely quiet, a good thing for those who hide in the shadows",
          categories[1],
          18,
          "Chest",
          callback
        );
      },
      function (callback) {
        armorCreate(
          "Crimson Robe",
          34,
          3,
          "Robe of the sorcerers who flooded New Londo to seal away the Dark wraiths",
          categories[1],
          10,
          "Chest",
          callback
        );
      },
      function (callback) {
        armorCreate(
          "Silver Knight Armor",
          45,
          2,
          "Armor of the Silver Knights who protect Anor Londo.",
          categories[1],
          32,
          "Chest",
          callback
        );
      },
      function (callback) {
        armorCreate(
          "Black Leather Gloves",
          18,
          2,
          "The leather itself is thick, offering a decent level of protection.",
          categories[1],
          14,
          "Hands",
          callback
        );
      },
      function (callback) {
        armorCreate(
          "Paladin Gauntlets",
          30,
          2,
          "Gauntlets of Leeroy, Paladin of the Catacombs.",
          categories[1],
          18,
          "Hands",
          callback
        );
      },
      function (callback) {
        armorCreate(
          "Brigand Trousers",
          20,
          4,
          "Worn by the brigands who raid mountain hamlets and attack travelers.",
          categories[1],
          18,
          "Legs",
          callback
        );
      },
      function (callback) {
        armorCreate(
          "Hard Leather Boots",
          23.5,
          4,
          "Boots made of thick leather. Very common type of protective gear.",
          categories[1],
          20,
          "Legs",
          callback
        );
      },
      function (callback) {
        armorCreate(
          "Steel Leggings",
          30,
          3,
          "Leggings of the Knights of Berenike, known for their heavy armaments and armor.",
          categories[1],
          34,
          "Legs",
          callback
        );
      },
    ],
    cb
  );
}

function createWeapons(cb) {
  async.series(
    [
      function (callback) {
        weaponCreate(
          "Abyss Greatsword",
          66,
          1,
          "This greatsword belonged to Lord Gwyn's Knight Artorias.",
          categories[0],
          235,
          "Swords",
          callback
        );
      },
      function (callback) {
        weaponCreate(
          "Uchigatana",
          42,
          2,
          "Katana forged in an Eastern land. Known for its brisk slashing motions.",
          categories[0],
          175,
          "Swords",
          callback
        );
      },
      function (callback) {
        weaponCreate(
          "Demon's Greataxe",
          60,
          1,
          "Carved from the bones of fellow demons.",
          categories[0],
          215,
          "Axes",
          callback
        );
      },
      function (callback) {
        weaponCreate(
          "Battle Axe",
          40,
          3,
          "Standard battle axe. Inflicts regular damage, making it effective in various situations.",
          categories[0],
          155,
          "Axes",
          callback
        );
      },
      function (callback) {
        weaponCreate(
          "Winged Spear",
          48,
          3,
          "A long-hilted spear with a barbed point. Long reach, and can be used with shield up.",
          categories[0],
          174,
          "Spears",
          callback
        );
      },
      function (callback) {
        weaponCreate(
          "Silver Knight Spear",
          55,
          2,
          "The silver knights of Anor Londo guard the city using this beautifully slender weapon.",
          categories[0],
          195,
          "Spears",
          callback
        );
      },
      function (callback) {
        weaponCreate(
          "Parrying Dagger",
          25,
          4,
          "A favorite of the knights of Carim, who are famous for fighting without a shield",
          categories[0],
          90,
          "Daggers",
          callback
        );
      },
      function (callback) {
        weaponCreate(
          "Priscilla's Dagger",
          58,
          2,
          "Possessing the power of lifehunt, it dances about when wielded, in a fashion reminiscent of the white-robed painting guardians.",
          categories[0],
          145,
          "Daggers",
          callback
        );
      },
      function (callback) {
        weaponCreate(
          "Composite Bow",
          32,
          3,
          "Composite bow emphasizing power, shorter range.",
          categories[0],
          140,
          "Bows",
          callback
        );
      },
      function (callback) {
        weaponCreate(
          "Black Bow of Pharis",
          55,
          2,
          "Has a longer range than standard bows, but is more difficult to use.",
          categories[0],
          160,
          "Bows",
          callback
        );
      },
    ],
    cb
  );
}

//     name: name,
//     price: price,
//     description: description,
//     stock: stock,
//     category: category,
function createGems(cb) {
  async.series(
    [
      function (callback) {
        gemCreate("Topaz", 40, 4, "Regular", categories[2], callback);
      },
      function (callback) {
        gemCreate("Topaz", 55, 2, "Flawless", categories[2], callback);
      },
      function (callback) {
        gemCreate("Diamond", 44, 3, "Regular", categories[2], callback);
      },
      function (callback) {
        gemCreate("Diamond", 75, 2, "Perfect", categories[2], callback);
      },
      function (callback) {
        gemCreate("Emerald", 35, 6, "Regular", categories[2], callback);
      },
      function (callback) {
        gemCreate("Emerald", 48, 4, "Flawless", categories[2], callback);
      },
      function (callback) {
        gemCreate("Ruby", 40, 3, "Regular", categories[2], callback);
      },
      function (callback) {
        gemCreate("Ruby", 55, 3, "Flawless", categories[2], callback);
      },
      function (callback) {
        gemCreate("Ruby", 70, 6, "Perfect", categories[2], callback);
      },
      function (callback) {
        gemCreate("Sapphire", 53, 5, "Flawless", categories[2], callback);
      },
    ],
    cb
  );
}

async.series(
  [createCategories, createArmor, createWeapons, createGems],
  // Optional callback
  function (err, results) {
    if (err) {
      console.log("FINAL ERR: " + err);
    } else {
      console.log("Gems: " + gems);
    }
    // All done, disconnect from database
    mongoose.connection.close();
  }
);
