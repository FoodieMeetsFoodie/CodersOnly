const express = require('express');
const router = express.Router();
const controller = require('./controller');

router.post('/', controller.verifyUser, (req, res) => {
  return res.status(201).json(res.locals.userExists);
});
module.exports = router;
