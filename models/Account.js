const mongoose = require("mongoose");

const AccountSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  postCount: {
    type: Number,
    default: 0,
  },
  followers: {
    type: Number,
    default: 0,
  },
  bio: {
    type: String,
    default: "No bio yet..",
  },
  following: {
    type: [String],
    default: [],
  },
  bannerImage: {
    type: String,
    default: "Bimage.png",
  },
  profileIcon: {
    type: String,
    default: "PFimage.png",
  },
  likedPost: {
    type: [String],
    default: [],
  },
  post: { type: [String] },
});

const AccountModel = mongoose.model("accounts", AccountSchema);
module.exports = AccountModel;
