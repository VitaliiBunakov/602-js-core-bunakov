const {mysql2Con} = require('../../service/mysql2Connection.service');
let {uuidv4} = require('../../service/UUID');
//
// const HOST = "localhost";
// const USER = "root";
// const DATABASE = "smarthousedb";
// const PASSWORD = "!Bunakov199O!";

const {json} = require("express");
module.exports = {
    getAllUsers: (req, res) => {


        const sql = "SELECT * FROM users";


        mysql2Con.query(sql, (err, result) => {
            if (err) {
                console.log(err)
            }
            console.log(result)
        })


    },


    getUser: (req, res) => {
        const user_identifier = req.params.user_identifier;
        console.log( `Searching for user identified with ${user_identifier}`);
        let sql = '';

        switch (true) {
            case (!isNaN(user_identifier)) :
                sql = `SELECT * FROM users where user_id = '${user_identifier}'`;
                break;

            case (user_identifier.includes('@')):
                sql = `SELECT * FROM users where email = '${user_identifier}'`;

                break;

                default:
                    sql = `SELECT *
                       FROM users
                       where user_name = '${user_identifier}'`;

                break;
        }



        mysql2Con.query(sql, (err, result) => {
            if (err) {
                console.log(err)
            }
            console.log(result);
            res.json(result);
        });


    },


    createUser: (req, res) => {
        const userName = req.body.name;
        const email = req.body.email; //prod version
        // const email = uuidv4(); // test version email
        const password = req.body.password;
        const adm_lvl = '1';
        const sql = `insert into users (user_name, user_pass, email, adm_lvl)
                     values ('${userName}', '${password}', '${email}', '${adm_lvl}')`;
        // mysql2Con.connect(function (err) {
        //     if (err) {
        //         return console.error("Ошибка: " + err.message);
        //     } else {
        //         console.log("Подключение к серверу MySQL успешно установлено");
        //     }
        // });
        mysql2Con.query(sql, (err, result) => {
            if (err) {
                console.log(err)
            }
        })


        res.end(`User ${userName} created `);
    },


    updateUser: (req, res) => {
        console.log("this method  is  not redy yet");
        res.end("this method  is  not redy yet")

    },


    deleteUser: (req, res) => {
        const user_identifier = req.params.user_identifier;
        console.log( `Removing   user identified with ${user_identifier}`);
        let sql = '';

        switch (true) {
            case (!isNaN(user_identifier)) :
                sql = `DELETE FROM users where user_id = '${user_identifier}'`;
                break;

            case (user_identifier.includes('@')):
                sql = `DELETE FROM users where email = '${user_identifier}'`;

                break;

            default:
                sql = `DELETE
                       FROM users
                       where user_name = '${user_identifier}'`;

                break;
        }



        mysql2Con.query(sql, (err, result) => {
            if (err) {
                console.log(err)
            }
            console.log(result);
            res.end(`User ${user_identifier} removed `);
        });
    },


};

