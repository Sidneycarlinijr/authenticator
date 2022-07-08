var express = require('express');
var router = express.Router();

/* Este e um bom exemplo para construir o post */
router.post('/register', (req, res, next) => {
  const { email, password, name, number } = req.body.userData
  
  userInfo = {
    email,
    password,
    name,
    number,
  }
  res.json(userInfo)
}
);

module.exports = router;
