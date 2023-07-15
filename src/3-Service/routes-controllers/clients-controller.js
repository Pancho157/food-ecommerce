import logger from "../../../logger/log4js-config.js";
import ProductsQueries from "../db/queries/db-queries-products.js";
import PurchasesQueries from "../db/queries/db-queries-purchases.js";

const products = new ProductsQueries();
const purchases = new PurchasesQueries();

class ClientsRoutesController {
  constructor() {
    this.getLandingPage = this.getLandingPage.bind(this);
  }

  //   GET
  async getLandingPage(req, res) {
    try {
      const allProducts = await products.getAll();
      const productsByCategory = { empanadas: [], pizzas: [], snacks: [] };

      allProducts.forEach((product) => {
        if (product.category == "empanadas") {
          productsByCategory.empanadas.push({
            name: product.name,
            description: product.description,
            price: product.price,
            id: product._id.toHexString(),
          });
        } else if (product.category == "pizzas") {
          productsByCategory.pizzas.push({
            name: product.name,
            description: product.description,
            price: product.price,
            id: product._id.toHexString(),
          });
        } else if (product.category == "snacks") {
          productsByCategory.snacks.push({
            name: product.name,
            description: product.description,
            price: product.price,
            id: product._id.toHexString(),
          });
        }
      });

      res.render("landing-page", productsByCategory);
    } catch (err) {
      logger.error(err);
    }
  }

  //   POST
  postPurchase(req, res) {
    const shopOpenHour = 20,
      shopClosingHour = 1,
      tuesday = 2;

    var date = new Date(),
      day = date.getDay(),
      hours = date.getHours();

    if (day != tuesday && (shopOpenHour <= hours || hours <= shopClosingHour)) {
      const purchase = req.body;

      if ("name" in purchase && purchase.products.lenght !== 0) {
        const purchaseOrder = {
          buyer: purchase.name,
          products: purchase.products,
          date: new Date(),
          status: "preparing",
        };

        purchases.create(purchaseOrder);
        res.status(200).send(`Orden confirmada a nombre de ${purchase.name}`);
      } else {
        res.status(401).send("No se ingresaron productos o comprador");
      }
    } else {
      res.status(401).send("Closed");
    }
  }
}

export default new ClientsRoutesController();
