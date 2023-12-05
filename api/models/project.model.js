const mongoose = require('mongoose');

const projectSchema = mongoose.Schema({

    id: String,
    title: String,
    ownerId: String,
    createdOn: String,
    lastModified: String,
    baselines: [{baselineId: String}]

});

const projectModel = mongoose.model('projects', projectSchema);

module.exports = projectModel;