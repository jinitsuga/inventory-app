const express = require("express");
const router = express.Router();

const armor_controller = require("../controllers/armorController");
const category_controller = require("../controllers/categoryController");
const gem_controller = require("../controllers/gemController");
const weapon_controller = require("../controllers/weaponController");
const shop_controller = require("../controllers/shopController");
const category = require("../models/category");

// main shop route
router.get("/", shop_controller.index);

// category related routes
router.get("/categories", category_controller.category_list);

router.get("/category/:id", category_controller.category_details);

router.get("/category/add", category_controller.category_add_get);

router.post("/category/add", category_controller.category_add_post);

router.get("/category/:id/delete", category_controller.category_delete_get);

router.post("/category/:id/delete", category_controller.category_delete_post);

// Armor related routes

router.get("/armor", armor_controller.armor_list);

router.get("/armor/:id", armor_controller.armor_details);

router.get("/armor/add", armor_controller.armor_add_get);

router.post("/armor/add", armor_controller.armor_add_post);

router.get("/armor/:id/delete", armor_controller.armor_delete_get);

router.post("/armor/:id/delete", armor_controller.armor_delete_post);

// Weapon related routes

router.get("/weapons", weapon_controller.weapons_list);

router.get("/weapon/:id", weapon_controller.weapon_details);

router.get("/weapon/add", weapon_controller.weapon_add_get);

router.post("/weapon/add", weapon_controller.weapon_add_post);

router.get("/weapon/:id/update", weapon_controller.weapon_update_get);

router.post("/weapon/:id/update", weapon_controller.weapon_update_post);

router.get("/weapon/:id/delete", weapon_controller.weapon_delete_get);

router.post("/weapon/:id/delete", weapon_controller.weapon_delete_post);

// Gem routes

router.get("/gems", gem_controller.gems_list);

router.get("gem/:id", gem_controller.gem_details);

router.get("/gem/add", gem_controller.gem_add_get);

router.post("/gem/add", gem_controller.gem_add_post);

router.get("/gem/:id/delete", gem_controller.gem_delete_get);

router.post("/gem/:id/delete", gem_controller.gem_delete_post);

router.get("/gem/:id/update", gem_controller.update_get);

router.post("/gem/:id/update", gem_controller.gem_update_post);
