const express = require('express')
const {check, validationResult} = require('express-validator')
const router = express.Router()
const Department = require('../models/Department')
const auth = require('../middleware/auth')

// @route    GET api/department/:cid
// @desc     Get Department Details
// @access   Public
router.get('/:cid', async (req, res) => {
    const cid = req.params.cid
    const branch_name = req.body.branch_name
    if (branch_name) {
        // Get Single Branch of College
        try {
            const department = await Department.findOne({
                cid,
                branch_name,
            }).exec()
            if (department) return res.json(department)
            return res.status(500).send('Server Error')
        } catch (err) {
            console.error(err)
            return res.status(500).send('Server Error')
        }
    } else {
        // Get All Branches of College
        try {
            const department = await Department.find({cid}).exec()
            if (department) return res.json(department)
            return res.status(500).send('Server Error')
        } catch (err) {
            console.error(err)
            return res.status(500).send('Server Error')
        }
    }
})

// @route    POST api/department/add
// @desc     Add New Department
// @access   Private
router.post(
    '/add',
    [
        auth,
        [
            check('branch_name', 'Select Branch').notEmpty(),
            check('totalStudents', 'Enter Total Students').notEmpty(),
        ],
    ],
    async (req, res) => {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(400).json({msg: errors.array()})
        }
        const {branch_name, totalStudents} = req.body
        const cid = req.college.cid
        const studentsPlaced = 0

        try {
            const department = new Department({
                cid,
                branch_name,
                totalStudents,
                studentsPlaced,
            })
            const result = await department.save()
            return res.json(result)
        } catch (err) {
            console.error(err)
            return res.status(500).send('Server Error')
        }
    },
)

// @route    PUT api/department/update
// @desc     Update Student Details
// @access   Private
router.put(
    '/update/:cid',
    [
        auth,
        [
            check('studentsPlaced', 'Enter Students Placed').notEmpty(),
            check('branch_name', 'Enter Branch Name').notEmpty(),
        ],
    ],
    async (req, res) => {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(400).json({msg: errors.array()})
        }
        const cid = req.params.cid
        try {
            const department = await Department.findOneAndUpdate(
                {cid, branch_name: req.body.branch_name},
                {studentsPlaced: req.body.studentsPlaced},
            )
            if (department) return res.status(200).send('Success')
            res.status(500).send('Server Error')
        } catch (err) {
            console.error(err)
            res.status(500).send('Server Error')
        }
    },
)

module.exports = router
