const mongoose = require('mongoose');

const testPlanSchema = mongoose.Schema({

    id: String,
    title: String,
    ownwerId: String,
    createdOn: String,
    lastModified: String,
    description: String,
    testRuns: [String]

});

const testPlanModel = mongoose.model('testPlans', testPlanSchema);

module.exports = testPlanModel;