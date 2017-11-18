'use strict';

require('dotenv').config();
const superagent = require('bluebird').promisifyAll(require('superagent'));

module.exports = () => {
  return new Promise((resolve, reject) => {
    superagent
      .get(`http://api.wunderground.com/api/${process.env.API_KEY}/geolookup/q/autoip.json`)
      .then(res => resolve(res.body.location.city))
      .catch(err => reject(err));
  });
};


