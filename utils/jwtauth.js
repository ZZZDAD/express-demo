var jwt = require('jwt-simple')
var express = require('express')
var app = express()

app.set('jwtTokenSecret', 'gumi')

module.exports = function (req, res, next) {
  var token = req.headers['x-access-token']
  return new Promise((resolve, reject) => {
    if (token) {
      try {
        var decoded = jwt.decode(token, app.get('jwtTokenSecret'))
        if (decoded.exp <= Date.now()) {  // 过期
          res.json({
            code: 400,
            message: 'Access token has expired'
          })
        } else {
          resolve(decoded.user)
        }
      } catch (err) {
        res.json({
          code: 400,
          message: 'Access token error'
        })
        reject(err)
      }
    } else {
      res.json({
        code: 400,
        message: 'Have not token'
      })
      reject('Have not token')
      next()
    }
  })
}