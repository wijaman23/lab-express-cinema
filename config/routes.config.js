const express = require('express');

const router = express.Router();

const movies = require("../controllers/movies.controller")

router.get("/", movies.index)
router.get("/movies", movies.movie)
router.get("/movies/detail/:id", movies.detail)

module.exports = router;
