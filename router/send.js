var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser')
var nodemailer = require('nodemailer')

var transporter = nodemailer.createTransport({
  host: "host",// 发送方邮箱
  port: 465, //端口号
  secure: true, // true for 465, false for other ports
  auth: {
      user: 'name', // 发送方的邮箱地址 
      pass: 'password'// smtp验证码 
  }
});

router.use((req, res, next) => {
//  console.log('Success Time: ', Date.now())
  next()
})

router.post('/', (req, res, next) => {
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
  
  var mail = {
    from: 'addr',
    to: `${req.body.data.email}`,
    bcc: `bcc_addr`,
    subject: '【信息确认】复旦大学程序设计竞赛队申请',
    text: content
  }
  transporter.sendMail(mail, (err, data) => {
    if (err) {
      res.json({
        msg: 'fail'
      })
    } else {
      res.json({
        msg: 'success'
      })
    }
  })
})

module.exports = router;
