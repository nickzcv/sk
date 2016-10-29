var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var PhotoSchema   = new Schema({
	filename: { type: String, required: true, unique: true },
	title: { type: String },
	isMain: { type: Boolean, default: false },
	category : { type: String },
	updated_at: Date
});

module.exports = mongoose.model('Photo', PhotoSchema);