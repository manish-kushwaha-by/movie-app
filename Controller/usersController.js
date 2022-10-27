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


const login = (req,res,next) => {
    UserModel.findOne({email:req.body.email},(err,result) => {
            if(err) { next(err); }
            else{
                //if(bcrypt.compare(req.body.password,result.password,null)){
                bcrypt.compare(req.body.password,result.password,(error,result) => {
                    if(error)       {   next(error) ; }
                    // Generating the token using jwt sign fxn
                    // 3 parameters
                    //    1. Claims
                    //    2. Secret Key
                    //    3. Expiery Time of Token!!!
                    const token = jwt.sign({
                                                id:result._id
                                            },
                                            
                                            req.app.get('secret_key'),
                                            
                                            {
                                                expiresIn:"1H"// seconds: 120s
                                            }
                                          );
                    res.status(200).json({message:"Successfully Logined in",data:{user:result,token:token}});
                })    
                
                    
                //}
            }
    })
}


// Export
module.exports = {create,login};





// const token = jwt.sign({
                    //                             id:result._id
                    //                         },
                                            
                    //                         req.app.get('secret_key'),
                                            
                    //                         {
                    //                             expiresIn:"1H"
                    //                         }
                    // //                       );
                    // res.status(200).json({message:"Successfully Logined in",data:{user:result,token:token}});