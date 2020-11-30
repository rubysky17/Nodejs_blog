const path = require("path");
const express = require("express");
const app = express();
const morgan = require("morgan");
const handlebars = require("express-handlebars");
const db = require("./config/db");
const routes = require("./routes/index");

// morgan logger
app.use(morgan("dev"));
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());
//Connect to DB
db.connect();
//template engine

app.engine("hbs", handlebars({ extname: "hbs" }));
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources", "views"));

// static file
// CSS
app.use(express.static(path.join(__dirname, "public")));

routes(app);

// server
const port = 4000;
app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`);
});
