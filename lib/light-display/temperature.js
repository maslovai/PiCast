'use strict';

module.exports = (temp) => {

  const Gpio = require('onoff').Gpio;

  let meter = [new Gpio(20, 'out'), new Gpio(16, 'out'), new Gpio(22, 'out'), new Gpio(27, 'out'), new Gpio(17, 'out'), new Gpio(4, 'out')];

  if(temp >= 90){
    for(let i = 0; i < meter.length; i++){
      let light = meter[i];
      light.write(1, function(err) {
        if(err){
          throw err;
        }
      });
      setTimeout(function() {
        light.write(0, function(err) {
          if(err){
            throw err;
          }
        });
      }, 8000);
    }
  }

  if(temp >= 70 && temp <= 90){
    for(let i = 0; i < meter.length-1; i++){
      let light = meter[i];
      light.write(1, function(err) {
        if(err){
          throw err;
        }
      });
      setTimeout(function() {
        light.write(0, function(err) {
          if(err){
            throw err;
          }
        });
      }, 8000);
    }
  }

  if(temp >= 50 && temp <= 70){
    for(let i = 0; i < meter.length-2; i++){
      let light = meter[i];
      light.write(1, function(err) {
        if(err){
          throw err;
        }
      });
      setTimeout(function() {
        light.write(0, function(err) {
          if(err){
            throw err;
          }
        });
      }, 8000);
    }
  }

  if(temp >= 30 && temp <= 50){
    for(let i = 0; i < meter.length-3; i++){
      let light = meter[i];
      light.write(1, function(err) {
        if(err){
          throw err;
        }
      });
      setTimeout(function() {
        light.write(0, function(err) {
          if(err){
            throw err;
          }
        });
      }, 8000);
    }
  }

  if(temp >= 10 && temp <= 30){
    for(let i = 0; i < meter.length-4; i++){
      let light = meter[i];
      light.write(1, function(err) {
        if(err){
          throw err;
        }
      });
      setTimeout(function() {
        light.write(0, function(err) {
          if(err){
            throw err;
          }
        });
      }, 8000);
    }
  }

  if(temp >= -10 && temp <= 10){
    for(let i = 0; i < meter.length-5; i++){
      let light = meter[i];
      light.write(1, function(err) {
        if(err){
          throw err;
        }
      });
      setTimeout(function() {
        light.write(0, function(err) {
          if(err){
            throw err;
          }
        });
      }, 8000);
    }
  }
};

//come back

//GPIO Ports:
//-10: 20
// 10: 16
// 30: 22
// 50: 27
// 70: 17
// 90: 4
