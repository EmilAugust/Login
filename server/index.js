const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");
const { query } = require("express");

app.use(cors());
app.use(express.json());

//Creates connection to database and stores it in a variable.
const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "password",
  database: "loginSystem",
});

//Register account
app.post("/create", (req, res) => {
  const email = req.body.email;
  const username = req.body.username;
  const password = req.body.password;
  
  let registerReq = false

  db.query(
    "SELECT email, username FROM users WHERE email = ? OR username = ?",
    [email, username],
    (err, result) => {
      if (err) {
        console.log(err);
      } else if (result.length !== 0) {
        registerReq = false
        res.send(registerReq);
      } else {
        db.query(
          "INSERT INTO users (email, username, password) VALUES (?,?,?)",
          [email, username, password],
          (err, result) => {
            if (err) {
              console.log(err);
            } else {
              registerReq = true
              res.send(registerReq);
            }
          }
        );
      }
    }
  );
});

//Login
app.get("/getLogin", (req, res) => {
  let loginRequest = false;
  let userId = 0;
  let username = req.query.username;
  let password = req.query.password;
  db.query(
    "SELECT * FROM users WHERE username = ? AND password = ?",
    [username, password],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        result.map((data) => {
          if (
            username.toUpperCase() === data.username.toUpperCase() &&
            password === data.password
          ) {
            loginRequest = true;
            userId = data.id;
          } else {
            loginRequest = false;
          }
        });
        res.send({ loginRequest, userId });
      }
    }
  );
});

//Profile info
app.get("/getProfile", (req, res) => {
  let userId = req.query.userId;
  let email = "";
  let username = "";
  db.query(
    "SELECT email, username FROM users WHERE id = ?",
    [userId],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        result.map((data) => {
          email = data.email;
          username = data.username;
          res.send({ email, username });
        });
      }
    }
  );
});

//Starts server
app.listen(3001, () => {
  console.log("Your server is running on port 3001");
});
