function login(username, password) {
    // perform login validation here
    if (db.query_login(username, password) == true) {
      res.send('Logged in!');
    }
    else {
      res.send('Failed to login!');
    }
}
  
module.exports = {login}