// REQUIRE MODULES (EXPRESS AND INDEX)
const express = require('express');
const indexCtrl = require('../controllers/index');

// CREATE ROUTER OBJECT
const router = express.Router();

// DEFINE ROUTES
router.get('/', indexCtrl.index);

// EXPORT ROUTER OBJECT
module.exports = router;