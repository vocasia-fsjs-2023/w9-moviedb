const { createReview, getAllReview,  updateDataReview, deleteReviews } = require('../controller/reviewController')

const router = require('express').Router()


router.post('/review', createReview)
router.get('/review', getAllReview)
router.put('/review/:id', updateDataReview)
router.delete('/review/:id', deleteReviews)

module.exports = router