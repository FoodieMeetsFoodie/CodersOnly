const db = require('../models/dbConnection');
const bcrypt = require('bcrypt');

const authController = {}

authController.verifyUser = async (req, res, next) => {

    try {
        const { username, password } = req.body;

        const queryString = 'SELECT * FROM users WHERE username = $1;';
        const values = [username];

        const { rows } = await db.query(queryString, values);
        const hashedPassword = rows[0].password;
    
        let verified = await bcrypt.compare(password, hashedPassword);
    
        verified ? (res.locals.userExists = true) : (res.locals.userExists = false);
    
        return next();
      } catch (err) {
        return next({
          log: `authController.js: ERROR: ${err}`,
          status: 400,
          message: {
            err: 'An error occurred in authController.verifyUser. Check server logs for more details',
          },
        });
      }

};

module.exports = authController;