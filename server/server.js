const express = require('express');
const app = express();
const mongoose = require('mongoose');
const port = 3000;
const apiRouter = require('./api.js');

mongoose.connect(
  'mongodb+srv://jchen0903:ilovecodesmith@cluster0.wjuijhf.mongodb.net/FoodTinder?retryWrites=true&w=majority'
);

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

app.listen(port, () => console.log(`Server started on port ${port}`));

module.exports = app;
