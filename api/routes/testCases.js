var express = require('express');
var router = express.Router();
const uuidv4 = require('uuid');

const testCasdeModel = require('../models/testcase.model');

// GET all test cases
router.get('/list', async (req, res, next) => {

    testCasdeModel.find({})
    .then(testCases => {
      res.status(200).send(testCases);
    })
    .catch(err => {
      console.log(err);
      console.log("Error retrieving test Cases");
      res.status(500).json({ message: "Error retrieving test cases" }); 
    });
});

// Add a test case
router.post('/add', async (req, res, next) => {
    const { title, summary, preCons, steps, expectedResult } = req.body;
    const id = uuidv4();
    const createdOn = new Date().toISOString();
    const LastModified = new Date().toISOString();
    const executionHistory = [];

    try{
        const newTestCase = {
            id,
            title,
            summary,
            preCons,
            steps,
            expectedResult,
            createdOn,
            LastModified,
            executionHistory
        }

        const result = await testCasdeModel.create(newTestCase);

        res.status(200).json({msg: "Test case created successfully"});

    } catch(err) {
        res.status(500);
    }
});


//get a test case
router.get('/:id', async (req, res, next) => {
    const { id } = req.params;

    try{
        const testCase = await testCasdeModel.findOne({id: id});
        console.log("Test case found")
        res.status(200).send(testCase);
    } catch(err) {
        res.status(500);
    }
});