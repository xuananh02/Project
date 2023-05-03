const express = require('express');
const router = express.Router();

const ReviewsController = require('../app/controllers/ReviewsController.js');


router.post('/store', ReviewsController.store);

router.get('/edit/:id', ReviewsController.edit);

router.delete('/delete/:id', ReviewsController.deleteReview);

router.put('/update/:id', ReviewsController.update);


router.get('/:id', ReviewsController.show);

module.exports = router;