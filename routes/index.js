module.exports.index = index;
module.exports.login = login;
module.exports.loginProcess = loginProcess;
module.exports.chat = chat;
module.exports.logOut = logOut;

function index(req, res) {
    //res.cookie('IndexCookie', 'This was set from Index');
    /*res.render('index', {
        title: 'Index', cookie: JSON.stringify(req.cookies), session: JSON.stringify(req.session),
        signedCookie: JSON.stringify(req.signedCookies)
    });*/
    res.render('index', { title: 'Index' });
    //res.render('index', { layout: 'layout', title: 'Index' });
    //res.render('index', { title: 'Index' });
};


function login(req, res) {
    // res.render('login', { title: 'Login' });
    res.render('login', { title: 'Login', message: req.flash('error') });
    //res.send('Login');
};

/*function loginProcess(req, res) {
    console.log(req.body);
    res.send(req.body.username + ' ' + req.body.password);
};*/

//add a reference to util at the top of the file
var util = require('../middleware/utilities');
//then modify loginProcess
function loginProcess(req, res) {
    var isAuth = util.auth(req.body.username, req.body.password, req.session);
    if (isAuth) {
        res.redirect('/chat');
    } else {
        req.flash('error', 'Wrong Username or Password');
        res.redirect('/login');
    }
};

function logOut(req, res) {
    util.logOut(req.session);
    res.redirect('/');
};

function chat(req, res) {
    res.render('chat', { layout: 'layout', title: 'Chatting' });
    //res.send('Chat');
};

