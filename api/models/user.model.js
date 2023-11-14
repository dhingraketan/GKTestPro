const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    id: String,
    name: String,
    email: String,
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