const express = require("express");
const bodyParser = require("body-parser");
const chalk = require("chalk");
const app = express();

app.set("view engine", "ejs");

let items = [];
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.listen(3000, () => {
  console.log(chalk.green.inverse("Server is running on port 3000"));
});

app.get("/", (req, res) => {
  let date = new Date();
  let options = {
    weekday: "long",
    day: "numeric",
    month: "long",
  };
  let presentDay = date.toLocaleDateString("en-US", options);
  res.render("list", { day: presentDay, newItem: items });
});

app.post("/", (req, res) => {
  let item = req.body.todoTitle;
  items.push(item);
  res.redirect("/");
});
