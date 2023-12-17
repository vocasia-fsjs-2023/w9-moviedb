const express = require('express');
const router = express.Router();
const  Movie  = require('../models/movie');
const  Review  = require('../models/review');

// CREATE Movie
router.post('/movie', async (req, res) => {
  try {
    const movie = await Movie.create(req.body);
    res.status(201).json(movie);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// GET all Movies
router.get('/movie', async (req, res) => {
  try {
    const movies = await Movie.findAll();
    res.status(200).json({ movies });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET Movie by ID with Reviews
router.get('/movie/:id', async (req, res) => {
  try {
    const movie = await Movie.findByPk(req.params.id, {
      include: 'reviews',
    });
    res.status(200).json(movie);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// PUT Movie by ID
router.put('/movie/:id', async (req, res) => {
  try {
    const movie = await Movie.findByPk(req.params.id);
    if (movie) {
      await movie.update(req.body);
      res.status(200).json(movie);
    } else {
      res.status(404).json({ error: 'Movie not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// DELETE Movie by ID
router.delete('/movie/:id', async (req, res) => {
  try {
    const movie = await Movie.findByPk(req.params.id);
    if (movie) {
      await movie.destroy();
      res.status(200).json({ message: `Movie ${movie.title} has been deleted` });
    } else {
      res.status(404).json({ error: 'Movie not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// CREATE Review
router.post('/review', async (req, res) => {
  try {
    const review = await Review.create(req.body);
    res.status(201).json(review);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// GET all Reviews with Movies
router.get('/review', async (req, res) => {
  try {
    const reviews = await Review.findAll({
      include: 'movie',
    });
    res.status(200).json({ reviews });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// PUT Review by ID
router.put('/review/:id', async (req, res) => {
  try {
    const review = await Review.findByPk(req.params.id);
    if (review) {
      await review.update(req.body);
      res.status(200).json(review);
    } else {
      res.status(404).json({ error: 'Review not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// DELETE Review by ID
router.delete('/review/:id', async (req, res) => {
  try {
    const review = await Review.findByPk(req.params.id);
    if (review) {
      await review.destroy();
      res.status(200).json({ message: `Review with id ${review.id} has been deleted` });
    } else {
      res.status(404).json({ error: 'Review not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
