import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
  videoId: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  comment: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const Comment = mongoose.model("Comment", commentSchema, "comment");

export default Comment;
