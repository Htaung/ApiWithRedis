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
