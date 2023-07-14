import logger from "../../../../logger/log4js-config.js";
import { ingredientModel } from "../models/mongoose-models.js";

export default class IngredientsQueries {
  static instance;

  constructor() {
    if (IngredientsQueries.instance) {
      return IngredientsQueries.instance;
    } else {
      IngredientsQueries.instance = this;
    }
  }

  getAll() {
    return ingredientModel.find({});
  }

  get(id) {
    return ingredientModel.findById(id);
  }

  create(data) {
    return ingredientModel.create(data);
  }

  removeStock(id, decrementNumber = -1) {
    if (decrementNumber > 0) {
      decrementNumber = decrementNumber * -1;
    }

    return ingredientModel.findByIdAndUpdate(id, {
      $inc: { quantity: decrementNumber },
    });
  }

  addStock(id, incrementNumber = 1) {
    if (incrementNumber < 0) {
      incrementNumber = incrementNumber * -1;
    }

    return ingredientModel.findByIdAndUpdate(id, {
      $inc: { quantity: incrementNumber },
    });
  }

  delete(id) {
    return ingredientModel.findByIdAndDelete(id);
  }
}
