// REQUIRE MODULES
const mongoose = require('mongoose');

// CREATE SHORTCUT VARIABLE
const Schema = mongoose.Schema;

// DEFINE EMBEDDED SCHEMA
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
        type: String,
    },
})

// EXPORT SCHEMA AS MODEL
module.exports = mongoose.model('Restaurant', restaurantSchema);