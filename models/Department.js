const mongoose = require('mongoose')

const DepartmentSchema = mongoose.Schema({
    cid: {
        type: String,
        required: true,
        ref: 'College',
    },
    branch_name: {
        type: String,
        requried: true,
    },
    totalStudents: {
        type: Number,
        required: true,
    },
    studentsPlaced: {
        type: Number,
        required: true,
    },
})

module.exports = mongoose.model('Department', DepartmentSchema)
