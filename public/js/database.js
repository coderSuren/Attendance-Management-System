var mysql = require('mysql')
require('dotenv').config();

var con = mysql.createConnection({
    host: process.env.db_host,
    user: process.env.db_user,
    password: process.env.db_pass,
    database: process.env.db_name,
    port: process.env.db_port,
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
