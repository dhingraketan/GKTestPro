const mongoose = require('mongoose');

const testRunSchema = mongoose.Schema({

    id: String,
    title: String,
    description: String,
    createdOn: String,
    lastModified: String,
    ownerId: String,
    status: String,
    assigdneeId: String,
    testCases: [{testCaseId: String}],
    phases: [{phaseId: String}],
    testSuites: [{testSuiteId: String}],
    baselines: [{baselineId: String}],
    projects: [{projectId: String}]

});


const testRunModel = mongoose.model('testRuns', testRunSchema);

module.exports = testRunModel;