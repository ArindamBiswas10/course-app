const express = require('express');
const {userRouter} = require('./routes/user');
const {courseRouter} = require('./routes/course');
const {adminRouter} = require('./routes/admin');    
const { mongoose } = require('mongoose');
const app = express();

// Signup, signin, purchase, courses,

app.use('/api/v1/user', userRouter);
app.use('/api/v1/admin', adminRouter);
app.use('/api/v1/course', courseRouter);

async function main(){
   await mongoose.connect(process.env.MongoDB_URI);
   app.listen(3000, () => { console.log('Server is running on port 3000'); });
}

main();
