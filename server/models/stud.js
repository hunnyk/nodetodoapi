var mongoose = require('mongoose');

var studschema={
    email:{
        type:String,
        required:true,
        trim:true,
        minlength:1
    }
};

var Stud = mongoose.model('Stud',studschema);

module.exports={Stud};