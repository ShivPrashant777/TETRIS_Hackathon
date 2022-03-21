const express = require('express')
const {check, validationResult} = require('express-validator')
const router = express.Router()
const Placement = require('../models/Placement')
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
            check('total_students', 'Please Enter Total Students').isNumeric(),
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
        const {branch_name, company, total_students, students_placed} = req.body
        const cid = req.college.cid

        try {
            const placement = new Placement({
                cid,
                branch_name,
                company,
                total_students,
                students_placed,
            })
            const result = await placement.save()
            res.json(result)
        } catch (err) {
            console.error(err.message)
            return res.status(500).json({msg: 'Server Error'})
        }
    },
)

module.exports = router
