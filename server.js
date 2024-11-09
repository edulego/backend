const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

var corsOptions = {
  origin: "http://localhost:8084"
};

app.use(cors(corsOptions));

// parsea requests del content-type - application/json
app.use(bodyParser.json());

// parsea requests del content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Bienvenido a Bienes backend." });
});

require("./app/routes/bienes.routes")(app);

// poner puerto a escuchar solicitudes
const PORT = process.env.PORT || 8085;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

const db = require("./app/models");

db.sequelize.sync({ force: false })
  .then(() => {
    console.log("Sincronizar db.");
  })
  .catch((err) => {
    console.log("Falló en sincronizar db: " + err.message);
});

