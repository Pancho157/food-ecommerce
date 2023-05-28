import BBDDQuery from "../utils/db-queries.js";
const DBQuery = new BBDDQuery();

class ClientsRoutesController {
  constructor() {
    this.getLandingPage = this.getLandingPage.bind(this);
  }

  //   GET
  getLandingPage(req, res) {
    const products = DBQuery.getAllProducts();
    res.render("landing-page", products);
  }

  //   POST
  postPurchase(req, res) {
    const purchaseOrder = req.body;
  }
}

export default new ClientsRoutesController();
