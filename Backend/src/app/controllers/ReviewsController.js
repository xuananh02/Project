const Review = require('../models/review');
const { mongooseToObject } = require('../../utils/mongoose');

class ReviewsController {
    //[GET] /reviews/detail/:id
    show(req, res, next) {
        Review.findOne({ _id: req.params.id })
            .then(review => {
                res.send(mongooseToObject(review))
            })
            .catch(next);
            
    }

    store(req, res, next) {
        const formData = req.body;
        const review = new Review(formData);
        review.save()
            .then(() => res.json({
                status: 200
            }))
            .catch(() => res.json({
                status: 500
            }));
    }

    // [GET] /reviews/edit/:id
    edit(req, res, next) {
        Review.findById(req.params.id)
            .then(review => {
                res.send(mongooseToObject(review))
            })
            .catch(next);
    }

    // [PUT] /books/:id
    update(req, res, next) {
        Review.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.json({
                status: 201
            }))
            .catch(() => res.json({
                status: 501
            }));
    }

    // [DELETE] /reviews/delete
    deleteReview(req, res, next) {
        Review.deleteOne({ _id: req.params.id })
            .then(() => res.send('DELETE SUCCESS!'))
            .catch(() => res.send('DELETE FAIL!'));
    }
    
}

module.exports = new ReviewsController;