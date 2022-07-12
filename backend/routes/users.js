var express = require('express');
var app = require('../app')
const db = require('../db')
var router = express.Router();

/* Este e um bom exemplo para construir o post */
router.post('/register', (req, res, next) => {
  const { email, password, userName, phoneNumber } = req.body.userData;

  userInfo = {
    userName,
    phoneNumber,
    email,
    password,
  };

  if (userName || phoneNumber || email || password) {

    const handler = (err, result) => {
      var resultEmail = result ? result.email : '';

      if (!err) {
        if (email !== resultEmail) {
          db.userRegister(userInfo)
          res.json({
            success: true,
          })
        } else {
          console.log('esse email ja existe')
          console.log(result.email)
          res.status(401).json({
            success: false,
            code: 'EMAIL_ALREADY_REGISTERED',
          })
        }
      } else {
        res.status(401).json({
          success: false,
          code: 'HANDLER_EMAIL_ERROR',
        })
      }

    }


    db.findUser({ email }, handler)

  }

  //ver necessidade de validar a entrada de dados
  //se existe informacoes nos campos acima (userInfo)
  //considerando apenas o userRegister -> testar clone devido a
  //criacao do collection + authenticator (db)

  // const handler = (err, result) => {
  //   if (!err) {
  //     res.json({
  //       success: true,
  //       message: 'User registered.',
  //       data: result
  //     });
  //   } else {
  //     res.json({
  //       success: true,
  //       message: 'User registered.',
  //       error: err
  //     })
  // }
  // }
});

//exec function no repo db/index.js

module.exports = router;