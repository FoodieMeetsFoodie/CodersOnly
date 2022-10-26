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

// const chatSchemaNoodle = mongoose.Schema({
//   username: [
//     {
//       sender: username,
//       message: { type: String, required: true },
//     },
//   ],
// });

/*
post request andres to user hua
goes to the controller
db collection new message

user andres messages user hua
new collection is created between andres and hua
object MSG has a value {
  userandres: msg
  userhua: msg
  userandres:msg
  userandres:msg
}

{
  andres: [
    {hua: 
      [  { sender: andres, time: 449, message: sup}, 
      {sender: hua, time: 1200, message: yo}]
    },
    {user3: 
      [{sender: time: , message:}]
    },
  ],
  hua: [
    {andres: 
      [ {sender: andres, time: 449, message: sup}, 
        {sender: hua, time 1200,message yo} ]
    }
  ]
}


*/

const User = mongoose.model('user', userSchema);

module.exports = User;
