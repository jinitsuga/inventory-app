const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WeaponSchema = new Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  stock: { type: Number, required: true },
  description: { type: String, required: true },
  category: { type: Schema.Types.ObjectId, ref: "Category", required: true },
  damage: { type: Number, required: true },
  type: {
    type: String,
    required: true,
    enum: ["Swords", "Axes", "Spears", "Daggers", "Bows"],
  },
});

WeaponSchema.virtual("link").get(function () {
  return `/shop/weapons/${this._id}`;
});

module.exports = mongoose.model("Weapon", WeaponSchema);
