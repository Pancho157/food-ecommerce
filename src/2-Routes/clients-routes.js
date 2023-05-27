import { Router } from "express";
import clientsController from "../3-Service/routes-controllers/clients-controller.js";

const clients = Router();

clients.get("/", clientsController.getLandingPage);

clients.post("/", clientsController.postPurchase);

export { clients };
