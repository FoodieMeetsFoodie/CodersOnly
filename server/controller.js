const User = require('./userModel');

const controller = {};

controller.createUser = async (req, res, next) => {
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
    console.log(res.locals.user);
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

// change functionality to be for all instances of matches with value of not 'no' (or 'yes' and null)
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

controller.verifyUser = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    console.log(req.body);
    const found = await User.findOne({
      username: username,
      password: password,
    });
    found ? (res.locals.userExists = true) : (res.locals.userExists = false);
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

//this controller is for fetching all the profiles from our db
controller.getFriends = async (req, res, next) =>{
  try {
    const data = await User.find();
    res.locals.friends = data;
    return next();
  } catch(err) {
    return next({
      log: `controller.js: ERROR: ${err}`,
      status: 400,
      message: {
        err: 'An error occurred in controller.getFriends. Check server logs for more details',
      }
    })
  }
}


module.exports = controller;
