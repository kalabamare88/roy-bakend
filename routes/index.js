var express = require('express');
var router = express.Router();
mongoose = require('mongoose');
getProfile = require('../controller/getProfile');
createProfile = require('../controller/createProfile');
updateProfile = require('../controller/updateProfile');



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/profile', getProfile);
router.post('/profile', createProfile);
router.put('/profile/:id', updateProfile);



module.exports = router;
