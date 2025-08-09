const express = require("express");
const router = express.Router();
router.post("/report", (req, res) => {
  // Save report, notify admins
  res.json({ status: "reported" });
});
router.get("/reports", (req, res) => {
  // Return reported messages
  res.json([]);
});
module.exports = router;