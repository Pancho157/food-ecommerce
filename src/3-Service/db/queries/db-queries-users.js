export default class UsersQueries {
  static instance;

  constructor() {
    if (UsersQueries.instance) {
      return UsersQueries.instance;
    } else {
      UsersQueries.instance = this;
    }
  }

  get(username) {
    logger.error("Método GET para las órdenes de compra ¡no imprelemtado!");
  }
}
