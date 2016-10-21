var express = require('express');
var router = express.Router();              // get an instance of the express Router




/* Api main page. */
router.get('/', function(req, res) {
	res.render('api-home', res.locals.template_data = {
		layout: 'api',
		meta_title: 'Панель управления сайтом СтройКрепость'
	});
});

/* Api photos */
router.get('/photos', function(req, res) {
	res.render('api-photos', res.locals.template_data = {
		layout: 'api',
		meta_title: 'Управление фотографиями'
	});
});


module.exports = router;