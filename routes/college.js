const express = require('express')
const router = express.Router()

// @route    GET api/college
// @desc     Get College Info
// @access   Public
router.get('/', (req, res) => {
    res.send('Get College Info')
})

module.exports = router
