import express, { Router } from "express";
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
  });

  
router
  .route("/:id")
  //delete item routes
  .delete(async (req, res) => {
      try {
        const deletedItem = await Inventory.findByIdAndDelete(req.params.id);
  
        if (!deletedItem) {
          return res.status(404).send("Item not found");
        }
  
        res.status(200).json({ message: "Item deleted successfully" });
      } catch (err) {
        console.error(err.message);
        res.status(500).send(err.message);
      }
  
     })

  // update item
  .put(async (req, res) => {
    try {
      const Item = await Inventory.findByIdAndUpdate(req.params.id,req.body);
    
      if (!Item) return res.send("No Inventory found");
      
      res.send("changed successfully");
      } catch (err) {
        console.error(err.message);
        res.send(err.message);
      }
    
})
export default router;