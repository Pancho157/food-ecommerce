import ProductsQueries from "../db/queries/db-queries-products.js";

const products = new ProductsQueries();

class ClientsRoutesController {
  constructor() {
    this.getLandingPage = this.getLandingPage.bind(this);
  }

  //   GET
  getLandingPage(req, res) {
    const allProducts = products.getAll();
    res.render("landing-page", allProducts);
  }

  //   POST
  postPurchase(req, res) {
    const purchaseOrder = req.body;
  }
}

export default new ClientsRoutesController();
