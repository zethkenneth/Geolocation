const express = require("express");
const routes = require("./src/routes.js");
const port = process.env.PORT || 3000;

const app = express();
app.use(express.json({ limmit: "200mb" }));

let d = new Date();
app.get("/", (req, res) => {
  res.status(200).send(`Healty since ${d.toString()}`);
});

app.use("/geolocation", routes);

app.use("*", (req, res) => {
  res.send("NOT FOUND");
});



app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

module.exports = app;



