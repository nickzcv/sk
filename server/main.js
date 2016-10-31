var express = require('express');
var router = express.Router();

var Photo = require('./models/photo');


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
    Photo.find( {}, null, {sort: {updated_at: -1}}, function(err, photo) {
        if (err) throw err;

        res.render('photos', res.locals.template_data = {
            layout: 'inner',
            active: { photos: true },
            meta_title: 'Фотоархив компании',
            photogr: photo
        });

    });
});

/* Contacts page. */
router.get('/contacts', function(req, res) {
    res.render('contacts', res.locals.template_data = {
        layout: 'inner',
        meta_title: 'Контакты'
    });
});



module.exports = router;

