var express = require('express');
var router = express.Router();



// middleware specific to this router
router.use(function timeLog(req, res, next) {
  //console.log('Time: ', Date.now());
  next();
});


/* Home page. */
router.get('/', function(req, res) {
    res.render('home', res.locals.template_data = {
        layout: 'main',
        meta_title: 'Производство и проектирование бытовок, домиков, беседок - компания СтройКрепость'
    });
});

/* Photo archive */
router.get('/photos', function(req, res) {
    res.render('photos', res.locals.template_data = {
        layout: 'main',
        meta_title: 'Фотоархив компании СтройКрепость'
    });
});

/* Contacts page. */
router.get('/contacts', function(req, res) {
    res.render('contacts', res.locals.template_data = {
        layout: 'main',
        meta_title: 'Контакты компании СтройКрепость'
    });
});



module.exports = router;

