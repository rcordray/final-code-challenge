var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var bulletinSchema = new Schema({
    name: { type: String, required: true, unique: true },
    post: { type: String, required: true }
});

module.exports = mongoose.model('bulletin', bulletinSchema);