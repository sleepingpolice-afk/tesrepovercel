const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const cors = require("cors");

const routes = require("../routes"); // Adjust path if needed

dotenv.config();

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));

app.use("/", routes);

// Export as a handler for Vercel
module.exports = app;
