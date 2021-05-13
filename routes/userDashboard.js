var express = require('express');
var router = express.Router();

/* GET private userDashboard listing. */
//router.get('/"nomeUser"', function(req, res, next) {
router.get('/', function(req, res, next) {
  res.send('this is private');
});

module.exports = router;
