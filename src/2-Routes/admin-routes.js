import { Router } from "express";
import adminController from "../3-Service/routes-controllers/admin-controller.js";

const admin = Router();

admin.get("/login", adminController.getLoginPage);

admin.get("/ingredients", adminController.getIngredientsPage);

admin.get("/products", adminController.getProductsPage);

admin.get("/stadistics", adminController.getStadisticsPage);

admin.get("/:id", adminController.getProductInfo);

export { admin };
