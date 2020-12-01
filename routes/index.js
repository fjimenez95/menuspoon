// REQUIRE MODULES (EXPRESS AND INDEX)
const express = require('express');
const indexCtrl = require('../controllers/index');


// CREATE ROUTER OBJECT
const router = express.Router();
const passport = require('passport');

// DEFINE ROUTES
router.get('/', indexCtrl.index);
router.get('/home', indexCtrl.home);
// GOOGLE OAUTH ROUTE
router.get('/auth/google', passport.authenticate(
    'google',
    { scope: ['profile', 'email'] }
  ));
// GOOGLE CALLBACK ROUTE
router.get('/oauth2callback', passport.authenticate(
'google',
{
    successRedirect : '/home',
    failureRedirect : '/'
}
));
// GOOGLE LOGOUT ROUTE
router.get('/logout', function(req, res){
    req.logout();
    res.redirect('/');
  });

// EXPORT ROUTER OBJECT
module.exports = router;