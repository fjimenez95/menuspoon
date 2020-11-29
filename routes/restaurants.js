// REQUIRE MODULES (EXPRESS AND INDEX)
const express = require('express');
const restaurantCtrl = require('../controllers/restaurants');

// CREATE ROUTER OBJECT
const router = express.Router();

// DEFINE ROUTES
router.get('/', restaurantCtrl.index);

// EXPORT ROUTER OBJECT
module.exports = router;