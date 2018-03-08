var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    var dbo = db.db("mydb");

    //it returns the first record
    // dbo.collection("Users").findOne({}, (err, result) => {
    //     if (err) throw err;
    //     console.log(result.name);
    //     db.close();
    // });

    //to find all records
    dbo.collection("Users").find({}).toArray((err, result)=> {
        if (err) throw err;
        console.log(result);
        db.close();
    });

    //it displays fields being specified
    //if specified 0 :not display and 1:will display
    // dbo.collection("Users").find({}, {_id:0,location:1}).toArray((err, result) => {
    //     if (err) throw err;
    //     console.log(result);
    //     console.log(result[0].location);
    //     db.close();
    // });
});
