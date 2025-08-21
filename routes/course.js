const {Router} = require('express');

const courseRouter = Router();


courseRouter.get('/preview', (req, res)=>{
    res.send('List of courses');
})


courseRouter.post('/purchase', (req, res)=>{
    res.send('Course purchased');
})

module.exports = courseRouter;