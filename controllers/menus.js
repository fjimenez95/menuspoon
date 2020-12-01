const Restaurant = require('../models/restaurant');
const Menu = require('../models/menu');
const User = require('../models/user');

module.exports = {
    index,
    show,
    new: newItem,
};

function index(req, res) {
    // TODO: Create a index for menus
};

// TODO: COMPLETE THIS SHOW
function show(req, res) {
    Menu.findById(req.params.id, function(err, menu) {
        Restaurant.findById(menu.restaurant, function(err, restaurant) {
            res.render('menus/show', { menu, restaurant, user: req.user});
        });
    });
}

function newItem(req, res) {
    Menu.findById(req.params.id, function(err, menu) {
        res.render('menus/new', { menu });
    });
}