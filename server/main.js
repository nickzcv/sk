var express = require('express');
var router = express.Router();

var Photo = require('./models/photo');
var Page = require('./models/page');



/* Get Main pages*/
router.get('/main-pages', function(req, res) {
    Page.find( { isMain : true } , function(err, page) {
        if (err) throw err;

        res.json(page);
    });
});



/* Home page. */
router.get('/', function(req, res) {
    Photo.find( { isMain : true } , function(err, photos) {
        if (err) throw err;

        res.render('home', res.locals.template_data = {
            layout: 'main',
            active: { home: true },
            meta_title: 'Производство и проектирование бытовок, домиков, беседок - компания СтройКрепость',
            slides: photos
        });
    });

});


/* Prod page */
router.get('/products', function(req, res) {
    Page.find( { isMain : false } , function(err, page) {
        if (err) throw err;

        res.render('products', res.locals.template_data = {
            layout: 'inner',
            active: { prod: true },
            meta_title: 'Продукция компании',
            products: page
        });

    });
});


/* pages */
router.get('/page/:page_id', function(req, res) {
   //page code here
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

router.get('/photos/:photo_id', function(req, res) {
    Photo.findById(req.params.photo_id, function(err, photo) {
        if (err) throw err;

        res.json(photo);
    });
});


/* Contacts page. */
router.get('/contacts', function(req, res) {
    res.render('contacts', res.locals.template_data = {
        layout: 'inner',
        meta_title: 'Контакты',
        active: { contacts: true }
    });
});



module.exports = router;

