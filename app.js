var express = require('express');
//all the other variables declarations at the top of app.js
var partials = require('express-partials');
var routes = require('./routes');
var errorHandlers = require('./middleware/errorhandlers');
var log = require('./middleware/log');
var app = express();
var cookieParser = require('cookie-parser');

//app.use(errorHandlers.notFound);
app.set('view engine', 'ejs');
app.set('view options', { defaultLayout: 'layout' });
app.use(log.logger);
app.use(express.static(__dirname + '/static'));
app.use(cookieParser());
app.use(partials());
//all other middleware functions



app.get('/', routes.index);
app.get('/login', routes.login);
app.post('/login', routes.loginProcess);
app.get('/chat', routes.chat);
app.get('/error', function (req, res, next) {
    next(new Error('A contrived error'));
});

app.use(errorHandlers.error);
app.use(errorHandlers.notFound);
app.listen(3000);
console.log("App server running on port 3000");