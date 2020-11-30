// REQUIRE MODULES
const mongoose = require('mongoose');

// CREATE SHORTCUT VARIABLE
const Schema = mongoose.Schema;

// // DEFINE SCHEMA (FOOD ITEM)
// const foodItemSchema = new Schema({
//     name: {
//         type: String,
//     },
//     description: {
//         type: String,
//     },
//     price: {
//         type: Number,
//         default: 0,
//     },
//     // restaurant: {
//     //     type: Schema.Types.ObjectId,
//     //     ref: 'Restaurant',
//     // },
//     category: {
//         type: String,
//         enum: ['appetizers', 'soups', 'salads', 'entrees', 'desserts', 'drinks'],
//     },
//     picture: {
//         type: String,
//     },
//     rating: {
//         type: Number,
//     },
// });

// // DEFINE EMBEDDED SCHEMA (MENU)
// const menuSchema = new Schema({
//     appetizers: [foodItemSchema],
//     soups: [foodItemSchema],
//     salads: [foodItemSchema],
//     entrees: [foodItemSchema],
//     desserts: [foodItemSchema],
//     drinks: [foodItemSchema],
// });

// DEFINE SCHEMA (RESTAURANT)
const restaurantSchema = new Schema({
    name: {
        type: String,
    },
    cuisine: {
        type: String,
        // Maybe add here enum for a list of cuisines that exist??
    },
    city: {
        type: String,
    },
    address: {
        type: String,
    },
    menu: {
        type: Schema.Types.ObjectId,
        ref: 'Restaurant',
    }
},
    {
        timestamps: true,
    },
);

// EXPORT SCHEMA AS MODEL
module.exports = mongoose.model('Restaurant', restaurantSchema);