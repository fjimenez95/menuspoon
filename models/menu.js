// REQUIRE MODULES
const mongoose = require('mongoose');

// CREATE SHORTCUT VARIABLE
const Schema = mongoose.Schema;

// DEFINE SCHEMA (FOOD ITEM)
const foodItemSchema = new Schema({
    name: {
        type: String,
    },
    description: {
        type: String,
    },
    price: {
        type: Number,
        default: 0,
    },
    category: {
        type: String,
        enum: ['appetizers', 'soups', 'salads', 'entrees', 'desserts', 'drinks'],
    },
    picture: {
        type: String,
    },
    rating: {
        type: Number,
    },
});

// DEFINE SCHEMA (MENU)
const menuSchema = new Schema({
    appetizers: [foodItemSchema],
    soups: [foodItemSchema],
    salads: [foodItemSchema],
    entrees: [foodItemSchema],
    desserts: [foodItemSchema],
    drinks: [foodItemSchema],
    restaurant: {
        type: Schema.Types.ObjectId,
        ref: 'Restaurant',
    },
});

// EXPORT SCHEMA AS MODEL
module.exports = mongoose.model('Menu', menuSchema);