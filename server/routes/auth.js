const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController.js');

router.post('/', authController.verifyUser, (req, res) => {
  return res.status(201).json(res.locals.userExists);
});

module.exports = router;
