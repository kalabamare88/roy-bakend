mongoose = require('mongoose');
/*var dbUrl = 'mongodb://localhost/agenagn';*/
var dbUrl = "mongodb+srv://kalab:kalab.1@cluster0.nifwn.mongodb.net/kiray?retryWrites=true&w=majority";

/*
if (process.env.NODE_ENV === 'production') {
    dbUrl = "mongodb+srv://kalab:kalab.1@cluster0.nifwn.mongodb.net/kiray?retryWrites=true&w=majority";


}*/
mongoose.connect(dbUrl);

// CONNECTION EVENTS
mongoose.connection.on('connected', function () {
    console.log('Mongoose connected to ' + dbUrl);
});
mongoose.connection.on('errorho', function (err) {
    console.log('Mongoose connection error: ' + err);
});
mongoose.connection.on('disconnected', function () {
    console.log('Mongoose disconnected');
});


var profile = mongoose.Schema({
    name: String,
    sport: String,
    gender: String,
    date_of_birth: Number,
    description: String,
    location : String,
    team: String,
});


mongoose.model('profile', profile);



