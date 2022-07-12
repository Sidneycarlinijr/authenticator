var express = require('express');
var router = express.Router();
var app = require('../app')

var jwt = require('jsonwebtoken')

//Json web token generator response
router.post('/login', (req, res, next) => {
    const { email, password } = req.body.userData;

    if (email || password) {
        let tokenData = {
            id: 101
        }
        let newToken = jwt.sign(tokenData, 'secret_key_auth_project', { expiresIn: '1m' });
        res.json({
            success: true,
            token: newToken
        })
    } else {
        res.status(401).json({
            success: false,
            code: 'API_ERROR_EMAIL_OR_PASSWORD_UNDEFINED',
            message: 'Invalid email or password'
        })
    }
})
module.exports = router;