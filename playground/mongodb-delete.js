var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    var dbo = db.db("mydb");

    //from tutorial
    // dbo.collection('Todos').deleteOne({text:'to eat'},(err,result)=>{
    //     if (err) {
    //         return console.log('Unable to connect to MongoDB server');
    //     }
    //     console.log(result);
    // });

    //or

    //to delete one record
    // dbo.collection('Todos').deleteOne({text:'to buy'}).then((result)=>{
    //     console.log(result);
    // });

    //to delete multiple records
    // dbo.collection('Todos').deleteMany({text:'to eat'}).then((result)=>{
    //     console.log(result);
    // });

    //to find and then delete
    dbo.collection('Todos').findOneAndDelete({text:'to sleep'}).then((result)=>{
        console.log(result);
    });
});