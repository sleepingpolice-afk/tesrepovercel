const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");

const rute = require("./routes");

const cors = require("cors");
dotenv.config();

const port = process.env.PORT || 5433; // Isi nomor port di sini;
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));

app.use("/", rute);

app.listen(port, () => {
  console.log(`Running on port ${port}!`);
});