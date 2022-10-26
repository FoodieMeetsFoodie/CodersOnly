const messagesController = {};

const db = require('../models/dbConnection');

messagesController.postMessage = async (req, res, next) => {
  try {
    const { user_1, user_2 } = req.body;
    const getChatId = ''
    const postMessageQuery = 'INSERT INTO messages (chat)'
  } catch (error) {}
};
