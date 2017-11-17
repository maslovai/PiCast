'use strict';

require('dotenv').config();
const app = require('express')();

let server = null;

module.exports = {
  start: () => {
    return new Promise((resolve,reject) => {
      if(server) {
        return reject(new Error('Server is already running!'));
      }
      server = app.listen(process.env.PORT || 5000, () => {
        console.log(`Server up on port: ${process.env.PORT}`);
        resolve();
      });
    });
  },

  stop: () => {
    return new Promise((resolve, reject) => {
      if(!server) {
        return reject(new Error('Server is already shut down'));
      }
      server.close(() => {
        server = null;
        console.log('server closed');
        resolve();
      });
    });
  },
};