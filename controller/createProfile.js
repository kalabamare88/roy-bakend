mongoose = require('mongoose');

var profile = mongoose.model('profile');

createProfile = function (req, res) {
    console.log(req.body, 'body');
    profile.create({
        name: req.body.name,
        email: req.body.sport,
        gender: req.body.gender,
        date_of_birth: req.body.date_of_birth,
        description: req.body.description,
        location : req.body.location,
        team: req.body.team,
    }, function (err, docs) {
        if (err) {
            console.log('first', err);
            res.send(err)
        } else {
            console.log( 'second',docs);
            res.send(docs)

        }
    });
};

module.exports = createProfile;