const express = require("express");
const bodyParser = require("body-parser");
const chalk = require("chalk");
const app = express();
const date = require(__dirname + "/date");

app.set("view engine", "ejs");

let items = [];
let workItems = [];
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.listen(3000, () => {
  console.log(chalk.green.inverse("Server is running on port 3000"));
});

app.get("/", (req, res) => {
  let presentDay = date.getDate();

  res.render("list", { listTitle: presentDay, newItem: items });
});

app.post("/", (req, res) => {
  console.log(req.body);
  let item = req.body.todoTitle;

  if (req.body.list === "Work") {
    workItems.push(item);
    res.redirect("/work");
  } else {
    items.push(item);
    res.redirect("/");
  }
});

app.get("/work", (req, res) => {
  res.render("list", { listTitle: "Work", newItem: workItems });
});

app.post("/work", (req, res) => {
  let item = req.body.todoTitle;
  workItems.push(item);
  res.redirect("/work");
});

app.get("/about", (req, res) => {
  res.render("about");
});
