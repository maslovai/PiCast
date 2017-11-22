'use strict';

const forecast = require('./forecastDisplay');
const temperature = require('./temperature');

(function(){

  const Gpio = require('onoff').Gpio,
  button = new Gpio(12, 'in', 'both');
  
  button.watch(function(err) {
    if(err) throw(err);

    require('../find-newest')()
      .then(data => {
        forecast(data.forecast);
        temperature(data.temperature);
      })
    .catch(err => { throw err; });
  
  });
    
})();
