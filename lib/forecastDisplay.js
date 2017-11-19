'use strict';

let forecast = process.argv[2];

  module.exports = (forecast) => {
  const Gpio = require('onoff').Gpio;

  const on = 1;
  const off = 0;

  const blue = new Gpio(18, 'out');
  const cloudy = new Gpio(23, 'out');
  const sun = new Gpio(24, 'out');
  const severe = new Gpio(21, 'out');

  let rain = ['chancerain', 'chancesleet', 'chancestorms', 'rain', 'tstorms'];
  

  

  iv = setInterval(function(){
   blue.writeSync(blue.readSync() ^ 1);
  }, 200);

  // setTimeout(function() {

  // clearInterval(iv);
  // blue.writeSync(0);
  // blue.unexport();
  // sun.writeSync(0);
  // sun.unexport();

  // severe.writeSync(0);
  // severe.unexport();
  // cloudy.writeSync(0);
  // cloudy.unexport();


  // }, 10000)

  let stop = setTimeout(function(){
    blue.writeSync(blue.readSync() ^ 1);
  }, 200);


  


  if(rain.indexOf(forecast) !== -1) {

    blue.writeSync(on);
    if(forecast === 'rain'){
      iv;
      stop();

    }

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

}

(() => {



})()