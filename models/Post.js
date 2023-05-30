const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
  PostData: {
    type: String,
    required: true,
  },
  Caption: {
    type: String,
  },
  Votes: {
    type: Number,
    default: 0,
  },
  PostType: {
    type: Number,
    required: true,
  },
  PostedBy: {
    type: String,
    required: true,
  },
  PostId: {
    type: String,
    unique: true,
  },
  VotedBy: {
    type: String,
  },
  Comments: {
    type: [String],
  },
});

const PostModel = mongoose.model("posts", PostSchema);
module.exports = PostModel;
