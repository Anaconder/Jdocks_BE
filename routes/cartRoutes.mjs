import express from "express";
import Cart from "../models/cartSchema.mjs";

const router = express.Router();

// get our cart
router
  .route("/:id")
  .get(async (req, res) => {
    try {
        const cart = await Cart.findById(req.params.id).populate('items.item', "name");

        res.json(cart)
    } catch (err) {
      console.error(err.message);
      res.send(err.message);
    }
  })
  //Update cart Delete cart 
  .put(async (req, res) => {
    try {
      const cart = await Cart.findById(req.params.id);

      if (!cart) return res.send("No cart found");

      cart.items.push(req.body);

      await cart.save();

      res.send("added successfully");
    } catch (err) {
      console.error(err.message);
      res.send(err.message);
    }
  });

// create a cart
router.post("/", async (req, res) => {
  try {


    await cart.save();

    res.json(cart);
  } catch (err) {
    console.error(err.message);
    res.send(err.message);
  }
});


// DELETE a cart by ID
router.delete("/:id", async (req, res) => {
  try {
    const deletedCart = await Cart.findByIdAndDelete(req.params.id);

    if (!deletedCart) {
      return res.status(404).send("Cart not found");
    }

    res.status(200).json({ message: "Cart deleted successfully" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send(err.message);
  }
});



export default router;