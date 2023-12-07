var express = require('express');
var router = express.Router();
const uuid = require('uuid');

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
    const id = uuid.v4();
    const createdOn = new Date().toLocaleString();
    const LastModified = new Date().toLocaleString();
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
        console.log(result + "Backdend")
        res.status(200).json({msg: "Test case created successfully"});

    } catch(err) {
        res.status(500);
    }
});


//get a test case
router.get('/getCase', async (req, res, next) => {
    const { id } = req.body;

    try{
        const result = await testCasdeModel.findOne({id});

        res.status(200).send(result);

    } catch(err) {
        res.status(500);
    }
});

//edit a test case
router.put('/edit', async (req, res, next) => {
    const { id, title, summary, preCons, steps, expectedResult } = req.body;
    const LastModified = new Date().toLocaleString();

    try{
        const result = await testCasdeModel.findOneAndUpdate({id}, {title, summary, preCons, steps, expectedResult, LastModified});

        res.status(200).json({msg: "Test case updated successfully"});

    } catch(err) {
        res.status(500);
    }
});

module.exports = router;