const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CategorySchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
});

CategorySchema.virtual("link").get(function () {
  return `/shop/category/${this._id}`;
});

module.exports = mongoose.model("Category", CategorySchema);
