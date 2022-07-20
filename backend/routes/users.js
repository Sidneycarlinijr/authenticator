var express = require('express');
var app = require('../app')
const db = require('../db')
var router = express.Router();

router.post('/register', (req, res, next) => {
  const { email, password, userName, phoneNumber } = req.body.userData;

  userInfo = {
    userName,
    phoneNumber,
    email,
    password,
  };

  if (userName || phoneNumber || email || password) {

    const registerHandler = (err, result) => {
      var registeredEmail = result ? result.email : '';

      if (!err) {
        if (email !== registeredEmail) {
          db.userRegister(userInfo)
          res.json({
            success: true,
          })
        } else {
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
    //exec function no repo db/index.js
    db.findUser({ email }, registerHandler)
  }
});

router.post('/search', (req, res, next) => {
  const email = req.body

  const searchHandler = (err, result) => {
    if (!err) {
      if (result) {
        res.json({
          success: true,
          data: result,
        })
      } else{
        res.json({
          success: false,
          code: 'EMPTY_USER_INFORMATION'
        })
      }
    } else {
      res.json({
        success: false,
        code: 'USERS_SEARCH_ERROR'
      })
    }
  }
  db.findUser(email, searchHandler)
})

module.exports = router;