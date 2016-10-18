var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var PageSchema   = new Schema({
	title: { type: String, required: true},
	url: { type: String, required: true, unique: true },
	description:  String,
	text:  String,
	img: String,
	created_at: Date,
	updated_at: Date,
	main: { type: Boolean, default: false },
	categories : []
});

module.exports = mongoose.model('Page', PageSchema);