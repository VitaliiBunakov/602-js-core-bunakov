const mysql = require("mysql2");
const {JSON} = require("express");

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "smarthousedb",
    password: "!Bunakov199O!"
});



module.exports = {

    getUser:(user_name)=>{
        const sql = `select * from users where user_name = '${user_name}'`;

        connection.query(sql, function(err, results) {
            if(err) console.log(err);
            return results;
        });

    },
    createUser : (user_name,user_pass,email, adm_lvl  )=>{

        const sql = `INSERT INTO users(user_name, user_pass, email, adm_lvl) VALUES('Vialii2', '31','ff@ff,.ff', 1)`;

        connection.query(sql, function(err, results) {
            if(err) console.log(err);
            console.log(results);
        });

        // connection.end();
    },


}