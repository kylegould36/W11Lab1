const express = require("express");
const app = express();
const port = 3000;

app.get("/greeting/:name", function (req, res) {
  console.log(req.params);
  console.log(req.query);
  res.send("Howdy there  " + " " + req.params.name + "!");
});

app.get("/tip/:total/:tipPercentage", function (req, res) {
  res.send(
    "You should tip: $" + (req.params.total * req.params.tipPercentage) / 100
  );
});

const magic = require("./models/magic.js");
app.get("/magic/Will%20I%20Be%20A%20Millionaire", function (req, res) {
  res.send("<h1>" + magic[Math.floor(Math.random() * magic.length)] + "</h1>");
});

app.listen(port, () => {
  console.log("listening on port", port);
});
