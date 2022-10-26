const { mode } = require('../webpack.config');
const models = require('./userModel');

const controller = {};

controller.createUser = async (req, res, next) => {
  const id = Math.floor(Math.random()*100000)
  try {
    const {
      username,
      password,
    } = req.body;
    if (typeof username !== 'string')
      throw new Error('username should be a string');
    const text = `insert into user_login values (${id}, '${username}', '${password}', ${id})`;
    await models.query(text);
    res.locals.userId = id;
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

controller.createProfile = async (req, res, next) => {
  const {id} = req.params
  try{
    const {
      age,
      location,
      prolang,
      comment,
      url,
      name,
    } = req.body
    const text = `insert into user_info values (${id}, ${age}, '${location}', '${prolang}', '${comment}', '${url}', ${id}, '${name}')`;
    res.locals.userInfo = await models.query(text);
    return next();   
  }
  catch (err) {
    return next({
      log: `controller.js: ERROR: ${err}`,
      status: 400,
      message: {
        err: 'An error occurred in controller.createProfile. Check server logs for more details',
      },
    });
  }
}
// change functionality to be for all instances of matches with value of not 'no' (or 'yes' and null)
controller.getUser = async (req, res, next) => {
  try {
    console.log('ID ', req.params);
    const { username } = req.params;
    res.locals.user = await User.findOne({ username }).exec();
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
    const text = `select * from user_login where username='${username}' and password='${password}'`;
    const userInDb = await models.query(text)
    const dbId = userInDb.rows[0].user_id
    if(userInDb){
      const text = `select age, location, prolang, comment, url, name from user_info where user_id = ${dbId}`;
      const userInDbInfo = await models.query(text)
      // console.log(userInDbInfo.rows)
      res.locals.userInfo = userInDbInfo.rows[0]
    }
    //found ? (res.locals.userExists = true) : (res.locals.userExists = false);
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
controller.getFriends = async (req, res, next) => {
  try {
    const data = await User.find();
    res.locals.friends = data;
    return next();
  } catch (err) {
    return next({
      log: `controller.js: ERROR: ${err}`,
      status: 400,
      message: {
        err: 'An error occurred in controller.getFriends. Check server logs for more details',
      },
    });
  }
};

// controller to update user's matches
controller.updateUserMatches = async (req, res, next) => {
  try {
    const { username, clickedUser, decision } = req.params;
    const currUser = await User.findOne({ username });
    currUser.matches[clickedUser] = decision;
    await User.updateOne({ username }, { matches: currUser.matches }).exec();

    // check if decision is yes and if clickedUser's matches also includes currUser: yes
    const { matches } = await User.findOne({ username: clickedUser });
    console.log(matches[username] === 'yes');
    console.log(matches[username]);
    if (matches[username] === 'yes' && decision === 'yes') {
      res.locals.match = true;
    } else {
      res.locals.match = false;
    }

    return next();
  } catch (err) {
    return next({
      log: `controller.js: ERROR: ${err}`,
      status: 400,
      message: {
        err: 'An error occurred in controller.updateUserMatches. Check server logs for more details',
      },
    });
  }
};


module.exports = controller;
