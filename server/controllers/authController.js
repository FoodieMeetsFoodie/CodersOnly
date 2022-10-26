const User = require('../models/userModel');
const bcrypt = require('bcrypt');

const authController = {}

authController.verifyUser = async (req, res, next) => {
  try {
    const { username, password } = req.body;

    const found = await User.findOne({
      username: username
    });

    console.log(found);

    let verified = await bcrypt.compare(password, found.password)

    verified ? (res.locals.userExists = true) : (res.locals.userExists = false);

    return next();
  } catch (err) {
    return next({
      log: `controller.js: ERROR: ${err}`,
      status: 400,
      message: {
        err: 'An error occurred in controller.verifyUser. Check server logs for more details',
      },
    });
  }
};

module.exports = authController;

////////////// SEQUEL CONVERSIONS BELOW //////////////
// const db = require('../models/dbConnection');