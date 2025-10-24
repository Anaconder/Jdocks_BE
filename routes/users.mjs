import express from "express";
import User from "../models/userSchema.mjs";

const router = express.Router();



router
    .route("/")
 // Create new user (Register)
    .post (async (req, res) => {
        try {
            const { username, email, password, admin } = req.body;

            // Prevent duplicates
            const existing = await User.findOne({ email });
            if (existing) {
            return res.status(400).json({ message: "User already exists" });
            }

            const user = new User({ username, email, password, admin: admin || false });
            await user.save();
            res.status(201).json(user);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
})

// Get all users
    .get(async (req, res) => {
        try {
            const users = await User.find();
            res.json(users);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
});


router
    .route("/:id")
// Get one user by ID
    .get(async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ message: "User not found" });
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
})

// Update user info
    .put(async (req, res) => {
        try {
            const updatedUser = await User.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
            );
            if (!updatedUser) return res.status(404).json({ message: "User not found" });
            res.json(updatedUser);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
})
// Delete user
    .delete (async (req, res) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.id);
    if (!deletedUser) return res.status(404).json({ message: "User not found" });
    res.json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


export default router;