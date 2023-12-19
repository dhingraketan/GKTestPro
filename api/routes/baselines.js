var express = require('express');
var router = express.Router();
const uuid = require('uuid');

const baselineModel = require('../models/baseline.model');

// GET all baselines
router.get('/list', async (req, res, next) => {

    try {
        const page = parseInt(req.query.page) -1 || 0;
        const limit = parseInt(req.query.limit) || 30;
        const search = req.query.search || "";
        const skip = page * limit;

        const result = await baselineModel.find({ title: { $regex: search, $options: 'i' } }).skip(skip).limit(limit);
        const count = await baselineModel.countDocuments({ title: { $regex: search, $options: 'i' } });
        const pages = Math.ceil(count / limit);
        const response = {
            count,
            page: page + 1,
            limit,
            result,
            pages
        };

        res.status(200).json(response);

    } catch (err) {
        console.log(err);
        console.log("Error retrieving baselines");
        res.status(500).json({ message: "Error retrieving baselines" });

        
    }
});

// Add a baseline
router.post('/add', async (req, res, next) => {
    const {title, testSuites } = req.body;
    const id = uuid.v4();
    const createdOn = new Date().toLocaleString();
    const LastModified = new Date().toLocaleString();

    try{
        const newBaseline = {
            id,
            title,
            createdOn,
            LastModified,
            testSuites
        }

        const result = await baselineModel.create(newBaseline);
        res.status(200).json({id: id});
    } catch(err) {
        console.log(err);
        console.log("Error adding baseline");
        res.status(500).json({ message: "Error adding baseline"});
    }
});

// add a testSuite to a baseline
router.post('/addTestSuite', async (req, res, next) => {
    const {baselineId, testSuiteId } = req.body;
    const LastModified = new Date().toLocaleString();

    try{
        const result = await baselineModel.updateOne({id: baselineId}, {$push: testSuiteId });
        const result2 = await baselineModel.updateOne({id: baselineId}, {LastModified});
        res.status(200).json(result);
    } catch(err) {
        console.log(err);
        console.log("Error adding testSuite to baseline");
        res.status(500).json({ message: "Error adding testSuite to baseline"});
    }
});

// add multiple testSuites to a baseline
router.post('/addTestSuites', async (req, res, next) => {
    const {baselineId, testSuiteIds } = req.body;
    const LastModified = new Date().toLocaleString();

    try{
        // add test case to testSuite and update last modified
        const result = await baselineModel.updateOne({id: baselineId}, {$push: {testSuites: {$each: testSuiteIds}}});
        const result2 = await baselineModel.updateOne({id: baselineId}, {LastModified});
        res.status(200).json({ message: "testSuites added successfully"});
    } catch(err) {
        console.log(err);
        console.log("Error adding testSuites to baseline");
        res.status(500).json({ message: "Error adding testSuites to baseline"});
    }
});

// remove a testSuite from a baseline
router.post('/removeTestSuite', async (req, res, next) => {
    const {baselineId, testSuiteId } = req.body;
    const LastModified = new Date().toLocaleString();

    try{
        const result = await baselineModel.updateOne({id: baselineId}, {$pull: {testSuites: testSuiteId}});
        const result2 = await baselineModel.updateOne({id: baselineId}, {LastModified});
        res.status(200).json(result);
    } catch(err) {
        console.log(err);
        console.log("Error removing testSuite from baseline");
        res.status(500).json({ message: "Error removing testSuite from baseline"});
    }
});

// remove multiple testSuites from a baseline
router.post('/removeTestSuites', async (req, res, next) => {
    const {baselineId, testSuiteIds } = req.body;
    const LastModified = new Date().toLocaleString();

    try{
        // add test case to testSuite and update last modified
        const result = await baselineModel.updateOne({id: baselineId}, {$pull: {testSuites: {$in: testSuiteIds}}});
        const result2 = await baselineModel.updateOne({id: baselineId}, {LastModified});
        res.status(200).json({ message: "testSuites removed successfully"});
    } catch(err) {
        console.log(err);
        console.log("Error removing testSuites from baseline");
        res.status(500).json({ message: "Error removing testSuites from baseline"});
    }
});

//delete baseline
router.post('/delete', async (req, res, next) => {
    const {baselineId} = req.body;

    try{
        const result = await baselineModel.deleteOne({id: baselineId});
        res.status(200).json({ message: "Baseline deleted successfully"});
    } catch(err) {
        console.log(err);
        console.log("Error deleting baseline");
        res.status(500).json({ message: "Error deleting baseline"});
    }
});

// get baseline by id
router.get('/get', async (req, res, next) => {
    const {baselineId} = req.query;

    try{
        const result = await baselineModel.findOne({id: baselineId});
        res.status(200).json(result);
    } catch(err) {
        console.log(err);
        console.log("Error retrieving baseline");
        res.status(500).json({ message: "Error retrieving baseline"});
    }
});


// get multiple baselines by ids
router.get('/getBaselines', async (req, res, next) => {
    const {baselineIds} = req.query;

    try{
        const result = await baselineModel.find({id: {$in: baselineIds}});
        res.status(200).json(result);
    } catch(err) {
        console.log(err);
        console.log("Error retrieving baselines");
        res.status(500).json({ message: "Error retrieving baselines"});
    }
});

module.exports = router;