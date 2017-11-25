'use strict';

const forecast = require('./forecast');
const temperature = require('./temperature');
const rpio = require('rpio');

rpio.open(37, rpio.INPUT, rpio.PULL_DOWN);
  
let watcher = (pin) => {

  let button = rpio.read(pin) ? 'pressed' : 'released';
  
  if(button === 'released') {

    console.log('Getting your weather data...'); 

    require('../find-newest')()
      .then(data => {
        console.log('City: ', data.city);
        console.log('State: ', data.state);
        console.log('Temp: ', data.temperature);
        console.log('Forecast: ', data.forecast);
        console.log('Weather Alert: ', data.alertDescription);
        forecast(data.forecast, data.alert);
        temperature(data.temperature);
      })
      .catch(err => { throw err; });    

  }

};
  
rpio.poll(37, watcher);




