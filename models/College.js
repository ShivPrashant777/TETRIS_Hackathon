const mongoose = require('mongoose')

const CollegeSchema = mongoose.Schema({
    cid: {
        type: String,
        required: true,
        unique: true,
    },
    name: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    state: {
        type: String,
        required: true,
    },
    zipcode: {
        type: Number,
        required: true,
    },
    collegeType: {
        type: String,
        required: true,
    },
    headname: {
        type: String,
        required: true,
    },
    contact: {
        type: Number,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    img: {
        type: String,
    },
    total_students: {
        type: Number,
        required: true,
    },
    students_placed: {
        type: Number,
        required: true,
    },
})

module.exports = mongoose.model('College', CollegeSchema)
