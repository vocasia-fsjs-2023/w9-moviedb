const { createReview, getAllReview,  updateDataReview, deleteReviews } = require('../controller/reviewController')

const router = require('express').Router()
const {authUser} = require("../middleware/authentication")
const { authorizeReview} = require("../middleware/authorization")



router.post('/review', authUser, createReview)
router.get('/review', getAllReview)
router.put('/review/:id', authUser, authorizeReview, updateDataReview)
router.delete('/review/:id', authUser, authorizeReview, deleteReviews)

module.exports = router