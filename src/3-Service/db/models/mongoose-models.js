import mongoose from "mongoose";
import { Schema } from "mongoose";

const productsModel = mongoose.model(
  "products",
  new Schema({
    name: String,
    description: String,
    category: String,
    price: Number,
    // ingredients: [{ type: ObjectId, ref: "ingredients" }],
    stock: Number,
    sales: [{}],
  })
);

const ingredientModel = mongoose.model(
  "ingredients",
  new Schema({
    name: String,
    description: String,
    price: Number,
    stock: Number,
    stockUnit: String,
  })
);

const salesModel = mongoose.model(
  "sales",
  new Schema({
    purchase: [
      {
        product: String,
        description: String,
        deliveryMethod: String,
        deliveryDirection: String,
        price: Number, // at the time of purchase
        quantity: Number,
      },
    ],
    total: Number,
  })
);

export { productsModel, ingredientModel, salesModel };
