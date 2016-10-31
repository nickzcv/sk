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
var basic_auth = require('basic-auth');


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
			return '';
		}
	}
}));

app.locals.unauthorized = function (res) {
	res.set('WWW-Authenticate', 'Basic realm=Authorization Required');
	return res.sendStatus(401);
};
// Auth
var auth = function (req, res, next) {
	var user = basic_auth(req);
	if (!user || !user.name || !user.pass)
		return req.app.locals.unauthorized(res);

	if (user.name === 'ukrep' && user.pass === 'ukrep')
		return next();

	return req.app.locals.unauthorized(res);
};


// ROUTES
// =============================================================================

var main = require(path.join(__dirname, 'server/main'));

app.use('/', main);


var mainApi = require(path.join(__dirname, 'server/api/main'));
var pages = require(path.join(__dirname, 'server/api/pages'));
var categories = require(path.join(__dirname, 'server/api/categories'));
var photos = require(path.join(__dirname, 'server/api/photos'));

app.use('/api', auth);
app.use('/api', mainApi);
app.use('/api', pages);
app.use('/api', categories);
app.use('/api', photos);



// Handle 404 (page not found).
app.use(function (req, res) {
	res.status(404)
		.render('404', res.locals.template_data = {
		layout: 'main',
		meta_title: ''
	});
});


// START THE SERVER
// =============================================================================
app.listen(port);
console.log('How.by run on port: ' + port);