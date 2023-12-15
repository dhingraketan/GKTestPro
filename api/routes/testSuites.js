var express = require('express');
var router = express.Router();
const uuid = require('uuid');

const testSuiteModel = require('../models/testSuite.model');

// GET all testSuites
router.get('/list', async (req, res, next) => {

    try {
        const page = parseInt(req.query.page) -1 || 0;
        const limit = parseInt(req.query.limit) || 30;
        const search = req.query.search || "";
        const skip = page * limit;

        const result = await testSuiteModel.find({ title: { $regex: search, $options: 'i' } }).skip(skip).limit(limit);
        const count = await testSuiteModel.countDocuments({ title: { $regex: search, $options: 'i' } });
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
        console.log("Error retrieving testSuites");
        res.status(500).json({ message: "Error retrieving testSuites" });

        
    }
});

// Add a testSuite
router.post('/add', async (req, res, next) => {
    const {title, phases } = req.body;
    const id = uuid.v4();
    const createdOn = new Date().toLocaleString();
    const LastModified = new Date().toLocaleString();

    try{
        const newTestSuite = {
            id,
            title,
            createdOn,
            LastModified,
            phases
        }

        const result = await testSuiteModel.create(newTestSuite);
        res.status(200).json(id);
    } catch(err) {
        console.log(err);
        console.log("Error adding testSuite");
        res.status(500).json({ message: "Error adding testSuite"});
    }
});

//add a phase to a testSuite
router.post('/addPhase', async (req, res, next) => {
    const {testSuiteId, phaseId} = req.body;
    const LastModified = new Date().toLocaleString();

    try{
        const result = await testSuiteModel.updateOne({id: testSuiteId}, {$push: {phases: phaseId}});
        const result2 = await testSuiteModel.updateOne({id: testSuiteId}, {LastModified});
        res.status(200).json(result);
    } catch(err) {
        console.log(err);
        console.log("Error adding phase to testSuite");
        res.status(500).json({ message: "Error adding phase to testSuite"});
    }
});

// add multiple phases to testSuite
router.post('/addPhases', async (req, res, next) => {
    const {testSuiteId, phases} = req.body;
    const LastModified = new Date().toLocaleString();

    try{
        const result = await testSuiteModel.updateOne({id: testSuiteId}, {$push: {phases: {$each: phases}}});
        const result2 = await testSuiteModel.updateOne({id: testSuiteId}, {LastModified});
        res.status(200).json({message: "Phases added successfully"});
    } catch(err) {
        console.log(err);
        console.log("Error adding phases to testSuite");
        res.status(500).json({ message: "Error adding phases to testSuite"});
    }
});

// remove a phase from a testSuite
router.post('/removePhase', async (req, res, next) => {
    const {testSuiteId, phaseId} = req.body;
    const LastModified = new Date().toLocaleString();

    try{
        const result = await testSuiteModel.updateOne({id: testSuiteId}, {$pull: {phases: phaseId}});
        const result2 = await testSuiteModel.updateOne({id: testSuiteId}, {LastModified});
        res.status(200).json(result2);
    } catch(err) {
        console.log(err);
        console.log("Error removing phase from testSuite");
        res.status(500).json({ message: "Error removing phase from testSuite"});
    }
});

// remove multiple phases from testSuite
router.post('/removePhases', async (req, res, next) => {
    const {testSuiteId, phases} = req.body;
    const LastModified = new Date().toLocaleString();
    
    try{
        const result = await testSuiteModel.updateOne({id: testSuiteId}, {$pull: {phases: {$in: phases}}});
        const result2 = await testSuiteModel.updateOne({id: testSuiteId}, {LastModified});
        res.status(200).json({message: "Phases removed successfully"});
    } catch(err) {
        console.log(err);
        console.log("Error removing phases from testSuite");
        res.status(500).json({ message: "Error removing phases from testSuite"});
    }
});

//delete testSuite
router.post('/delete', async (req, res, next) => {
    const {testSuiteId} = req.body;

    try{
        const result = await testSuiteModel.deleteOne({id: testSuiteId});
        res.status(200).json(result);
    } catch(err) {
        console.log(err);
        console.log("Error deleting testSuite");
        res.status(500).json({ message: "Error deleting testSuite"});
    }
});

// get testSuite by id
router.get('/get', async (req, res, next) => {
    const {testSuiteId} = req.query;

    try{
        const result = await testSuiteModel.findOne({id: testSuiteId});
        res.status(200).json(result);
    } catch(err) {
        console.log(err);
        console.log("Error retrieving testSuite");
        res.status(500).json({ message: "Error retrieving testSuite"});
    }
});

// get multiple testSuites by ids

router.get('/getTestSuites', async (req, res, next) => {
    const {testSuiteIds} = req.query;

    try{
        const result = await testSuiteModel.find({id: {$in: testSuiteIds}});
        res.status(200).json(result);
    } catch(err) {
        console.log(err);
        console.log("Error retrieving testSuites");
        res.status(500).json({ message: "Error retrieving testSuites"});
    }
});

module.exports = router;