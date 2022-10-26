const express = require('express');
const app = express();
const mongoose = require('mongoose');
const port = 3000;
const apiRouter = require('./api.js');
const cookieParser = require('cookie-parser');

mongoose.connect(
  'mongodb+srv://pantlessgeese:ilovecodesmith@cluster0.6pxbm3q.mongodb.net/?retryWrites=true&w=majority'
);

//added this bc axios issues
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers'
  );
  res.status(200);
  next();
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

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

app.listen(port, () => console.log(`Server started on port ${port}`));

module.exports = app;
