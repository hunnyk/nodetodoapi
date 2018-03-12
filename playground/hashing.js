const {SHA256}=require('crypto-js');
const jwt=require('jsonwebtoken');


//use of crypt-js
// var message="I am user number 23";
// var hash=SHA256(message).toString();
// console.log(`Message:${message}`);
// console.log(`hash:${hash}`);

//use of jsonwebtoken
var data={id:10};

var token=jwt.sign(data,'123abc');
console.log(token);

var decoded=jwt.verify(token,'123abc');
console.log("decoded",decoded);

