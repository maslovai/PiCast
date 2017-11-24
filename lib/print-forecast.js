'use strict';

module.exports = (record) => {
  console.log('City: '.green, record.city);
  console.log('State: '.green, record.state);
  console.log('Temp: '.green, record.temperature);
  console.log('Forecast: '.green, record.forecast);
  console.log('Weather Alert: '.green, record.alertDescription);
};