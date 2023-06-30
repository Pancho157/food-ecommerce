import IngredientsQueries from "../db/queries/db-queries-ingredients.js";
import ProductsQueries from "../db/queries/db-queries-products.js";
import PurchasesQueries from "../db/queries/db-queries-purchases.js";
import UsersQueries from "../db/queries/db-queries-users.js";

const ingredients = new IngredientsQueries();
const products = new ProductsQueries();
const purchases = new PurchasesQueries();
const users = new UsersQueries();

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
    const allIngredients = ingredients.getAll();
    res.render("admin-ingredients", {
      layout: "admin",
      ingredients: allIngredients,
    });
  }

  getProductsPage(req, res) {
    const products = products.getAll();
    res.render("admin-products", { layout: "admin", products: products });
  }

  getStadisticsPage(req, res) {
    const allPurchases = purchases.get("week");
    // let stadistics = allPurchases;
    // let bestSellingProducts = allPurchases;

    res.render("admin-stadistics", {
      layout: "admin",
      purchases: purchases,
    });
  }

  getProductInfo(req, res) {
    const productID = parseInt(req.body.prodID);
    const productInfo = products.get(productID);

    res.send(productInfo);
  }

  postLogin(req, res) {
    const user = req.body.user;
    const password = req.body.password;

    const userExists = users.get(user);

    if (userExists.name && userExists.password == password) {
      // TODO: Make token and save it on session storage
      res.redirect("/administrator/products");
    } else {
      res.status(401);
    }
  }

  putProduct(req, res) {}
}

export default new AdminRoutesController();
