
var express = require('express');
var router = express.Router();



// middleware specific to this router
router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});


/* Home page. */
router.get('/', function(req, res) {
  res.render('home', res.locals.template_data = {
    layout: 'main',
    meta_title: 'СтройКрепость'
  });
});


// define the about route
router.get('/about', function(req, res) {
  res.send('About ');
});



module.exports = router;

