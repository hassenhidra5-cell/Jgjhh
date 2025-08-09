const express = require("express");
const router = express.Router();
const User = require("../models/user");
router.post("/update", async (req, res) => {
  const { userId, status } = req.body;
  await User.findByIdAndUpdate(userId, { status });
  res.json({ status: "updated" });
});
module.exports = router;