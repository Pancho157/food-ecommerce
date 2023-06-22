import mongoose from "mongoose";
import { Schema } from "mongoose";

export const productsModel = mongoose.model(
  "products",
  new Schema({
    name: String,
    description: String,
    category: String,
    price: Number,
    ingredients: [{ type: ObjectId, ref: "ingredients" }],
    stock: Number,
    sales: [{}],
  })
);

export const ingredientModel = mongoose.model(
  "ingredients",
  new Schema({
    name: String,
    description: String,
    price: Number,
    stock: Number,
    stockUnit: String,
  })
);

export const salesModel = mongoose.model(
  "sales",
  new Schema({
    purchase: [
      {
        product: { type: ObjectId, ref: "products" },
        price: Number, // at the time of purchase
        quantity: Number,
      },
    ],
    total: Number,
  })
);
