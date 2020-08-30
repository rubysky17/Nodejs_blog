var path = require("path");
const express = require("express");
const app = express();
const morgan = require("morgan");
const handlebars = require("express-handlebars");
const port = 3000;
// morgan logger
app.use(morgan("combined"));
//template engine
app.set("view engine", "hbs");
app.engine(
  "hbs",
  handlebars({
    extname: "hbs",
  })
);
// static file
app.use(express.static(path.join(__dirname, "public")));
app.set("views", path.join(__dirname, "resources", "views"));

app.get("/", (req, res) => {
  res.render("home");
});
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
