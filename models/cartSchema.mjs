import mongoose from "mongoose";

// Sub Document - an object that gets placed inside another schema
const cartItemSchema = new mongoose.Schema(
  {
    item: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Inventory",
      required: true,
    },
    qty: { type: Number, default: 1 },
    category:{type: String, default: 1},// do I specify survaillance, networking and such here?
  },
  { _id: false }
);

const cartSchema = new mongoose.Schema({
  name: String,
  items: [cartItemSchema],
});

export default mongoose.model("Cart", cartSchema);