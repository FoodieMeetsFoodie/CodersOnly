const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  age: { type: Number, required: true },
  location: { type: String, required: true },
  cuisine: { type: String, required: true },
  //we need a liked schema to save usernames of people we liked
  //do we need one for no as well so they won't populate page
  matches: {},
  comment: { type: String, default: ' ' },
});

const User = mongoose.model('user', userSchema);

module.exports = User;
