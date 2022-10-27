const express = require('express');
const app = express();
const cors = require('cors');
const http = require('http');
const server = http.createServer(app);
const { Server } = require('socket.io');
const mongoose = require('mongoose');
const port = 3000;
const apiRouter = require('./api.js');
const { SocketAddress } = require('net');
const Noodle = require('./noodleModel');

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

mongoose.connect(
  'mongodb+srv://jchen0903:ilovecodesmith@cluster0.wjuijhf.mongodb.net/FoodTinder?retryWrites=true&w=majority'
);

const io = new Server(server, {
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST'],
  },
});

const CHAT_BOT = 'ChatBot'; // add this listen for when the client connects via socket.io-client
let chatRoom = '';
let allUsers = [];

// Listen for when the client connects via socket.io-client
io.on('connection', (socket) => {
  console.log(`User connected ${socket.id}`);

  // Add this
  // Add a user to a room
  socket.on('join_room', (data) => {
    const { username, room } = data; // Data sent from client when join_room event emitted
    socket.join(room); // Join the user to a socket room

    let __createtime__ = Date.now(); // current timestamp
    // send message to all users currently in the room, apart from the user that just joined
    socket.to(room).emit('receive_message', {
      message: `${username} has joined the chat room`,
      username: CHAT_BOT,
      __createtime__,
    });

    // Save the new user to the room
    chatRoom = room;
    allUsers.push({ id: socket.id, username, room });
    chatRoomUsers = allUsers.filter((user) => user.room === room);
    socket.to(room).emit('chatroom_users', chatRoomUsers);
    socket.emit('chatroom_users', chatRoomUsers);
  });

  socket.on('send_message', (data) => {
    const { message, username, room, __createdtime__ } = data;
    io.in(room).emit('receive_message', data); // Send to all users in room, including sender

    const messageNoodle = new Noodle.create({
      message,
      username,
      room,
      __createdtime__,
    })
      // harperSaveMessage(message, username, room, __createdtime__) // Save messagne in db
      .then((response) => console.log(response))
      .catch((err) => console.log(err));
  });

  socket.on('disconnect', () => {
    console.log('User disconnected from the chat');
    const user = allUsers.find((user) => user.id == socket.id);
    if (user?.username) {
      allUsers = leaveRoom(socket.id, allUsers);
      socket.to(chatRoom).emit('chatroom_users', allUsers);
      socket.to(chatRoom).emit('receive_message', {
        message: `${user.username} has disconnected from the chat.`,
      });
    }
  });
});

server.listen(3000, () => 'Server is running on port 3000');

app.use('/api', apiRouter);

app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

// http.listen(port, () => {
//   console.log(`listening on port ${port}`);
// });

module.exports = app;

// const http = require('http').createServer(app);
// const socketio = require('socket.io');

// const io = socketio(http, {
//   cors: {
//     origin: 'http://localhost:8080', // your frontend server address
//     methods: ['GET', 'POST'],
//   },
// });
// app.listen(port, () => console.log(`Server started on port ${port}`));
// const httpServer = app.listen(port, () => {console.log(`Server listening on port ${port}`)});
// io.on('connection', function (socket) {
//   console.log(socket.id);
// });
// io.on('connection', (socket) => {
//   console.log('a user connected');
//   socket.on('disconnect', () => {
//     console.log('user disconnected');
//   });
// });
