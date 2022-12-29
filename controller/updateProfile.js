mongoose = require('mongoose');

const profile = mongoose.model('profile');

function updateProfile(req, res) {
    console.log(req.body, 'body body');
    profile.update({_id: "63ac1d83cce68c4fec4e2f08"}, {name:'change kla'}, function (err, docs) {
        if (err) {
            console.log('first', err);
            res.send(err)
        } else {
            console.log('second', docs);
            res.send(docs)

        }
    })
    /*profile.create({
        name: req.body.name,
        email: req.body.sport,
        gender: req.body.gender,
        date_of_birth: req.body.date_of_birth,
        description: req.body.description,
        location: req.body.location,
        team: req.body.team,
    }, function (err, docs) {
        if (err) {
            console.log('first', err);
            res.send(err)
        } else {
            console.log('second', docs);
            res.send(docs)

        }
    });*/

}

module.exports = updateProfile;