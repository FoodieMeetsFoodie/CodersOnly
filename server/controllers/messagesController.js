const messagesController = {};

const db = require('../models/dbConnection');

messagesController.postMessage = async (req, res, next) => {
  try {
    const { user_1, user_2, messageText } = req.body;
    const chatId = '';

    const getChatIdQuery =
      'SELECT chat_id FROM chats WHERE user_1 = $1 AND user_2 = $2 VALUES($1, $2);';
    const values = [user_1, user_2];
    const { rows } = await db.query(getChatIdQuery, values);

    if (!rows[0]) {
      const makeChatIdQuery =
        'INSERT INTO chats (user_1, user_2) VALUES ($1, $2) RETURNING chat_id;';
      const makeChatResults = await db.query(makeChatIdQuery, values);
      chatId = makeChatResults.rows[0].chat_id;
    } else {
      chatId = rows[0].chat_id;
    }

    const postMsgQuery =
      'INSERT INTO messages (chat_id, owner_id, message_text, timestamp)\
      VALUES($1, $2, $3, $4;) RETURNING *;';
    values = [chatId, user_1, messageText];
    const results = ({ rows } = await db.query(postMsgQuery, values));
    console.log('POST MESSAGE RESULTS', results);
    res.locals.message = results;
    return next();
  } catch (error) {
    return next({
      log: `controller.js: ERROR: ${error}`,
      status: 400,
      message: {
        err: `An error occurred in messageController.postMessage. Err: ${error.message}`,
      },
    });
  }
};

messagesController.getMessages = async (req, res, next) => {
  try {
    const { user_1, user_2 } = req.body;
    const getChatId = '';
    const postMessageQuery = 'INSERT INTO messages (chat)';
  } catch (error) {}
};

messagesController.getDummyMsg = async (req, res, next) => {
  console.log('HERE');
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
