'use strict';

const forecast = require('./forecastDisplay');
const temperature = require('./temperature');
const wpi = require('wiring-pi');

var configPin = 26;

wpi.setup('wpi');
var started = false;
var clock = null;

wpi.pinMode(configPin, wpi.INPUT);
wpi.pullUpDnControl(configPin, wpi.PUD_UP);
wpi.wiringPiISR(configPin, wpi.INT_EDGE_BOTH, function() {
  if (wpi.digitalRead(configPin)) {
    if (false === started) {
      started = true;
      clock = setTimeout(handleButton, 3000);
    }
  }
  else {
    started = false;
    clearTimeout(clock);
  }
});

function handleButton() {
  if (wpi.digitalRead(configPin)) {
    console.log('OK');
  }
}


// (function(){

//   const Gpio = require('onoff').Gpio,
//   button = new Gpio(12, 'in', 'both');
  

//   console.log('before the watch');
  
//   button.watch(function(err) {
//     console.log('in the watch');
//     if(err) throw(err);

//     require('../find-newest')()
//       .then(data => {
//         forecast(data.forecast);
//         temperature(data.temperature);
//       })
//     .catch(err => { throw err; });
  
//   });
    
// })();


// GPIO pin of the button



