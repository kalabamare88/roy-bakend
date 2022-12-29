mongoose = require('mongoose');

var profile = mongoose.model('profile');

function getProfile(req, res) {

    console.log(req.body, 'body');
    profile.find({ }, function (err, docs) {
        if(err){
            console.log(err);
            res.send(err)
        }else{
            console.log('ther oc',docs);
            res.send(docs)
        }
    })


};

module.exports = getProfile;