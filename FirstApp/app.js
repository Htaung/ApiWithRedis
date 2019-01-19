/*var io = require('socket.io').listen(4000);
io.sockets.on('connection', function(socket){
socket.emit('ping');

socket.on('pong', function(data){
console.log('pong');
});

socket.on('join', function(data){
    io.sockets.emit('userJoined', data);
    socket.username = data.username;
  });
  socket.on('ping', function(data){
    
    io.sockets.emit('ping', {username: socket.username});
  });

});*/


var io = require('socket.io').listen(4000);
io.sockets.on('connection', function(socket){
  
socket.on('join', function(data){
  socket.broadcast.emit('userJoined', data);  
  //io.sockets.emit('userJoined', data);
    socket.username = data.username;
  });

socket.on('ping', function(data, done){
  //socket.get('username', function(err, username){
  //io.sockets.emit('ping', {username: socket.username});
  socket.broadcast.emit('ping', {username: socket.username});
  done('ack');
});

socket.on('disconnect', function(){
  socket.broadcast.emit('userDisconnect', {username: socket.username});
});     

});