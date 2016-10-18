// BASE SETUP
// =============================================================================

// call the packages we need
var express    = require('express');        // call express
var app        = express();                 // define our app using express
var port       = process.env.PORT || 80;
var path 	   = require('path');
var bodyParser = require('body-parser');
var favicon    = require('serve-favicon');
var winston    = require('winston');
var mongoose   = require('mongoose');
var exphbs 	   = require('express-handlebars');


mongoose.connect('localhost:27017/sk_db'); // connect to our database


// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//  __dirname == /
// set the static files location /src/css will be /css for users
app.use(express.static(path.join(__dirname, 'src')));


// serve favicon
app.use(favicon(path.join(__dirname, 'src/images/favicons/favicon.ico')));


// Set up a logger.
app.locals.logger = new winston.Logger();
app.locals.logger.add(winston.transports.Console, {
	colorize: true
}); 

// Log every request.
app.use(function (req, res, next) {
	req.app.locals.logger.info('[' + req.method + ']', req.url);
	next();
});

// Location for static content.
//app.locals.static_root = '/src';

// Initialise handleabars with helpers.
app.set('view engine', 'handlebars');
app.engine('handlebars', exphbs({
	helpers: {
		'static-root': function (data) {
			return '/src/';
		}
	}
}));

// Set 'template_data' variable that will be used with all template rendering.
app.use(function (req, res, next) {
	res.locals.template_data = {
		layout: 'main',
		meta_title: 'СтройКрепость ОДО'
	};
	next();
});


// ROUTES
// =============================================================================

var main = require(path.join(__dirname, 'server/main'));

app.use('/', main);


var pages = require(path.join(__dirname, 'server/api/pages'));
var categories = require(path.join(__dirname, 'server/api/categories'));

app.use('/api', pages);
app.use('/api', categories);



// Handle 404 (page not found).
app.use(function (req, res) {
	res
		.status(404)
		// index for a while
	 	.send(' 404 page');
});


// START THE SERVER
// =============================================================================
app.listen(port);
console.log('How.by run on port: ' + port);