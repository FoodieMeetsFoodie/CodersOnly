const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  age: { type: Number, required: true },
  location: { type: String, required: true },
  proglang: { type: String, required: true },
  matches: {},
  comment: { type: String, default: ' ' },
  url: { type: String },
});

const User = mongoose.model('user', userSchema);

module.exports = User;
