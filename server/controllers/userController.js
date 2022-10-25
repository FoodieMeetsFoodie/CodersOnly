const db = require('../models/dbConnection');

const userController = {};

userController.getUser = async (req, res, next) => {
  try {
    console.log('ID ', req.params);
    const { username } = req.params;
    const queryString = 'SELECT * FROM users WHERE username = $1;';
    const values = [username];

    const { rows } = db.query(queryString, values);
    res.locals = rows[0];
    return next();
  } catch (err) {
    return next({
      log: `controller.js: ERROR: ${err}`,
      status: 400,
      message: {
        err: 'An error occurred in controller.getUser. Check server logs for more details',
      },
    });
  }
};

userController.createUser = async (req, res, next) => {
  try {
    const {
      username,
      password,
      age,
      location,
      proglang,
      comment,
      matches,
      url,
    } = req.body;
    if (typeof username !== 'string')
      throw new Error('username should be a string');
    const getHabitString =
      'INSERT INTO habits (username, password, first_name, last_name, age, location, proglang, comment, matches)\
      VALUES($1, $2, $3, $4, $5) RETURNING *';
    const values = [
      username,
      password,
      'testFirstName',
      'testLastName',
      age,
      location,
      proglang,
      comment,
      matches,
      url,
    ];
    const { rows } = await db.query(getHabitString, values);
    res.locals.user = rows[0];

    return next();
  } catch (err) {
    return next({
      log: `controller.js: ERROR: ${err}`,
      status: 400,
      message: {
        err: `An error occurred in userController.createUser. Err: ${err.message}`,
      },
    });
  }
};
