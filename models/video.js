import mongoose from "mongoose";

const videoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  imageURL: {
    type: String,
    required: true,
  },
});

const Video = mongoose.model("Video", videoSchema, "video");

export default Video;
