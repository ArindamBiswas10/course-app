const express = require('express');
const user = require('./routes/user');
const course = require('./routes/course');
const admin = require('./routes/admin');    
const { default: mongoose } = require('mongoose');
const app = express();

// Signup, signin, purchase, courses,

app.use('/api/v1/user', user);
app.use('/api/v1/admin', admin);
app.use('/api/v1/course', course);

async function main(){
   await mongoose.connect(process.env.MongoDB_URI);
   app.listen(3000, () => { console.log('Server is running on port 3000'); });
}

main();
