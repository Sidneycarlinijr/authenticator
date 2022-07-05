var express = require('express');
var router = express.Router();

router.post('/login', (req, res, next) => {
    const { email, password } = req.body.userData;

    if( !email || !password){
        res.status(401).json({
            success: false,
            code: 'TESTE_CODE_01'
    })
    }
    // res.json({
    //     sendedEmail: email,
    //     sendedPass: password
    // })


})
module.exports = router;