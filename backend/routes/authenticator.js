var express = require('express');
var router = express.Router();
var app = require('../app')
var jwt = require('jsonwebtoken')
const db = require('../db')

//Json web token generator response
router.post('/login', (req, res, next) => {
    const { email, password } = req.body.userData;

    handler = (err, result) => {
        if (!err && result) {
            var registeredEmail = result.email
            var registeredPassword = result.password

            if (registeredEmail === email && registeredPassword === password) {
                console.log('o email e a senha estao de acordo')

                let tokenData = {
                    id: 101
                }
                let newToken = jwt.sign(tokenData, 'secret_key_auth_project', { expiresIn: '1m' });
                res.json({
                    success: true,
                    token: newToken
                })

            } else {
                console.log('teste')

                res.status(401).json({
                    success: false,
                    code: 'API_ERROR_EMAIL_OR_PASSWORD_INVALID',
                    message: 'Invalid email or password'
                })
            }

            // console.log(result)
        } else {
            console.log('nao existe result da pesquisa no db')
        }
    }

    db.findUser({ email }, handler)

})
module.exports = router;