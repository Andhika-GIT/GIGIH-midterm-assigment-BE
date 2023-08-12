import express from "express";

// controllers
import { getAllComment, createComment } from "../controllers/comment.js";
import { getAllProduct, createProduct } from "../controllers/product.js";
import {
  getAllVideo,
  getSingleVideo,
  createVideo,
} from "../controllers/video.js";

const router = express.Router();

router.get("/video", getAllVideo);
router.post("/video", createVideo);
router.get("/video/:videoId", getSingleVideo);
router.get("/product/:videoId", getAllProduct);
router.post("/product/:videoId", createProduct);
router.get("/comment/:videoId", getAllComment);
router.post("/comment/:videoId", createComment);

export default router;
