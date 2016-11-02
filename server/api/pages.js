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
		page.content = req.body.content;
		if (!page.title || !page.content) {
			res.redirect('/api/pages');
			return;
		}

		page.category = req.body.category;

		page.url = getSlug( page.title );
		page.description = req.body.description;

		page.created_at = new Date();
		page.updated_at = new Date();

		page.isMain = req.body.isMain ? true : false;

		// save and check for errors
		page.save(function(err) {
			//if (err)
			//	res.redirect('/api/pages');

			res.redirect('/api/pages');
		});

	})

	.get(function(req, res) {

		Page.find( {}, null, {sort: {created_at: -1}}, function(err, page) {
			if (err) throw err;

			res.render('api-pages', res.locals.template_data = {
				layout: 'api',
				active: { pages: true },
				meta_title: 'Управление страницами сайта',
				pages: page
			});

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
			page.content = req.body.content;
			if (!page.title || !page.content) {
				res.redirect('/api/pages');
				return;
			}

			page.category = req.body.category;

			page.url = getSlug( page.title );
			page.description = req.body.description;

			page.created_at = new Date();
			page.updated_at = new Date();

			page.isMain = req.body.isMain ? true : false;

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


router.route('/pages-total')

	.get(function(req, res) {
		Page.count({}, function( err, count){
			if (err) throw err;

			res.json(count);
		})
	});



module.exports = router;