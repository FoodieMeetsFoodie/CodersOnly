const { Pool } = require('pg');

const PG_URL = 'postgres://brydsqjq:zvPLfa7EGG1qpp4b2_bkrYY47k2LGPrV@peanut.db.elephantsql.com/brydsqjq'


const pool = new Pool({
  connectionString: PG_URL
});

module.exports = {
  query: (text, params, callback) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  }
}