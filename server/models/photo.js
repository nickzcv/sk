var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var PhotoSchema   = new Schema({
	filename: { type: String, required: true, unique: true },
	title: { type: String },
	isMain: { type: Boolean, default: false },
	category : { type: String }
});

module.exports = mongoose.model('Photo', PhotoSchema);