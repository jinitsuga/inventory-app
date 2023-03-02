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

router.get("/category/delete", category_controller.category_delete_get);

router.post("/category/delete", category_controller.category_delete_post);
