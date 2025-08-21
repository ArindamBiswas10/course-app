const {Router} = require('express');

const admin = Router();

admin.post('/signup', (req, res) => {
    res.json({message: 'Admin signed up'});
});

admin.post('/signin', (req, res) => {
    res.json({message: 'Admin signed in'});
});
admin.post('/course', (req, res) => {
    res.json({message: 'Course created by admin'});
});

admin.get('/course/bulk', (req, res) => {
    res.json({message: 'List of courses managed by admin'});
});

admin.put('/course', (req,res) =>{
    res.json({message: 'Course updated by admin'});
});

module.exports = admin;