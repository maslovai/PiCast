'use strict';

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