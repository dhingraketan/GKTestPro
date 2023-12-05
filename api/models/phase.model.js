const mongoose = require('mongoose');

const phaseSchema = mongoose.Schema({
    id: String,
    title: String,
    lastMdoified: String,
    testCases: [{testCaseID: String}]
});

const phaseModel = mongoose.model('phases', phaseSchema);

module.exports = phaseModel;
