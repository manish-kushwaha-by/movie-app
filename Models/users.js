// need to install: npm install mongoose (npm i mongoose)
const mongoose = require('mongoose');
const bcrypt = require("bcrypt") // for encrypting the password (length == 60)

// Creating a Schema on type of data communicating to mongodb

const UserSchema = new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String,required:true}
})

// pre function is used to run the statement in call-back fnx.
// pre method for save (we can used it for updateOne,find,findOne......)
UserSchema.pre("save",function(next){
    const saltRounds = 10;
    this.password = bcrypt.hashSync(this.password,saltRounds);
    next();
})

// module.export = a -> can be used everywhere
module.exports = mongoose.model("users",UserSchema)