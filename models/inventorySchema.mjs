import mongoose, { model } from "mongoose";

const inventorySchema = new mongoose.Schema({
  name: { type: String, required: true },
  qty: { type: Number, required: true },
});

export default mongoose.model("Inventory", inventorySchema);