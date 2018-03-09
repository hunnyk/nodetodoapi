const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    var dbo = db.db("mydb");

    dbo.collection('Users').findOneAndUpdate({_id: new ObjectID('5aa0f16dee5f602e1b8a95b1')
    }, {$set: { name: 'kajal', age: '27'}}, { returnOriginal: false }).then((result) => {
       console.log(result);
    });


});