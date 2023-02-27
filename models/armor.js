const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ArmorSchema = new Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },
  category: { type: Schema.Types.ObjectId, ref: "Category" },
  defense: { type: Number, required: true },
  slot: {
    type: String,
    required: true,
    enum: ["Head", "Chest", "Hands", "Legs", "Feet"],
  },
});

ArmorSchema.virtual("link").get(function () {
  return `/shop/armor/${this._id}`;
});

module.exports = mongoose.model("Armor", ArmorSchema);
