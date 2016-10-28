var express = require('express');
var router = express.Router();              // get an instance of the express Router
var getSlug = require('speakingurl');

//Define mongoose Schema
var Category = require('../models/category');


// ----------------------------------------------------
router.route('/categories')

// create a Category (accessed at POST /api/categories)
	.post(function(req, res) {

		var category = new Category();

		category.title = req.body.title;
		if (!category.title) {
			res.redirect('/api/categories');
			return;
		}

		category.slug = getSlug( category.title );
		category.description = req.body.description;

		// save and check for errors
		category.save(function(err) {
			if (err) {
				res.redirect('/api/categories');
				return;
			}

			 
			res.redirect('/api/categories')
		});

	})

	// get all (accessed at GET /api/categories)
	.get(function(req, res) {

		Category.find(function(err, category) {
			if (err) throw err;

			res.render('api-categories', res.locals.template_data = {
				layout: 'api',
				active: { categories: true },
				meta_title: 'Управление категориями',
				category: category
			});

		});
	});


// ----------------------------------------------------
router.route('/categories/:category_id')

// get by :category_id
	.get(function(req, res) {
		Category.findById(req.params.category_id, function(err, category) {
			if (err) throw err;

			res.json(category);
		});
	})
	// update
	.put(function(req, res) {
		Category.findById(req.params.category_id, function(err, category) {
			if (err) throw err;

			category.title = req.body.title;
			category.slug = getSlug( category.title );
			category.description = req.body.description;

			category.save(function(err) {
				if (err) throw err;

				res.json({ message: 'Category updated!' });
			});

		});
	})

	// delete
	.delete(function(req, res) {
		Category.remove({
			_id: req.params.category_id
		}, function(err, category) {
			if (err) throw err;

			res.json({ message: 'Successfully deleted' });
		});
	});

////
router.route('/categories-list')

	// get all (accessed at GET /api/categories)
	.get(function(req, res) {

		Category.find(function(err, category) {
			if (err) throw err;

			res.json(category);

		});
	});


module.exports = router;