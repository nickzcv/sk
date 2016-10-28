var express = require('express');
var router = express.Router();              // get an instance of the express Router




/* Api main page. */
router.get('/', function(req, res) {
	res.render('api-home', res.locals.template_data = {
		layout: 'api',
		active: { home: true },
		meta_title: 'Обновляется'
	});
});


module.exports = router;