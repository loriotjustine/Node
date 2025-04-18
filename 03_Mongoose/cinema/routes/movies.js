const express = require('express');
const router = express.Router();
const Movie = require('../models/movie');

// POST FILM
router.post('/', async (req, res) => {
  try {
    const newMovie = await Movie.create(req.body);
    res.status(201).json(newMovie);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// GET FILMS
router.get('/', async (req, res) => {
  try {
    const movies = await Movie.find();
    res.json(movies);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// SEARCH BY TITLE
router.get('/search', async (req, res) => {
  try {
    const movie = await Movie.findOne({ title: req.query.title });
    if (!movie) return res.status(404).json({ error: 'Film non trouvé' });
    res.json(movie);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// UPDATE FILM BY ID
router.put('/:id', async (req, res) => {
  try {
    const updatedMovie = await Movie.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!updatedMovie) return res.status(404).json({ error: 'Film non trouvé' });
    res.json(updatedMovie);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// DELETE FILMsho
router.delete('/:id', async (req, res) => {
  try {
    const deletedMovie = await Movie.findByIdAndDelete(req.params.id);
    if (!deletedMovie) return res.status(404).json({ error: 'Film non trouvé' });
    res.json({ message: 'Film supprimé avec succès' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
