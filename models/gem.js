const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const GemSchema = new Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  stock: { type: Number, required: true },
  quality: {
    type: String,
    required: true,
    enum: ["Regular", "Flawless", "Perfect"],
  },
  category: { type: Schema.Types.ObjectId, ref: "Category" },
});

GemSchema.virtual("link").get(function () {
  return `/shop/gem/${this._id}`;
});

module.exports = mongoose.model("Gem", GemSchema);
