const messagesController = {};

const db = require('../models/dbConnection');

messagesController.postMessage = async (req, res, next) => {
  try {
    const { user_1, user_2 } = req.body;
    const getChatId = '';
    const postMessageQuery = 'INSERT INTO messages (chat)';
  } catch (error) {}
};

messagesController.getDummyMsg = async (req, res, next) => {
  try {
    res.locals.message = [
      {
        userId: 1,
        message: 'I am the best OW2 player ever',
      },
      {
        userId: 2,
        message: 'no u actually suck',
      },
    ];

    return next();
  } catch (err) {
    return next({
      log: `messages.dummyMessage: ERROR: ${err}`,
      status: 400,
      message: {
        err: 'An error occurred in messages.dummyMessage. Check server logs for more details',
      },
    });
  }
};

module.exports = messagesController;
