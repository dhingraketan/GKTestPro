const mongoose = require('mongoose');

const testCaseSchema = mongoose.Schema({

    id: String,
    title: String,
    summadry: String,
    preCons: String,
    steps: String,
    expectedResult: String,
    createdOn: String,
    LastModified: String,
    executionHistory: [{
        id: String,
        timestamp: String,
        executedBy: String,
        result: String,
        comments: String,
        projectId: String,
        baselineId: String,
        testRunId: String
    }]
});

const testCaseModel = mongoose.model('testCases', testCaseSchema);

module.exports = testCaseModel;