const { MongoClient } = require('mongodb');
const assert = require('assert')

const mongoUrl = 'mongodb://localhost:27017'
var collection;
var db;

MongoClient.connect(mongoUrl, (err, client) => {
    assert.equal(null, err);

    db = client.db('authenticator')
    collection = db.collection('users')

    // console.log('MongoDB - Conectado', db, collection)
});

module.exports = {
    userRegister: (userInfo) => {
        collection.insertOne(userInfo)
        console.log('to no userRegister tentando registrar!')
    },
    
    findUser: (data, handler) => {
        collection.findOne(data, (err, result) => {
            handler(err, result);
        })
    }


    // userRegister: (data, handler) => {
    //     console.log('cheguei no index do db')
    //     collection.insertOne(data, (err, result) =>{
    //         handler(err, result);
    //     })
    // }
}