const express = require('express');
const app = express();
const mongoose = require('mongoose');
const port = 3000;






app.use(express.urlencoded({ extended: true }));
app.use(express.json());














app.listen(port, () => console.log(`Server started on port ${port}`));

module.exports = app;