const mongoose = require('mongoose');
const Menu = require('../models/menu');

// CREATE SHORTCUT VARIABLE
const Schema = mongoose.Schema;

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    avatarURL: String,
    favoritedMenus: {
        type: [Schema.Types.ObjectId],
        ref: 'Menu',
    },
    googleId: String,
    },
{
  timestamps: true
});

module.exports = mongoose.model('User', userSchema);