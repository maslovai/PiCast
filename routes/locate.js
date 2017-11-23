'use strict';

require('dotenv').config();
const superagent = require('bluebird').promisifyAll(require('superagent'));

module.exports = () => {
  return new Promise((resolve, reject) => {
    superagent.get(`http://api.wunderground.com/api/${process.env.API_KEY}/geolookup/q/autoip.json`)
      .then(data => {
        let location = {};
        location.state = data.body.location.state;
        location.city = data.body.location.city;
        resolve(location);
      })
      .catch(err => reject('ERROR', err.message, '- geolookup failed'));
  });
};

