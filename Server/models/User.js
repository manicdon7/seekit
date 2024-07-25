const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    gmail: { type: String },
    Password: {type: String}
});

module.exports = mongoose.model('User', UserSchema);

