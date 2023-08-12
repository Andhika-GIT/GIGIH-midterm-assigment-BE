import Comment from "../models/comment.js";
import Video from "../models/video.js";

export const getAllComment = async (req, res) => {
  try {
    const { videoId } = req.params;

    // check if video exist
    const video = Video.findById(videoId);

    if (!video) {
      return res.status(404).json({
        message: "video not found",
      });
    }

    const comments = await Comment.find({ videoId: videoId.toString() }).select(
      "username comment createdAt"
    );

    if (!comments) {
      return res.status(404).json({
        message: "comments by the video id are not found",
      });
    }

    res
      .status(200)
      // send the json format data into client
      .json({
        status: "success",
        results: comments.length,
        data: comments,
      });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

export const createComment = async (req, res) => {
  try {
    const { videoId } = req.params;
    const { username, comment } = req.body;

    // check if video exist
    const video = Video.findById(videoId);

    if (!video) {
      return res.status(404).json({
        message: "video not found",
      });
    }

    const newComment = await Comment.create({
      videoId,
      username,
      comment,
    });

    res
      .status(200)
      // send the json format data into client
      .json({
        status: "success",
        data: newComment,
      });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};
