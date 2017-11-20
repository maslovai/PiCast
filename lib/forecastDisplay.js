
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

  let blink = (count, led) => {

    if (count <= 0) return led.unexport();
   
    led.read((err, value) => { 
      if (err) throw err;
   
      led.write(value ^ 1, (err) => { 
        if (err) throw err;
      });

    });
   
    setTimeout(() => {
      blink(count - 1, led);
    }, 200);

  };

  let turnOff = (led) => {
    
        clearInterval();
        led.writeSync(0);
        led.unexport();
    
  }

  if(rain.indexOf(forecast) !== -1) {

    blue.writeSync(on);
    if(forecast === 'rain') { blink(25, blue); }
    else setTimeout(() => turnOff(blue), 5000);    
    
  }

  if(cloudy.indexOf(forecast) !== -1){

    white.writeSync(on);
    setTimeout(() => { turnOff(white) }, 5000);    

  }

  if(sun.indexOf(forecast) !== -1){

   yellow.writeSync(on);
   setTimeout(() => { turnOff(yellow) }, 5000);   

  }

  if(severe.indexOf(forecast) !== -1){

    red.writeSync(on);
    setTimeout(() => { turnOff(red) }, 5000);    

  }

//}



