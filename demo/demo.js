'use strict';

const createRecord = require('../model/create-record.js');
const Record = require('../model/record.js');
const forecast = require('../lib/light-display/forecast.js');
const temperature = require('../lib/light-display/temperature.js');

const location = {
  city: process.argv[2],
  state: process.argv[3],
};

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
    console.log(`Displaying weather for: ${record.city}, ${record.state}`);
    console.log(record);
    forecast(record.forecast);
    temperature(record.temperature);
  })  
  .catch(console.log);

