var express = require('express');
var router = express.Router();
const uuid = require('uuid');

const phaseModel = require('../models/phase.model');

// GET all phases
router.get('/list', async (req, res, next) => {

    try {
        const page = parseInt(req.query.page) -1 || 0;
        const limit = parseInt(req.query.limit) || 30;
        const search = req.query.search || "";
        const skip = page * limit;

        const result = await phaseModel.find({ title: { $regex: search, $options: 'i' } }).skip(skip).limit(limit);
        const count = await phaseModel.countDocuments({ title: { $regex: search, $options: 'i' } });
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
        console.log("Error retrieving phases");
        res.status(500).json({ message: "Error retrieving phases" });

        
    }
});

// Add a phase
router.post('/add', async (req, res, next) => {
    const {title, testCases } = req.body;
    const id = uuid.v4();
    const LastModified = new Date().toLocaleString();

    try{
        const newPhase = {
            id,
            title,
            testCases,
            LastModified
        }

        const result = await phaseModel.create(newPhase);
        res.status(200).json(id);
    } catch(err) {
        console.log(err);
        console.log("Error adding phase");
        res.status(500).json({ message: "Error adding phase"});
    }
});

//add test case to phase
router.post('/addTestCase', async (req, res, next) => {
    const {phaseId, testCaseId} = req.body;
    const LastModified = new Date().toLocaleString();

    try{
        // add test case to phase and update last modified
        const result = await phaseModel.updateOne({id: phaseId}, {$push: {testCases: testCaseId}});
        const result2 = await phaseModel.updateOne({id: phaseId}, {LastModified});
        res.status(200).json({ message: "Test Case added successfully"});
    } catch(err) {
        console.log(err);
        console.log("Error adding test case");
        res.status(500).json({ message: "Error adding test case"});
    }
});

// add multiple test cases to phase
router.post('/addTestCases', async (req, res, next) => {
    const {phaseId, testCaseIds} = req.body;
    const LastModified = new Date().toLocaleString();

    try{
        // add test case to phase and update last modified
        const result = await phaseModel.updateOne({id: phaseId}, {$push: {testCases: {$each: testCaseIds}}});
        const result2 = await phaseModel.updateOne({id: phaseId}, {LastModified});
        res.status(200).json({ message: "Test Cases added successfully"});
    } catch(err) {
        console.log(err);
        console.log("Error adding test cases");
        res.status(500).json({ message: "Error adding test cases"});
    }
});

//delete test case from phase
router.post('/deleteTestCase', async (req, res, next) => {
    const {phaseId, testCaseId} = req.body;
    const LastModified = new Date().toLocaleString();

    try{
        const result = await phaseModel.updateOne({id: phaseId}, {$pull: {testCases: testCaseId}});
        const result2 = await phaseModel.updateOne({id: phaseId}, {LastModified});
        res.status(200).json({ message: "Test Case deleted successfully"});
    } catch(err) {
        console.log(err);
        console.log("Error deleting test case");
        res.status(500).json({ message: "Error deleting test case"});
    }
});

//delete phase
router.post('/delete', async (req, res, next) => {
    const {phaseId} = req.body;

    try{
        const result = await phaseModel.deleteOne({id: phaseId});
        res.status(200).json({ message: "Phase deleted successfully"});
    } catch(err) {
        console.log(err);
        console.log("Error deleting phase");
        res.status(500).json({ message: "Error deleting phase"});
    }
});

//get phase by id
router.get('/getPhase', async (req, res, next) => {
    const { phaseId } = req.query;

    try {
        const result = await phaseModel.findOne({ id: phaseId });

        res.status(200).json(result);

    } catch (err) {
        console.log(err);
        console.log("Error retrieving phase");
        res.status(500).json({ message: "Error retrieving phase" });
    }
});

//get multiple phases by ids
router.get('/getPhases', async (req, res, next) => {
    const { phaseIds } = req.query;

    try {
        const result = await phaseModel.find({ id: { $in: phaseIds } });

        res.status(200).json(result);

    } catch (err) {
        console.log(err);
        console.log("Error retrieving phases");
        res.status(500).json({ message: "Error retrieving phases" });
    }
});

module.exports = router;