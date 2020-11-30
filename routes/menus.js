// REQUIRE MODULES (EXPRESS AND INDEX)
const express = require('express');
const menuCtrl = require('../controllers/menus');

// CREATE ROUTER OBJECT
const router = express.Router();

// DEFINE ROUTES
router.get('/', menuCtrl.index);
router.get('/:id', menuCtrl.show);

// EXPORT ROUTER OBJECT
module.exports = router;