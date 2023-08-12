import Product from "../models/product.js";
import Video from "../models/video.js";

export const getAllProduct = async (req, res) => {
  try {
    const { videoId } = req.params;

    // check if video exist
    const video = Video.findById(videoId);

    if (!video) {
      return res.status(404).json({
        message: "video not found",
      });
    }

    const products = await Product.find({ videoId: videoId.toString() });

    if (!products) {
      return res.status(404).json({
        message: "products by the video id are not found",
      });
    }

    res
      .status(200)
      // send the json format data into client
      .json({
        status: "success",
        results: products.length,
        data: products,
      });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

export const createProduct = async (req, res) => {
  try {
    const { videoId } = req.params;

    // check if video exist
    const video = Video.findById(videoId);

    if (!video) {
      return res.status(404).json({
        message: "video not found",
      });
    }

    const newProduct = await Product.create({ videoId, ...req.body });

    res
      .status(200)
      // send the json format data into client
      .json({
        status: "success",
        data: newProduct,
      });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};
