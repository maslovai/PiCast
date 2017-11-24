'use strict';

const createRecord = require('../model/create-record.js');
const Record = require('../model/record.js');
const forecast = require('../lib/light-display/forecast.js');
const temperature = require('../lib/light-display/temperature.js');
const printForecast = require('../lib/print-forecast.js');

// const location = {
//   city: process.argv[2],
//   state: process.argv[3],
// };

module.exports = (location) => {
  createRecord(location)
    .then(data => {
      let record = new Record({
        'city': data.city,
        'state': data.state,
        'temperature': data.temperature,
        'forecast': data.forecast,
        'alert': data.alert,
      });
      return record;
    })
    .then(record => {
      printForecast(record);
      forecast(record.forecast, record.alert);
      temperature(record.temperature);
    })
    .catch(console.log);
};
