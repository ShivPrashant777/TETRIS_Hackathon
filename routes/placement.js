const express = require('express')
const {check, validationResult} = require('express-validator')
const router = express.Router()
const Placement = require('../models/Placement')
const Department = require('../models/Department')
const College = require('../models/College')
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
        console.error(err.message)
        return res.status(500).send('Server Error')
    }
})

// @route    GET api/placement/top/:cid
// @desc     Get Top Placement Details
// @access   Public
router.get('/top/:cid', async (req, res) => {
    const cid = req.params.cid
    let topPlacements = new Map()
    try {
        const placement = await Placement.find({cid}).exec()
        for (let i = 0; i < placement.length; i++) {
            if (topPlacements.has(placement[i].company)) {
                let temp = topPlacements.get(placement[i].company)
                topPlacements.set(
                    placement[i].company,
                    Number(temp) + Number(placement[i].students_placed),
                )
            } else {
                topPlacements.set(
                    placement[i].company,
                    placement[i].students_placed,
                )
            }
        }
        return res.json({data: [...topPlacements]})
    } catch (err) {
        console.error(err.message)
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

        const tempCollege = await College.findOne({cid}).exec()
        if (tempCollege) {
            const collegeUpdate = await College.findOneAndUpdate(
                {cid},
                {
                    students_placed:
                        Number(tempCollege.students_placed) +
                        Number(students_placed),
                },
            )
        }

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
