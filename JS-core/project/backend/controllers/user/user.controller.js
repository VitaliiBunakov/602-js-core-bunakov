// const {mysql2Con} = require('../../service/mysql2Connection.service');
// const mysql = require("mysql2");
// const connection = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     database: "smarthousedb",
//     password: "!Bunakov199O!"
// });

module.exports = {
     getAllUsers: (req,res)=>{



         // mysql2Con.connect(function(err){
         //     if (err) {
         //         return console.error("Ошибка: " + err.message);
         //     }
         //     else{
         //         console.log("Подключение к серверу MySQL успешно установлено");
         //     }
         // });
         //
         //
         // const sql = "SELECT * FROM users";
         // mysql2Con.query("SELECT * FROM users")
         //     .then(result =>{
         //         console.log(result);
         //     })
         //     .catch(err =>{
         //         console.log(err);
         //     });
         //
         //
         // mysql2Con.end(function(err) {
         //     if (err) {
         //         return console.log("Ошибка: " + err.message);
         //     }
         //     console.log("Подключение закрыто");
         // });

         res.end('get user');
     },



    getUser: (req,res)=>{
        res.end('get user');
    },



    createUser: (req,res)=>{
         const userName = req.body.name;
         const email = req.body.email;
        const password = req.body.password;
        const adm_lvl = '1';
         const sql = `insert into users ( user_name, user_pass, email, adm_lvl) values ('${userName}','${password}','${email}','${adm_lvl}')`;
        mysql2Con.connect(function(err){
            if (err) {
                return console.error("Ошибка: " + err.message);
            }
            else{
                console.log("Подключение к серверу MySQL успешно установлено");
            }
        });
        mysql2Con.query(sql,(err,result)=>{
            if (err){
                console.log(err)
            }
            else {
                console.log(result)
            }
        })

        mysql2Con.end(function(err) {
            if (err) {
                return console.log("Ошибка: " + err.message);
            }
            console.log("Подключение закрыто");
        });

        res.end(' user created');
    },



    updateUser : (req,res)=>{
        res.end('get user');
    },



    deleteUser : (req,res)=>{
        res.end('get user');
    },




};

