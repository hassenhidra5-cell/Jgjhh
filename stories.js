const express = require("express");
const router = express.Router();
const Story = require("../models/story");
router.get("/", async (req, res) => {
  const stories = await Story.find().populate("user");
  res.json(stories);
});
router.post("/upload", async (req, res) => {
  // File upload logic placeholder
  res.json({ success: true });
});
module.exports = router;