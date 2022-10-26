const User = require('../models/userModel');


const functionsController = {};

functionsController.getFriends = async (req, res, next) => {

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

functionsController.updateUserMatches = async (req, res, next) => {
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

module.exports = functionsController;
