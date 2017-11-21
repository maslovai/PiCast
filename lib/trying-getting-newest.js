'use strict';
const clean = require('./find-newest')()
.then((res)=>console.log('left in db:', res))
.catch();