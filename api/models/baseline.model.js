const mongoose = require('mongoose');

const baselineSchema = mongoose.Schema({
    id: String,
    title: String,
    createdOn: String,
    lastModified: String,
    testSuites: [String]

});

const baselineModel = mongoose.model('baselines', baselineSchema);

module.exports = baselineModel;