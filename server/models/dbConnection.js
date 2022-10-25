require('dotenv').config();
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
