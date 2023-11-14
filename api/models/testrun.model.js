const mongoose = require('mongoose');
const testCasesSchema = require('./testcase.model').testCasesSchema;
const phaseSchema = require('./phase.model').phaseSchema;
const testSuiteSchema = require('./testsuite.model').testSuiteSchema;
const baselineSchema = require('./baseline.model').baselineSchema;
const projectSchema = require('./project.model').projectSchema;

const testRunSchema = mongoose.Schema({

    id: String,
    title: String,
    description: String,
    createdOn: String,
    lastModified: String,
    ownerId: String,
    status: String,
    assigdnedTo: String,
    testCases: [String],
    phases: [String],
    testSuites: [String],
    baselines: [String],
    projects: [String]

});


const testRunModel = mongoose.model('testRuns', testRunSchema);

module.exports = testRunModel;