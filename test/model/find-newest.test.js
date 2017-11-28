'use strict';
/*global afterAll*/

const newest = require('../../lib/find-newest.js');
const Record = require('../../model/record.js');


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

