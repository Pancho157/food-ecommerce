class ClientsRoutesController {
  constructor() {
    this.getLandingPage = this.getLandingPage.bind(this);
  }

  //   GET
  getLandingPage(reqq, res) {
    res.render("landing-page");
  }

  //   POST
  postPurchase() {}
}

export default new ClientsRoutesController();
