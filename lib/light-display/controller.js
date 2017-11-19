'use strict';

const forecast = require('./forecastDisplay');
const temperature = require('./temperature');

const Gpio = require('onoff').Gpio,
  button = new Gpio(2, 'in', 'both');


(function(){

  return new Promise((resolve, reject) => {

    button.watch(function(err) {
      if(err){
        throw(err);
      }
      let weather = getForecast();
      forecast(weather.forecast);
      temperature(weather.temperature);
      resolve();
    });
});

})();
