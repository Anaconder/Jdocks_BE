import express from "express";
import Inventory from "../models/inventorySchema.mjs";

const router = express.Router();

router
  .route("/")
  .get(async (req, res) => {
    try {
      const inventory = await Inventory.find({});

      res.json(inventory);
    } catch (err) {
      console.error(err.message);
      res.send(err.message);
    }
  })
  .post(async (req, res) => {
    try {
        const newInventory = await Inventory.insertOne(req.body);

        res.json(newInventory)
    } catch (err) {
      console.error(err.message);
      res.send(err.message);
    }
  });

export default router;