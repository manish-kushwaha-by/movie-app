// Creating the server for all APIs
// Routing Url APIs,{Get,Post,Delete etc}
// Configuring middleware ==> example: app.use
const express = require("express")

// Get the method(Get/Post/Delete etc) log from client side
const logger = require("morgan")

// from request body json it will extract data from it.
const bodyParser = require("body-parser")

// Connecting the mongoDb database
const mongoose = require("mongoose")

// Only verifing the token...
const jwt = require("jsonwebtoken")

// import routes for Users
const userRoutes = require("./Routes/routesUsers")



// Initializing the (Server)
const app = express();

// configuraing the middleware for morgan logger and body-parser
app.use(logger('dev'))

//  convert into json format
app.use(bodyParser.json())


// start server at port: 8081
var PORT = 3000;
app.listen(PORT, function(err){
    if (err) console.log(err);
    console.log("Server listening on PORT", PORT);
});

// Default Route ()
app.get("/",(req,res) => {
    res.send("<h2>   Welcome To                   </h2>"+
            " <h1>   movie - app              </h1>"+
            " <h2>                </h2>");
})


// Default path for User routes/Controller
app.use("/users",userRoutes);


// Connecting to MongoDb Database using mongo-URI.
// mongodb+srv://MKK9313:MKK9313@cluster0.weeu8ok.mongodb.net/<DATABASE_NAME>?retryWrites=true&w=majority
const uri = "mongodb+srv://MKK9313:MKK9313@cluster0.weeu8ok.mongodb.net/node_jwt?retryWrites=true&w=majority"
mongoose.connect(
    uri,{
        useNewUrlParser:true
    }).then( () => {
        console.log("Database Connected");

    }).catch(
        (err)=>{
            console.log(err);
        }
    )


// Setting a secret key with random string for jwt initial token
app.set("secret_key","qwertyuiop")


