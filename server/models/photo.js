var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var PhotoSchema   = new Schema({
	title: { type: String, required: true},
	slug: { type: String, required: true, unique: true },
	description:  String
});

module.exports = mongoose.model('Photo', PhotoSchema);