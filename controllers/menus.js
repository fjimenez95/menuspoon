const Restaurant = require('../models/restaurant');
const Menu = require('../models/menu');

module.exports = {
    index,
    show,
};

function index(req, res) {
    // TODO: Create a index for menus
};

// TODO: COMPLETE THIS SHOW
function show(req, res) {
    Menu.findById(req.params.id, function(err, menu) {
        Restaurant.findById(menu.restaurant, function(err, restaurant) {
            res.render('menus/show', { menu, restaurant });
        });
    });
}