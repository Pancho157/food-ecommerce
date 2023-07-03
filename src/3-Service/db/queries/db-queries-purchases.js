import logger from "../../../../logger/log4js-config.js";
import { salesModel } from "../models/mongoose-models.js";

export default class PurchasesQueries {
  static instance;

  constructor() {
    if (PurchasesQueries.instance) {
      return PurchasesQueries.instance;
    } else {
      PurchasesQueries.instance = this;
    }
  }

  get(timeRangeInDaysCuantity) {
    logger.error("Método GET para las órdenes de compra ¡no imprelemtado!");
  }

  create(orderInfo) {
    logger.error("Método CREATE para las órdenes de compra ¡no imprelemtado!");
  }
}
