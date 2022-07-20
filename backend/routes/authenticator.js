var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken')
const db = require('../db');

//Json web token generator response
router.post('/login', (req, res, next) => {
    const { email, password } = req.body.userData;

    handler = (err, result) => {
        if (!err) {
            var registeredEmail = result ? result.email : ''
            var registeredPassword = result ? result.password : ''

            if (registeredEmail === email && registeredPassword === password) {
                var tokenData = {
                    id: 1,
                    email: registeredEmail
                }
                var newToken = jwt.sign(tokenData, 'secret_key_auth_project', { expiresIn: '1m' });
                res.json({
                    success: true,
                    token: newToken,
                })

            } else {
                res.status(401).json({
                    success: false,
                    code: 'API_ERROR_EMAIL_OR_PASSWORD_INVALID',
                    message: 'Invalid email or password'
                })
            }
        } else {
            res.status(401).json({
                success: false,
                code: 'API_LOGIN_HANDLER_ERR'
            })
        }
    }

    //exec function no repo db/index.js
    db.findUser({ email }, handler)

})

/* const token = req.body.token
    token enviado via header com a chave authorization -> padrao + necessidade por
    ser um get 
    O Bearer trafega um token no Header da requisição e o Basic um usuário e senha

    */

router.get('/tokenverify', (req, res, next) => {
    const token = req.headers['authorization'].split(' ')[1];
    var decoded = jwt.decode(token)
    var userEmail = decoded.email

    jwt.verify(token, 'secret_key_auth_project', (err) => {
        if (err) {
            res.json({
                success: false,
                message: err.message
            })
        } else {
            var tokenData = {
                id: 1,
                email: userEmail
            }
            var newToken = jwt.sign(tokenData, 'secret_key_auth_project', { expiresIn: '1m' });
            res.json({
                success: true,
                token: newToken,
            })
        }
    })
})

module.exports = router;