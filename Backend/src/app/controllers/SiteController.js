const review = require('../models/review');
const { multipleMongooseToObject } = require('../../utils/mongoose.js');

class SiteController {
    // [GET] /
    index(req, res, next) {
        review.find({})
            .then(reviews => {
                res.send({reviews: multipleMongooseToObject(reviews)});
            })
            .catch(next)
    }
}

module.exports = new SiteController;