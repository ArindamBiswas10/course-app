const {Router} = require('express');

const userRouter = Router();

userRouter.post('/signup', (req,res)=>{
    res.json({message: 'User signed up'});
})

userRouter.post('/signin', (req, res)=>{
    res.json({message: 'User signed in'});
})

userRouter.get('/purchase', (req, res)=>{
    res.json({message: 'Course purchased'});
})

module.exports = {userRouter:userRouter};
