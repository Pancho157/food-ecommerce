class ClientsRoutesController {
  constructor() {
    this.getLandingPage = this.getLandingPage.bind(this);
  }

  //   GET
  getLandingPage(reqq, res) {
    const products = {
      empanadas: [
        { name: "Carne", detail: "Carne, aceituna, cebolla, morrón", id: 1 },
        { name: "Carne", detail: "Carne, aceituna, cebolla, morrón", id: 2 },
        { name: "Carne", detail: "Carne, aceituna, cebolla, morrón", id: 3 },
        { name: "Carne", detail: "Carne, aceituna, cebolla, morrón", id: 4 },
        { name: "Carne", detail: "Carne, aceituna, cebolla, morrón", id: 5 },
        { name: "Carne", detail: "Carne, aceituna, cebolla, morrón", id: 6 },
        { name: "Carne", detail: "Carne, aceituna, cebolla, morrón", id: 7 },
        { name: "Carne", detail: "Carne, aceituna, cebolla, morrón", id: 8 },
        { name: "Carne", detail: "Carne, aceituna, cebolla, morrón", id: 9 },
      ],
      pizzas: [
        { name: "Carne", detail: "Carne, aceituna, cebolla, morrón", id: 10 },
        { name: "Carne", detail: "Carne, aceituna, cebolla, morrón", id: 11 },
        { name: "Carne", detail: "Carne, aceituna, cebolla, morrón", id: 12 },
        { name: "Carne", detail: "Carne, aceituna, cebolla, morrón", id: 13 },
        { name: "Carne", detail: "Carne, aceituna, cebolla, morrón", id: 14 },
        { name: "Carne", detail: "Carne, aceituna, cebolla, morrón", id: 15 },
        { name: "Carne", detail: "Carne, aceituna, cebolla, morrón", id: 16 },
        { name: "Carne", detail: "Carne, aceituna, cebolla, morrón", id: 17 },
        { name: "Carne", detail: "Carne, aceituna, cebolla, morrón", id: 18 },
      ],
      snacks: [
        { name: "Carne", detail: "Carne, aceituna, cebolla, morrón", id: 19 },
        { name: "Carne", detail: "Carne, aceituna, cebolla, morrón", id: 20 },
        { name: "Carne", detail: "Carne, aceituna, cebolla, morrón", id: 21 },
        { name: "Carne", detail: "Carne, aceituna, cebolla, morrón", id: 22 },
        { name: "Carne", detail: "Carne, aceituna, cebolla, morrón", id: 23 },
        { name: "Carne", detail: "Carne, aceituna, cebolla, morrón", id: 24 },
        { name: "Carne", detail: "Carne, aceituna, cebolla, morrón", id: 25 },
        { name: "Carne", detail: "Carne, aceituna, cebolla, morrón", id: 26 },
        { name: "Carne", detail: "Carne, aceituna, cebolla, morrón", id: 27 },
      ],
    };
    res.render("landing-page", products);
  }

  //   POST
  postPurchase() {}
}

export default new ClientsRoutesController();
