var express = require('express');
var router = express.Router();
var app = require('../app')
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
                console.log('o email e a senha estao de acordo')

                var tokenData = {
                    id: 1
                }
                var newToken = jwt.sign(tokenData, 'secret_key_auth_project', { expiresIn: '1m' });
                res.json({
                    success: true,
                    token: newToken
                })

            } else {
                console.log(registeredEmail, ' - ', registeredPassword)

                res.status(401).json({
                    success: false,
                    code: 'API_ERROR_EMAIL_OR_PASSWORD_INVALID',
                    message: 'Invalid email or password'
                })
            }
            console.log(registeredEmail, ' - ', registeredPassword, ' result ->', result)


            // console.log(result)
        } else {
            console.log('nao existe result da pesquisa no db')
        }
    }

    db.findUser({ email }, handler)

})

/* const token = req.body.token
    token enviado via headers com a chave authorization -> padrao + necessidade por
    ser um get 
    O Bearer trafega um token no Header da requisição e o Basic um usuário e senha

    */

router.get('/tokenverify', (req, res, next) => {
    
    const token = req.headers['authorization'].split(' ')[1];

    // res.json(token)

    jwt.verify(token, 'secret_key_auth_project', (err) => {
        if (err) {
            console.log(err)
            res.json({
                success: false,
                message: err.message
            })
        } else {
            res.json({
                success: true,
            })
        }
    })
})

module.exports = router;