const Category = require("../models/category");

const async = require("async");

// Show all categorys

exports.category_list = (req, res, next) => {
  res.send("yet to implement list of categorys");
};
// Show details of a category
exports.category_details = (req, res, next) => {
  res.send("category details");
};

// add category

exports.category_add_get = (req, res, next) => {
  res.send("show form to a category to the shop");
};

exports.category_add_post = (req, res, next) => {
  res.send("adds a category to the shop DB");
};

// delete category
exports.category_delete_get = (req, res, next) => {
  res.send("sending form to delete category from shop");
};

exports.category_delete_post = (req, res, next) => {
  res.send("deleteing category from shop oN DB");
};
