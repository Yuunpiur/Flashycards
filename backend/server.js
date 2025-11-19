require('dotenv').config({ path: "../"});
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
    const sql = "SELECT * FROM login";

    const userName = req.body.userName;
    const userPassword = req.body.userPassword;
    
    // Verify if the user account exists or the password  is correct
    db.query(sql, (err, data) => {
        if(err) console.log(err);
        let isCorrectInfo = false;
        for(let i = 0; i < data.length; i++)
        {
           
           if (userName === data[i]["username"] && userPassword === data[i]["password"]) 
           {
               isCorrectInfo = true;
               break;
           }
            
        }

        res.setHeader('Content-Type', 'applications/json');

        if(isCorrectInfo) res.send({status: true});
        else res.send({status: false});


    })
})

app.post('/createAccount', (req, res) => {

    // check if username already exist
    let userNameExist = false;
    db.query("SELECT username FROM login", (err, data) => {
        if (err) console.log("ERROR");
        for (let i = 0; i < data.length; i++) {
            if (data[i]["username"] === req.body.userName) {
                console.log("EXIST");

                res.setHeader('Content-Type', 'text/html');
                res.send({ usernameExist: true });
                userNameExist = true;
            }
        }

        if (!userNameExist) {
            // add a new user to the database
            const sql = "INSERT INTO login (username, password) VALUES(?, ?)";
            const userInfo = [req.body.userName, req.body.userPassword];
            db.query(sql, userInfo, (err) => {
                if (err) console.log(err);
            })
        }
    });
}); // check password and confirm password while the user is typing

const PORT = process.env.PORT_NUMBER || 3000;

app.listen(PORT, () => { console.log("listening"); })

