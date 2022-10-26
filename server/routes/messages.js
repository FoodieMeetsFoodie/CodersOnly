const express = require('express');
const router = express.Router();
const messagesController = require('');

router.post('/', controller.createUser, (req, res) => {
    return res.status(201).json(res.locals.user);
  });


module.exports = router;