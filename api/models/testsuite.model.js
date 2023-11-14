const mongoose = require('mongoose');

const testSuiteSchema = mongoose.Schema({

    id: String,
    title: String,
    createdOn: String,
    LastModified: String,
    phases: [String]
});

const testSuiteModel = mongoose.model('testSuites', testSuiteSchema);

module.exports = testSuiteModel;
