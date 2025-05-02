const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const cors = require("cors");

const routes = require("../routes"); // Adjust path if needed

dotenv.config();

const app = express();

var corsOption = {
    //origin: 'http://localhost:5433/',
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    preflightContinue: false,
    optionsSuccessStatus: 204
}

app.use(cors(corsOption));
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));

app.use("/", routes);
app.options("*", cors(corsOption));

app.listen(port, () => {
  console.log(`Running on port ${port}!`);
});