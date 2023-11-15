const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    id: {type: String, unique: true},
    name: String,
    email: {type: String, unique: true},
    password: String,
    role: String,
    assignedTasks: [{
        id: String,
        title: String,
        assigdnedBy: String,
        assignedOn: String,
        status: String
    }]
});

const userModel = mongoose.model('users', userSchema);

module.exports = userModel;