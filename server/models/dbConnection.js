require('dotenv').config();
const mongoose = require('mongoose');
const { Pool } = require('pg');
const PG_URI =
  'postgres://csoqoukx:2RpuObaEM11CqkW0ipGXG3cH_ue0nEUa@peanut.db.elephantsql.com/csoqoukx';

const pool = new Pool({
  connectionString: PG_URI,
});

module.exports = {
  query: (text, params, callback) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  },
};

// TODO: Uncomment this when want to use our own instance.
// mongoose.connect(
//   'mongodb+srv://codersonly:TfJswD1Pp90S6xpZ@cluster0.uxq9qjo.mongodb.net/?retryWrites=true&w=majority',
//   () => console.log('Velociraptor Mongo Connected')
// );
