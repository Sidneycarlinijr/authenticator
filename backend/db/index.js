const { MongoClient } = require('mongodb');
const assert = require('assert')
const app = require('../app');

const mongoUrl = 'mongodb://localhost:27017'
var collection;

MongoClient.connect(mongoUrl, (err, database) => {
    assert.equal(null, err);
    console.log('MongoDB - Conectado')

    const db = database
    collection = db.collection('users')

    client.close();
});

module.exports = {
}