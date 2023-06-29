export default class PurchasesQueries {
  static instance;

  constructor() {
    if (BBDDQuery.instance) {
      return BBDDQuery.instance;
    } else {
      BBDDQuery.instance = this;
    }
  }

  get(timeRangeInDaysCuantity) {
    logger.error("Método GET para las órdenes de compra ¡no imprelemtado!");
  }

  create(orderInfo) {
    logger.error("Método CREATE para las órdenes de compra ¡no imprelemtado!");
  }
}
