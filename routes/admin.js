const {Router} = require('express');
const {adminModel} = require('../db');

const adminRouter = Router();

adminRouter.post('/signup', (req, res) => {
    res.json({message: 'Admin signed up'});
});

adminRouter.post('/signin', (req, res) => {
    res.json({message: 'Admin signed in'});
});

adminRouter.post('/course', (req, res) => {
    res.json({message: 'Course created by admin'});
});

adminRouter.get('/course/bulk', (req, res) => {
    res.json({message: 'List of courses managed by admin'});
});

adminRouter.put('/course', (req,res) =>{
    res.json({message: 'Course updated by admin'});
});

module.exports = {adminRouter:adminRouter};