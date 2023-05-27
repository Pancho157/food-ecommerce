import logger from "../../../logger/log4js-config";
import { OrdersMongoAtlas } from "./orders/orders-mongodb-atlas.js";
import { ProductsMongoAtlas } from "./products/products-mongodb-atlas.js";

export default class DAO {
  static instance;

  constructor(persistance) {
    switch (persistance) {
      default:
        this.orders = new OrdersMongoAtlas();
        this.products = new ProductsMongoAtlas();
    }

    if (DAO.instance) {
      return DAO.instance;
    } else {
      DAO.instance = this;
    }
  }
}
