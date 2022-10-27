const express = require("express");
const movieController = require("../Controller/moviesController");

const router = express.Router();

// Post Request for Creating a movie
router.post("/createMovie",movieController.create);


// Get Request for all movies
router.get("/allMovies",movieController.getAllMovies);






// Export
module.exports = router;