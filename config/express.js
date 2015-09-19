// Morgan, Compression and MethodOverride modules from MEAN Web Dev book
var config = require('./config'),
    express = require('express'),
    bodyParser = require('body-parser'),
    session = require('express-session'),
    flash = require('connect-flash'),
    passport = require('passport'),
    morgan = require('morgan'),
    compress = require('compression'),
    methodOverride = require('method-override');

module.exports = function () {
    var app = express();

    if (process.env.NODE_ENV === 'development') {
// Morgan module provides a simple logger middleware
      app.use(morgan('dev'));
    } else if (process.env.NODE_ENV === 'production') {
// Compress module will provide response compression
      app.use(compress());
    }

    app.use(bodyParser.urlencoded({
      extended: true
    }));
    
    app.use(bodyParser.json());

// MethodOverride module provides DELETE and PUT HTTP verbs legacy support
    app.use(methodOverride());
    
    app.set('views', './app/views');
    app.set('view engine', 'ejs');

    app.use(flash());
    app.use(passport.initialize());
    app.use(passport.session());

    require('../app/routes/index.server.routes.js')(app);
    require('../app/routes/users.server.routes.js')(app);
    
    app.use(express.static('./public'));
            
    return app;
};