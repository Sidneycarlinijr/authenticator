var express = require('express');
var router = express.Router();
const db = require('../db/index')

/* Este e um bom exemplo para construir o post */
router.post('/register', (req, res, next) => {
  const { email, password, name, number } = req.body.userData

  userInfo = {
    email,
    password,
    name,
    number,
  };

  res.json(userInfo)
  db.userRegister(userInfo)
  

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