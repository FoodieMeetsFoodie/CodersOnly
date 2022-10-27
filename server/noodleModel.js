const mongoose = require('mongoose');
const { Schema } = mongoose;

const noodleSchema = new Schema({
    username: [
            {
              sender: [Schema.Types.ObjectId],
              message: { type: String, required: true },
            },
          ],
    
}, { timestamps: true })

// const chatSchemaNoodle = mongoose.Schema({
//   username: [
//     {
//       sender: username,
//       message: { type: String, required: true },
//     },
//   ],
// });

const Noodle = mongoose.model('noodle', noodleSchema);
module.exports = Noodle;