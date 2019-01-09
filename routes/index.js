module.exports.index = index;
module.exports.login = login;
module.exports.loginProcess = loginProcess;
module.exports.chat = chat;

function index(req, res) {
    res.cookie('IndexCookie', 'This was set from Index');
    res.render('index', { title: 'Index', cookie: JSON.stringify(req.cookies) });
    //res.render('index', { layout: 'layout', title: 'Index' });
    //res.render('index', { title: 'Index' });
};


function login(req, res) {
    res.render('login', { title: 'Login' });
    //res.send('Login');
};

function loginProcess(req, res) {
    res.redirect('/');
};

function chat(req, res) {
    res.render('chat', { layout: 'layout', title: 'Chatting' });
    //res.send('Chat');
};

