const Menu = require('../models/menu');
const User = require('../models/user');

module.exports = {
    create,
    delete: deleteFoodItem,
    edit,
    update,
}

function create(req, res) {
    console.log(req.body);
    Menu.findById(req.params.id, function(err, menu) {
        menu.appetizers.push(req.body); // TODO: ADD CATEGORY SO YOU CAN ADD ANYWHERE
        console.log(req.body);
        menu.save(function(err) {
            res.redirect(`/menus/${menu._id}`);
        });
    });
}

function deleteFoodItem(req, res) {
    Menu.findOne( { "appetizers._id": req.params.id}, function(err, parentMenu) {
        Menu.update({}, { $pull: { appetizers: { _id: req.params.id } } }, { returnOriginal: false }, function(err, menu) { // TODO: ADD CATEGORY SO THAT IT CAN DELETE FROM ANYWHERE
            res.redirect(`/menus/${parentMenu._id}`);
            });
    })
}

function edit(req, res) {
    res.render('menus/edit', {
        foodItemId: req.params.id,
        foodItem:  Menu.findOne( { "appetizers._id": req.params.id}, function(err, parentMenu) {
            console.log(parentMenu);
        })
    })
}

function update(req, res) {
    console.log(req.body);
    console.log(req.body.name);
    Menu.findOneAndUpdate( { "appetizers._id": req.params.id}, {$set:{'appetizers.$.name': req.body.name }}, function(err, parentMenu) {
        res.redirect(`/menus/${parentMenu._id}`);
        // Menu.update({'_id': req.params.id},{$set:{'appetizers.$.name': req.body.name }}, { returnOriginal: false }, function(err, menu) {
        //     console.log(menu);
        //     res.redirect(`/menus/${parentMenu._id}`);
        // });
    });

}