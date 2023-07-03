import logger from "../../../../logger/log4js-config.js";
import { productsModel } from "../models/mongoose-models.js";

export default class ProductsQueries {
  static instance;

  constructor() {
    if (ProductsQueries.instance) {
      return ProductsQueries.instance;
    } else {
      ProductsQueries.instance = this;
    }
  }

  getAll() {
    return productsModel.find({});
  }

  get(id) {
    return productsModel.findById(id);
  }

  update(id, productInfo) {
    return productsModel.findByIdAndUpdate(id, productInfo);
  }

  removeStock(id, decrementNumber = -1) {
    if (decrementNumber > 0) {
      decrementNumber = decrementNumber * -1;
    }

    return productsModel.findByIdAndUpdate(id, {
      $inc: { quantity: decrementNumber },
    });
  }

  addStock(id, incrementNumber = 1) {
    if (incrementNumber < 0) {
      incrementNumber = incrementNumber * -1;
    }

    return productsModel.findByIdAndUpdate(id, {
      $inc: { quantity: incrementNumber },
    });
  }

  delete(id) {
    return productsModel.findByIdAndDelete(id);
  }
}
