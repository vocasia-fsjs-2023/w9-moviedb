const { createMovie, getAllMovie, updateDataMovie, updateMovie, deleteMovies, getMovieById } = require('../controller/movieController')

const router = require('express').Router()


router.post('/movie', createMovie)
router.get('/movie', getAllMovie)
router.get('/movie/:id', getMovieById)
router.put('/movie/:id', updateDataMovie)
router.patch('/movie/:id', updateMovie)
router.delete('/movie/:id', deleteMovies)

module.exports = router