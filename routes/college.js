const bcrypt = require('bcryptjs')
const express = require('express')
const {check, validationResult} = require('express-validator')
const router = express.Router()
const College = require('../models/College')

// @route    GET api/college
// @desc     Get College Info
// @access   Public
router.get('/', (req, res) => {
    res.json({msg: 'Get College Info'})
})

// @route    POST api/college/register
// @desc     Sign Up for College
// @access   Public
router.post(
    '/register',
    [
        check('name', 'Please Enter College Name').notEmpty(),
        check('address', 'Please Enter Address').notEmpty(),
        check('city', 'Please Enter City').notEmpty(),
        check('state', 'Please Enter State').notEmpty(),
        check('zipcode', 'Please Enter Zip Code').isNumeric(),
        check('collegeType', 'Please Select College Type').notEmpty(),
        check('headname', 'Please Enter Head Name').notEmpty(),
        check('contact', 'Please Enter Valid Contact Number')
            .isNumeric()
            .isLength(10),
        check('email', 'Please Enter Valid Email').isEmail(),
        check(
            'password',
            'Please Enter a Password with 6 or more Characters',
        ).isLength({min: 6}),
    ],
    async (req, res) => {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(400).json({errors: errors.array()})
        }
        const {
            name,
            address,
            city,
            state,
            zipcode,
            collegeType,
            headname,
            contact,
            email,
            password,
        } = req.body

        try {
            let college = await College.findOne({
                $or: [
                    {
                        email,
                    },
                    {
                        name,
                    },
                ],
            })
            if (college) {
                return res.status(400).json({msg: 'College Alerady Registered'})
            }

            college = new College({
                name,
                address,
                city,
                state,
                zipcode,
                collegeType,
                headname,
                contact,
                email,
                password,
            })

            // const salt = await bcrypt.genSalt(10)
            // college.password = await bcrypt.hash(password, salt)
            await college.save()
            return res.json({msg: 'College Registered'})
        } catch (err) {
            console.error(err.message)
            return res.status(500).json({msg: 'Server Error'})
        }
    },
)

module.exports = router
