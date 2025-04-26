var mongoose = require('mongoose')  
var userSchema = mongoose.Schema({  //defines Structure of the collecton or table
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true }
    
})
var Users= mongoose.model("Users",userSchema) //using model we could get input for the record
module.exports = Users;
