const express = require('express')
const {check, validationResult} = require('express-validator')
const router = express.Router()
const Placement = require('../models/Placement')
const Department = require('../models/Department')
const auth = require('../middleware/auth')

// @route    GET api/placement/:cid
// @desc     Get Placement Details
// @access   Public
router.get('/:cid', async (req, res) => {
    const cid = req.params.cid
    try {
        const placement = await Placement.find({cid}).exec()
        return res.json(placement)
    } catch (err) {
        console.log(err.message)
        return res.status(500).send('Server Error')
    }
})

// @route    POST api/placement/add
// @desc     Add Placement Details
// @access   Private
router.post(
    '/add',
    [
        auth,
        [
            check('branch_name', 'Please Enter Branch Name').notEmpty(),
            check('company', 'Please Enter Company').notEmpty(),
            check(
                'students_placed',
                'Please Enter Students Placed',
            ).isNumeric(),
        ],
    ],
    async (req, res) => {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(400).json({msg: errors.array()})
        }
        const {branch_name, company, students_placed} = req.body
        const cid = req.college.cid
        const prevDept = await Department.findOne({cid, branch_name}).exec()
        if (!prevDept)
            return res.status(400).send({msg: 'Add Department First'})
        const dept = await Department.findOneAndUpdate(
            {cid, branch_name},
            {
                studentsPlaced:
                    Number(prevDept.studentsPlaced) + Number(students_placed),
            },
        )
        if (!dept) return res.status(400).send('Server Error')
        const temp = await Placement.findOne({cid, branch_name, company}).exec()
        if (temp) {
            const placement = await Placement.findOneAndUpdate(
                {cid, branch_name, company},
                {
                    students_placed:
                        Number(temp.students_placed) + Number(students_placed),
                },
            )
            if (placement)
                return res.status(200).send('Placement Added Successfully')
            return res.status(500).send('Server Error')
        }
        try {
            const placement = new Placement({
                cid,
                branch_name,
                company,
                students_placed,
            })
            const result = await placement.save()
            return res.status(200).send('Placement Detail Added Successfully')
        } catch (err) {
            console.error(err.message)
            return res.status(500).json({msg: 'Server Error'})
        }
    },
)

module.exports = router
