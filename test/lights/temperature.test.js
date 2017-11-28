'use strict';

const expect = require('expect');
const temp = require('../mocks/mocktemp.js');

describe('Temperature module', function(){

  it('should equal everything in the array', function() {

    expect(temp('91')).toEqual([20, 16, 22, 27, 17, 4]);

  });

  it('should return the first 5 in array', function() {

    expect(temp('83')).toEqual([20, 16, 22, 27, 17]);

  });

  it('should return the first 4 in array', function(){

    expect(temp('68')).toEqual([20, 16, 22, 27]);

  });

  it('should return the first 3', function() {

    expect(temp('31')).toEqual([20, 16, 22]);

  });

  it('should return first 2', function() {

    expect(temp('12')).toEqual([20, 16]);

  });

  it('should return only the first number', function() {

    expect(temp('-10')).toEqual([20]);
    expect(temp('10')).toEqual([20]);

  });

});
