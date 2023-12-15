var express = require('express');
var router = express.Router();
const uuid = require('uuid');

const projectModel = require('../models/project.model');

// GET all projects
router.get('/list', async (req, res, next) => {

    try {
        const page = parseInt(req.query.page) -1 || 0;
        const limit = parseInt(req.query.limit) || 30;
        const search = req.query.search || "";
        const skip = page * limit;

        const result = await projectModel.find({ title: { $regex: search, $options: 'i' } }).skip(skip).limit(limit);
        const count = await projectModel.countDocuments({ title: { $regex: search, $options: 'i' } });
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
        console.log("Error retrieving projects");
        res.status(500).json({ message: "Error retrieving projects" });

        
    }
});

// Add a project
router.post('/add', async (req, res, next) => {
    const {title, ownerId, baselines } = req.body;
    const id = uuid.v4();
    const createdOn = new Date().toLocaleString();
    const LastModified = new Date().toLocaleString();

    try{
        const newProject = {
            id,
            title,
            ownerId,
            createdOn,
            LastModified,
            baselines
        }

        const result = await projectModel.create(newProject);
        res.status(200).json(id);
    } catch(err) {
        console.log(err);
        console.log("Error adding project");
        res.status(500).json({ message: "Error adding project"});
    }
});

// add a baseline to a project and update the project's last modified date
router.post('/addBaseline', async (req, res, next) => {
    const {projectId, baselineId } = req.body;
    const LastModified = new Date().toLocaleString();

    try{
        const result = await projectModel.updateOne({id: projectId}, {$push: {baselines: {baselineId}}});
        const result2 = await projectModel.updateOne({id: projectId}, {LastModified});
        res.status(200).json({message: "Baseline added to project"});
    } catch(err) {
        console.log(err);
        console.log("Error adding baseline to project");
        res.status(500).json({ message: "Error adding baseline to project"});
    }
});

// add multiple baselines to a project and update the project's last modified date
router.post('/addBaselines', async (req, res, next) => {
    const {projectId, baselineIds } = req.body;
    const LastModified = new Date().toLocaleString();

    try{
        const result = await projectModel.updateOne({id: projectId}, {$push: {baselines: {$each: baselineIds}}});
        const result2 = await projectModel.updateOne({id: projectId}, {LastModified});
        res.status(200).json({message: "Baselines added to project"});
    } catch(err) {
        console.log(err);
        console.log("Error adding baselines to project");
        res.status(500).json({ message: "Error adding baselines to project"});
    }
});

// remove a baseline from a project and update the project's last modified date
router.post('/removeBaseline', async (req, res, next) => {
    const {projectId, baselineId } = req.body;
    const LastModified = new Date().toLocaleString();

    try{
        const result = await projectModel.updateOne({id: projectId}, {$pull: {baselines: {baselineId}}});
        const result2 = await projectModel.updateOne({id: projectId}, {LastModified});
        res.status(200).json({message: "Baseline removed from project"});
    } catch(err) {
        console.log(err);
        console.log("Error removing baseline from project");
        res.status(500).json({ message: "Error removing baseline from project"});
    }
});


// remove multiple baselines from a project and update the project's last modified date
router.post('/removeBaselines', async (req, res, next) => {
    const {projectId, baselineIds } = req.body;
    const LastModified = new Date().toLocaleString();

    try{
        const result = await projectModel.updateOne({id: projectId}, {$pull: {baselines: {$in: baselineIds}}});
        const result2 = await projectModel.updateOne({id: projectId}, {LastModified});
        res.status(200).json({message: "Baselines removed from project"});
    } catch(err) {
        console.log(err);
        console.log("Error removing baselines from project");
        res.status(500).json({ message: "Error removing baselines from project"});
    }
});

// delete a project
router.post('/delete', async (req, res, next) => {
    const {projectId } = req.body;

    try{
        const result = await projectModel.deleteOne({id: projectId});
        res.status(200).json({message: "Project deleted"});
    } catch(err) {
        console.log(err);
        console.log("Error deleting project");
        res.status(500).json({ message: "Error deleting project"});
    }
});

//get project by id
router.get('/get', async (req, res, next) => {
    const {projectId} = req.query;

    try{
        const result = await projectModel.findOne({id: projectId});
        res.status(200).json(result);
    } catch(err) {
        console.log(err);
        console.log("Error retrieving project");
        res.status(500).json({ message: "Error retrieving project"});
    }
});

// get multiple projects by ids
router.get('/getProjects', async (req, res, next) => {
    const {projectIds} = req.query;

    try{
        const result = await projectModel.find({id: {$in: projectIds}});
        res.status(200).json(result);
    } catch(err) {
        console.log(err);
        console.log("Error retrieving projects");
        res.status(500).json({ message: "Error retrieving projects"});
    }
});

// get the 10 most recently modified projects
router.get('/getRecent', async (req, res, next) => {

    try{
        const result = await projectModel.find().sort({LastModified: -1}).limit(10);
        res.status(200).json(result);
    } catch(err) {
        console.log(err);
        console.log("Error retrieving projects");
        res.status(500).json({ message: "Error retrieving projects"});
    }
});

module.exports = router;