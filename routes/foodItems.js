// REQUIRE THE MODULES
const express = require('express');
const router = express.Router();
const foodItemsCtrl = require('../controllers/foodItems');

// POST - GOOD
router.post('/:id/foodItems', foodItemsCtrl.create);

// DELETE
router.delete('/:id', foodItemsCtrl.delete);

// GET
router.get('/:id/edit', foodItemsCtrl.edit);

// PUT
router.put('/:id', foodItemsCtrl.update);

module.exports = router;