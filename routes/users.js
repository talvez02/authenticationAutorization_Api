var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.status(200).send(res + 'this is users');
});

/** Registration Routes */

//api/users/register-super-admin
//api/users/register-admin
//api/users/register-user

/** Authentication (Login) Routes */

//api/users/login-user
//api/users/login-admin
//api/users/login-super-admin

/** Return the Authenticated user’s profile */

//api/users/my-profile 

module.exports = router;
