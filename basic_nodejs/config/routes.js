var express  = require('express');
var router   = express.Router();

var databaseController = require('../controllers/databaseController');

router.route('/api/applicants/')
  .get(databaseController.applicantsIndex)

router.route('/api/users/')
  .get(databaseController.usersIndex)

router.route('/api/programmes/')
  .post(databaseController.programmesAdd)

module.exports = router;
