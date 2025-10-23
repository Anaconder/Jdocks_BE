import express from "express";
import Inventory from "../models/inventorySchema.mjs";

const router = express.Router();

router
  .route("/")
  //get item
  .get(async (req, res) => {
    try {
      const inventory = await Inventory.find({});

      res.json(inventory);
    } catch (err) {
      console.error(err.message);
      res.send(err.message);
    }
  })//create item
  .post(async (req, res) => {
    try {
        const newInventory = await Inventory.insertOne(req.body);

        res.json(newInventory)
    } catch (err) {
      console.error(err.message);
      res.send(err.message);
    }
  })
  .delete(async (req, res) => {
      try {
        const deletedItem = await Cart.findByIdAndDelete(req.params.id);
  
        if (!deletedItem) {
          return res.status(404).send("Item not found");
        }
  
        res.status(200).json({ message: "Item deleted successfully" });
      } catch (err) {
        console.error(err.message);
        res.status(500).send(err.message);
      }
  
     });


export default router;