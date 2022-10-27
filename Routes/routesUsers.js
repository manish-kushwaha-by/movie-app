const express = require("express");
const userController = require("../Controller/usersController");

const router = express.Router();

// APIs with routes
router.post("/createUser",userController.create);



// Export
module.exports = router;
