const express = require("express");
const router = express.Router();
router.post("/sync", (req, res) => {
  // Parse uploaded contacts, match with users
  res.json({ matched: [] });
});
module.exports = router;