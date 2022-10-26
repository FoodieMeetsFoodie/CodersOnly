const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController.js');

router.post('/', userController.createUser, (req, res) => {
  return res.status(201).json(res.locals.user);
});

router.get('/:username', userController.getUser, (req, res) => {
  // console.log('res.locals.users ' + res.locals.user);
  return res.status(201).json(res.locals.user);
});

router.put('/:username', userController.updateUser, (req, res) => {
  return res.status(201).json(res.locals.user);
})

module.exports = router;
