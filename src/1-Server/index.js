import dotenv from "dotenv";
dotenv.config();

import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { engine } from "express-handlebars";

let app = express();

const __filename = fileURLToPath(import.meta.url);
const __dir = path.dirname(__filename);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server online - port ${PORT}`);
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dir + "/public"));

// Handlebars initialization
app.engine(".hbs", engine({ extname: ".hbs" }));
app.set("view engine", ".hbs");
app.set("views", path.join(__dir, "views"));

// Routes

// Error 404
app.use((req, res) => {
  res.status(404).render("error404");
});
