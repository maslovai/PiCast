
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

  let turnOff = (...bulbs) => {
    
    for(let each in bulbs) {
        clearInterval();
        bulbs[each].writeSync(0);
        bulbs[each].unexport();
    }
    
  }

  if(rain.indexOf(forecast) !== -1) {

    if(forecast === 'rain' || forecast === 'tstorms'){
      
      blue.writeSync(on);
      setTimeout(() => turnOff(blue), 5000); 
    
    } 
    else blink(25, blue);  
    
  }

  if(cloudy.indexOf(forecast) !== -1){

    white.writeSync(on);
    setTimeout(() => turnOff(white), 5000);    

  }

  if(sun.indexOf(forecast) !== -1){

   yellow.writeSync(on);
   if(forecast === 'mostlysunny' || forecast === 'partlysunny') blink(25, sunny);    
   setTimeout(() => turnOff(yellow), 5000);   

  }

  if(severe.indexOf(forecast) !== -1){

    red.writeSync(on);     
    if(forecast === 'snow') {
      white.writeSync(on);
      setTimeout(() => turnOff(red, white), 5000);
    } 
    else setTimeout(() => turnOff(red), 5000);

  }

//}



