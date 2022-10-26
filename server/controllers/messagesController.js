const messagesController = {};

const db = require('../models/dbConnection');

messagesController.postMessage = async (req, res, next) => {
  try {
    const { user_1, user_2, messageText } = req.body;
    let chatId = '';

    const getChatIdQuery =
      'SELECT chat_id FROM chats WHERE user_1 = $1 AND user_2 = $2 OR user_1 = $2 AND user_2 = $1 ;';
    let values = [user_1, user_2];
    const { rows } = await db.query(getChatIdQuery, values);
    console.log('postMsg getChatID:', rows[0]);

    if (!rows[0]) {
      const makeChatIdQuery =
        'INSERT INTO chats (user_1, user_2) VALUES ($1, $2) RETURNING chat_id;';
      const makeChatResults = await db.query(makeChatIdQuery, values);
      console.log('postMsg makeChatID:', makeChatResults.rows);
      chatId = makeChatResults.rows[0].chat_id;
    } else {
      chatId = rows[0].chat_id;
    }

    console.log('===');
    const postMsgQuery =
      'INSERT INTO messages (chat_id, owner_id, message_text, time_stamp)\
      VALUES($1, $2, $3, $4) RETURNING *;';
    values = [chatId, user_1, messageText, new Date()];
    const results = await db.query(postMsgQuery, values);
    console.log('POST MESSAGE RESULTS', results.rows);
    res.locals.messages = results.rows[0];
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
    const { user_1, user_2 } = req.query;

    let chatId = '';
    const getChatIdQuery =
      'SELECT chat_id FROM chats WHERE user_1 = $1 AND user_2 = $2;';
    let values = [user_1, user_2];
    const { rows } = await db.query(getChatIdQuery, values);
    console.log('postMsg getChatID:', rows[0]);
    chatId = rows[0].chat_id;

    if (!rows[0]) {
      res.locals.messages = null;
      return next();
    }

    console.log('GET message chatId:', chatId);
    const getMessageQuery = 'SELECT * FROM messages WHERE chat_id = $1;';
    values = [chatId];
    const results = await db.query(getMessageQuery, values);
    res.locals.messages = results.rows;
    return next();
  } catch (error) {
    return next({
      log: `controller.js: ERROR: ${error}`,
      status: 400,
      message: {
        err: `An error occurred in messageController.getMessages. Err: ${error.message}`,
      },
    });
  }
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
