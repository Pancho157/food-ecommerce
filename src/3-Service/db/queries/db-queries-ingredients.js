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
    logger.error("Método GET ALL para los ingredientes ¡no imprelemtado!");
  }

  get(id) {
    logger.error("Método GET para los ingredientes ¡no imprelemtado!");
  }

  create(data) {
    logger.error("Método CREATE para los ingredientes ¡no imprelemtado!");
  }

  addStock(quantity) {
    logger.error("Método ADDSTOCK para los ingredientes ¡no imprelemtado!");
  }

  removeStock(quantity) {
    logger.error("Método REMOVESTOCK para los ingredientes ¡no imprelemtado!");
  }

  delete(id) {
    logger.error("Método DELETE para los ingredientes ¡no imprelemtado!");
  }
}
