'use strict';

const expect = require('expect');
const create = require('../../model/create-record');

const mockData = {
    req : {
         body : {
             current_observation : {
                display_location : {
                  full : "Moscow"
                  },
                temp_f : "below zero",
                icon : "always snow"
                }
            }
        }
   }

let createRecord = function(data){  
    
    return new Promise((resolve, reject) => {
        console.log(data.req)
        let testRecord = create(data.req);
        console.log('in promise: ', testRecord);
        resolve(testRecord)
    })
}  

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