<h1>Build Scable Apps with redis and node </h1>


<h3>Remember that the middleware is processed in order </h3>



<h1>Redis as a session store </h1>
<h1> Redis on window https://github.com/MicrosoftArchive/redis/releases </h1>
redis-cli -h 192.168.10.01 -p  6380 ping

<p>
First install Redis_cli if you are using window
<pre><code>
npm install redis -save
npm install connect-redis -save
</code></pre>

For a production-ready scalable application, Redis will be moved to a separate
server or even several servers.
</p>

Alt+ shift + F Source formatting in windows


<h2>Comment in EJS </h2>
<pre><code>
<% /* %>

<% */ %>
</code></pre>

<h1> connect-redis ==>  </h1>
https://stackoverflow.com/questions/20803429/using-redis-as-a-session-store-in-node-js-and-how-to-get-values-from-it
<p>
	need to change the version in package.json inorder to use redis store 
	"connect-redis": "2.0.0",
</p>

in redis-cli get sess key by 
==> Signed Cookie passed: {"connect.sid":"Dub4449n6med4fEhpxnouvGZmrUW5cjP"}
<code>
<pre>
redis-cli 
127.0.0.1 > get sess:Dub4449n6med4fEhpxnouvGZmrUW5cjP
</pre>
</code>

Res.locals is a special object that is available to all templates that have access
to this response

The app.use function will apply the middleware to
every request coming in.

<h2>Creating our own middleware</h2>

To add a middleware layer to Express, we use app.use(), which allows us to take
a middleware function.


For some though, the middleware should only be executed on certain routes
app.get('/chat', [util.requireAuthentication], routes.chat);

Our authentication middleware sets req.locals.isAuthenticated, which means
that any request can run a Boolean check on it. It also sets the req.locals.user
object for the template.

Flash messaging is
when we have something to tell the user from one request to the next

use connect-flash to let the user know when something has happened.
Connect-flash uses the session, so it must be after the session middleware

//variable declarations
Var flash = require('connect-flash');
//middleware stack after session, but before the routes
app.use(flash());


req.flash('error', 'Wrong Username or Password');
//The message is now in the session.

To display this
req.flash('error'); //will also delete it from the session


Let's say
our app grows and the secret is referenced in two other middleware. This will create
a lot of pain and waste time tracking down weird bugs in the code. What we need is
a config file to store all the application's settings.

A quick check of our application shows that we
are using the string '/login' in four different places. Let's all make it in one place.

res.locals.routes = config.routes;
just adds the routes object from config to res.locals.
Every template will now be able to use the login and logout routes.


Page No.50

<h1>Chapter 2 </h1>
<h2>Extending Our Development with Socket.IO </h2>

When we want to send an event to a client from the server-side socket, we use the
emit method. It will send a message over the socket to the client. On the client side,
it needs to have a listener with the same event name.

Create FirstApp Folder and add package.json and run npm install 
after that add necessary file including socket.io client html page  and run the socket as 4000

after that go into that FirstApp Folder in command line and run the python to run as http server
<code>
<pre>
python -m http.server 8081
</pre>
</code>

after that invoke localhost:8081 it will called index.html that is located in FirstApp Folder 
that index.html will listen on port no 4000 that socket was created from node js ==> that node js was send req to client by ping
client index.html listen on ping event and send pong as response to server side node js

# If Python version returned above is 3.X
python3 -m http.server
# If Python version returned above is 2.X
python -m SimpleHTTPServer