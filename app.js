var express = require('express')
var path = require('path')

var app = express()

app.use('/', express.static(path.join(__dirname, 'build')))
app.get('/*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'build', 'index.html'))
})
app.set("view engine", "html")

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error('Not Found')
  err.status = 404
  next(err)
})

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.json({ error: err.message })
  // res.render('error')
})

console.log('env:', app.get('env'))

module.exports = app
