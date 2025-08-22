const {Router} = require('express');

const courseRouter = Router();


courseRouter.get('/preview', (req, res)=>{
    res.json({message: 'List of courses'});
})


courseRouter.post('/purchase', (req, res)=>{
    res.json({message: 'Course purchased'});
})

module.exports = {courseRouter:courseRouter};