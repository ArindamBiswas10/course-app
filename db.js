const Schema = require('mongoose').Schema;
const ObjectId = Schema.Types.ObjectId;
const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.MongoDB_URI)

const userSchema = new Schema({ 
    firstName: String,
    lastName: String,
    email: { type: String, unique: true },
    password: String,
})

const courseSchema = new Schema({

    title: String,
    description: String,
    price: Number,
    image: String,
    creatorId: ObjectId,
})

const adminSchema = new Schema({
    firstName: String,
    lastName: String,
    email: { type: String, unique: true },
    password: String,
})

const purchaseSchema = new Schema({
    userId: ObjectId,
    courseId: ObjectId,
})

const userModel = mongoose.model('User', userSchema);
const courseModel = mongoose.model('Course', courseSchema);
const adminModel = mongoose.model('Admin', adminSchema);
const purchaseModel = mongoose.model('Purchase', purchaseSchema);

module.exports = {
    userModel,
    courseModel,
    adminModel,
    purchaseModel
};  