'use strict';

const forecast = require('./forecastDisplay');
const temperature = require('./temperature');
const rpio = require('rpio');

  // const Gpio = require('onoff').Gpio,
  // button = new Gpio(26, 'in', 'both');
//yo

rpio.open(37, rpio.INPUT, rpio.PULL_DOWN);
  
function pollcb(pin)
 {
         var state = rpio.read(pin) ? 'pressed' : 'released';
         console.log('Button event on P%d (button currently %s)', pin, state);
        
         if(state === 'released') {

          console.log('something happened'); 

          require('../find-newest')()
            .then(data => {
              forecast(data.forecast);
              temperature(data.temperature);
            })
          .catch(err => { throw err; });    

         } 

}
  
rpio.poll(37, pollcb);


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



