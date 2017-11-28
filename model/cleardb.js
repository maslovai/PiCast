'use strict';

const Record = require('../model/record');
const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

module.exports = () => {
  return new Promise((resolve, reject) =>{
    
    Record.findOne().sort({'date':1}).limit(1)
      .then(record=>{
        let removeID = record._id;
        Record.remove({_id:removeID})
          .then(()=> {
            console.log('updating db...');
            resolve();
          })
          .catch(err=>{
            console.log(err); 
          });
      })
      .catch(err => reject(err));
  });
};