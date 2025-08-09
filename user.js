const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
  phone: { type: String, required: true, unique: true },
  otp: String,
  status: { type: String, default: "Available" },
  avatar: String,
  contacts: [String],
  stories: [{ type: mongoose.Schema.Types.ObjectId, ref: "Story" }],
  channels: [{ type: mongoose.Schema.Types.ObjectId, ref: "Channel" }],
  purchasedStickers: [String],
  isAdmin: { type: Boolean, default: false }
});
module.exports = mongoose.model("User", UserSchema);