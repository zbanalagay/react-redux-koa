const pg = require('co-pg')(require('pg'));
const co = require('co');

module.exports = (function () {
  function* addUser(userObj) {
    try {
      const client = new pg.Client(process.env.DB);
      yield client.connectPromise();
      yield client.queryPromise('INSERT INTO users(username, password) values($1, $2)',
        [userObj.username, userObj.password]);
      client.end();
    } catch (ex) {
      console.log(ex.toString());
    }
  }

  function* getUser() {
    try {
      const client = new pg.Client(process.env.DB);
      yield client.connectPromise();
      const result = yield client.queryPromise(
        'SELECT username, password FROM users WHERE username = ($1)',
        ['yusuf']);
      client.end();
      console.log(result);
    } catch (ex) {
      console.log(ex.toString());
    }
  }

  return {
    addUser,
    getUser
  };
}());
