'use strict';

const Record = require('../../model/record');
const create = require('../../model/create-record');
// const superagent = require('superagent');
const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

describe('create-record should create a record and save it to the database', () => {

    let mockData = {
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

    let createRecord = ()=>{
        return new Promise((resovle, reject) => {
            resolve(create(mockData))
        })
        .then(record => {
            expect(record).city.toBe("Moscow")
        })
        .catch(err=>reject(err))
    }
    

    expect().toBe('Moscow');

})