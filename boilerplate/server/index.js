const express = require("express");
const app = express();
const mysql = require("mysql");
const bodyParser = require("body-parser");
const jsonParser = bodyParser.json();
var cors = require("cors");
app.use(express.json());
app.use(cors());

const { query, validationResult } = require("express-validator");

const pool = mysql.createPool({
  connectionLimit: 10,
  host: "localhost",
  user: "root",
  password: "",
  database: "todolist",
});

app.get("/todolist", (req, res) => {});

app.get("/todolist/:id", (req, res) => {});

app.delete("/todolist/:id", (req, res) => {});

app.post("/todolist", jsonParser, (req, res) => {});

app.put("/todolist/:id", jsonParser, (req, res) => {});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
