import dotenv from "dotenv";
dotenv.config();

import logger from "../../logger/log4js-config.js";

import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { engine } from "express-handlebars";

// Routes
import { clients } from "../2-Routes/clients-routes.js";
import { admin } from "../2-Routes/admin-routes.js";

let app = express();

const __filename = fileURLToPath(import.meta.url);
const __dir = path.dirname(__filename);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  logger.info(`Server online - port ${PORT}`);
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dir + "/public"));

// Handlebars initialization
app.engine(".hbs", engine({ extname: ".hbs" }));
app.set("view engine", ".hbs");
app.set("views", path.join(__dir, "views"));

// Routes
app.use("/", clients);
app.use("/administrator", admin);

// Error 404
app.use((req, res) => {
  res.status(404).render("error404");
});
