// need to install: npm install mongoose (npm i mongoose)
const mongoose = require('mongoose');

// Creating a Schema on type of data communicating to mongodb

const MovieSchema = new mongoose.Schema({
    name:{type:String,required:true},
    releaseDate:{type:Date,required:true}
})


// module.export = a -> can be used everywhere
module.exports = mongoose.model("movies",MovieSchema)