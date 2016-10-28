var express = require('express');
var router = express.Router();              // get an instance of the express Router




/* Api main page. */
router.get('/', function(req, res) {
	res.render('404', res.locals.template_data = {
		layout: 'main',
		active: { home: true },
		meta_title: 'Обновляется'
	});
});

/* Api photos */
router.get('/photos', function(req, res) {
	res.render('api-photos', res.locals.template_data = {
		layout: 'api',
		active: { photos: true },
		meta_title: 'Управление фотографиями'
	});
});


module.exports = router;