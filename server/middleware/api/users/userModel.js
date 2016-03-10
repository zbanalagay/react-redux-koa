const co = require('co');
const pg = require('co-pg')(require('pg'));

module.exports = {
  addUser: co.wrap(function* (userObj) {
    try {
      const client = new pg.Client(process.env.DB);
      yield client.connectPromise();
      yield client.queryPromise('INSERT INTO users(username, password) values($1, $2)',
        [userObj.username, userObj.password]);
      return Promise.resolve(client.end());
    } catch (ex) {
      console.error(ex.toString());
      throw ex;
    }
  }),

  getUser: co.wrap(function* (username) {
    try {
      const client = new pg.Client(process.env.DB);
      yield client.connectPromise();
      const result = yield client.queryPromise(
        'SELECT username, password FROM users WHERE username = ($1)',
        [username]);
      client.end();
      return Promise.resolve(result.rows);
    } catch (ex) {
      console.error(ex.toString());
      throw ex;
    }
  })
};
