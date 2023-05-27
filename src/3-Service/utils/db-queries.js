class BBDDQuery {
  static instance;

  constructor() {
    if (BBDDQuery.instance) {
      return BBDDQuery.instance;
    } else {
      BBDDQuery.instance = this;
    }
  }

  getAllProducts() {}

  getProduct() {}

  updateProduct() {}

  getAllIngredients() {}

  getIngredient() {}

  deleteIngredient() {}

  getSellsInfo() {}

  getUserInfo() {}
}
