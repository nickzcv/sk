var express = require('express');
var router = express.Router();              // get an instance of the express Router
var getSlug = require('speakingurl');

//Define mongoose Schema
var Page = require('../models/page');


// ----------------------------------------------------
router.route('/pages')

	.post(function(req, res) {

		var page = new Page();

		page.title = req.body.title;
		page.url = getSlug( page.title );
		page.description = req.body.description;
		page.text = req.body.text;
		page.img = req.body.img;
		page.created_at = new Date();
		page.updated_at = new Date();
		page.categories = req.body.categories;
		page.main = req.body.main;

		// save and check for errors
		page.save(function(err) {
			if (err)
				res.send(err);

			res.json({ message: 'Page created!' });
		});

	})

	.get(function(req, res) {

		Page.find(function(err, page) {
			if (err)
				res.send(err);

			res.json(page);

		});
	});


// ----------------------------------------------------
router.route('/pages/:page_id')

	.get(function(req, res) {
		Page.findById(req.params.page_id, function(err, page) {
			if (err)
				res.send(err);

			res.json(page);
		});
	})
	// update
	.put(function(req, res) {
		Page.findById(req.params.page_id, function(err, page) {

			if (err)
				res.send(err);

			page.title = req.body.title;
			page.url = getSlug( page.title );
			page.description = req.body.description;
			page.text = req.body.text;
			page.img = req.body.img;
			page.updated_at = new Date();
			page.categories = req.body.categories;
			page.main = req.body.main;


			page.save(function(err) {
				if (err)
					res.send(err);

				res.json({ message: 'Page updated!' });
			});

		});
	})

	// delete
	.delete(function(req, res) {
		Page.remove({
			_id: req.params.page_id
		}, function(err, page) {
			if (err)
				res.send(err);

			res.json({ message: 'Successfully deleted' });
		});
	});



module.exports = router;