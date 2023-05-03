const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Reviewschema = new Schema({
    ID: {type: String, maxLength: 10, required: true, unique: true },
    name: { type: String, maxLength: 100, required: true },
    image: { type: String, maxLength: 200 },
    reviewer: { type: String, maxLength: 100},
    content: {type: String}
}, {collection: 'review'});

module.exports = mongoose.model('review', Reviewschema);