const mysql = require("mysql2");

    const connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        database: "smarthousedb",
        password: "!Bunakov199O!"
    });

    // connection.connect(function (err) {
    //     if (err) {
    //         return console.error("Ошибка: " + err.message);
    //     } else {
    //         console.log("Подключение к серверу MySQL успешно установлено");
    //     }
    // });


module.exports.mysql2Con = connection;