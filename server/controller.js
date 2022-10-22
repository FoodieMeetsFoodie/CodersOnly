const User = require('./userModel');

const controller = {};

controller.createUser = async (req, res, next) => {
  console.log(req.body);
  try {
    const { username, password, age, location, cuisine, comment, matches } =
      req.body;
    if (typeof username !== 'string')
      throw new Error('username should be a string');
    res.locals.user = await User.create({
      username,
      password,
      age,
      location,
      cuisine,
      comment,
      matches,
    });
    return next();
  } catch (err) {
    return next({
      log: `controller.js: ERROR: ${err}`,
      status: 400,
      message: {
        err: 'An error occurred in controller.createUser. Check server logs for more details',
      },
    });
  }
};

controller.getUser = async (req, res, next) => {
  try {
    const { username } = req.params;
    res.locals.user = await User.find({ username }).exec();
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

// controller.updateUser = async (req, res, next) => {
//   try {
//     const { username } = req.params;
//     res.locals.user = await User.updateOne({username}, TODO: ADD UPDATE).exec();
//     return next();
//   }
//   catch (err) {
//     return next({
//         log: `controller.js: ERROR: ${err}`,
//         status: 400,
//         message: {
//         err: 'An error occurred in controller.updateUser. Check server logs for more details',
//         },
//     });
//   }
// };

module.exports = controller;
