const { response } = require("express")
const Movie = require("../models/Movie.model")

module.exports.index = (req, res, next) => {
    res.render("index")
}

module.exports.movie = (req, res, next) => {
    Movie.find()
        .then(movies => res.render("movies", {movies}))
        .catch(err => console.log (err))
}

module.exports.detail = (req, res, next) => {
   Movie.findById(req.params.id)
    .then(movie => res.render('detail', {movie}))
    .catch(err => console.log(err))
}
