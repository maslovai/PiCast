'use strict';
const saveRecord = require('../../model/save-record.js');
const Record =  require('../../model/record.js');
const mongoose = require('mongoose');
const create = require('./create-record-mock.js');

const mockLocation = {
  city: 'Moscow',
  state: 'RU',
};

describe('save-record', ()=>{
  it('should save a new record to the database', ()=>{
    mongoose.connect(process.env.MLAB, {useMongoClient: true});
    create(mockLocation)
      .then(record=>{
        saveRecord(record)
          .then((record)=>{
            expect(record.city).toBe('Moscow');
            expect(record._id).not.toBe('undefined');
            Record.remove({'city':'Moscow'})
              .then(()=>{
                console.log('cleared of test data');
                mongoose.disconnect();
              })
              .catch();
          })
          .catch(err=>console.log(err));
      })
      .catch();
    console.log('IN TEST: ');
  });
});
