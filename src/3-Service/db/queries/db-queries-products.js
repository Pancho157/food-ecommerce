export default class ProductsQueries {
  static instance;

  constructor() {
    if (BBDDQuery.instance) {
      return BBDDQuery.instance;
    } else {
      BBDDQuery.instance = this;
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
