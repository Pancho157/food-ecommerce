import BBDDQuery from "../utils/db-queries.js";
const DBQuery = new BBDDQuery();

export class AdminRoutesController {
  constructor() {
    this.getLoginPage = this.getLoginPage.bind(this);
    this.getProductsPage = this.getProductsPage.bind(this);
    this.getStadisticsPage = this.getStadisticsPage.bind(this);
    this.getProductInfo = this.getProductInfo.bind(this);
  }

  getLoginPage(req, res) {
    res.render("admin-login", { layout: "admin" });
  }

  getIngredientsPage(req, res) {
    const ingredients = DBQuery.getAllIngredients();
    res.render("admin-ingredients", {
      layout: "admin",
      ingredients: ingredients,
    });
  }

  getProductsPage(req, res) {
    const products = DBQuery.getAllProducts();
    res.render("admin-products", { layout: "admin", products: products });
  }

  getStadisticsPage(req, res) {
    // const allPurchases = DBQuery.getPurchases(week);
    // let stadistics = allPurchases;
    // let bestSellingProducts = allPurchases;

    res.render("admin-stadistics", {
      layout: "admin"
    });
  }

  getProductInfo(req, res) {
    const productID = parseInt(req.body.prodID);
    const productInfo = DBQuery.getProductInfo(productID);

    res.send(productInfo);
  }

  postLogin(req, res) {
    const user = req.body.user;
    const password = req.body.password;

    const userExists = DBQuery.getUserInfo(user);

    if (userExists.name && userExists.password == password) {
      // TODO: Make token and save it on session storage
      res.redirect("/administrator/products");
    } else {
      res.status(401);
    }
  }

  putProduct(req, res) {
    
  }
}

export default new AdminRoutesController();
