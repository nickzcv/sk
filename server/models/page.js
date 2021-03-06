var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var PageSchema   = new Schema({
	category : { type: String, required: true},
	title: { type: String, required: true},
	url: { type: String, required: true, unique: true },
	description:  String,
	content:  String,
	created_at: Date,
	updated_at: Date,
	isMain: { type: Boolean, default: false }
});

module.exports = mongoose.model('Page', PageSchema);