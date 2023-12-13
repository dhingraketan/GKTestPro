var express = require('express');
var router = express.Router();
const uuid = require('uuid');
const multer = require('multer');
let fs = require('fs');

const fileDir = "./uploads";

const testCaseModel = require('../models/testcase.model');

// GET all test cases
router.get('/list', async (req, res, next) => {

    try {
        const page = parseInt(req.query.page) -1 || 0;
        const limit = parseInt(req.query.limit) || 30;
        const search = req.query.search || "";
        const skip = page * limit;

        const result = await testCaseModel.find({ title: { $regex: search, $options: 'i' } }).skip(skip).limit(limit);
        const count = await testCaseModel.countDocuments({ title: { $regex: search, $options: 'i' } });
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
        console.log("Error retrieving test Cases");
        res.status(500).json({ message: "Error retrieving test cases" });

        
    }
});

// testCaseModel.find({})
//     .then(testCases => {
//         res.status(200).send(testCases);
//     })
//     .catch(err => {
//         console.log(err);
//         console.log("Error retrieving test Cases");
//         res.status(500).json({ message: "Error retrieving test cases" });
//     });

// Add a test case
router.post('/add', async (req, res, next) => {
    const { title, summary, preCons, steps, expectedResult } = req.body;
    const id = uuid.v4();
    const createdOn = new Date().toLocaleString();
    const LastModified = new Date().toLocaleString();
    const executionHistory = [];

    try {
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

        const result = await testCaseModel.create(newTestCase);
        console.log(result + "Backdend")
        res.status(200).json({ msg: "Test case created successfully" });

    } catch (err) {
        res.status(500);
    }
});


//get a test case
router.get('/getCase', async (req, res, next) => {
    const { id } = req.body;

    try {
        const result = await testCaseModel.findOne({ id });

        res.status(200).send(result);

    } catch (err) {
        res.status(500);
    }
});

//edit a test case
router.put('/edit', async (req, res, next) => {
    const { id, title, summary, preCons, steps, expectedResult } = req.body;
    const LastModified = new Date().toLocaleString();

    try {
        const result = await testCaseModel.findOneAndUpdate({ id }, { title, summary, preCons, steps, expectedResult, LastModified });

        res.status(200).json({ msg: "Test case updated successfully" });

    } catch (err) {
        res.status(500);
    }
});

var store = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, fileDir);
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});

var upload = multer({ storage: store }).single('file');

router.post('/import', (req, res) => {
    upload(req, res, function (err) {
        if (err) {
            console.log(err);
            return res.status(501).json({ msg: "Error uploading file" });
        }
        // console.log(req.file);
        res.status(200).json({ msg: "File uploaded successfully" });
        // save the file in directory

        let xmlContent = '';

        // get file form directory

        fs.readFile('./uploads/all_testsuites.xml', 'utf8', function (err, data) {
            if (err) {
                console.log(err);
            }
            xmlContent = data;

            // parse the xml content
            var parseString = require('xml2js').parseString;
            parseString(xmlContent, function (err, result) {
                //  convert result to array
                const testSuites = result.testsuite.testsuite;
                testCases = [];
                testSuites.forEach(testSuite => {
                    testcase = testSuite.testcase;
                    testcase.forEach(test => {
                        testCases.push(test);
                    });
                });

                // console.log(testSuites);

                // console.log(testCases);
                testCases.forEach(async testCase => {
                    var title = testCase.$.name;
                    var summary = testCase.summary[0];
                    var steps = testCase.steps[0];
                    var expectedResult = testCase.expectedresults[0];
                    var preCons = '';


                    let index = summary.indexOf('Precondition');
                    if (index != -1) {
                        temp = summary.slice(0, index);
                        preCons = summary.slice(index, summary.length);
                        summary = temp;

                    }

                    summary = summary.replace(/<p>/g, '');
                    summary = summary.replace(/<\/p>/g, '');
                    // delete trailing spaces from summary
                    summary = summary.replace(/\s+$/, '');
                    steps = steps.replace(/<p>/g, '');
                    steps = steps.replace(/<\/p>/g, '');
                    expectedResult = expectedResult.replace(/<p>/g, '');
                    expectedResult = expectedResult.replace(/<\/p>/g, '');
                    preCons = preCons.replace(/<p>/g, '');
                    preCons = preCons.replace(/<\/p>/g, '');

                    const id = uuid.v4();
                    const createdOn = new Date().toLocaleString();
                    const LastModified = new Date().toLocaleString();
                    const executionHistory = [];

                    try {
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

                        const result = await testCaseModel.create(newTestCase);
                        console.log(result + "Backdend")
                        res.status(200).json({ msg: "Test case created successfully" });

                    } catch (err) {
                        res.status(500);
                    }


                });
            });


        });

    });
});

module.exports = router;