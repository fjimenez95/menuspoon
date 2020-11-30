const Restaurant = require('../models/restaurant');
const Menu = require('../models/menu');

module.exports = {
    index,
}

function index(req, res) {
    Restaurant.find({}, function(err, restaurants) {
        res.render('restaurants/index', { restaurants });
    });
}