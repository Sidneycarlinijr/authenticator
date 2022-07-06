var express = require('express');
var router = express.Router();

var config = require('../config')
var jwt = require('jsonwebtoken')


//Json web token generator
router.post('/login', (req, res, next) => {
    const { email, password } = req.body.userData;

    if (email === undefined || password === undefined) {
        res.status(401).json({
            success: false,
            code: 'API_ERROR',
            message: 'Invalid email or password'
        })
    } else {
        let tokenData = {
            id: 101
        }
        let newToken = jwt.sign(tokenData, config.JWT_KEY, { expiresIn: '1m' });
        res.json({
            success: true,
            token: newToken
        })
    }

    // res.json({
    //     sendedEmail: email,
    //     sendedPass: password
    // })


})
module.exports = router;