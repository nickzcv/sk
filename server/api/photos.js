var express = require('express');
var router = express.Router();
var multer  = require('multer');
var bodyParser = require('body-parser');

var mime = require('mime');

var upload = multer({
	storage: multer.diskStorage({
		destination: function (req, file, cb) {
			cb(null, 'src/photos');

		},
		filename: function (req, file, cb) {
			cb(null, file.fieldname + '-' + Date.now() + '.' + mime.extension(file.mimetype));

		}
	})
});

//Define mongoose Schema
var Photo = require('../models/photo');

router.use(bodyParser.urlencoded({
	extended: false
}));

// ----------------------------------------------------
router.route('/photos')

	.post(upload.single('photo'), function(req, res) {

		var photo = new Photo();

		if (!req.file) {
			res.redirect('/api/photos');
			return;
		}

		photo.filename = req.file.filename;
		photo.title = req.body.title;
		photo.category = req.body.category;
		photo.updated_at = new Date();

		photo.isMain = req.body.isMain ? true : false;

		// save and check for errors
		photo.save(function(err) {
			if (err) {
				res.redirect('/api/photos#error');
				return;
			}
			res.redirect('/api/photos')
		});

	})


	.get(function(req, res) {

		Photo.find( {}, null, {sort: {updated_at: -1}}, function(err, photo) {
			if (err) throw err;

			res.render('api-photos', res.locals.template_data = {
				layout: 'api',
				active: { photos: true },
				meta_title: 'Управление фотографиями',
				photogr: photo
			});
			
		});
		
	});


// ----------------------------------------------------

router.route('/photos/:photo_id')

	.get(function(req, res) {
		Photo.findById(req.params.photo_id, function(err, photo) {
			if (err) throw err;

			res.json(photo);
		});
	})

	// update
	.put(function(req, res) {
		Photo.findById(req.params.photo_id, function(err, photo) {
			if (err) throw err;

			photo.title = req.body.title;
			photo.category = req.body.category;
			photo.isMain = req.body.isMain ? true : false;
			photo.updated_at = new Date();

			photo.save(function(err) {
				if (err) throw err;

				res.json({ message: 'photo updated!' });
			});

		});
	})

	// delete
	.delete(function(req, res) {
		Photo.remove({
			_id: req.params.photo_id
		}, function(err, photo) {
			if (err) throw err;

			res.json({ message: 'Successfully deleted' });
		});
	});


router.route('/photos-total')

	.get(function(req, res) {
		Photo.count({}, function( err, count){
			if (err) throw err;

			res.json(count);
		})
	});



module.exports = router;

