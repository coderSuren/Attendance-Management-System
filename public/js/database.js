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
    con.query(sql, [true], (error, results, fields) => {
      if (error) {
        // console.log('ERROR');
        console.log(error);
        return callback(false);
      } 
      // console.log('NO ERROR');
      
      let found = false;
      for (let i = 0; i < results.length; i++) {
        const row = results[i];
        if (row['student_id'] === _student_id && row['password'] === _password) {
          found = true;
          // console.log('FOUND');
          break;
        }
      }
      return callback(found);
    });   
}

module.exports = {query_login, con}
