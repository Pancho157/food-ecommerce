import logger from "../../../../logger/log4js-config";

export default class ProductsMethodsTemplate {
  get() {
    logger.error("Método GET para productos ¡no imprelemtado!");
  }

  getOne(id) {
    logger.error("Método GET ONE para productos ¡no imprelemtado!");
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
