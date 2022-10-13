const e = require("express");
const express = require("express");
const app = express();
const { body, validationResult } = require("express-validator");
const bodyParser = require("body-parser");
const { connectToDB } = require('../config/db');
const User = require("../models/user");
const user = require("../models/user");

const HTTP_PORT = process.env.PORT || 3001;

// connect to DB
connectToDB();

//app.use(express.json());
app.use(bodyParser.json());

// bodyParser
app.use(bodyParser.urlencoded({ extended: false }));
// call this function after the http server starts listening for requests
function onHttpStart() {
  console.log("Express http server listening on: " + HTTP_PORT);
}

// setup a route on the 'root' of the url
// IE: http://localhost:8080/
app.get("/", (req, res) => {
  res.send("<p>Server running... </p>");
});

// now add a route for the /headers page
// IE: http://localhost:8080/headers
app.post(
  "/login",
  body("username").isEmail(),
  body("password").isLength({ min: 8, max: 12 }),
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    } else {

      // find the user
      user
        .findOne({ email: req.body.username })
        .exec()
        .then((user) => {
          if (!user) {
            res.json({message: "Account does not exist"});
          } else {
            res.json(user);
          }
          // exit the program after saving and finding
          process.exit();
        })
        .catch((e) => {
          console.log(`There was an error: ${e}`);
        });
    }
  }
);

app.post("/register", (req, res) => {});

app.post("/logout", (req, res) => {});

app.use((req, res) => {
  res.status(404).send("Page Not Found");
});

app.listen(HTTP_PORT, onHttpStart);
