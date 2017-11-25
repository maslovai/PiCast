'use strict';

const expect = require('expect');
const create = require('../../model/create-record');
const Record = require('../../model/record');

const mockData = {
    req : {
         body : {
             current_observation : {
                display_location : {
                  city : "Moscow",
                  state:"RU"
                  },
                temp_f : "0",
                icon : "snow"
                }
            }
        }
   }
const mockLocation = {
    city:"Moscow",
    state:"RU"
}

// afterAll(()=>{
//     Record.remove({'city':"Moscow"})
//     .then(()=>console.log('cleared of test data'))
//     .catch()
//  })


describe('create-record ', () => {
    it('should create a record',()=>{
        create(mockLocation)
        .then(record => {
            expect(record.city).toBe('Moscow');
            expect(record.state).toBe('RU')
        })
        .catch(err=>console.log(err));
    })
    
})