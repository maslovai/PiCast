'use strict';

const Gpio = require('onoff').Gpio;


let on = 1;
let off = 0;

let rain = new Gpio(18, 'out'),
iv;

iv = setInterval(function(){
  rain.writeSync(rain.readSync() ^ 1);
}, 200);

setTimeout(function() {

  clearInterval(iv);
  rain.writeSync(0);
  rain.unexport();
  sun.writeSync(0);
  sun.unexport();
  
  severe.writeSync(0);
  severe.unexport();
  cloudy.writeSync(0);
  cloudy.unexport();
  

}, 10000)


let cloudy = new Gpio(23, 'out');
let sun = new Gpio(24, 'out');
let severe = new Gpio(21, 'out');

let forecast = ['chance of rain', 'cloudy', 'sun', 'severe'];

if(forecast[0] === 'chance of rain'){

    rain.writeSync(on);


}

if(forecast[1] === 'cloudy'){

        cloudy.writeSync(on);


}

if(forecast[2] === 'sun'){

        sun.writeSync(on);


}

if(forecast[3] === 'severe'){

        severe.writeSync(on);


}
