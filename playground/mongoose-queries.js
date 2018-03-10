const {mongoose}=require('./../server/db/mongoose');
const {Todo}=require('./../server/models/todo');
const {stud}=require('./../server/models/stud');


//It returns the first record
// Todo.findOne({}).then((docs)=>{
//     console.log("todos",docs);
// });

// Todo.find({_id: "5aa26b0f7c4512833a50c83f"}).then((docs)=>{
//     console.log("todos",docs);
// });

Todo.findOne({_id:"5aa26aaa7c4512833a50c83ee"}).then((docs)=>{
    console.log("todos",docs)},(err)=>{
        console.log("Unable to find ID");
});
