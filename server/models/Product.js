const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductSchema = mongoose.SchemaP({
  title: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    require: true,
  },
  prevPrice: {
    type: Number | String,
    required: true,
  },
  currPrice: {
    type: Number | String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

module.exports = mongoose.model("Product", ProductSchema);