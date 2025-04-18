const mongoose = require('mongoose');

const movie = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  director: { type: String, required: true },
  releaseDate: { type: Date, required: true }
});

const Movie = mongoose.model('Movie', movie);
module.exports = Movie;
