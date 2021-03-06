var express = require('express');
//all the other variables declarations at the top of app.js
var partials = require('express-partials');
var session = require('express-session');
var flash = require('connect-flash');
var csrf = require('csurf');
var util = require('./middleware/utilities');
var RedisStore = require('connect-redis')(session);
//var redis = require("redis").createClient(6379, '127.0.0.1');
var routes = require('./routes');
var errorHandlers = require('./middleware/errorhandlers');
var log = require('./middleware/log');
var app = express();
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var config = require('./config');


//app.use(errorHandlers.notFound);
app.set('view engine', 'ejs');
app.set('view options', { defaultLayout: 'layout' });



//app.use(cookieParser());
app.use(partials());
app.use(log.logger);
app.use(express.static(__dirname + '/static'));
app.use(cookieParser(config.secret));
//app.use(session());
//app.use(session({ secret: 'secret' }));


app.use(session({
    secret: config.secret,
    saveUninitialized: true,
    resave: true,
    store: new RedisStore(config.redisOption)
}));
app.use(flash());
app.use(util.templateRoutes);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(csrf());
app.use(util.csrf);
app.use(util.authenticated);


//all other middleware functions
app.use(function (req, res, next) {
    if (req.session.pageCount) {
        req.session.pageCount++;
        console.log("Session page count ==> " + req.session.pageCount);
    }
    else
        req.session.pageCount = 1;
    next();
});


app.get('/', routes.index);
app.get(config.routes.login, routes.login);
app.post(config.routes.login, routes.loginProcess);
app.get(config.routes.logout, routes.logOut);
//app.get('/chat', routes.chat);
app.get('/chat', [util.requireAuthentication], routes.chat);
app.get('/error', function (req, res, next) {
    next(new Error('A contrived error'));
});

app.use(errorHandlers.error);
app.use(errorHandlers.notFound);
app.listen(config.port);
console.log("App server running on port 3000");