const Category = require("../models/category");

const async = require("async");

// Show all categorys

exports.categorys_list = (req, res, next) => {
  res.send("yet to implement list of categorys");
};
// Show details of a category
exports.category_details = (req, res, next) => {
  res.send("category details");
};

// add category

exports.category_add = (req, res, next) => {
  res.send("adds a category to the shop");
};
// delete category
exports.category_delete = (req, res, next) => {
  res.send("deleteing category from shop");
};
