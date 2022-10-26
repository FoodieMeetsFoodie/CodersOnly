const express = require('express');
const router = express.Router();
const messagesController = require('../controllers/messagesController');

router.get('/dummymessage', messagesController.getDummyMsg, (req, res) => {
  return res.status(200).json(res.locals.message);
});
module.exports = router;
