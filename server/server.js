const express = require('express');
const app = express();
// const server = http.createServer(app); //??
const http = require('http').createServer(app);
const socketio = require('socket.io');
// const { Server } = require("socket.io");
const io = socketio(http, {
  cors: {
    origin: 'http://localhost:8080', // your frontend server address
    methods: ['GET', 'POST'],
  },
});

const mongoose = require('mongoose');
const port = 3000;
const apiRouter = require('./api.js');
const cors = require('cors');
const corsOptions = {
  origin: 'http://localhost:8080', // your frontend server address
  credentials: true,
  optionsSuccessStatus: 200,
};
mongoose.connect(
  'mongodb+srv://jchen0903:ilovecodesmith@cluster0.wjuijhf.mongodb.net/FoodTinder?retryWrites=true&w=majority'
);

io.on('connection', function (socket) {
  console.log('hello line 17 in server js');
});

// io.on('connection', (socket) => {
//   console.log('a user connected');
//   socket.on('disconnect', () => {
//     console.log('user disconnected');
//   });
// });

app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

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

// app.listen(port, () => console.log(`Server started on port ${port}`));
// const httpServer = app.listen(port, () => {console.log(`Server listening on port ${port}`)});
http.listen(port, () => {
  console.log(`listening on port ${port}`);
});

module.exports = app;
