const pg = require('co-pg')(require('pg'));

module.exports = (function () {
  function* addUser(userObj) {
    try {
      const client = new pg.Client(process.env.DB);
      yield client.connectPromise();
      yield client.queryPromise('INSERT INTO users(username, password) values($1, $2)',
        [userObj.username, userObj.password]);
      client.end();
    } catch (ex) {
      console.error(ex.toString());
    }
  }

  function* getUser(username) {
    try {
      const client = new pg.Client(process.env.DB);
      yield client.connectPromise();
      const result = yield client.queryPromise(
        'SELECT username, password FROM users WHERE username = ($1)',
        [username]);
      client.end();
      return result.rows;
    } catch (ex) {
      console.error(ex.toString());
    }
  }

  return {
    addUser,
    getUser
  };
}());
