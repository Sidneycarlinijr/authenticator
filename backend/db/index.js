var config = require('../config');
const { MongoClient } = require("mongodb");
const app = require('../app');

var db;
var collection;


MongoClient.connect(config.MONGO_URL, (err, database) => {
    if (!err) {
        console.log('MongoDB - Conectado')
        db = database
        collection = db.collection('users')
    } else {
        console.log('MongoDB - Nao foi possivel conectar')
    }
});

module.exports = {

    register: (data, handler) => {



    }

}