var express = require('express')
var path = require('path')
var logger = require('morgan')
var cookieParser = require('cookie-parser')
var bodyParser = require('body-parser')
var cors = require('cors')

// 导入路由文件
var index = require('./routes/index')

var app = express()

// cors 跨域选项
const corsOptions = {
  "origin": "*",
  "methods": "GET, POST",
  "credentials": true
}
app.use(cors(corsOptions))

app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

// 路由设置
app.use('/server', index)

module.exports = app
