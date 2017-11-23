'use strict';

const expect = require('expect');
const create = require('../../model/create-record');
const deleteTestData = require('../routes/get-weather');

const mockData = {
    req : {
         body : {
             current_observation : {
                display_location : {
                  full : "Moscow"
                  },
                temp_f : "0",
                icon : "snow"
                }
            }
        }
   }

afterAll(()=>{
    deleteTestData();
})

describe('create-record ', () => {
    it('should create a record and save it to the database',()=>{
        create(mockData.req)
        .then(record => {
            expect(record.city).toBe("Moscow")
            expect(record._id).not.toBe(undefined);
        })
        .catch(err=>console.log(err));
    })
    
})