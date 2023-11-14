const mongoose = require('mongoose');

const phaseSchema = mongoose.Schema({
    id: String,
    title: String,
    lastMdoified: String,
    testCases: [String]
});

const phaseModel = mongoose.model('phases', phaseSchema);

module.exports = phaseModel;
