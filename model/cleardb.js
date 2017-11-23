'use strict';

const Record = require('../model/record');
const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

module.exports = () => {
  mongoose.connect(process.env.MLAB,{useMongoClient: true});
  Record.findOne().sort({'date':1}).limit(1)
    .then(record=>{
      let removeID = record._id;
      Record.remove({_id:removeID})
        .then(()=> {
        //   console.log('updating db...');
          mongoose.disconnect();
        })
        .catch(err=>{
          console.log(err);
          mongoose.disconnect();  
        });
    })
    .catch();
         
};