const mysql = require("mysql2");
const Sequelize = require('sequelize');
const fs = require('fs');
const path = require('path');

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "smarthousedb",
    password: "!Bunakov199O!"
});

module.exports.mysql2Con = connection;

module.exports  = (()=>{
    let instance;

    function initConnection() {
        const client = new Sequelize('smarthousedb', 'root', '!Bunakov199O!', {
            host: 'localhost',
            dialect: 'mysql'
        });

        let models = {};

        function getModels(){
            fs.readdir(path.join(process.cwd(),'dataBase','models'),(err,files)=>{
                files.forEach(file =>{
                    const [modelName] = file.split('.');
                    models[modelName] = client.import((path.join(process.cwd(),'dataBase','models',modelName)))
                })
            })

        }
        return {
            setModels: ()=> getModels(),
            getModel: (modelName) => models[modelName]
        }

    }

    return {
        getInstance:()=>{
            if (!instance) {
                instance = initConnection();
            }
            return instance
        }

    }

})();