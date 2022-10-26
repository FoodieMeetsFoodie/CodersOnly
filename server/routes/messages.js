const express = require('express');
const router = express.Router();
const messagesController = require('../controllers/messagesController');

router.post('/', messagesController.postMessage, (req, res) => {
  return res.status(200).json(res.locals.messages);
});

router.get('/dummymessage', messagesController.getDummyMsg, (req, res) => {
  return res.status(200).json(res.locals.messages);
});

router.get('/', messagesController.getMessages, (req, res) => {
  return res.status(200).json(res.locals.messages);
});
module.exports = router;
