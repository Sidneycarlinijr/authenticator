const { MongoClient } = require('mongodb');
const assert = require('assert')

const mongoUrl = 'mongodb://localhost:27017'
var collection;
var db;

MongoClient.connect(mongoUrl, (err, client) => {
    assert.equal(null, err);

    db = client.db('authenticator')
    collection = db.collection('users')
});

module.exports = {
    userRegister: (userInfo) => {
        collection.insertOne(userInfo)
    },

    findUser: (data, handler) => {
        collection.findOne(data, (err, result) => {
            handler(err, result);
        })
    }
}