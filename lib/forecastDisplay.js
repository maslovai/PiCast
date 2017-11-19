'use strict';

let forecast = process.argv[2];

//  module.exports = (forecast) => {
  const Gpio = require('onoff').Gpio;

  const on = 1;
  const off = 0;

  const blue = new Gpio(18, 'out');
  const white = new Gpio(23, 'out');
  const yellow = new Gpio(24, 'out');
  const red = new Gpio(21, 'out');

  const leds = [ blue, white, yellow, red ];

  const rain = [ 'chancerain', 'chancesleet', 'chancestorms', 'rain', 'tstorms' ];
  const sun =  [ 'sunny', 'partlysunny', 'mostlysunny', 'clear' ];
  const cloudy = [ 'cloudy', 'fog', 'partlycloudy', 'mostlycloudy' ];
  const severe = [ 'snow', 'tstorms', 'sleet' ];

  let turnOff = (led) => {

   // clearInterval(iv);
    led.writeSync(0);
    led.unexport();

  }

  
  //setTimeout(function(){
    
  //       clearInterval(iv);  
  //       blue.writeSync(0);
  //       blue.unexport(); 

  // }, 5000);

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

  if(rain.indexOf(forecast) !== -1) {
    console.log('in the rain');
    blue.writeSync(on);
    if(forecast === 'rain') {
      let iv;
      iv = setInterval(function(){
     
      blue.writeSync(blue.readSync() ^ 1);
      }, 200);
    }

    setTimeout(() => { turnOff() }, 5000);

  }

  if(forecast === 'cloudy'){

    white.writeSync(on);
    setTimeout(() => { turnOff(white) }, 5000);    

  }

  if(forecast === 'sun'){

   yellow.writeSync(on);
   setTimeout(() => { turnOff() }, 5000);   

  }

  if(forecast === 'severe'){

    red.writeSync(on);
    setTimeout(() => { turnOff() }, 5000);    

  }

//}

