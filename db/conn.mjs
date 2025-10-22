import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connStr = process.env.mongoURI || "";

async function connectDB() {
  try {
    await mongoose.connect(connStr);

    console.log("MongoDB Connected...");
  } catch (err) {
    console.error(err.message);

    process.exit(1);
  }
}

export default connectDB;