const User = require('../models/user');

module.exports = {
    index,
    home
};

function index(req,res) {
    res.render('index');
}

function home(req,res) {
    User.findById(req.params.id, function(err, doc) {
        res.render('landing', { doc, user: req.user });
    });
}