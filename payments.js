const express = require("express");
const router = express.Router();
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

router.post("/create-session", async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: req.body.items,
    mode: "payment",
    success_url: process.env.FRONTEND_URL + "/success",
    cancel_url: process.env.FRONTEND_URL + "/cancel"
  });
  res.json({ id: session.id });
});

module.exports = router;