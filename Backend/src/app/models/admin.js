const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Adminschema = new Schema({
    username: {type: String, maxLength: 10, required: true, unique: true },
    name: {type: String, maxLength: 100, required: true },
    password: {type: String, maxLength: 16, required: true}
}, {collection: 'admin'});

module.exports = mongoose.model('admin', Adminschema);