'use strict';

module.exports = (record) => {
  console.log('City: ', record.city);
  console.log('State: ', record.state);
  console.log('Temp: ', record.temperature);
  console.log('Forecast: ', record.forecast);
  console.log('Weather Alert: ', record.alertDescription);
};