var {mongoose}=require('../server/db/mongoose');
var {Todo}=require('../server/models/todo');
var {Stud}=require('../server/models/stud');

// Todo.remove({}).then((docs)=>{
//     console.log(docs);
// },(e)=>{
//     console.log("Unable to remove");
// });

Todo.findByIdAndRemove('5aa3754211abf5523b2f10c6').then((docs)=>{
    console.log(docs);
},(e)=>{
    console.log("Unable to remove");
});