const express = require('express');
const router = express.Router();
const functionsController = require('../controllers/functionsController.js');

router.get('/friends', functionsController.getFriends, (req, res) => {
  return res.status(200).json(res.locals.friends);
});

// Function to set match
router.patch(
  '/:username/:clickedUser/:decision',
  functionsController.updateUserMatches,
  (req, res) => {
    console.log(res.locals.match);
    return res.status(200).json(res.locals.match);
  }
);

module.exports = router;