const express = require('express');
const router = express.Router();
const controller = require('./controller');

router.post('/', controller.createUser, (req, res) => {
  return res.status(201).json(res.locals.user);
});

module.exports = router;