import express from "express";
import auth from "../middleware/auth.mjs";
import userController from "../controllers/userController.mjs";

const router = express.Router();


// @route: GET /api/user
// @desc: get user data
// @access: Private
router.get("/", auth, userController.getData);
