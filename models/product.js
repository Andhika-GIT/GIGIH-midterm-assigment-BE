import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  videoId: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  imageURL: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
});

const Product = mongoose.model("Product", productSchema, "product");

export default Product;
