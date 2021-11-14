const express = require("express");
const app = express();
const mysql = require("mysql");

const db = mysql.createPool({

    connectionLimit : 10,
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'project2'
});


app.get('/',(req,res) => {

    const sqlInsert = "INSERT INTO record (sno, Name, vaccinationstatus)  VALUES (2, 'Mohit','completelyVaccinated');"
    db.query(sqlInsert,(err,result) => {

        res.send("hello mohit");
    });
    
})


app.listen(3001, () =>{

    console.log("running on 3001");
});