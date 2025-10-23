import express from "express";
import dotenv from "dotenv";
import connectDB from "./db/conn.mjs";
import itemRoutes from "./routes/itemRoutes.mjs";
import cartRoutes from "./routes/cartRoutes.mjs";
// import users from "./routes/users.mjs";
import logger from"./Middleware/logger.mjs";
import GlbErr from "./Middleware/GlbErr.mjs"
import cors from "cors";

//  Setups
dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

connectDB();

// Middleware
app.use(cors());
app.use(express.json());
app.use(logger);

// Routes
app.use("/cart", cartRoutes);
app.use("/item", itemRoutes);
// app.use("/user",users);

// Global Err
app.use(GlbErr);

// Listener
app.listen(PORT, () => {
  console.log(`Server listening on PORT: ${PORT}`);
});