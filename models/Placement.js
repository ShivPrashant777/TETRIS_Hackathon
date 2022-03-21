const mongoose = require('mongoose')

const PlacementSchema = mongoose.Schema({
    cid: {
        type: String,
        required: true,
        ref: 'College',
    },
    branch_name: {
        type: String,
        required: true,
    },
    company: {
        type: String,
        required: true,
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

module.exports = mongoose.model('Placement', PlacementSchema)
