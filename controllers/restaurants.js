module.exports = {
    index,
}

function index(req, res) {
    Restaurant.find({}, function(err, restaurants) {
        res.render('restaurants/index');
    });
}