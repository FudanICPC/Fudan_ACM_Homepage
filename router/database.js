var fs = require('fs');
var sqlite3 = require('sqlite3').verbose();
 
var DB = DB || {};
var createTableSql = "CREATE TABLE IF NOT EXISTS CAPTCHA(EMAIL STRING, CAPTCHACODE STRING, REQ_TIME DATETIME, AVAILABLE INTEGER)"
var sql_get_existed_captcha = "SELECT CAPTCHACODE FROM CAPTCHA WHERE EMAIL = ?"
var sql_get_available_captcha = "SELECT CAPTCHACODE FROM CAPTCHA WHERE EMAIL = ? AND ? < DATETIME(REQ_TIME, '+5 minute') AND AVAILABLE"
var sql_update_captcha = "UPDATE CAPTCHA SET CAPTCHACODE = ?, REQ_TIME = ?, AVAILABLE = ? WHERE EMAIL = ?"
var sql_insert_captcha = "INSERT INTO CAPTCHA (EMAIL, CAPTCHACODE, REQ_TIME, AVAILABLE) VALUES(?, ?, ?, ?)"
var sql_delete_captcha = "DELETE FROM CAPTCHA WHERE EMAIL = ?"
 
DB.SqliteDB = function(file){
  DB.db = new sqlite3.Database(file)
  DB.exist = fs.existsSync(file)
  if (!DB.exist) {
    console.log("Creating db file!");
    fs.openSync(file, 'w');
  }
}
 
DB.printErrorInfo = function(err){
  console.log("Error Message:" + err.message + " ErrorNumber:" + errno)
}
 
DB.SqliteDB.prototype.createTable = function(){
  DB.db.serialize(function(){
    DB.db.run(createTableSql, function(err){
      if(err != null)
          DB.printErrorInfo(err)
    })
  })
}

DB.SqliteDB.prototype.insertData = function(values){
  DB.db.serialize(function(){
    console.log(values)
      var stmt = DB.db.prepare(sql_insert_captcha)
      stmt.run([values.email, values.captchaCode, values.req_time, values.available], function(err){
        if (err != null) DB.printErrorInfo(err);
      })
      stmt.finalize()
      DB.SqliteDB.prototype.print()
  })
}
 
DB.SqliteDB.prototype.updateData = function(values){
  DB.db.serialize(function(){
    DB.db.run(sql_update_captcha, [values.captchaCode, values.req_time, values.available, values.email], function(err){
      if (err != null) DB.printErrorInfo(err);
    })
    DB.SqliteDB.prototype.print()
  })
}

DB.SqliteDB.prototype.deleteData = function(values){
  DB.db.serialize(function(){
    DB.db.run(sql_delete_captcha, [values.email], function(err){
      if (err != null) DB.printErrorInfo(err);
    })
    DB.SqliteDB.prototype.print()
  })
}
 
DB.SqliteDB.prototype.queryExistedData = function(values, callback){
  var stat = {err : null, msg : null}
  DB.db.all(sql_get_existed_captcha, [values.email], (err, rows) => {
    if (err != null) 
      stat.err = err
    else {
      if (rows.length == 0) 
        stat.err = DB.SqliteDB.prototype.insertData(values)
      else
        stat.err = DB.SqliteDB.prototype.updateData(values)
    }
    if (callback){
      callback(stat)
    }
  })
}

DB.SqliteDB.prototype.queryAvailableData = function(values, callback){
  var stat = {err : null, msg : null}
  DB.db.all(sql_get_available_captcha, [values.email, values.req_time], (err, rows) => {
    if (err != null) {
      stat.err = err
    } else {
      if (rows.length == 0 || (rows.length > 0 && rows[0].CAPTCHACODE != values.captchaCode)) 
        stat.msg = "captchaError"
      else{
        stat.msg = "success"
        stat.err = DB.SqliteDB.prototype.deleteData(values)
      }
    }
    if (callback){
      callback(stat)
    }
  })
}

DB.SqliteDB.prototype.print = function(){
  var sql = "SELECT * FROM CAPTCHA"
  console.log("print sql")
  DB.db.all(sql, (err, rows) => {
    if (err != null) 
      DB.printErrorInfo(err)
    else
      for(var i = 0; i < rows.length; ++i)
        console.log(rows[i]);
  })
}
 
DB.SqliteDB.prototype.close = function(){
    DB.db.close()
}
 

exports.SqliteDB = DB.SqliteDB