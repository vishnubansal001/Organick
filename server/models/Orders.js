const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const OrdersSchema = mongoose.Schema({
  products: [
    {
      productId: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: "Product",
      },
      quantity: {
        type: Number,
        required: true,
      },
    },
  ],
  userId: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
});

module.exports = mongoose.model("Orders", OrdersSchema);