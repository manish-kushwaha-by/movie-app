const jwt = require("jsonwebtoken") // generating the token key and verifying the token key
const MovieModel = require("../Models/movies") // for CURD Operations


const create = (req, res, next) => {
    MovieModel.create({
        name:req.body.name,
        releaseDate:req.body.releaseDate
    },(error, result) => {
        if(error){  next(error);  }
        res.status(200).json({message:"Movie Added Successfully!!!",data:result})
    })
}

const getAllMovies = (req,res,next) => {
    MovieModel.find({},(err,result) => {
        if(err) {   next(err); }
        res.status(200).json({Movies:result});
    });
}





// Export
module.exports = {create,getAllMovies};