const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const cors = require("cors");

const routes = require("../routes"); // Make sure this path is correct
dotenv.config();

const app = express();

const corsOptions = {
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  preflightContinue: false,
  optionsSuccessStatus: 204
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));
app.use("/", routes);

// ✅ Export the Express app as a Vercel-compatible handler
const serverless = require("serverless-http");
module.exports = serverless(app);
