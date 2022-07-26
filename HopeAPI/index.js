const mongoose = require('mongoose');

const friendsSchema = mongoose.Schema ({
    name: String,
    age: Number
});

module.exports = mongoose.model('Friends', friendsSchema); 