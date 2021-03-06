const jwt = require('jsonwebtoken')
const config = require('config')

module.exports = function (req, res, next) {
    const token = req.header('x-auth-token')

    if (!token) {
        return res.status(401).json({msg: 'No Token, Auth Deined'})
    }

    try {
        // Adds Payload to Decoded if verified
        const decoded = jwt.verify(token, config.get('jwtSecret'))
        req.college = decoded.college
        next()
    } catch (err) {
        res.status(401).json({msg: 'Token is not valid'})
    }
}
