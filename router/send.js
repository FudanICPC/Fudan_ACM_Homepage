var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser')
var mailer = require('./mailer.js')
var moment = require('moment');
// var connection = require('./database.js');
var SqliteDB = require('./database.js').SqliteDB

var db  = new SqliteDB('acm.db')
db.createTable()

var createTableSql = "CREATE TABLE IF NOT EXISTS CAPTCHA(EMAIL STRING, CAPTCHACODE STRING, REQ_TIME DATETIME, AVAILABLE INTEGER)"
var sql_get_existed_captcha = "SELECT CAPTCHACODE FROM CAPTCHA WHERE EMAIL = ?"
var sql_get_available_captcha = "SELECT CAPTCHACODE FROM CAPTCHA WHERE EMAIL = ? AND TIMESTAMPDIFF(MINUTE, REQ_TIME, ?) <= 5 AND AVAILABLE"
var sql_update_captcha = "UPDATE CAPTCHA SET CAPTCHACODE = ?, REQ_TIME = ?, AVAILABLE = ? WHERE EMAIL = ?"
var sql_insert_captcha = "INSERT INTO CAPTCHA (EMAIL, CAPTCHACODE, REQ_TIME, AVAILABLE) VALUES(?, ?, ?, ?)"
var sql_delete_captcha = "DELETE FROM CAPTCHA WHERE EMAIL = ?"

router.use((req, res, next) => {
  next()
})

router.post('/captcha', (req, res, next) => {
  console.log(req.body.data)
  var receiver = req.body.data.email
  var captchaCode = ""
  for (var i = 0; i < 6; i++)
    captchaCode += Math.floor(Math.random() * 10)
  var req_time = moment().format("YYYY-MM-DD HH:mm:ss")

  console.log(receiver, captchaCode, req_time)
  db.queryExistedData({email: receiver, captchaCode: captchaCode, req_time: req_time, available: 1}, solution)
  function solution(stat) {
    var content = `同学你好:\n` + 
                  `你的验证码为: ${captchaCode}\n` 
    console.log(stat)
    if (stat.err != null){
      res.json({msg: 'fail'})
    } else{
      mailer.send(receiver, content, `验证码`, res)
      console.log(content)
    }
  }
})

router.post('/confirm', (req, res, next) => {
  var receiver = req.body.data.email
  var captchaCode = req.body.data.captcha
  var req_time = moment().format("YYYY-MM-DD HH:mm:ss")
  console.log(receiver, captchaCode, req_time)
  db.queryAvailableData({email: receiver, captchaCode: captchaCode, req_time: req_time, available: 1}, solution)
  function solution(stat) {
    var info = (req.body.data.experience === undefined) ? 'none' : `${req.body.data.experience}`
    var content = `${req.body.data.username}你好:\n` + 
                  `感谢你报名复旦大学程序设计竞赛队！这是一封信息确认邮件，如没有信息错误请不要回复。\n` + 
                  `我们将尽快通过邮件、微信等方式与你取得联系。\n` + 
                  `学号: ${req.body.data.studentid}\n` + 
                  `性别: ${req.body.data.gender}\n` +
                  `毕业高中: ${req.body.data.highschool}\n` + 
                  `专业: ${req.body.data.major}\n` +
                  `竞赛或相关经历: ${info}\n` + 
                  `个人介绍: ${req.body.data.introduction}\n` + 
                  `手机号: ${req.body.data.cellphone}\n` + 
                  `微信: ${req.body.data.wechat}\n`
    console.log(stat)
    if (stat.err != null){
      res.json({msg: 'fail'})
    } else{
      if (stat.msg == 'captchaError') res.json({msg: stat.msg})
      else if (stat.msg == 'success'){
        mailer.send(receiver, content, `信息确认`, res)
        console.log(content)
      }
    }
  }
})


module.exports = router;
