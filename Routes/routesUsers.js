const express = require("express");
const userController = require("../Controller/usersController");

const router = express.Router();

// APIs with routes
router.post("/createUser",userController.create);

// APIs with routes
router.post("/loginUser",userController.login);


// Export
module.exports = router;
