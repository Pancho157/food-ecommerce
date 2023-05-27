export class AdminRoutesController {
  constructor() {
    this.getLoginPage = this.getLoginPage.bind(this);
    this.getProductsPage = this.getProductsPage.bind(this);
    this.getStadisticsPage = this.getStadisticsPage.bind(this);
    this.getProductInfo = this.getProductInfo.bind(this);
  }

  //   GET
  getLoginPage(req, res) {
    res.render("admin-login", { layout: "admin" });
  }

  getIngredientsPage(req, res) {
    res.render("admin-ingredients", { layout: "admin" });
  }

  getProductsPage(req, res) {
    res.render("admin-products", { layout: "admin" });
  }

  getStadisticsPage(req, res) {
    res.render("admin-stadistics", { layout: "admin" });
  }

  getProductInfo(req, res) {}

  //   POST
  postLogin(req, res) {}

  //   PUT
  putProduct(req, res) {}
}

export default new AdminRoutesController();
