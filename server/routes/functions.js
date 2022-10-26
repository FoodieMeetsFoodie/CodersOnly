const express = require('express');
const router = express.Router();
const controller = require('../controller');

router.get('/friends', controller.getFriends, (req, res) => {
  return res.status(200).json(res.locals.friends);
});

// Function to set match
router.patch(
  '/:username/:clickedUser/:decision',
  controller.updateUserMatches,
  (req, res) => {
    console.log(res.locals.match);
    return res.status(200).json(res.locals.match);
  }
);
module.exports = router;