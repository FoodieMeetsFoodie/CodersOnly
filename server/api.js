const express = require('express');
const router = express.Router();
const controller = require('./controller');

router.post('/verification', controller.verifyUser, (req, res) => {
  return res.status(201).json(res.locals.userInfo);
});

router.post('/', controller.createUser, (req, res) => {
  return res.status(201).json(res.locals.userId);
});

router.post('/:id/createProfile', controller.createProfile, (req, res) => {
  return res.status(201).json(res.locals.userInfo);
})

//get data from all users stored in database
router.get('/:id/friends', controller.getFriends, (req, res) => {
  return res.status(200).json(res.locals.friendsData);
});

//update profile
router.patch('/:id/editProfile', controller.editProfile, (req, res) => {
  return res.status(201).json(res.locals.updatedProfile);
})

//delete profile
router.delete('/:id/editProfile', controller.deleteProfile, (req, res) => {
  return res.status(201).send('deleted');
})


// router.get('/:username', controller.getUser, (req, res) => {
//   // console.log('res.locals.users ' + res.locals.user);
//   return res.status(201).json(res.locals.user);
// });

router.patch(
  '/:username/:clickedUser/:decision',
  controller.updateUserMatches,
  (req, res) => {
    console.log(res.locals.match);
    return res.status(200).json(res.locals.match);
  }
);

module.exports = router;
