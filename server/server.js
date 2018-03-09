var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {Stud} = require('./models/stud');

var app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
    var todo = new Todo({
        text: req.body.text
    });

    todo.save().then((doc) => {
        res.send(doc);
    }, (e) => {
        res.status(400).send(e);
    });
});


app.get('/todos',(req,res)=>{
    Todo.find().then((todos)=>{
        res.send({todos});
    },(e)=>{
        res.status(400).send(e);
    });
});


app.post('/studs',(req,res)=>{
    var stud=new Stud({
        email:req.body.email
    });

    stud.save().then((doc)=>{
        res.send(doc);
    },(e)=>{
        res.status(400).send(e);
    })
})

app.get('/studss',(req,res)=>{
    Stud.find().then((docs)=>{
        res.send({docs});
    },(e)=>{
        res.status(400).send(e);
    })
});


app.listen(3000, () => {
    console.log('Started on port 3000');
});

module.exports={app};



// var server=app.listen(8081,function () {
//     var host=server.address().address;
//     var port=server.address().port;
//
//     console.log("Example app listening at http://%s:%s",host,port);
// })

//A

// var newTodo = new Todo({
//     text:"Cook dinner"
// });
//
// newTodo.save().then((doc)=>{
//     console.log('saved todo',doc);
// },(e)=>{
//     console.log('Unable to save todo',e);
// });



//C

// var stud=new Stud({
//     email:"hunny@gmail.com"
// });
//
// stud.save().then((doc)=>{
//     console.log("saved stud",doc);
// },(e)=>{
//     console.log("Unable to save stud",e);
// });