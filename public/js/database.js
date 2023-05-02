var mysql = require('mysql')

var con = mysql.createConnection({
    host: "sql12.freemysqlhosting.net",
    user: "sql12615407",
    password: "1hYuYraIZL",
    database: "sql12615407",
    port: 3306,
  });
  
  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected database!");
  });

  async function query_login(_student_id, _password, callback) {
    let sql = 'SELECT * FROM  system_database';
    console.log(sql);
    return con.query(sql, [true], (error, results, fields) => {
      if (error) {
        console.log('ERROR');
        console.log(error);
        callback(false)
      } 
      
      Object.keys(results).forEach(function(key) {
        var row = results[key];
        if (row['student_id'] === _student_id && row['password'] === _password) {
          console.log('FOUND');
          callback(true);
        }
      });

      return callback(false);
    });
    
    return callback(false);
  }

  module.exports = {query_login, con}
