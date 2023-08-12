import Video from "../models/video.js";

export const getAllVideo = async (req, res) => {
  try {
    const videos = await Video.find().select("title imageURL _id");

    res
      .status(200)
      // send the json format data into client
      .json({
        status: "success",
        results: videos.length,
        data: videos,
      });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

export const getSingleVideo = async (req, res) => {
  try {
    const { videoId } = req.params;

    const video = await Video.findById(videoId);

    if (!video) {
      return res.status(404).json({
        message: "video not found",
      });
    }

    res
      .status(200)
      // send the json format data into client
      .json({
        status: "success",
        data: video,
      });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

export const createVideo = async (req, res) => {
  try {
    const newVideo = await Video.create({ ...req.body });

    res
      .status(200)
      // send the json format data into client
      .json({
        status: "success",
        data: newVideo,
      });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};
