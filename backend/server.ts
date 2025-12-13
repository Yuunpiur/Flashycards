require("dotenv").config({ path: "../" });
import express from "express";
import mysql from "mysql2";
import cors from "cors";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const app = express();

app.use(cors());
app.use(express.json()); // parses json

const PORT = process.env.PORT_NUMBER || 3000;
app.listen(PORT, () => {
  console.log("listening");
});

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DATABASE,
});

// * LOG IN
app.post("/users", (req, res) => {
  const { userName, userPassword } = req.body;

  const sql = "SELECT username, password FROM login WHERE username = ?";

  // Verify if the user's account doesn't exists or the password  is incorrect
  db.query(sql, userName, (err, data) => {
    if (err) {
      console.log(err);
      return;
    }
    // check if the username exis
    if (data === undefined || data.length === 0) {
      res.json({ status: false });
      return;
    } else {
      // check if the password is correct
      bcrypt.compare(userPassword, data[0]["password"], (err, result) => {
        if (err) {
          console.log("Error in comparing: ", err);
          return;
        }
        if (result) {
          // get the info of the user for the payload
          const sql = "SELECT id, username FROM login";
          db.query(sql, (err, data) => {
            if (err) {
              console.log(err);
              return;
            }

            const payload = {
              id: data[0]["id"],
              username: data[1]["username"],
            };

            // generet a jwt then send it back to the client side
            const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "1hr" });
            res.json({ token: token, status: true });
          });
        } else {
          res.json({ status: false });
          return;
        }
      });
    }
  });
});

// * VALIDATE THE TOKEN
app.get("/validateToken", (req, res) => {
  console.log(req.header);
});

// * SIGN UP
app.post("/createAccount", (req, res) => {
  // check if username already exist
  const username = req.body.userName;
  const sql = "SELECT username FROM login WHERE username = ?";

  db.query(sql, [username], (err, data) => {
    if (err) {
      console.log(err);
      return;
    }
    if (data.length > 0) {
      res.json({ usernameExist: true });
      return;
    } else {
      const saltRounds = 10;
      bcrypt.genSalt(saltRounds, (err, salt) => {
        if (err) {
          console.log("Error on the genSalt func: ", err);
          return;
        }

        bcrypt.hash(req.body.userPassword, salt, (err, hash) => {
          if (err) {
            console.log("Error on the hash func: ", err);
            return;
          }

          const sql = "INSERT INTO login (username, password) VALUES(?, ?)";
          const userInfo = [req.body.userName, hash];

          db.query(sql, userInfo, (err) => {
            if (err) console.log(err);

            res.json({ usernameExist: false });
            return;
          });
        });
      });
    }
  });
});
