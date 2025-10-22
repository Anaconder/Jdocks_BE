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
  .put(async (req, res) => {
    try {
      const cart = await Cart.findById(req.params.id);

      if (!cart) return res.send("No cart found");

      cart.items.push(req.body);

      await cart.save();

      res.send("add succsessfull");
    } catch (err) {
      console.error(err.message);
      res.send(err.message);
    }
  });

// create a cart
router.post("/", async (req, res) => {
  try {
    let cart = new Cart({
      name: req.body.name,
      items: [],
    });

    await cart.save();

    res.json(cart);
  } catch (err) {
    console.error(err.message);
    res.send(err.message);
  }
});

export default router;