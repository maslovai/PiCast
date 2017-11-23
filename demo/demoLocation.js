'use strict';

const createRecord = require('../model/create-record.js');
const Record = require('../model/record.js');

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
  .then(console.log)  // Paula this is where you'd get the data object and can pass into your two modules
  .catch(console.log);

