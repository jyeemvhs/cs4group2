const express = require("express");
const {
  createAccount,
  followUser,
  unfollowUser,
  loginAccount,
  sendImage,
  updateUser,
} = require("../controllers/AccountController");
const router = express.Router();

// CREATE Account
router.post("/create", createAccount);

router.get("/login", loginAccount);

router.put("/follow-user", followUser);

router.put("/unfollow-user", unfollowUser);

router.get("/image", sendImage);

router.put("/update-bio", updateUser);

// UPDATE Account Data

// DELETE Account

// GET Account Data

module.exports = router;
