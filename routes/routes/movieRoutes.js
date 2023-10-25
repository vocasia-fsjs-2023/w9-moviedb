const { createMovie, getAllMovie, updateDataMovie, updateMovie, deleteMovies, getMovieById } = require('../controller/movieController')
const { authUser } = require("../middleware/authentication.js")
const { authorizeAdmin } = require('../middleware/authorization')


const router = require('express').Router()


router.post('/movie', authUser, authorizeAdmin, createMovie)
router.get('/movie', getAllMovie)
router.get('/movie/:id', getMovieById)
router.put('/movie/:id', authUser, authorizeAdmin, updateDataMovie)
router.patch('/movie/:id', authUser, authorizeAdmin, updateMovie)
router.delete('/movie/:id', authUser, authorizeAdmin, deleteMovies)

module.exports = router