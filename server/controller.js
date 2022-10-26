const User = require('./userModel');
const Session = require('./sessionModel');

const controller = {};

controller.createUser = async (req, res, next) => {
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
    res.locals.user = await User.create({
      username,
      password,
      age,
      location,
      proglang,
      comment,
      matches,
      url,
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

controller.verifyUser = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    const found = await User.findOne({
      username: username,
      password: password,
    });
    if (found) {
      res.locals.userExists = true;

      res.cookie('ssid', found._id, {
        httpOnly: true,
      });

      const newSession = new Session({ cookieId: found._id });
      newSession.save();
    } else {
      res.locals.userExists = false;
    }
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

    // logic to check if decision is yes for both clickeduser and currUser
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

controller.isLoggedIn = async (req, res, next) => {
  try {
    const currSession = await Session.findOne({ cookieId: req.cookies.ssid });
    console.log('currSession', currSession);
    if (currSession) {
      const { username } = await User.findOne({ _id: req.cookies.ssid });
      res.locals.sessionFound = username;
    } else {
      res.locals.sessionFound = false;
    }
  } catch {
    next({
      log: 'session controller isloggedin error',
      message: { err: 'session does not exist or expired' },
    });
  }
  next();
};

module.exports = controller;
