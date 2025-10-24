// seed.mjs
import mongoose from "mongoose";
import User from "./models/userSchema.mjs";
import Cart from "./models/cartSchema.mjs";
import Inventory from "./models/inventorySchema.mjs";

const MONGO_URI = "mongodb+srv://adedamoladediran_db_user:ADEDAmola@cluster0.3lkjbcv.mongodb.net"; 

async function seed() {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("✅ Connected to MongoDB");

    // Clear existing data (optional)
    await Promise.all([
      User.deleteMany(),
      Cart.deleteMany(),
      Inventory.deleteMany(),
    ]);
    console.log("🧹 Cleared old data");

    // --- Create Inventory ---
    const inventoryItems = await Inventory.insertMany([
      { name: "CCTV Camera", qty: 15, category: "Surveillance" },
      { name: "Network Switch", qty: 8, category: "Networking" },
      { name: "HDMI Cable", qty: 40, category: "Accessories" },
      { name: "Wi-Fi Router", qty: 12, category: "Networking" },
      { name: "Motion Sensor", qty: 25, category: "Surveillance" },
    ]);

    console.log("Created inventory items");

    // --- Create Carts ---
    const cart1 = await Cart.create({
      name: "John’s Cart",
      items: [
        { item: inventoryItems[0]._id, qty: 2, category: inventoryItems[0].category },
        { item: inventoryItems[1]._id, qty: 1, category: inventoryItems[1].category },
      ],
    });

    const cart2 = await Cart.create({
      name: "Jane’s Cart",
      items: [
        { item: inventoryItems[2]._id, qty: 3, category: inventoryItems[2].category },
        { item: inventoryItems[3]._id, qty: 1, category: inventoryItems[3].category },
      ],
    });

    console.log("Created carts");

    // Create Users
    const users = await User.insertMany([
      {
        username: "john_doe",
        email: "john@example.com",
        password: "password123",
        admin: false,
        cart: cart1._id,
      },
      {
        username: "jane_admin",
        email: "jane@example.com",
        password: "password123",
        admin: true,
        cart: cart2._id,
      },
    ]);

    console.log("👤 Created users");

    console.log("✅ Database seeded successfully!");
    process.exit(0);
  } catch (error) {
    console.error("❌ Error seeding DB:", error);
    process.exit(1);
  }
}

seed();


