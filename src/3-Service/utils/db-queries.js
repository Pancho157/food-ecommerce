export default class BBDDQuery {
  static instance;

  constructor() {
    if (BBDDQuery.instance) {
      return BBDDQuery.instance;
    } else {
      BBDDQuery.instance = this;
    }
  }

  getAllProducts() {
    return {
      empanadas: [
        {
          name: "Jamón y Queso",
          ingredients: "Jamón cocido y Muzzarella",
          id: 1,
        },
        {
          name: "Carne",
          ingredients: "Carne, aceituna, cebolla, morrón",
          id: 2,
        },
        {
          name: "Roquefort",
          ingredients: "Roquefort y Muzzarella",
          id: 3,
        },
        {
          name: "Cuatro Quesos",
          ingredients: "Parmesano, Roquefort, Barra y Muzzarella",
          id: 4,
        },
        {
          name: "Fugazzeta",
          ingredients: "Queso y Cebolla",
          id: 5,
        },
        {
          name: "Calabreza",
          ingredients: "Muzarella y calabresa",
          id: 6,
        },
        {
          name: "Napolitana",
          ingredients: "Muzzarella, Tomate, Ajo y Aceitunas",
          id: 7,
        },
        {
          name: "Capresse",
          ingredients: "Muzzarella, Tomates y Albahaca",
          id: 8,
        },
        {
          name: "Jamón y Palmitos",
          ingredients: "Jamón cocido, Muzzarella y Palmitos",
          id: 9,
        },
      ],
      pizzas: [
        {
          name: "Jamón y Queso",
          ingredients: "Jamón cocido y Muzzarella",
          id: 10,
        },
        {
          name: "Carne",
          ingredients: "Carne, aceituna, cebolla, morrón",
          id: 11,
        },
        {
          name: "Roquefort",
          ingredients: "Roquefort y Muzzarella",
          id: 12,
        },
        {
          name: "Cuatro Quesos",
          ingredients: "Parmesano, Roquefort, Barra y Muzzarella",
          id: 13,
        },
        {
          name: "Fugazzeta",
          ingredients: "Queso y Cebolla",
          id: 14,
        },
        {
          name: "Calabreza",
          ingredients: "Muzarella y calabresa",
          id: 15,
        },
        {
          name: "Napolitana",
          ingredients: "Muzzarella, Tomate, Ajo y Aceitunas",
          id: 16,
        },
        {
          name: "Capresse",
          ingredients: "Muzzarella, Tomates y Albahaca",
          id: 17,
        },
        {
          name: "Jamón y Palmitos",
          ingredients: "Jamón cocido, Muzzarella y Palmitos",
          id: 18,
        },
      ],
      snacks: [
        {
          name: "Bombas de papa",
          ingredients: "Muzzarella, Puré de papa y Pan rallado",
          id: 19,
        },
        {
          name: "Bolitas de papa",
          ingredients: "Puré de papa y Pan rallado",
          id: 20,
        },
        {
          name: "Bastones de queso",
          ingredients: "Muzzarella y Pan rallado",
          id: 21,
        },
        {
          name: "Nuggets de Pollo",
          ingredients: "Pollo y Pan rallado",
          id: 22,
        },
        {
          name: "Gaseosa Coca-Cola",
          ingredients: "Bebida",
          id: 23,
        },
        {
          name: "Gaseosa Sprite",
          ingredients: "Bebida",
          id: 24,
        },
        {
          name: "Gaseosa Fanta",
          ingredients: "",
          id: 25,
        },
        {
          name: "Levite Pomelo",
          ingredients: "Bebida",
          id: 26,
        },
        {
          name: "Agua tónica",
          ingredients: "Bebida",
          id: 27,
        },
      ],
    };
  }

  getProduct(id) {}

  updateProduct(id, data) {}

  getAllIngredients() {}

  getIngredient(id) {}

  deleteIngredient(id) {}

  getPurchases(range) {}

  postPurchase(purchaseOrder) {}

  getUserInfo(userName) {}
}
