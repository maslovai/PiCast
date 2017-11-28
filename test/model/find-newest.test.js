'use strict';
<<<<<<< HEAD

const newest = require('../../lib/find-newest')
const Record = require('../../model/record');

describe('find-newest', ()=>{
     it('should return the latest record from the database', ()=>{
            newest()
             .then(record=>{
             console.log(record)
                 expect(record.city).not.toBe("undefined");
                 expect(record.state).not.toBe("undefined")
             })
        .catch(err=>console.log(err))
    })
})
=======
/*global afterAll*/

const create = require('./create-record-mock.js');
const newest = require('../../lib/find-newest.js');
const expect = require('expect');
const superagent = require('superagent');
const Record = require('../../model/record.js');

const mockLocation = {
  city: 'Moscow',
  state: 'RU',
};

afterAll(()=>{
  Record.remove({'city':'Moscow'})
    .then(()=>console.log('cleared of test data'))
    .catch();
});

describe('find-newest', ()=>{

  it('should return the latest record from the database', ()=>{

    create(mockLocation)
      .then((record) => {
        newest()
          .then(record=>{
            expect(record.city).toBe('Moscow');
            expect(record.state).toBe('RU');
          })
          .catch(err=>console.log(err));
      });
  });
});
>>>>>>> 62e099921ae1e89125c3743b66ed34b2a7964488
