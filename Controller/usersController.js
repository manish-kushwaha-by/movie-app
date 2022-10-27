const bcrypt = require("bcrypt") // using this for dcrypting the password
const jwt = require("jsonwebtoken") // generating the token key and verifying the token key
const UserModel = require("../Models/users") // for CURD Operations

// Saving the User
// request from client 
// response from server
// next for next steps (we can treat as break... or continue)
const create = (req, res, next) => {
    UserModel.create({
        name:req.body.name,
        email:req.body.email,
        password:req.body.password
    },(error, result) => {
        if(error){  next(error);  }
        res.status(200).json({message:"User Added Successfully!!!",data:result})
    })
}



// Export
module.exports = {create};


