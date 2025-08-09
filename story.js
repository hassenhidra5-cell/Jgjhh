const mongoose = require("mongoose");
const StorySchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  url: String,
  createdAt: { type: Date, default: Date.now, expires: 86400 }
});
module.exports = mongoose.model("Story", StorySchema);