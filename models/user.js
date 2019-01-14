const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userScheme = mongoose.Scheme({
    _id:mongoose.Schema.Types.ObjectId,
    email:{type:String , required:true},
    password:{type:String , required:true}
});


// Export the model
module.exports = mongoose.model('User', userScheme); 