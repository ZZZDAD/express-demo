var express = require('express')
var userApi = require('../api/user')
var jwtauth = require('../utils/jwtauth')

var router = express.Router()

// 登陆
router.post('/login', (req, res, next) => {
  userApi.findOne({
    username: req.body.username
  }, {
    password: 1
  }).then(result => {
    if (result) {
      res.json({
        code: 200,
        message: 'success'
      })
    } else {
      res.json({
        code: 100,
        message: 'error'
      })
    }
  })
})

module.exports = router