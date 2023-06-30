import logger from "../../../../logger/log4js-config.js";

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
    logger.error("Método GETAll para productos ¡no imprelemtado!");
  }

  get(id) {
    logger.error("Método GET para productos ¡no imprelemtado!");
  }

  update(productInfo) {
    logger.error("Método PUT para productos ¡no imprelemtado!");
  }

  removeStock(quantity) {
    logger.error("Método REMOVESTOCK para productos ¡no imprelemtado!");
  }

  delete(id) {
    logger.error("Método DELETE para productos ¡no imprelemtado!");
  }
}
