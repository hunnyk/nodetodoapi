const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/mydb', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    // db.collection('Todos').insertOne({
    //   text: 'Something to do',
    //   completed: false
    // }, (err, result) => {
    //   if (err) {
    //     return console.log('Unable to insert', err);
    //   }
    //
    //   console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    // Insert new doc into Users (name, age, location)
    var myobj={name:'sheetal',age:23,location:'surat'};
    db.collection('Users').insertOne(myobj, (err, result) => {
        if (err) {
            return console.log('Unable to insert user', err);
        }

        console.log("Number of documents inserted: " + result.insertedCount);
        console.log(result.ops);
    });

    db.close();
});