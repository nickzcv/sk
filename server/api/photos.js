var express = require('express');
var router = express.Router();              // get an instance of the express Router
var getSlug = require('speakingurl');

//Define mongoose Schema
var Photo = require('../models/photo');


// ----------------------------------------------------
router.route('/photos')

// create a Category (accessed at POST /api/categories)
	.post(function(req, res) {

 

	})

	// get all (accessed at GET /api/categories)
	.get(function(req, res) {


	});

 



module.exports = router;