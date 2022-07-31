const fs = require ('fs') ;

const buffer = fs. readFileSync (process.argv[2]) ;
const result = buffer. tostring () . tosplit ('\n').length-1;

console.log (result);



