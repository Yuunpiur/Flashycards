require('dotenv').config({ path: "../" });
const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');


const app = express();

app.use(cors());
app.use(express.json()); // parses json 

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DATABASE
})

app.post('/users', (req, res) => {

    const userName = req.body.userName;
    const userPassword = req.body.userPassword;

    const sql = "SELECT username, password FROM login WHERE username = ? AND password = ? ";

    // Verify if the user doesn't account exists or the password  is incorrect
    db.query(sql, [userName, userPassword], (err, data) => {
        if (err) console.log(err);

        res.setHeader('Content-Type', 'application/json');
        if (data === undefined || data.length === 0) {
            res.send({ status: false });
        }
        else {
            res.send({ status: true });
        }
    })
})

app.post('/createAccount', (req, res) => {

    // check if username already exist
    const username = req.body.userName;
    const sql = "SELECT username FROM login WHERE username = ?";


    db.query(sql, [username], (err, data) => {
        if (err) console.log(err);
        if (data.length > 0) {
            res.setHeader('Content-Type', 'application/json');
            res.send({usernameExist: true});
            return;
        }
        else 
        {
            const sql = "INSERT INTO login (username, password) VALUES(?, ?)";
            const userInfo = [req.body.userName, req.body.userPassword];
            db.query(sql, userInfo, (err) => {
                if (err) console.log(err);
                res.setHeader('Content-Type', 'application/json');
                res.send({ usernameExist: false });
                return;
            });

        }
    });


});

const PORT = process.env.PORT_NUMBER || 3000;

app.listen(PORT, () => { console.log("listening"); })

