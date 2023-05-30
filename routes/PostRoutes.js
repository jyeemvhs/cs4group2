const express = require("express");
const router = express.Router();
const {
  createImagePost,
  upload,
  sendPostImage,
  getAllPost,
  getAllUserPost,
  createTextPost,
} = require("../controllers/PostController");

// CREATE Post

router.post("/create-image-post", upload.single("avatar"), createImagePost);

router.post("/create-text-post", createTextPost);

router.get("/send-post-image/:image", sendPostImage);

router.get("/get-all-post", getAllPost);

router.get("/get-all-user-posts/:username", getAllUserPost);

//router.get("get-all-post", getAllPost);

//router.delete("delete-post", deletePost);

// DELETE Post

// GET Post Data

module.exports = router;
