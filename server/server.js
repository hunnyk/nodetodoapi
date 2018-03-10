const express = require('express');
const bodyParser = require('body-parser');
const {ObjectID}=require('mongodb').ObjectID;
const _ =require('lodash');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {Stud} = require('./models/stud');

var app = express();
//const port=process.env.Port || 3000;

app.use(bodyParser.json());


//Create [todos collection]
app.post('/todos', (req, res) => {
    var todo = new Todo({
        text: req.body.text,
        completed:req.body.completed,
        completedAt:req.body.completedAt,
    });

    todo.save().then((doc) => {
        res.send(doc);
    }, (e) => {
        res.status(400).send(e);
    });
});

//find all records [todos collection]
app.get('/todos',(req,res)=>{
    Todo.find().then((todos)=>{
        res.send({todos});
    },(e)=>{
        res.status(400).send(e);
    });
});

//Create

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

//find all records
app.get('/studs',(req,res)=>{
    Stud.find().then((docs)=>{
        res.send({docs});
    },(e)=>{
        res.status(400).send(e);
    })
});


//Find record by Id [todos collection]

app.get('/todos/:id',(req,res)=>{

    var id=req.params.id;

    if(!ObjectID.isValid(id))
    {
        return res.status(404).send();
    }

    Todo.findById(id).then((docs)=>{
        res.send({docs});
    },(e)=>{
        res.status(404).send();
    });

});

//Delete [todos collection]

app.delete('/todos/:id', (req, res) => {
    var id = req.params.id;

    Todo.findByIdAndRemove(id).then((docs) => {
        res.send(docs);
    },(e)=>{
       res.status(400).send(e);
    });
});

//Edit [todos collection]

app.patch('/todos/:id', (req, res) => {
    var id = req.params.id;
    var body = _.pick(req.body, ['text', 'completed']);

    if (_.isBoolean(body.completed) && body.completed) {
        body.completedAt = new Date().getTime();
    } else {
        body.completed = false;
        body.completedAt = null;
    }

    Todo.findByIdAndUpdate(id, {$set: body}, {new: true}).then((todo) => {
        if (!todo) {
            return res.status(404).send();
        }
        res.send({todo});
    }).catch((e) => {
        res.status(400).send();
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