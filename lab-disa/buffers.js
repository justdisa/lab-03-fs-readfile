'use strict';

const Buffer = require ('buffer').buffer;

let myBuffer = Buffer.from('Welcome to the Hellmouth');

console.log(myBuffer.toString('utf-8, 2, 8'));
